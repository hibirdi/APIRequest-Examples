let data = null;
const xhr = new XMLHttpRequest();

const locationId = "LOCATION ID OF LOCATION TO BE DELETED";

const url = `https://location-api.hibirdi.com/locations/${locationId}`;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("DELETE", url);
xhr.send(data);
