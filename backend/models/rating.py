from enum import unique
from db import db
import datetime
import requests
import bson

class RatingModel(db.Model):
    __tablename__ = "ratings"

    id = db.Column(db.String(200), primary_key=True)
    rating = db.Column(db.Integer())
    name = db.Column(db.String(200))
    comment = db.Column(db.String(200))
    userType = db.Column(db.String(200))
    dateTime = db.Column(db.DateTime, default=datetime.datetime.now())

    def __init__(self, name, comment, rating, userType):

        self.id = str(bson.objectid.ObjectId())
        self.rating = rating
        self.comment = comment
        self.name = name
        self.userType = userType

    def json(self):

        return {
            "id": self.id,
            "rating": self.rating,
            "comment": self.comment,
            "userType": self.userType,
            "name": self.name,
            "dateTime": str(self.dateTime)
        }
    
    @classmethod
    def find_by_id(cls, id):
        return cls.query.filter_by(id=id).first()

    @classmethod
    def find_all(cls):
        return cls.query.all()

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()
    

