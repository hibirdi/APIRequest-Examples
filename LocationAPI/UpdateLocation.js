const xhr = new XMLHttpRequest();

const locationId = "LOCATIONID OF LOCATION TO BE UPDATED";
const userId = "ADD YOUR USER ID HERE";
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
          [
              -4.261600,
              55.868846
          ],
          [
              -4.239585,
              55.868846
          ],
          [
              -4.239585,
              55.856491
          ],
          [
              -4.261600,
              55.856491
          ],
          [
              -4.261600,
              55.868846
          ]
      ]
  ]
} // GeoJSON geometry

const data = {
  "type": "Feature",
  "geometry": geometry,
  "properties": {
    "latitude": latitude,
    "longitude": longitude,
    "userId": userId,
    "locationName": locationName,
    "customId": customId,
    "products": products,
    "tags": tags,
  }
}
const url = `https://location-api.hibirdi.com/locations/${locationId}`;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("PUT", url);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify(data));
