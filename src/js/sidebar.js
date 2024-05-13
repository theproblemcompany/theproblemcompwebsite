function check_if_mobile(target, mobilesnippet){
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
    //    fetch(desktopsnippet) 
    //      .then(res => {

    //        if (res.ok) {
    //            return res.text();
    //        }
    //    })

    //      .then(desktopsnippet => {
    //        target.innerHTML = desktopsnippet; 
    //    }); 
    }

}

window.onload = function(){
    const target = document.querySelector('.sidebar');
    //htmlSnippetmobile = `./snippets/dropdownsidebar.html`
    htmlSnippetmobile = `dropdownsidebar.html`
    check_if_mobile(target, htmlSnippetmobile)
}