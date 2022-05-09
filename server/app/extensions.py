from flask_socketio import SocketIO
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

sio = SocketIO()
cors = CORS()
db = SQLAlchemy()