function show() {
  document.querySelectorAll("[class*='mc-quiz-answer--correctness--']").forEach(element => element.style.display = '');
  document.querySelectorAll("[class*='mc-quiz-answer--answer--'][class*='mc-quiz-answer--correct--']").forEach(element => element.style.backgroundColor = '#d4eae0');
  document.querySelectorAll("[class^='mc-quiz-question--explanation--']").forEach(element => element.style.visibility = 'visible');
}

function hide() {
  document.querySelectorAll("[class*='mc-quiz-answer--correctness--']").forEach(element => element.style.display = 'none');
  document.querySelectorAll("[class*='mc-quiz-answer--answer--'][class*='mc-quiz-answer--correct--']").forEach(element => element.style.backgroundColor = 'transparent');
  document.querySelectorAll("[class^='mc-quiz-question--explanation--']").forEach(element => element.style.visibility = 'hidden');
}

const main = () => {
  let jsInitCheckTimer;

  const jsLoaded = () => {
    if (document.querySelector("[class^='detailed-result-panel--panel-row--']") !== null) {
      clearInterval(jsInitCheckTimer);
      hide();

      document.querySelectorAll("[class^='detailed-result-panel--panel-row--']").forEach(element => {
        const formNode = element.querySelector("[class^='mc-quiz-question--container--']");
        if (!formNode) {
          return
        }

        const showButton = document.createElement('button');
        showButton.innerText = 'show answer';
        showButton.type = 'button';
        showButton.style.width = '150px';
        showButton.style.borderRadius = '5px';
        showButton.style.borderWidth = '1px';
        showButton.onclick = show;

        const hiddenButton = document.createElement('button');
        hiddenButton.innerText = 'hide answer';
        hiddenButton.type = 'button';
        hiddenButton.style.width = '150px';
        hiddenButton.style.borderRadius = '5px';
        hiddenButton.style.borderWidth = '1px';
        hiddenButton.onclick = hide;

        formNode.insertBefore(showButton, formNode.querySelector("[class^='mc-quiz-question--explanation--']"));
        formNode.appendChild(hiddenButton);
      });
    }
  };

  jsInitCheckTimer = setInterval(jsLoaded, 1000);
}

window.addEventListener("load", main, false);
