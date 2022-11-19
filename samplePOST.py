import requests


def main():

    # headers = {
    #   'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:55.0) Gecko/20100101 Firefox/55.0',
    # }
    pload = {'teamone':'Manchester', 'teamtwo':"Scotland"}
    r = requests.post('http://127.0.0.1:5000', params=pload)


    print(r.text)


if __name__ == '__main__':

    main()