from flask_restful import Resource, reqparse
from flask_jwt_extended import (
    jwt_required,
    get_jwt_identity,
    fresh_jwt_required,
)
from flask import request, send_from_directory
import datetime

from models.rating import RatingModel

class Rating(Resource):

    def post(self):
        try:
            parser = reqparse.RequestParser()

            parser.add_argument(
                "rating", type=int, required=True, help="This field cannot be blank."
            )
            parser.add_argument(
                "name", type=str, required=True, help="This field cannot be blank."
            )
            parser.add_argument(
                "comment", type=str, required=True, help="This field cannot be blank."
            )
            parser.add_argument(
                "userType", type=str, required=True, help="This field cannot be blank."
            )

            data = parser.parse_args()

            rating = RatingModel(**data)

            rating.save_to_db()

            return {"message": "success", "rating": rating.json()}, 200

        except:
            return {"message": "internal server error"}, 500

    @jwt_required
    def get(self):
        try:

            ratings = [rating.json() for rating in RatingModel.find_all()]
            
            if not ratings:
                return {"message": "No ratings found"}, 404
            
            return {"message": "success", "ratings": ratings }, 200

        except:
            return {"message": "internal server error"}, 500


