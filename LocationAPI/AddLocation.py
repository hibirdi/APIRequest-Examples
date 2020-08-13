import requests
import json

token = "ADD YOUR TOKEN HERE"
locationName = "My Location Name"
customId = "my-custom-location-id"
latitude = 55.862669 # centrepoint or reference point of the location
longitude = -4.250593 #centrepoint or reference point of the location
products = ["nucd"] # intelligence products the location will be subscribed to
tags = [{ "tag": "administrative", "value": "city" }] # custom tags for the location
geometry = {
  "type": "Polygon",
  "coordinates": [
      [
          [
              -4.261600,
              55.868846
          ],
          [
              -4.239585,
              55.868846
          ],
          [
              -4.239585,
              55.856491
          ],
          [
              -4.261600,
              55.856491
          ],
          [
              -4.261600,
              55.868846
          ]
      ]
  ]
} # GeoJSON geometry

data = {
  "type": "Feature",
  "geometry": geometry,
  "properties": {
    "latitude": latitude,
    "longitude": longitude,
    "locationName": locationName,
    "customId": customId,
    "products": products,
    "tags": tags,
  }
}

url = ("https://location-api.hibirdi.com/users/{}/locations"
       .format(token))
headers = {"Content-Type": "application/json"}

response = requests.request("POST", url, data=(json.dumps(data)), headers=headers)

print(response.text)