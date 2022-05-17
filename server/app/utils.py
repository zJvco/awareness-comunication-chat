import jwt
from flask import current_app, request, jsonify
from functools import wraps

from app.models import User


def token_required(f):
    @wraps(f)
    def decorator(*args, **kwargs):
        token = request.headers["x-access-token"]

        if not token:
            return jsonify({
                "Não foi passado um token de autenticação"
            }), 401

        try:
            data = jwt.decode(token, current_app.config["SECRET_KEY"], "HS256")
            current_user = User.query.filter_by(id=data["user_id"]).first()
        except:
            return jsonify({
                "error": "Token inválido"
            }), 401

        return f(current_user, *args, **kwargs)
    
    return decorator
