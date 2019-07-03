let data = null;
const xhr = new XMLHttpRequest();
const token = "ADD YOUR TOKEN HERE"
const url = "https://catalog-api.hibirdi.com/catalog/lat/55.862261/lng/-4.250959/zoom/16/token/" + token

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", url);
xhr.send(data);
