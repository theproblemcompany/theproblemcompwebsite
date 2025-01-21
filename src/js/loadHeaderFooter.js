function loadHeaderFooter() {
  const menu = document.querySelector(".menu")
  const footer  = document.querySelector('.footer')
  fetch(`./snippets/header.html`)
  .then(res => {
      if (res.ok) {
          return res.text();
      } else {
          console.log('res not ok')
      }
  })

  .then(htmlSnippet => {
      console.log(htmlSnippet)
      menu.innerHTML = htmlSnippet;
  });

  fetch('./snippets/footer.html')
  .then(res => {
      if (res.ok) {
          return res.text();
      } else {
          console.log('res not ok')
      }
  })

  .then(htmlSnippet => {
      console.log(htmlSnippet)
      footer.innerHTML = htmlSnippet;
  });
};