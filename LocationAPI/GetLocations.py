import requests
import json

token = "ADD YOUR TOKEN HERE"
page = 1
itemsPerPage = 100
customId = "my-custom-location-id"
type = "construction"

url = ("https://location-api.hibirdi.com/users/{}/locations?page={}&itemsPerPage={}&customId={}&type={}"
       .format(token, page, itemsPerPage, customId, type))

response = requests.request("GET", url)

print(json.dumps(response.json(), indent=2))
