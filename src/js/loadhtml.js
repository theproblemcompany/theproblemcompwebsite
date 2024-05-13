function loadSnippet(number) {
  console.log('Loadhtml.js: Function running')
  const targetEl = document.querySelector('.target');
  fetch(`html${number}.html`)
      .then(res => {
        if (res.ok) {
            return res.text();
        }
      })

      .then(htmlSnippet => {
        targetEl.innerHTML = htmlSnippet;
      });
  }
