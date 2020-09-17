let data = null;
const xhr = new XMLHttpRequest();

const jobId = "YOUR-JOB-ID";
const url = "https://location-api.hibirdi.com/jobs/" + jobId;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", url);
xhr.send(data);
