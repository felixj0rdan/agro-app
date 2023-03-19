from enum import unique
from db import db
import datetime
import requests


class MarketModel(db.Model):
    __tablename__ = "vegetables"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200))
    location = db.Column(db.String(200))
    # phonenumber = db.Column(db.String(200), unique=True)

    def __init__(self, name):

        self.name = name
        # self.phonenumber = phonenumber

    def json(self):

        return {"name": self.name, "id": self.id}

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

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()
