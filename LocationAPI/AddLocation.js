const addSingleLocation = () => {
  const xhr = new XMLHttpRequest();

  const token = "ADD YOUR TOKEN HERE";
  const locationName = "My Location Name";
  const customId = "my-custom-location-id";
  const latitude = 55.862669; // centrepoint or reference point of the location
  const longitude = -4.250593; //centrepoint or reference point of the location
  const products = ["nucd"]; // intelligence products the location will be subscribed to
  const tags = [{ "tag": "administrative", "value": "city" }]; // custom tags for the location
  const geometry = {
    "type": "Polygon",
    "coordinates": [
        [
            [-4.261600, 55.868846],
            [-4.239585, 55.868846],
            [-4.239585, 55.856491],
            [-4.261600, 55.856491],
            [-4.261600, 55.868846]
        ]
    ]
  } // GeoJSON geometry

  const data = {
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
  const url = `https://location-api.hibirdi.com/users/${token}/locations`;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });

  xhr.open("POST", url);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(data));
}

const addMultipleLocationsWithFile = () => {
  const xhr = new XMLHttpRequest();

  const token = "ADD YOUR TOKEN HERE";
  const fileType = "CSV";

  // assuming you have a file input in your HTML (like below), this will fetch the first selected file
  // <input type="file" id="input">
  const file = document.getElementById('input').files[0];

  const url = `https://location-api.hibirdi.com/users/${token}/locations?filetype=${fileType}`;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });

  const formData = new FormData();
  formData.append('file', file);

  xhr.open("POST", url);
  xhr.send(formData);
}