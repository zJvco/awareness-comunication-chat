from flask import Blueprint, request

from .models import User
from .extensions import db

main_bp = Blueprint("main", __name__)


@main_bp.route("/login", methods=["POST"])
def login():
    username = request.json["username"]
    password = request.json["password"]
    return "Success", 200


@main_bp.route("/cadastro", methods=["POST"])
def register():
    username = request.json["username"]
    email = request.json["email"]
    password = request.json["password"]
    confirm_password = request.json["confirm_password"]

    if not username or not email or not password or not confirm_password:
        return "Preencha todos os campos", 400

    if password != confirm_password:
        return "As senhas não são iguais", 400

    if db.session.query(User).filter_by(email=email).first():
        return "E-mail de usuário já existe", 400

    user = User(
        username=username,
        email=email,
        password=password
    )

    try:
        db.session.add(user)
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        return "Falha no servidor ao tentar cadastro um usuário", 500

    return "Usuário criado com sucesso", 201