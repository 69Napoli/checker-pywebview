import webview
import os
import sys
import subprocess
import socket
import threading
import urllib.request
import ssl
import json

def get_resource_path(relative_path):
    """Get path to resource, works for dev and for PyInstaller --onefile"""
    if getattr(sys, '_MEIPASS', None):
        return os.path.join(sys._MEIPASS, 'web', relative_path)
    return os.path.join(os.path.dirname(__file__), 'web', relative_path)

class CheckerAPI:
    """Python backend exposed to JavaScript via pywebview"""

    def __init__(self):
        self.checker_folder = os.path.join(os.path.expanduser('~'), 'Desktop', 'Checker')
        os.makedirs(self.checker_folder, exist_ok=True)

    def get_system_info(self):
        """Return system info as JSON"""
        return json.dumps({
            'username': os.environ.get('USERNAME', os.environ.get('USER', 'Admin')),
            'hostname': socket.gethostname(),
            'arch': 'x64' if sys.maxsize > 2**32 else 'x86',
            'checker_folder': self.checker_folder,
        })

    def download_file(self, url, filename):
        """Download a file to the Checker folder. Returns JSON status."""
        dest = os.path.join(self.checker_folder, filename)
        try:
            ctx = ssl.create_default_context()
            ctx.check_hostname = False
            ctx.verify_mode = ssl.CERT_NONE
            req = urllib.request.Request(url, headers={
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
                'Accept': '*/*',
                'Accept-Language': 'en-US,en;q=0.9',
                'Referer': url,
            })
            with urllib.request.urlopen(req, context=ctx, timeout=120) as resp:
                with open(dest, 'wb') as f:
                    while True:
                        chunk = resp.read(65536)
                        if not chunk:
                            break
                        f.write(chunk)
            return json.dumps({'ok': True, 'path': dest})
        except Exception as e:
            return json.dumps({'ok': False, 'error': str(e)})

    def usb_check(self, key):
        """Query a single registry key. Returns JSON."""
        try:
            result = subprocess.run(
                ['reg', 'query', key, '/ve'],
                capture_output=True, text=True, timeout=10
            )
            exists = result.returncode == 0
            return json.dumps({'ok': True, 'exists': exists, 'key': key})
        except Exception as e:
            return json.dumps({'ok': False, 'exists': False, 'key': key, 'error': str(e)})

    def run_powershell(self, script):
        """Execute a PowerShell script. Returns JSON with stdout/stderr."""
        try:
            result = subprocess.run(
                ['powershell', '-ExecutionPolicy', 'Bypass', '-Command', script],
                capture_output=True, text=True, timeout=120
            )
            return json.dumps({
                'ok': result.returncode == 0,
                'stdout': result.stdout,
                'stderr': result.stderr,
                'exitCode': result.returncode,
            })
        except Exception as e:
            return json.dumps({'ok': False, 'error': str(e)})

    def open_folder(self):
        """Open the Checker folder in Explorer"""
        try:
            subprocess.Popen(['explorer', self.checker_folder])
            return json.dumps({'ok': True})
        except Exception as e:
            return json.dumps({'ok': False, 'error': str(e)})


    def open_url(self, url):
        """Open a URL in the default browser"""
        import webbrowser
        webbrowser.open(url)
        return json.dumps({'ok': True})



def main():
    api = CheckerAPI()
    index_path = get_resource_path('index.html')

    window = webview.create_window(
        title='Check Tool - By @napoli',
        url=index_path,
        js_api=api,
        width=1280,
        height=800,
        min_size=(900, 600),
        resizable=True,
        background_color='#0f1117',
        text_select=False,
    )

    webview.start(debug=False)


if __name__ == '__main__':
    main()
