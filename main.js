// CATTURO ELEMENTI 
let body = document.querySelector('body')
let navbar = document.querySelector('nav');
let AzPart = document.querySelector('#AzPartner')
let PrVenduti = document.querySelector('#Prvenduti')
let CliSodd = document.querySelector('#CliSodd')
let ButOnOff = document.querySelector('#circle')
let header = document.querySelector('header')
let linkAnnunci = document.querySelector('.annunci')
let linkSiamo = document.querySelector('.siamo')




// dark mode
let footer = document.querySelector('.footerIndex')
// creo un oggetto di memoria con chiave valore
let modalita = localStorage.getItem('mode', 'light')
// variabile di controllo impostato su false
let check1 = true;

// avvio dark mode al click del button
ButOnOff.addEventListener('click', () => {
    ButOnOff.classList.add('x')
    if (check1 == false) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 674) {
                navbar.classList.remove('navstyle')
                navbar.classList.add('navscrollDark')
                linkAnnunci.classList.add('blu')
                linkSiamo.classList.add('blu')
                linkAnnunci.classList.remove('bianco')
                linkSiamo.classList.remove('bianco')
            }
            else {
                navbar.classList.remove('navscrollDark')
                navbar.classList.add('navstyle')
                linkAnnunci.classList.add('bianco')
                linkSiamo.classList.add('bianco')
                linkAnnunci.classList.remove('blu')
                linkSiamo.classList.remove('blu')
            }
        });
        body.classList.add('darkMode')
        header.classList.add('DarkHeaderIndex')
        footer.classList.add('footerDarkMode')
        footer.classList.remove('footerIndex')
        check1 = true
        // quando sono nella dark mode gli assegno il valore 'dark' nella chiave mode
        localStorage.setItem('mode', 'dark')
    }
    else {
        ButOnOff.classList.remove('x')
        window.addEventListener('scroll', () => {
            if (window.scrollY > 674) {
                navbar.classList.remove('navstyle')
                navbar.classList.remove('navscrollDark')
                navbar.classList.add('navscroll')
                linkAnnunci.classList.add('blu')
                linkSiamo.classList.add('blu')
                linkAnnunci.classList.remove('verde')
                linkSiamo.classList.remove('verde')
            }
            else {
                navbar.classList.remove('navscroll')
                navbar.classList.add('navstyle')
                linkAnnunci.classList.remove('blu')
                linkSiamo.classList.remove('blu')
                linkAnnunci.classList.add('verde')
                linkSiamo.classList.add('verde')

            }
        });
        body.classList.remove('darkMode')
        header.classList.remove('DarkHeaderIndex')
        footer.classList.remove('footerDarkMode')
        footer.classList.add('footerIndex')

        check1 = false
        // quando non sono più im mod. dark allora riassegno il valore di mode con light
        localStorage.setItem('mode', 'light')
    }
})

// fine

if (modalita == 'dark') {
    ButOnOff.classList.toggle('x')
    window.addEventListener('scroll', () => {
        if (window.scrollY > 674) {
            navbar.classList.remove('navstyle')
            navbar.classList.add('navscrollDark')
            linkAnnunci.classList.add('blu')
            linkSiamo.classList.add('blu')
            linkAnnunci.classList.remove('bianco')
            linkSiamo.classList.remove('bianco')
        }
        else {
            navbar.classList.remove('navscrollDark')
            navbar.classList.add('navstyle')
            linkAnnunci.classList.add('bianco')
            linkSiamo.classList.add('bianco')
            linkAnnunci.classList.remove('blu')
            linkSiamo.classList.remove('blu')
        }
    });
    body.classList.add('darkMode')
    check1 = true
    header.classList.add('DarkHeaderIndex')
}
else if (modalita == 'light') {
    ButOnOff.classList.toggle('x')

    window.addEventListener('scroll', () => {
        if (window.scrollY > 674) {
            navbar.classList.remove('navstyle')
            navbar.classList.remove('navscrollDark')
            navbar.classList.add('navscroll')
            linkAnnunci.classList.add('blu')
            linkSiamo.classList.add('blu')
            linkAnnunci.classList.remove('verde')
            linkSiamo.classList.remove('verde')
        }
        else {
            navbar.classList.remove('navscroll')
            navbar.classList.add('navstyle')
            linkAnnunci.classList.remove('blu')
            linkSiamo.classList.remove('blu')
            linkAnnunci.classList.add('verde')
            linkSiamo.classList.add('verde')

        }
    });
    body.classList.remove('darkMode')
    check1 = false
    header.classList.remove('DarkHeaderIndex')
}

console.log(`main : ${check1}`);

// FUNCTION

function setintervallo(n, elem, tempo) {  // 
    let cont = 0; //Dichiaro variabile contatore "cont" e inizializzo a 0
    let interval = setInterval(() =>  //crea una variabile interna dove immetterci la funzione setinterval
    {
        if (cont < n) {   //condizione if = se cont è minore di N
            cont++;       // incrementa di 1 la var cont
            elem.innerHTML = (cont);  //scrivi nell'elemnto catturato il valore di cont
        }
        else {        //altrimenti
            clearInterval(interval)     //se cont è = o > di N BLOCCA IL LOOP di interval(variabile con all'interno la funzione)
        }
    },
        tempo  //tempo da impostare
    )

}


// variabile di controllo setTimeOut
let check = true;

// funzione controllo tempo funzionesetInterval
setTimeout(() => {
    check = true;
}, 8
)

// --------------------------------INDEX

let osserva = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && check) {
            setintervallo(150, AzPart, 2)
            setintervallo(700, PrVenduti, 3)
            setintervallo(350, CliSodd, 2)
            check = false;
        }
    })
});

osserva.observe(AzPart)



// CAMBIO COLORE NAVBAR ALLO SCROLL 

// window.addEventListener('scroll', () => {
//     if (window.scrollY > 674) {
//         navbar.classList.remove('navstyle')
//         navbar.classList.add('navscroll')
//         linkAnnunci.classList.add('blu')
//         linkSiamo.classList.add('blu')
//     }
//     else {
//         navbar.classList.remove('navscroll')
//         navbar.classList.add('navstyle')
//         linkAnnunci.classList.remove('blu')
//         linkSiamo.classList.remove('blu')
//         linkAnnunci.classList.add('verde')
//         linkSiamo.classList.add('verde')

//     }
// });



// SECTION VENDITE

setintervallo(150, AzPart, 2)  // richiamo la funzione setinterval (Numero di controllo,Elemento Richiamato in html dove elaborare,tempo immesso im ms)
setintervallo(700, PrVenduti, 3)
setintervallo(350, CliSodd, 2)

