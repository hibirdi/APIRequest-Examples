import requests

image_id = "ADD IMAGE ID HERE"
token = "ADD YOUR TOKEN HERE"

url = ("https://catalog-api.hibirdi.com/catalog/metadata/id/{}/token/{}"
       .format(image_id, token))

response = requests.request("GET", url)

print(response.text)
