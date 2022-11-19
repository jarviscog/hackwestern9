from flask import Flask, request
from pprint import pprint

app = Flask(__name__)


@app.route('/', methods=['POST'])
def result():
    print("Works!")
    # Gets arguments from the url
    team1 = request.args.get('teamone')
    team2 = request.args.get('teamtwo')
    print(team1, " VS. ", team2)

    # Use these to send back data on how the teams are doing
    


    return "Hello"


@app.route('/hello')
def hello_world():
    return 'Hello, World!'
