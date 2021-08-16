function show() {
  document.querySelectorAll("[class^='mc-quiz-answer--correctness--']").forEach(element => element.style.display = 'block');
  document.querySelectorAll("[class*='mc-quiz-answer--answer-body--'][class*='mc-quiz-answer--correct--']").forEach(element => element.style.backgroundColor = '#f2f7f6');
  document.querySelectorAll("[class^='mc-quiz-question--explanation--']").forEach(element => element.style.visibility = 'visible');
}

function hide() {
  document.querySelectorAll("[class^='mc-quiz-answer--correctness--']").forEach(element => element.style.display = 'none');
  document.querySelectorAll("[class*='mc-quiz-answer--answer-body--'][class*='mc-quiz-answer--correct--']").forEach(element => element.style.backgroundColor = 'transparent');
  document.querySelectorAll("[class^='mc-quiz-question--explanation--']").forEach(element => element.style.visibility = 'hidden');
}

const main = () => {
  let jsInitCheckTimer;

  const jsLoaded = () => {
    if (document.querySelector("[class^='detailed-result-panel--panel-row--']") !== null) {
      clearInterval(jsInitCheckTimer)
      hide()

      document.querySelectorAll("[class^='detailed-result-panel--panel-row--']").forEach(element => {
        const showButton = document.createElement('button');
        showButton.innerText = 'show answer';
        showButton.onclick = show;

        const hiddenButton = document.createElement('button');
        hiddenButton.innerText = 'hide answer';
        hiddenButton.onclick = hide;

        const formNode = element.querySelector('form');
        formNode.insertBefore(showButton, formNode.querySelector("[class^='mc-quiz-question--explanation--']"));
        formNode.appendChild(hiddenButton);
      });
    }
  };

  jsInitCheckTimer = setInterval(jsLoaded, 1000);
}

window.addEventListener("load", main, false);
