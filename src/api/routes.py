# """
# This module takes care of starting the API Server, Loading the DB and Adding the endpoints
# """

from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

api = Blueprint("api", __name__)

# Allow CORS requests to this API



@api.route("/hello", methods=["POST", "GET"])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }
    return jsonify(response_body), 201


@api.route("/signup", methods=["POST"])
def signup():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")
    if not email or not password:
        return jsonify({"error": "Email o contraseña invalidos"}), 400
    existing_user = db.session.execute(
        db.select(User).where(User.email == email)
    ).scalar_one_or_none()
    if existing_user:
        return jsonify({"error": "Este email ya esta en uso"}), 400
    new_user = User(email=email)
    new_user.set_password(password)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"msg": "Usuario creado con éxito"}), 201


@api.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")
    existing_user = db.session.execute(
        db.select(User).where(User.email == email)
    ).scalar_one_or_none()
    if existing_user and existing_user.check_password(password):
        token = create_access_token(identity=str(existing_user.id))
        return jsonify({"token": token, "user": existing_user.serialize()}), 200
    return jsonify({"error": "Email o contraseña invalidos"}), 400


@api.route("/private", methods=["GET"])
@jwt_required()
def private():
    current_user_id = get_jwt_identity()
    user = db.session.get(User, current_user_id)
    return jsonify({"msg": "Acceso concedido", "user": user.serialize()}), 200

@api.route("/user", methods = ["DELETE"])
@jwt_required()
def delete_user():
    current_user_id = get_jwt_identity()
    user = db.session.get(User, current_user_id)

    if not user: 
        return jsonify({ "error": "Usuario no encontrado" }), 404

    db.session.delete(user)
    db.session.commit()

    return jsonify({ "msg": "Cuenta eliminada" }), 200
 