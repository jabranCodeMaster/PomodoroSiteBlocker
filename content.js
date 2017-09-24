//document.location.href = "http://stackoverflow.com/";

chrome.runtime.sendMessage({timer: "work"}, function(response) {
  if (response.farewell == "true") {
    document.location.href = "http://stackoverflow.com";
  }
});
