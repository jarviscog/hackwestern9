import json

import flask
from flask import Flask, request
from pprint import pprint
from ml_requests import ml_api

app = Flask(__name__)

from json import JSONEncoder


@app.route('/', methods=['GET'])
def result():

    # Gets arguments from the url
    team1 = request.args.get('teamone')
    team2 = request.args.get('teamtwo')
    pprint(request.args)
    print(team1, " VS. ", team2)
    predictions = ml_api(team1, team2)

    response = flask.jsonify(predictions)
    response.headers.add('Access-Control-Allow-Origin', '*')

    # jsonn = {
    #     '1':predictions[0],
    #     '0':predictions[1],
    #     '0.5':predictions[2]
    # }

    # jsonn = {
    #     '1':predictions[0],
    #     '0':predictions[1],
    #     '0.5':predictions[2]
    # }



    # returnDict['homeTeamWinPercent'] = 0.6

    # jsonn = json.dumps(returnDict)
    # print(jsonn)
    return response

    # Use these to send back data on how the teams are doing
    


    return "Hello"


@app.route('/hello')
def hello_world():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000, debug=True)