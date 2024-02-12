from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>This app reads from the shared Cloud SQL PostreSQL database</p>"
