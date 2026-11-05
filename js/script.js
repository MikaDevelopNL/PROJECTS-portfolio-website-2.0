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
