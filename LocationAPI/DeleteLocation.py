import requests

locationId = "LOCATION ID OF LOCATION TO BE DELETED"

url = ("https://location-api.hibirdi.com/locations/{}"
       .format(locationId))

response = requests.request("DELETE", url)

print(response.text)
