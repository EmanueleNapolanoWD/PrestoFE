let Siamo = {
    contatti :
    [
        {
            name: 'Giorgia Rossi',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloribus tempore illum veniam ipsum.',
            job: 'CEO',
            img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            name: 'Luca Bianchi',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloribus tempore illum veniam ipsum.',
            job: 'CTO',
            img: 'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            name: 'Sophia Neri',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloribus tempore illum veniam ipsum.',
            job: 'Student',
            img: 'https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
    ],

    mostraCard: function (array,riga){

        array.contatti.forEach(persona => {
            let card = document.createElement('div')
            card.classList.add('col-12', 'col-md-4','d-flex','align-items-center','justify-content-center')
            card.innerHTML = `
            <div class="card mt-4" style="width: 18rem;">
             <img src="${persona.img}" class="card-img-top" alt="Img">
             <div class="card-body">
             <h5 class="card-title">${persona.name}</h5>
             <p class="card-text fw-bold">${persona.job}</p>
             <p>${persona.description}
              </div>
             </div>
            `
            riga.appendChild(card)
        });
    },
    
}


console.log(Siamo.contatti);


let navbar = document.querySelector('.navbar')
let header = document.querySelector('header')
let linkAnnunci = document.querySelector('.annunci')
let linkSiamo = document.querySelector('.siamo')
let ButOnOff = document.querySelector('#circle')
let body = document.querySelector('body')
let footer = document.querySelector('footer')


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
        header.classList.add('headerDarkChiSiamo')
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
        header.classList.remove('headerDarkChiSiamo')
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
    header.classList.add('headerDarkChiSiamo')
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
    header.classList.remove('headerDarkChiSiamo')
}

console.log(`chi siamo : ${check1}`);


// catturo riga dove visualizzare Card 
let RigaCards = document.querySelector('#RigaCard')

// funzione card
Siamo.mostraCard(Siamo,RigaCards)

