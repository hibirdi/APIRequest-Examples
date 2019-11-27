import requests

lat = 55.862261
lng = -4.250959
zoom = 16
token = "ADD YOUR TOKEN HERE"
blackAndWhiteAllowed = False
cloudCover = 20
startDate = 1535371200000
providers = "BLUESKY,DIGITALGLOBE"

url = ("https://catalog-api.hibirdi.com/catalog/lat/{}/lng/{}/zoom/{}/token/{}?blackAndWhiteAllowed={}&cloudCover={}&startDate={}&providers={}"
       .format(lat, lng, zoom, token, blackAndWhiteAllowed, cloudCover, startDate, providers))

response = requests.request("GET", url)

print(response.text)
