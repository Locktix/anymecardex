#!/usr/bin/env python3
"""
Serveur HTTP optimisé pour Anymecardex
Avec compression gzip et cache pour les images
"""

import http.server
import socketserver
import gzip
import os
from pathlib import Path

class OptimizedHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Ajouter des headers pour le cache et la compression
        self.send_header('Cache-Control', 'public, max-age=31536000')  # 1 an
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()
    
    def send_head(self):
        """Override pour ajouter la compression gzip"""
        path = self.translate_path(self.path)
        f = None
        
        if os.path.isdir(path):
            if not self.path.endswith('/'):
                self.send_response(301)
                self.send_header("Location", self.path + "/")
                self.end_headers()
                return None
            for index in "index.html", "index.htm":
                index = os.path.join(path, index)
                if os.path.exists(index):
                    path = index
                    break
            else:
                return self.list_directory(path)
        
        ctype = self.guess_type(path)
        try:
            f = open(path, 'rb')
        except OSError:
            self.send_error(404, "File not found")
            return None
        
        self.send_response(200)
        self.send_header("Content-type", ctype)
        fs = os.fstat(f.fileno())
        self.send_header("Content-Length", str(fs[6]))
        
        # Compression gzip pour les fichiers texte
        if ctype.startswith('text/') or ctype in ['application/javascript', 'application/json']:
            self.send_header('Content-Encoding', 'gzip')
            return gzip.compress(f.read())
        
        return f

def run_server(port=8000):
    """Lance le serveur optimisé"""
    handler = OptimizedHTTPRequestHandler
    
    with socketserver.TCPServer(("", port), handler) as httpd:
        print(f"🚀 Serveur Anymecardex optimisé démarré sur http://localhost:{port}")
        print("📁 Dossier racine:", os.getcwd())
        print("⚡ Optimisations activées: compression gzip, cache, lazy loading")
        print("🛑 Appuyez sur Ctrl+C pour arrêter le serveur")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n👋 Serveur arrêté")

if __name__ == "__main__":
    run_server() 