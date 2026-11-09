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
const activeCard = document.querySelector('.leerproces-card-main');
const leerprocesContainer = document.querySelector('.leerproces-container');
const leerprocesTrack = document.querySelector('.leerproces-track');
const leerprocesTab = document.getElementById('leerproces-tab');


leerprocesTab.addEventListener('shown.bs.tab', () => {
    console.log('Leerproces-tab is zichtbaar');
})

const containerRect = leerprocesContainer.getBoundingClientRect();
const activeCardRect = activeCard.getBoundingClientRect();

const containerCenter = containerRect.left + containerRect.width / 2;
const activeCardCenter = activeCardRect.left + activeCardRect.width / 2;


const offset = activeCardCenter - containerCenter;


leerprocesTrack.style.transform = `translateX(${-offset}px)`;


