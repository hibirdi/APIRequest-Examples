let data = null;
const xhr = new XMLHttpRequest();

const token = "ADD YOUR TOKEN HERE";
const page = 1;
const itemsPerPage = 100;
const customId = "my-custom-location-id";
const type = "construction";
const url = "https://location-api.hibirdi.com/users/" + token +
            "/locations" +
            "?page=" + page +
            "&itemsPerPage=" + itemsPerPage +
            "&customId=" + customId +
            "&type=" + type;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", url);
xhr.send(data);
