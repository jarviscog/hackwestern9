import json

import requests
import http.client


# Copyright 2020 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# [START aiplatform_predict_tabular_classification_sample]
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
    print("response")
    print(" deployed_model_id:", response.deployed_model_id)
    # See gs://google-cloud-aiplatform/schema/predict/prediction/tabular_classification_1.0.0.yaml for the format of the predictions.
    predictions = response.predictions
    for prediction in predictions:
        print(" prediction:", dict(prediction))


# [END aiplatform_predict_tabular_classification_sample]

def self():

    # headers = {
    #   'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:55.0) Gecko/20100101 Firefox/55.0',
    # }
    pload = {'teamone':'Manchester', 'teamtwo':"Scotland"}
    r = requests.get('http://127.0.0.1:3000', params=pload)


    print(r.text)


# def sports_api():
#
#     # conn = http.client.HTTPSConnection("api.sportmonks.com")
#     # payload = ''
#     # headers = {}
#     conn.request("GET", "https://api.football-data.org/v4/matches", payload, headers)
#     res = conn.getresponse()
#     data = res.read()
#     print(data.decode("utf-8"))

def ml_api():

    # headers = {
    #   'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:55.0) Gecko/20100101 Firefox/55.0',
    # }
    # pload = {["2022-11-20", "Saudi Arabia", "France", "Friendly", "London", "FALSE"]}
    # jsonStr = json.dumps(instances)

    pload = {"instances":"Hello"}

    r = requests.get('https://us-central1-aiplatform.googleapis.com/v1beta1/projects/disco-charger-369115/locations/us-central1/endpoints/4888134027975852032', params=pload)

    print(r.text)

if __name__ == '__main__':

    ml_api()