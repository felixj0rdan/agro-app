from flask_restful import Resource, reqparse
from flask_jwt_extended import (
    jwt_required,
    get_jwt_identity,
    fresh_jwt_required,
)
from flask import request
import datetime


from models.dailyprice import DailyPriceModel
from models.admin import AdminsModel


class AddDailyPrice(Resource):
    @jwt_required
    def post(self):
        parser = reqparse.RequestParser()

        parser.add_argument(
            "vegetableName", type=str, required=True, help="This field cannot be blank."
        )
        parser.add_argument(
            "marketName", type=str, required=True, help="This field cannot be blank."
        )
        parser.add_argument(
            "retailPrice", type=float, required=True, help="This field cannot be blank."
        )
        parser.add_argument(
            "dateTime", type=str, required=True, help="This field cannot be blank."
        )
        parser.add_argument(
            "farmerMarketPrice",
            type=float,
            required=True,
            help="This field cannot be blank.",
        )
        parser.add_argument(
            "wholesalePrice",
            type=float,
            required=True,
            help="This field cannot be blank.",
        )

        data = parser.parse_args()

        admin = AdminsModel.find_by_id(get_jwt_identity())

        # dailyPrice = 

        if(DailyPriceModel.find_by_datetime(datetime.datetime.strptime(data["dateTime"], "%Y-%m-%d"))):

            return {"message": "Already entered for the given date."}, 400

        data["adminId"] = admin.id

        dailyPrice = DailyPriceModel(**data)

        dailyPrice.save_to_db()

        return {"message": "Success", "dailyPrice": dailyPrice.json()}, 200


class AllDailyPrice(Resource):
    def get(self):
        # try:
        dailyprices = [dailyprice.json() for dailyprice in DailyPriceModel.find_all()]
        if not dailyprices:
            return {"message": "No dailyprices"}, 200
        return {"dailyprices": dailyprices}, 200

    # except:
    #     return {"message": "Error"}, 500
