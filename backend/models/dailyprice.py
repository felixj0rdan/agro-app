from enum import unique
from db import db
import datetime
import requests


class DailyPriceModel(db.Model):
    __tablename__ = "dailyprice"

    id = db.Column(db.Integer, primary_key=True)
    vegetableName = db.Column(db.String(200))
    marketName = db.Column(db.String(200))
    adminName = db.Column(db.String(200))
    retailPrice = db.Column(db.Float())
    farmerMarketPrice = db.Column(db.Float())
    wholesalePrice = db.Column(db.Float())
    dateTime = db.Column(db.DateTime, default=datetime.datetime.now())

    def __init__(
        self,
        marketName,
        vegetableName,
        adminName,
        retailPrice,
        farmerMarketPrice,
        wholesalePrice,
    ):

        self.marketName = marketName
        self.vegetableName = vegetableName
        self.adminName = adminName
        self.retailPrice = retailPrice
        self.farmerMarketPrice = farmerMarketPrice
        self.wholesalePrice = wholesalePrice

    def json(self):

        return {
            "id": self.id,
            "marketName": self.marketName,
            "vegetableName": self.vegetableName,
            "adminName": self.adminName,
            "farmerMarketPrice": self.farmerMarketPrice,
            "retailPrice": self.retailPrice,
            "wholesalePrice": self.wholesalePrice,
            "dateTime": str(self.dateTime),
        }

    @classmethod
    def find_by_id(cls, id):
        return cls.query.filter_by(id=id).first()

    @classmethod
    def find_all(cls):
        return cls.query.all()

    @classmethod
    def find_by_name(cls, name):
        return cls.query.filter_by(name=name).first()

    # @classmethod
    # def find_by_phonenumber(cls, phonenumber):
    #     return cls.query.filter_by(phonenumber=phonenumber).first()

    @classmethod
    def find_by_marketname(cls, marketName):
        return cls.query.filter_by(marketName=marketName).first()

    @classmethod
    def find_by_vegetablename(cls, vegetableName):
        return cls.query.filter_by(vegetableName=vegetableName).first()

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()
