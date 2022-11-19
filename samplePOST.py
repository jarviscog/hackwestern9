import requests
import http.client


def self():

    # headers = {
    #   'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:55.0) Gecko/20100101 Firefox/55.0',
    # }
    pload = {'teamone':'Manchester', 'teamtwo':"Scotland"}
    r = requests.post('http://127.0.0.1:5000', params=pload)


    print(r.text)


def sports_api():

    # conn = http.client.HTTPSConnection("api.sportmonks.com")
    # payload = ''
    # headers = {}
    conn.request("GET", "https://api.football-data.org/v4/matches", payload, headers)
    res = conn.getresponse()
    data = res.read()
    print(data.decode("utf-8"))


def ml_api():

    # headers = {
    #   'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:55.0) Gecko/20100101 Firefox/55.0',
    # }
    # pload = {["2022-11-20", "Saudi Arabia", "France", "Friendly", "London", "FALSE"]}
    pload = {"name":"Test"}
    r = requests.get('https://us-central1-aiplatform.googleapis.com/v1beta1/projects/disco-charger-369115/locations/us-central1/endpoints/4888134027975852032:predict', params=pload)

    print(r.text)

if __name__ == '__main__':

    ml_api()