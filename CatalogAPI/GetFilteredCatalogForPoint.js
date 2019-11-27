let data = null;
const xhr = new XMLHttpRequest();

const lat = 55.862261;
const lng = -4.250959;
const zoom = 16;
const token = "ADD YOUR TOKEN HERE";
const blackAndWhiteAllowed = false;
const cloudCover = 20;
const startDate = 1535371200000;
const providers = "BLUESKY,DIGITALGLOBE";
const url = "https://catalog-api.hibirdi.com/catalog/lat/" + lat +
            "/lng/" + lng +
            "/zoom/" + zoom +
            "/token/" + token
            "?blackAndWhiteAllowed=" + blackAndWhiteAllowed +
            "&cloudCover=" + cloudCover +
            "&startDate=" + startDate +
            "&providers=" + providers;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", url);
xhr.send(data);
