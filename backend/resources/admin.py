from flask_restful import Resource, reqparse
from flask_jwt_extended import (
    jwt_required,
    get_jwt_identity,
    fresh_jwt_required,
    create_access_token,
    create_refresh_token,
    jwt_refresh_token_required,
    get_raw_jwt,
)
from flask import request
from werkzeug.security import safe_str_cmp

from models.admin import AdminsModel
from blacklist import BLACKLIST


class NewAdmin(Resource):
    def post(self):

        admin_parser = reqparse.RequestParser()

        admin_parser.add_argument(
            "name", type=str, required=True, help="This field cannot be blank."
        )
        admin_parser.add_argument(
            "username", type=str, required=True, help="This field cannot be blank."
        )
        admin_parser.add_argument(
            "password", type=str, required=True, help="This field cannot be blank."
        )

        data = admin_parser.parse_args()

        # if AdminsModel.find_by_phonenumber(data["phonenumber"]):
        #     return {"message": "Phonenumber already exits."}, 401

        if AdminsModel.find_by_username(data["username"]):
            return {"message": "username already exits."}, 401

        admin = AdminsModel(data["name"], data["username"])
        # admin.status = 3
        admin.password = data["password"]

        admin.save_to_db()

        return {"message": "Admin created successfuly."}, 200


class AdminLogin(Resource):
    def post(self):
        admin_parser = reqparse.RequestParser()

        admin_parser.add_argument(
            "username", type=str, required=True, help="This field cannot be blank."
        )
        admin_parser.add_argument(
            "password", type=str, required=True, help="This field cannot be blank."
        )

        data = admin_parser.parse_args()

        # admin = AdminsModel.find_by_phonenumber(data["phonenumber"])

        # if not admin:
        #     return {"message": "Admin not found."}, 404

        admin = AdminsModel.find_by_username(data["username"])

        if not admin:
            return {"message": "Admin not found."}, 404

        if not safe_str_cmp(admin.password, data["password"]):
            return {"message": "Invalid credentials"}, 401

        if admin.status != 3:
            return {"message": "Not an admin."}, 401

        else:
            access_token = create_access_token(identity=admin.id, fresh=True)
            refresh_token = create_refresh_token(admin.id)

            return {
                "access_token": access_token,
                "refresh_token": refresh_token,
                "admin_id": admin.id,
                "status": admin.status,
                "type": admin.__tablename__,
                "active": admin.active,
            }, 200


class AdminLogout(Resource):
    @jwt_required
    def get(self):
        jti = get_raw_jwt()["jti"]
        BLACKLIST.add(jti)
        return {"message": "Successfully logged out"}, 200


class AdminTokenRefresh(Resource):
    @jwt_refresh_token_required
    def get(self):
        current_user = get_jwt_identity()
        new_token = create_access_token(identity=current_user, fresh=False)
        return {"access_token": new_token}, 200
