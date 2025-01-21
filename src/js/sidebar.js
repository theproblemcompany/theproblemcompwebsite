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

    else{
        console.log('Sidebar.js: This is a Desktop device.')
        fetch(desktopsnippet) 
          .then(res => {

            if (res.ok) {
                return res.text();
            }
        })

          .then(desktopsnippet => {
            target.innerHTML = desktopsnippet; 
        }); 
    }

}

function setfooter(target, footer){
    fetch(footer) 
          .then(res => {

            if (res.ok) {
                return res.text();
            }
        })

          .then(footer => {
            target.innerHTML = desktopsnippet; 
        }); 

}

window.onload = function(){
    const target = document.querySelector('.sidebar');
    //htmlSnippetmobile = `./snippets/dropdownsidebar.html`
    htmlSnippetmobile = `dropdownsidebar.html`
    //htmlSnippetdesktop = `./snippets/sidebar.html`
    htmlSnippetdesktop = `sidebar.html`
    //footerSnippet = `./snippets/footer.html`
    //footerSnipper=`footer.html`

    check_if_mobile(target, htmlSnippetmobile, htmlSnippetdesktop)
}
