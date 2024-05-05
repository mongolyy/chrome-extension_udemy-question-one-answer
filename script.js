function show() {
  document.querySelectorAll("[class*='result-pane--answer-by-user-label--']").forEach(element => element.style.display = '');
  document.querySelectorAll("[class*='answer-result-pane--answer-incorrect--']").forEach(element => {
    element.style.backgroundColor = '#fbece9'
    element.style.border = '1px solid #b32d0f'
    element.style.color = '#2d2f31'
  });
  document.querySelectorAll("[class*='answer-result-pane--answer-correct--']").forEach(element => {
    element.style.backgroundColor = '#f2f7f6'
    element.style.border = '1px solid #1e6055'
    element.style.color = '#2d2f31'
  });
  document.querySelectorAll("[class^='result-pane--question-related-fields--']").forEach(element => element.style.visibility = 'visible');
}

function hide() {
  document.querySelectorAll("[class*='result-pane--answer-by-user-label--']").forEach(element => element.style.display = 'none');
  document.querySelectorAll("[class*='answer-result-pane--answer-incorrect--']").forEach(element => {
    element.style.backgroundColor = '#fff'
    element.style.border = '1px solid #d1d7dc'
    element.style.color = '#6a6f73'
  });
  document.querySelectorAll("[class*='answer-result-pane--answer-correct--']").forEach(element => {
    element.style.backgroundColor = '#fff'
    element.style.border = '1px solid #d1d7dc'
    element.style.color = '#6a6f73'
  });
  document.querySelectorAll("[class^='result-pane--question-related-fields--']").forEach(element => element.style.visibility = 'hidden');
}

const main = () => {
  let jsInitCheckTimer;

  const jsLoaded = () => {
    if (document.querySelector("[class^='result-pane--question-result-pane-wrapper--']") !== null) {
      clearInterval(jsInitCheckTimer);
      hide();

      document.querySelectorAll("[class^='result-pane--question-result-pane-wrapper--']").forEach(element => {
        const formNode = element.querySelector("[class^='result-pane--question-result-pane-expanded-content--']");
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

        formNode.insertBefore(showButton, formNode.querySelector("[class^='result-pane--question-related-fields--']"));
        formNode.appendChild(hiddenButton);
      });
    }
  };

  jsInitCheckTimer = setInterval(jsLoaded, 1000);
}

window.addEventListener("load", main, false);
