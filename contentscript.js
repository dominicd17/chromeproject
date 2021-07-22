// Declare a store of all of the URLs we want to avoid
const rickRolls = ['https://www.youtube.com/watch?v=dQw4w9WgXcQ'];

// Wait for the page to finish loading
document.addEventListener('DOMContentLoaded', () => {
  // Grab all urls on the page (as they should be stored in <a> tags)
  const urls = document.querySelectorAll('a');

  // Check to see if any of the urls are rickRolls
  for (const url of urls) {
    if (rickRolls.includes(url)) {
      // This is a rickRoll! Stop the madness!
      // What should we do here? We could change the text of the link to alert the user, change the url to redirect the user to something else, just delete the link?
    }
  }
});