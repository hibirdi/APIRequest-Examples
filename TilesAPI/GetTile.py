import requests

z = 16
x = 31992
y = 20452
token = "ADD YOUR TOKEN HERE"

url = ("https://tiles.hibirdi.com/zxy/{}/{}/{}/?token={}"
       .format(z, x, y, token))

response = requests.request("GET", url)

print(response.text)
