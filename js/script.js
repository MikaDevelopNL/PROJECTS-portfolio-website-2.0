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




