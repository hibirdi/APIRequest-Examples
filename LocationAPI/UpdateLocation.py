import requests
import json

locationId = "LOCATIONID OF LOCATION TO BE UPDATED"
locationName = "My Location Name"
customId = "my-custom-location-id"
products = ["nucd"] # intelligence products the location will be subscribed to

data = {
  "properties": {
    "locationName": locationName,
    "customId": customId,
    "products": products,
  }
}

url = ("https://location-api.hibirdi.com/locations/{}"
       .format(locationId))
headers = {"Content-Type": "application/json"}

response = requests.request("PUT", url, data=(json.dumps(data)), headers=headers)

print(response.text)
