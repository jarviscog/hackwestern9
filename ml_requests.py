import requests
from typing import Dict

from google.cloud import aiplatform

from google.protobuf import json_format
from google.protobuf.struct_pb2 import Value


def predict_tabular_classification_sample(
    project: str,
    endpoint_id: str,
    instance_dict: Dict,
    location: str = "us-central1",
    api_endpoint: str = "us-central1-aiplatform.googleapis.com",
):
    # The AI Platform services require regional API endpoints.
    client_options = {"api_endpoint": api_endpoint}
    # Initialize client that will be used to create and send requests.
    # This client only needs to be created once, and can be reused for multiple requests.
    client = aiplatform.gapic.PredictionServiceClient(client_options=client_options)
    # for more info on the instance schema, please use get_model_sample.py
    # and look at the yaml found in instance_schema_uri
    instance = json_format.ParseDict(instance_dict, Value())
    instances = [instance]
    parameters_dict = {}
    parameters = json_format.ParseDict(parameters_dict, Value())
    endpoint = client.endpoint_path(
        project=project, location=location, endpoint=endpoint_id
    )

    response = client.predict(
        endpoint=endpoint, instances=instances, parameters=parameters
    )
    # See gs://google-cloud-aiplatform/schema/predict/prediction/tabular_classification_1.0.0.yaml for the format of the predictions.
    predictions = response.predictions
    for prediction in predictions:
        # print(" prediction:", dict(prediction))
        return dict(prediction)


def self():

    # headers = {
    #   'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:55.0) Gecko/20100101 Firefox/55.0',
    # }
    pload = {'teamone':'Italy', 'teamtwo':"Scotland"}
    r = requests.get('http://127.0.0.1:3000', params=pload)
    print(r.request.url)
    print(r.text)


def ml_api(team1:str, team2:str):

    ENDPOINT_ID = "1932365297537253376"
    PROJECT_ID = "disco-charger-369115"

    instance = {
        "home_team": "Germany",
        "away_team": "India",
        "country": "Germany",
        "city": "Berlin",
        "neutral": "FALSE",
        "date": "2022-11-20",
        "tournament": "Freindly"
    }

    instance['home_team'] = team1
    instance['away_team'] = team2

    predictions = dict(predict_tabular_classification_sample(
        instance_dict=instance, project=PROJECT_ID, endpoint_id=ENDPOINT_ID
    ))
    # print(predictions)
    # print(predictions.get('scores'))
    # print(predictions.get('scores')[0])
    won = predictions.get('scores')[0]
    lost = predictions.get('scores')[1]
    tied = predictions.get('scores')[2]

    return {'1':won, '0':lost, '0.5':tied}


if __name__ == '__main__':

    # predictions = ml_api("France", "Italy")
    self()
