from flask import Flask

from .extensions import sio


def create_app():
    app = Flask(__name__)

    app.config["SECRET"] = "iasndiasnmdiasmidasdas"

    # sio.init_app(app, cors_allowed_origins="*")

    @app.route("/")
    def index():
        return "Hello World"

    # @sio.on("test")
    # def message(msg):
    #     print(msg)
    #     sio.emit("test", msg)

    return app