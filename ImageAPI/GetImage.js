let data = null;
const xhr = new XMLHttpRequest();

const imageId = "ADD IMAGE ID HERE";
const x = 31992;
const y = 20452;
const z = 16;
const requestId = "ADD REQUEST ID (returned from Catalog API) HERE";
const token = "ADD YOUR TOKEN HERE";

const url = "https://image-api.hibirdi.com/image/id/" + imageId +
            "/x/" + x +
            "/y/" + y +
            "/z/" + z +
            "?requestId=" + requestId +
            "&token=" + token;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.status);
  }
});

xhr.open("GET", url);
xhr.send(data);
