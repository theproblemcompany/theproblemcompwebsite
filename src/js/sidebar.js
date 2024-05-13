function check_if_mobile(target, mobilesnippet, desktopsnippet){
    if (window.matchMedia("(max-width: 600px)").matches)
        {
        // The viewport is less than 768 pixels wide
        //document.write("This is a mobile device.");

        fetch(mobilesnippet) 
          .then(res => {

            if (res.ok) {
                return res.text();
            }
        })

          .then(mobilesnippet => {
            target.innerHTML = mobilesnippet; 
        });
    }

//    else{
//        fetch(desktopsnippet) 
//          .then(res => {

//            if (res.ok) {
//                return res.text();
//            }
//        })

//         .then(desktopsnippet => {
//            target.innerHTML = desktopsnippet; 
//        }); 
//    }

}


function update_buttons(target){
  const loadSnippet = number => {
    fetch(`html${number}.html`)
      .then(res => {
        if (res.ok) {
            return res.text();
        }
      })
  
      .then(htmlSnippet => {
        target.innerHTML = htmlSnippet;
      });
  };

  document.querySelector('.eventsbutton').addEventListener(loadSnippet(1));
  document.querySelector('.blogbutton').addEventListener(loadSnippet(2));
}

window.onload = function(){
  const target = document.querySelector('.sidebar');
    console.log(`Sidebar.js: -${target}`)
    htmlSnippetmobile = 'dropdownsidebar.html'
    htmlSnippetdesktop = 'sidebar.html'
    console.log(`Sidebar.js: -${htmlSnippetmobile}`)
    console.log('Sidebar.js: Function running')
    check_if_mobile(target, htmlSnippetmobile, htmlSnippetdesktop)
}

//setTimeout(update_buttons(target), 8000)