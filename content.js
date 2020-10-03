// document.querySelector("body").innerHTML = ""
let page = document.createElement('buttonDiv');
const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
function constructOptions(kButtonColors) {
  for (let item of kButtonColors) {
    let button = document.createElement('button');
    button.style.backgroundColor = item;
    button.addEventListener('click', function() {
      chrome.storage.sync.set({color: item}, function() {
        console.log('color is ' + item);
      })
    });
    page.appendChild(button);
  }
}
constructOptions(kButtonColors);

/************************** */
chrome.runtime.onMessage.addListener(function(request, sender, callback) {
  // request contains the YOURMESSAGEPAYLOAD sent above as a Javascript object literal
});

// chrome.runtime.sendMessage({<YOURMESSAGEPAYLOAD>});
/************************* */

