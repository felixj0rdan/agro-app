from flask import Flask, jsonify
from flask_restful import Api
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from datetime import timedelta

from db import db
from blacklist import BLACKLIST

# from resources.products import AddProduct, GetProductByESN
# from resources.users import AddUser, GetUserByRegNo
# from resources.invoice import CreateInvoice, GetAllInvoices, ChangeInvoiceStatus
from resources.admin import NewAdmin, AdminLogin, AdminTokenRefresh, AdminLogout
from resources.dailyprice import AddDailyPrice, AllDailyPrice, GetData, DailyPrice
from resources.rating import Rating

app = Flask(__name__)
CORS(app)
# app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///data.db"
# app.config[
#     "SQLALCHEMY_DATABASE_URI"
# ] = "postgresql://postgres:root1234@storedb.cpf4mmsrh7uk.ap-south-1.rds.amazonaws.com:5432"

# app.config[
#     "SQLALCHEMY_DATABASE_URI"
# ] = "postgresql://postgres:rootuser@localhost:5432/storedb"


app.config[
    "SQLALCHEMY_DATABASE_URI"
] = "postgresql://postgres:root1234@database-1.cpf4mmsrh7uk.ap-south-1.rds.amazonaws.com:5432"

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["PROPAGATE_EXCEPTIONS"] = True
app.config["JWT_BLACKLIST_ENABLED"] = True  # enable blacklist feature
app.config["JWT_BLACKLIST_TOKEN_CHECKS"] = ["access", "refresh"]
app.config["MAX_CONTENT_LENGTH"] = 16 * 1024 * 1024
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)
app.secret_key = "jose"  # could do app.config['JWT_SECRET_KEY'] if we prefer
api = Api(app)


@app.before_first_request
def create_tables():
    db.create_all()


db.init_app(app)

jwt = JWTManager(app)


@jwt.user_claims_loader
# Remember identity is what we define when creating the access token
def add_claims_to_jwt(identity):
    if (
        identity == 1
    ):  # instead of hard-coding, we should read from a config file or database to get a list of admins instead
        return {"is_admin": True}
    return {"is_admin": False}


# This method will check if a token is blacklisted, and will be called automatically when blacklist is enabled
@jwt.token_in_blacklist_loader
def check_if_token_in_blacklist(decrypted_token):
    # Here we blacklist particular JWTs that have been created in the past.
    return decrypted_token["jti"] in BLACKLIST


# The following callbacks are used for customizing jwt response/error messages.
# The original ones may not be in a very pretty format (opinionated)
@jwt.expired_token_loader
def expired_token_callback():
    return (
        jsonify({"message": "Token expired, login again.", "error": "token_expired"}),
        401,
    )


@jwt.invalid_token_loader
# we have to keep the argument here, since it's passed in by the caller internally
def invalid_token_callback(error):
    return (
        jsonify(
            {"message": "Signature verification failed.", "error": "invalid_token"}
        ),
        401,
    )


@jwt.unauthorized_loader
def missing_token_callback(error):
    return (
        jsonify(
            {
                "description": "Request does not contain an access token.",
                "error": "authorization_required",
            }
        ),
        401,
    )


@jwt.needs_fresh_token_loader
def token_not_fresh_callback():
    return (
        jsonify(
            {"description": "The token is not fresh.", "error": "fresh_token_required"}
        ),
        401,
    )


@jwt.revoked_token_loader
def revoked_token_callback():
    return (
        jsonify(
            {"description": "The token has been revoked.", "error": "token_revoked"}
        ),
        401,
    )


api.add_resource(NewAdmin, "/admin/create")
api.add_resource(AdminLogin, "/admin/login")
api.add_resource(AdminLogout, "/admin/logout")
api.add_resource(AdminTokenRefresh, "/admin/refresh-token")

api.add_resource(AddDailyPrice, "/dailyprice/add")
api.add_resource(DailyPrice, "/dailyprice/edit/<string:id>")
api.add_resource(AllDailyPrice, "/dailyprice/all")
api.add_resource(GetData, "/data")

api.add_resource(Rating, "/rating")



# api.add_resource(AddUser, "/add-user")
# api.add_resource(GetUserByRegNo, "/user/reg-no/<string:regNo>")

# api.add_resource(AddProduct, "/add-product")
# api.add_resource(GetProductByESN, "/product/<string:barcode>")

# api.add_resource(CreateInvoice, "/create-invoice")
# api.add_resource(GetAllInvoices, "/invoices")
# api.add_resource(ChangeInvoiceStatus, "/change-payment-status/<string:invoiceno>")


@app.route("/", methods=["GET"])
def home():
    return "<h1>Home</h1>"


# db.init_app(app)
# app.run(port=5005, debug=True)
if __name__ == "__main__":

    # app.run()
    app.run(port=5005, debug=True)


# agro-appbackend-production.up.railway.app
