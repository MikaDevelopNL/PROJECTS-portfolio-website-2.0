// PROJECTEN TAB

// zorgt dat de naam in de button van de dropdown komt

const dropdownBtn = document.querySelector('.js-dropdown-label');
const dropdownItems = document.querySelectorAll('.js-dropdown-item');
const projectContent = document.querySelectorAll('.project-content');
console.log(dropdownBtn);
console.log(dropdownItems);
console.log(projectContent);

dropdownItems.forEach(item => {
    item.addEventListener('click', (e) => {
        dropdownBtn.textContent = e.target.textContent;

        let targetID = e.target.getAttribute('href');
        let selectedProject = document.querySelector(targetID);
        

        projectContent.forEach(project => {
            project.classList.remove('active');
            
            selectedProject.classList.add('active');
        })
    })
})



// LEERPROCES TAB 

// zorgt dat er een mooie slide komt 

const leerprocesCards = document.querySelectorAll('.leerproces-card');
const leerprocesContainer = document.querySelector('.leerproces-container');
const leerprocesTrack = document.querySelector('.leerproces-track');
const leerprocesTab = document.getElementById('leerproces-tab');
let activeIndex = Math.floor(leerprocesCards.length / 2);

const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

function centerCards() {
    const activeCard = leerprocesCards[activeIndex];

    leerprocesCards.forEach(card => {
        card.classList.remove('is-active');
    })

    activeCard.classList.add('is-active');
    
    const activeCardCenter = activeCard.offsetLeft + activeCard.offsetWidth / 2;
    const containerCenter = leerprocesContainer.offsetWidth / 2;


    const offset = activeCardCenter - containerCenter;

    leerprocesTrack.style.transform = `translateX(${-offset}px)`;
    
}

function nextCard() {
    activeIndex++;
    
    if(activeIndex === leerprocesCards.length) {
        activeIndex = 0;
    }
    
    centerCards();
}

function prevCard() {
    activeIndex--;
    
    if(activeIndex === -1) {
        activeIndex = leerprocesCards.length - 1;
    }
    
    centerCards();
}

prevButton.addEventListener('click', () => {
    prevCard();
});

nextButton.addEventListener('click', () => {
    nextCard();
});

leerprocesTab.addEventListener('shown.bs.tab', () => {
    centerCards();
});


// Contact formulier verzenden naar C# 

const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById('success-message');
const contactIntro = document.getElementById('contact-intro');
const errorMessage = document.getElementById('error-message');

console.log(contactForm);

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    errorMessage.classList.add('d-none');
    
    const formData = new FormData(contactForm);
    const contactData = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };

    fetch('http://localhost:5159/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contactData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Versturen mislukt');
        }
        
        contactForm.classList.add('d-none');
        contactIntro.classList.add('d-none');
        successMessage.classList.remove('d-none');
        
    }) .catch(error => {
    console.error(error);
    errorMessage.classList.remove('d-none');
    });

}) 




