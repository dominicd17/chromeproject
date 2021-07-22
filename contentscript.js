// Declare a store of all of the URLs we want to avoid
const rickRolls = ['https://www.youtube.com/watch?v=dQw4w9WgXcQ'];
console.log("testing");

// Wait for the page to finish loading
//document.addEventListener('DOMContentLoaded', () => {
  // Grab all urls on the page (as they should be stored in <a> tags)
  const urls = Array.from(document.querySelectorAll('a'));

  console.log('This is the list of urls: ');
  console.log(urls);
  const rickRollLinks = [];
  

 
  let bool = chrome.storage.sync.get("onOff", (data) => {
    
    let trueOrFalse = data.onOff;
    console.log(data);
    console.log(data.onOff);
    

    // Check to see if any of the urls are rickRolls
    for (const url of urls) {
      console.log('Checking for rickRolls...');
      if (trueOrFalse && !rickRolls.includes(url.href)) {
        // This is a rickRoll! Stop the madness!
        // What should we do here? We could change the text of the link to alert the user, change the url to redirect the user to something else, just delete the link?
        url.href = rickRolls[0];
      } else if (!trueOrFalse && rickRolls.includes(url.href)) {
        url.href = 'https://www.youtube.com/watch?v=Ti4sqG85FU4';
        url.innerText = "WARNING RICK ROLL LINK DETECTED INITIALIZING SNAKE PROTOCOL"
      }
    }

    
  });




//});