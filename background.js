
let onOff = true;

chrome.runtime.onInstalled.addListener(() => {


  chrome.storage.sync.set({ onOff });
  console.log('Default background color set to %cgreen', `color: ${color}`);

  });
  

