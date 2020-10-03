// let changeColor = document.getElementById('changeColor');

// chrome.storage.sync.get('color', function(data) {
//   // console.log(chrome.storage)
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });

// The manifest will need the activeTab permission to allow the extension temporary access to the tabs API. This enables the extension to call tabs.executeScript.

  
// changeColor.addEventListener('click', function(element) {
//   let color = element.target.value;
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.executeScript(
//         tabs[0].id,
//         {code: 'document.body.style.backgroundColor = "' + color + '";'});
//   });
// });

document.querySelector('#go-to-options').addEventListener("click",function() {
  if (chrome.runtime.openOptionsPage) {
    chrome.runtime.openOptionsPage();
  } else {
    window.open(chrome.runtime.getURL('options.html'));
  }
});