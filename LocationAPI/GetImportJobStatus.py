import requests
import json

jobId = "YOUR-JOB-ID"

url = ("https://location-api.hibirdi.com/jobs/{}"
       .format(jobId))

response = requests.request("GET", url)

print(json.dumps(response.json(), indent=2))
