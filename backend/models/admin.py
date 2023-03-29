from enum import unique
from db import db
import datetime
import requests
import bson

class AdminsModel(db.Model):
    __tablename__ = "admins"

    id = db.Column(db.String(200), primary_key=True)
    name = db.Column(db.String(200))
    username = db.Column(db.String(200), unique=True)
    email = db.Column(db.String(200), unique=True)
    active = db.Column(db.Boolean, default=True)
    password = db.Column(db.String(200))
    dateTime = db.Column(db.DateTime, default=datetime.datetime.now())
    status = db.Column(db.Integer(), default=3)

    def __init__(self, name, username):

        self.id = str(bson.objectid.ObjectId())
        self.name = name
        self.username = username
        # self.phonenumber = phonenumber

    def json(self):

        return {"name": self.name, "username": self.username}

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
    def find_by_username(cls, username):
        return cls.query.filter_by(username=username).first()

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()
