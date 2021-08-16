// Initialize butotn with users's prefered color
let hiddenDiv = document.getElementById("hidden");
let restoreDiv = document.getElementById("restore");

// When the button is clicked, inject setPageBackgroundColor into current page
hiddenDiv.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: hidden,
  });
});

restoreDiv.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: restore,
  });
});

// The body of this function will be execuetd as a content script inside the
// current page
function hidden() {
  document.querySelectorAll("[class^='mc-quiz-answer--correctness--']").forEach(element => element.style.display = 'none');
  document.querySelectorAll("[class*='mc-quiz-answer--answer-body--'][class*='mc-quiz-answer--correct--']").forEach(element => element.style.backgroundColor = 'transparent');
}

function restore() {
  document.querySelectorAll("[class^='mc-quiz-answer--correctness--']").forEach(element => element.style.display = 'block');
  document.querySelectorAll("[class*='mc-quiz-answer--answer-body--'][class*='mc-quiz-answer--correct--']").forEach(element => element.style.backgroundColor = '#f2f7f6');
}
