# from flask import Flask
# from flask_restful import Api
# from flask_appconfig import AppConfig
# from flask_sqlalchemy import SQLAlchemy
# 
# import os
# 
# basedir = os.path.abspath(os.path.dirname(__file__))
# 
# app = Flask('snooze-api')
# app = Flask(__name__.split('.')[0])
# api = Api(app)
# AppConfig(app, os.path.join(basedir, 'default_config.py'))
# db = SQLAlchemy(app)
# 
# from . import models
# from .views import  donotdisturb


from chalice import Chalice, Cron
from .api.backend.slack import DoNotDisturb

app = Chalice(app_name='snooze-api')


@app.schedule(Cron(55, 8, '?', '*', 'THU', '*'))
def journey_snooze(event):
    hours = 1
    minutes = hours * 60
    DoNotDisturb().set_snooze(minutes)