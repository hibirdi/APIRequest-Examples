import requests

lat = 55.862261
lng = -4.260959
zoom = 16
imageId = "ADD IMAGE ID HERE"
token = "ADD YOUR TOKEN HERE"

url = ("https://download-api.hibirdi.com/download/lat/{}/lng/{}/zoom/{}/id/{}?token={}"
       .format(lat, lng, zoom, imageId, token))

response = requests.request("GET", url)

print(response.text)
