import requests

token = "ADD YOUR TOKEN HERE"
url = "https://catalog-api.hibirdi.com/catalog/lat/55.862261/lng/-4.250959/zoom/16/token/" + token

response = requests.request("GET", url)

print(response.text)
