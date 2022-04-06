import time
from flask import (Flask, render_template)
from flask_sqlalchemy import SQLAlchemy

app = Flask("__main__")

@app.route("/")
def my_index():
    return