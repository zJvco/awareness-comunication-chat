from flask import Flask

from .extensions import sio, cors, db
from .routes import main_bp


def create_app():
    app = Flask(__name__)
    
    app.config["SECRET_KEY"] = "069C57F55217A7632C7DBC040865862585AECC8D5C1E2EED8C971F7ABE50FA15"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["DEBUG"] = True
    app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///test.db'
 
    sio.init_app(app, cors_allowed_origins="*")
    cors.init_app(app)
    db.init_app(app)

    app.register_blueprint(main_bp)

    with app.app_context():
        db.create_all()

    from . import events

    return app