let data = null;
const xhr = new XMLHttpRequest();

const imageId = "ADD IMAGE ID HERE";
const token = "ADD YOUR TOKEN HERE";
const url = "https://catalog-api.hibirdi.com/catalog/metadata/id/" + imageId +
            "/token/" + token;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", url);
xhr.send(data);
