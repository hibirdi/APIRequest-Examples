let data = null;
const xhr = new XMLHttpRequest();

const lat = 55.862261;
const lng = -4.250959;
const zoom = 16;
const token = "ADD YOUR TOKEN HERE"
const url = "https://catalog-api.hibirdi.com/catalog/lat/" + lat +
            "/lng/" + lng +
            "/zoom/" + zoom +
            "/token/" + token;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", url);
xhr.send(data);
