const toggleButtons = [
    { button: document.getElementById('showHidePersonalInfo') as HTMLButtonElement, element: document.getElementById('personalInfo') as HTMLElement },
    { button: document.getElementById('showHideSummary') as HTMLButtonElement, element: document.getElementById('summary') as HTMLElement },
    { button: document.getElementById('showHideSkills') as HTMLButtonElement, element: document.getElementById('skills') as HTMLElement },
    { button: document.getElementById('showHideExperience') as HTMLButtonElement, element: document.getElementById('experience') as HTMLElement },
    { button: document.getElementById('showHideEdu') as HTMLButtonElement, element: document.getElementById('edu') as HTMLElement },
]

toggleButtons.forEach(({ button, element }) => {
    if (button && element) {
        button.addEventListener('click', () => {
            element.style.display = element.style.display === 'none' ? 'block' : 'none';
        });
    }
})
