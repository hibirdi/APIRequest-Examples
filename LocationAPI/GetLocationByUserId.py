import requests
import json

userId = "ADD YOUR USER ID HERE"
page = 1
itemsPerPage = 100
customId = "my-custom-location-id"
type = "construction"

url = ("https://location-api.hibirdi.com/user/{}/locations?page={}&itemsPerPage={}&customId={}&type={}"
       .format(userId, page, itemsPerPage, customId, type))

response = requests.request("GET", url)

print(json.dumps(response.json(), indent=2))
