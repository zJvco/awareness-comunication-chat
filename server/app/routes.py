import jwt
from flask import Blueprint, jsonify, request, current_app

from .models import User
from .extensions import db
from app.utils import token_required

main_bp = Blueprint("main", __name__)


@main_bp.route("/login", methods=["POST"])
def login():
    email = request.json["email"]
    password = request.json["password"]

    if not email or not password:
        return jsonify({
            "error": "Preencha todos os campos"
        }), 400

    user = User.query.filter_by(email=email).first()

    if not user or password != user.password:
        return jsonify({
            "error": "E-mail ou senha incorretos"
        }), 400

    token = jwt.encode({
        "user_id": user.id
    }, current_app.config["SECRET_KEY"])

    res = {
        "user": {
            "username": user.username,
            "email": user.email,
            "password": user.password
        },
        "token": token
    }

    return jsonify(res), 201


@main_bp.route("/cadastro", methods=["POST"])
def register():
    username = request.json["username"]
    email = request.json["email"]
    password = request.json["password"]
    confirm_password = request.json["confirm_password"]

    if not username or not email or not password or not confirm_password:
        return jsonify({
            "error": "Preencha todos os campos"
        }), 400

    if password != confirm_password:
        return jsonify({
            "error": "As senhas não são iguais"
        }), 400

    if db.session.query(User).filter_by(email=email).first():
        return jsonify({
            "error": "E-mail de usuário já existe"
        }), 400

    user = User(
        username=username,
        email=email,
        password=password
    )

    try:
        db.session.add(user)
        db.session.commit()
    except:
        db.session.rollback()

        return jsonify({
            "error": "Falha no servidor ao tentar cadastro um usuário"
        }), 500

    return jsonify({
        "Usuário criado com sucesso"
    }), 201

    
@main_bp.route("/auth")
@token_required
def index(current_user):
    res = {
        "id": current_user.id,
        "username": current_user.username,
        "email": current_user.email
    }

    return jsonify(res), 200