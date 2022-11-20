import json

from flask import Flask, request
from pprint import pprint

app = Flask(__name__)

from json import JSONEncoder


@app.route('/', methods=['GET'])
def result():

    # Gets arguments from the url
    team1 = request.args.get('teamone')
    team2 = request.args.get('teamtwo')
    print(team1, " VS. ", team2)

    returnDict = {}






    returnDict['homeTeamWinPercent'] = 0.6

    jsonn = json.dumps(returnDict)
    print(jsonn)
    return jsonn



    # Use these to send back data on how the teams are doing
    


    return "Hello"


@app.route('/hello')
def hello_world():
    return 'Hello, World!'
