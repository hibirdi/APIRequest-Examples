const xhr = new XMLHttpRequest();

const locationId = "LOCATIONID OF LOCATION TO BE UPDATED";
const locationName = "My Location Name";
const customId = "my-custom-location-id";
const products = ["nucd"]; // intelligence products the location will be subscribed to

const data = {
  "properties": {
    "locationName": locationName,
    "customId": customId,
    "products": products,
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
