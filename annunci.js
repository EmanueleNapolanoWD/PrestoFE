// CATTURO VARIABILI
let navbar = document.querySelector('nav')
let header = document.querySelector('header')
let footer = document.querySelector('.footerIndex')
let linkAnnunci = document.querySelector('.annunci')
let linkSiamo = document.querySelector('.siamo')
let body = document.querySelector('body')
let rigaCards = document.querySelector('#rowcards')
let formFilter = document.querySelector('#formFilter')
let filBar = document.querySelector('.filter')
let filterRange = document.querySelector('#filterRange');
let filterRangeValue = document.querySelector('#filterRangeValue');
let filterWord = document.querySelector('#filterWord')
let ButOnOff = document.querySelector('#circle')

console.log(footer);

// dark mode
// creo un oggetto di memoria con chiave valore
let modalita = localStorage.getItem('mode', 'light')
// variabile di controllo impostato su false
let check1 ;

// avvio dark mode al click del button
ButOnOff.addEventListener('click', () => {
    if (check1 == false) {
        ButOnOff.classList.add('x')
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
    footer.classList.add('footerDarkMode')
    footer.classList.remove('footerIndex')
}
else if (modalita == 'light') {
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
    footer.classList.remove('footerDarkMode')
    footer.classList.add('footerIndex')
}

console.log(`annunci : ${check1}`);


// CAMBIO COLORE NAVBAR ALLO SCROLL 
window.addEventListener('scroll', () => {
    if (window.scrollY > 674) {
        navbar.classList.remove('navstyle')
        navbar.classList.remove('link_hover')
        navbar.classList.add('navscroll')
        navbar.classList.add('nav_linkHov')
    }
    else {
        navbar.classList.remove('navscroll')
        navbar.classList.remove('nav_linkHov')
        navbar.classList.add('navstyle')
        navbar.classList.add('link_hover')
    }
});


// collegamento file Json


fetch('./annunci.json').then((response) => response.json()).then((data) => {
    //FUNZIONI
    //funzione per mostrare tutte le card
    function mostra(array) {
        array.forEach(dato => {
            let card = document.createElement('div');
            card.classList.add('col-6', 'col-md-3', 'disCard')
            card.innerHTML =
                `<div class="card mt-4" style="width: 18rem;">
             <img src="${dato.img}" class="card-img-top" alt="Img">
             <div class="card-body">
             <h5 class="card-title">${dato.name}</h5>
             <p class="card-text">${dato.category}</p>
             <p class="card-text">${dato.price} $</p>
             </div>
             </div>`
            rigaCards.appendChild(card)
        });

    }
    // Avvio funzione mostra TUTTE LE CARD
    mostra(data);

    let idBut = "tutti" ;
    console.log(idBut);
    

    // funzione per radiofiltri
    function AddRadioBtnFilter() {
        //creo variabile dove,con il metodo map,creo un array di solamente elementi category
        let box1 = data.map((annunci) => annunci.category)
        //creo variabile dove ,con il metodo set, filtro tutte le category e creo un simil-array(Set) dove viene visaulizzata una volta sola la category
        let box2 = new Set(box1)
        // con il metodo array.from converto Set in un array
        let box3 = Array.from(box2)
        // ciclo forEach per utilizzare i dati all'interno dell'array
        box3.forEach((cat) => {
            // creo div per inserire gli altri ta input
            let filCategory = document.createElement('div');
            filCategory.innerHTML = `
                <input type="radio" name="categoria" id="${cat}" class="inputClass">         
                <label for="${cat}">${cat}</label>`
            formFilter.appendChild(filCategory)
            let radioBtn = document.querySelectorAll('.inputClass')
            radioBtn.forEach((btn) => {
                console.log(btn);
                
                btn.addEventListener('click', () => {
                    idBut = btn.id;
                    globalFilter()
                })
            })
        });
    }

    // avvio funzione che mi genera radio button in base alla categoria
    AddRadioBtnFilter();



    // funzione ricerca : visualizza tutte le card in base alla categoria scelta
    function ricercaPerCategoria(btn,array) {
        if (btn != "tutti") {
            //creo variabile dove ,verificando se category==btn.id, inserisco l'array dove troverò gli oggetti filtrati
            let filter = array.filter(oggetto => oggetto.category == btn);
            // svuoto la pagina così da caricare solamente gli oggetti filtrat
            // uso la funzione mostra per far vedere in Cards gli oggetti filtrati              
            return filter
        }
        else {
            return array
        }
    }

    let prezzomassimo;
    // Funzione che mi da valore massimo per valorizzarlo all'interno dell'input range
    function ricercaRange() {
        // creo variabile dove prendo solo i prezzi degli articoli
        let copia = data.map(annuncio => Number(annuncio.price));
        // metto in ordine crescente l'array  
        let PrezziOrdinati = copia.sort((a, b) => a - b);
        // col metodo POP() estrapolo l'ultimo valore dell'array (ilo prezzo più alto)
        let maxPriceValue = PrezziOrdinati.pop();
        // nel campo input catturato gli do il valore di maxPriceValue (il valore più grande dell'array)
        filterRange.max = maxPriceValue;
        filterRange.value = maxPriceValue;
        prezzomassimo = maxPriceValue;
        // immetto nella label il valore della variabile maxPriceValue che ha all'interno l'ultimo valore dell'array
        filterRangeValue.innerHTML = `${maxPriceValue}`

    }
    // avvio funzione che mi da i prezzi al range
    ricercaRange()


    // FILTRO PER PREZZO CRESCENTE/DECREWSCENTE

    // catturo RadioBtn del form crescente e decrescente
    let btnCre = document.querySelector('#crescente')
    let btnDec = document.querySelector('#decrescente')
    let LabelCre = document.querySelector('#labelCre')
    let LabelDec = document.querySelector('#labelDec')



    // variabili per prendere prezzo minimo e prezzo massimo
    let AllPrice = data.map((annuncio) => Number(annuncio.price))
    let OrdPrice = AllPrice.sort((a, b) => a - b)
    let minimo = OrdPrice.shift()
    let massimo = OrdPrice.pop()


    //Inserisco dentro la label del butCre/butDec i valori minimi e massimi
    LabelCre.innerHTML = `Min: ${minimo} -  Max: ${massimo}`
    LabelDec.innerHTML = `Max. ${massimo} - Min. ${minimo}`

    // Funzione che mi mostra card in ordine crescente di prezzo
    function ordineCre() {
        let prezzi = data.map(annuncio => annuncio)
        let prezziCre = prezzi.sort((a, b) => a.price - b.price)
        console.log(prezzi);
        mostra(prezziCre)
    }

    // all'evento click di radioBtn crescente parte la funzione
    btnCre.addEventListener('click', () => {
        rigaCards.innerHTML = ``
        ordineCre()
    })

    //funzione di ordine decrescnte
    function ordineDec() {
        let prezzi = data.map(annuncio => annuncio)
        let prezziCre = prezzi.sort((a, b) => b.price - a.price)
        console.log(prezzi);
        mostra(prezziCre)
    }

    btnDec.addEventListener('click', () => {
        rigaCards.innerHTML = ``
        ordineDec()
    })



    // funzione che mostra tutte le car d in base al prezzo max 
    function filtraPerRange(array) {
        // creo variabile dove filtro gli annunci in base al prezzo (cioè se il valore di filterRange è minore o uguale al valore del range)
        let filtrati = array.filter(annuncio => Number(annuncio.price) <= filterRange.value)
        console.log (filtrati)
        // ritorno risultato di filtrati 
        return filtrati
    }


    //avvio al movimento del range la funzione globalFunction
    filterRange.addEventListener('input', () => {
        filterRangeValue.innerHTML = filterRange.value
        globalFilter()
    })



    // funzione che filtra articoli in base alla parola e li mostra
    function filtraPerParola(array) {
        let filtrati = array.filter(annuncio => annuncio.name.includes(filterWord.value))
        rigaCards.innerHTML = ``
        return filtrati
        console.log(filtrati)
    }

    filterWord.addEventListener('input', () => {
        globalFilter()
    })

    function globalFilter(btn) {
        let Categoria = ricercaPerCategoria(idBut,data);
        console.log(Categoria);
        
        let globalprezzo = filtraPerRange(Categoria);
        let globalWord = filtraPerParola(globalprezzo);
        mostra(globalWord);
    }

    // pulsante reset

    let reset = document.querySelector('#reset');
    let AllCat = document.querySelector('#tutti')

    reset.addEventListener('click', () => {
        AllCat.checked = true;
        btnCre.checked = false;
        btnDec.checked = false;
        filterRange.value = prezzomassimo;
        filterRangeValue = prezzomassimo;
        filterWord.value = '';
        rigaCards.innerHTML = ``
        mostra(data)
    })

})