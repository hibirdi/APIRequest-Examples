import requests

lat = 55.862261
lng = -4.250959
zoom = 16
token = "ADD YOUR TOKEN HERE"

url = ("https://catalog-api.hibirdi.com/catalog/lat/{}/lng/{}/zoom/{}/token/{}"
       .format(lat, lng, zoom, token))

response = requests.request("GET", url)

print(response.text)
