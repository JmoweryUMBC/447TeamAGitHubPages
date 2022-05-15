import time, sys, json
from flask import (Flask, jsonify, render_template)
from flask_sqlalchemy import SQLAlchemy

import api.vtapi as api
import database.dbInteraction as db

app = Flask("__main__")

db.initDatabase('sqlite:///database/database.db')


@app.route("/DBSearch/<string:hashNum>")
def DBSearch(hashNum):
    try:
        return json.dumps(db.search(hashNum))
    except ValueError as error:
        return json.dumps({"error": str(error)}), 500

@app.route("/VTSearch/<string:hashNum>")
def VTSearch(hashNum):
    try:
        return api.hashLookup(hashNum)
    except ValueError as error:
        return json.dumps({"error": str(error)}), 500