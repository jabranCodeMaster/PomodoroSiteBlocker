var redirectSite = true;
//var intervalId2 = scope.setInterval(yesRedirect, 1500);
//var intervalId1 = scope.setInterval(noRedirect, 3000);
//setTimeout(function(){alert("hello");}, 5000);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.timer == "work") {
    if (redirectSite) {
      sendResponse({farewell: "true"})
    }
  }
});

/*var noRedirect() {
  redirectSite = false;
  alert("Can no longer redirect");
}

var yesRedirect() {
  redirectSite = true;
  alert("Can redirect");
} */
