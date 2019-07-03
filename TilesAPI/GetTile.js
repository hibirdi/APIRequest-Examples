let data = null;
const xhr = new XMLHttpRequest();

const x = 31992;
const y = 20452;
const z = 16;
const token = "ADD YOUR TOKEN HERE";

const url = "https://tiles.hibirdi.com/zxy/" + z +
            "/" + x +
            "/" + y +
            "?token=" + token;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", url);
xhr.send(data);
