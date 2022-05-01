from app import create_app
from app.extensions import sio

HOST = "0.0.0.0"
PORT = 8080

app = create_app()

if __name__ == "__main__":
    sio.run(app, HOST, PORT)