from flask import Flask, request

app = Flask(__name__)

@app.route('/', methods=['POST'])
def result():
    print("Works!")
    print(request.data)  # raw data
    print(request.json)  # json (if content-type of application/json is sent with the request)
    print(request.get_json(force=True))  # json (if content-type of application/json is not sent)
