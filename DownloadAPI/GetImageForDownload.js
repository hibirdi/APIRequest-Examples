let data = null;
const xhr = new XMLHttpRequest();

const lat = 55.862261;
const lng = -4.260959;
const zoom = 16;
const imageId = "ADD IMAGE ID HERE";
const token = "ADD YOUR TOKEN HERE";

const url = "https://download-api.hibirdi.com/download/lat/" + lat +
            "/lng/" + lng +
            "/zoom/" + zoom +
            "/id/" + imageId +
            "?token=" + token;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.status);
  }
});

xhr.open("GET", url);
xhr.send(data);
