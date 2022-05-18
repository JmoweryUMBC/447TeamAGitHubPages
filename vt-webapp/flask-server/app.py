import time, sys, json
from flask import (Flask, jsonify, render_template)
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

import api.vtapi as api
import database.dbInteraction as db

app = Flask("__main__")
CORS(app)

db.initDatabase('sqlite:///database/database.db')

@app.route("/DBSearch/<string:hashNum>")
def DBSearch(hashNum):
    try:
        return json.dumps(db.search(hashNum))
    except ValueError as error:
        return json.dumps({"error": str(error)}), 500

@app.route("/VTSearch/<string:hashNum>", methods =["POST", "GET"])
def VTSearch(hashNum):
    try:
        ret = api.hashLookup(hashNum)
        db.add(ret["md5"], ret["positives"], ret["total"])
        return ret
    except ValueError as error:
        return jsonify({"error": str(error)}), 500