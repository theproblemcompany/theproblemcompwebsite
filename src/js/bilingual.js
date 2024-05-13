var userLang = navigator.language || navigator.userLanguage; 
upfront = document.getElementById('upfront')
itxt = document.getElementById('itxt')
rightpar = document.getElementById('rightpar')
mita = document.getElementById('mita')
mitb = document.getElementById('mitb')
rpa = document.getElementById('rpa')
rpb = document.getElementById('rpb')
rpc = document.getElementById('rpc')
rpd = document.getElementById('rpd')
rpe = document.getElementById('rpe')
url = 'https://calendly.com/theproblemcomp/automate-your-business-clone'
dataurl = document.getElementById('cal')


//var userLang = "ro"

var language = {
    
    ro: {
        header: "Ce bine ar fi sa duca altcineva greul macar putin.",
        itxt: "Sa ai timp să respiri. Sa te concentrezi pe cum vrei sa creasca afacerea ta, in loc sa fii forta de lucru. Sa nu te mai ingrijorezi ca nu ai oameni sa cresti, ca nimeni nu stie arta produsului tau la fel ca tine. Sa fii persoana cu planul, cu visul, sa croiesti drumul companiei tale mai departe si cu mai multa ambitie.",
        rightpar: "Ajuta-ti afacerea sa se faca mare. Hraneste-o cu putin AI.",
        mita: "despre", 
        mitb: "book a call", 
        rpa: "Imagineaza-ti asta: in loc sa faci si sa desfaci pachete manual, poti sa iti iei un robot de companie care sa faca asta. Cat mai multe pachete poti face intr-o singura zi? " , 
        rpb: "In loc sa sortezi multele tipuri de material cu care lucrezi, poti sa antrenezi un calculator sa faca asta pentru tine. Cat de mult timp ti-ar salva asta?", 
        rpc: "Ai probleme? Avem solutii. ", 
        rpd: "", 
        rpe: "", 


    }
};

if (userLang === "ro" || userLang === "ro-mo") {
    upfront.textContent = language.ro.header
   itxt.textContent = language.ro.itxt
    rightpar.textContent = language.ro.rightpar
   rpa.textContent = language.ro.rpa
    rpb.textContent = language.ro.rpb
    rpc.textContent = language.ro.rpc
    rpd.textContent = language.ro.rpd
    rpe.textContent = language.ro.rpe
    dataurl.setAttribute('data-url', url)
}

