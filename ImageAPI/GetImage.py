import requests

imageId = "ADD IMAGE ID HERE"
x = 31992
y = 20452
z = 16
requestId = "ADD REQUEST ID (returned from Catalog API) HERE"
token = "ADD YOUR TOKEN HERE"

url = ("https://image-api.hibirdi.com/image/id/{}/x/{}/y/{}/z/{}?requestId={}&token={}"
       .format(imageId, x, y, z, requestId, token))

response = requests.request("GET", url)

print(response.text)
