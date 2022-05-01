from flask import Flask

from .extensions import sio


def create_app():
    app = Flask(__name__)

    sio.init_app(app)

    @app.route("/")
    def index():
        return "Hello World"

    return app