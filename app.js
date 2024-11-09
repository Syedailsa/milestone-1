var toggleButtons = [
    { button: document.getElementById('showHidePersonalInfo'), element: document.getElementById('personalInfo') },
    { button: document.getElementById('showHideSummary'), element: document.getElementById('summary') },
    { button: document.getElementById('showHideSkills'), element: document.getElementById('skills') },
    { button: document.getElementById('showHideExperience'), element: document.getElementById('experience') },
    { button: document.getElementById('showHideEdu'), element: document.getElementById('edu') },
];
toggleButtons.forEach(function (_a) {
    var button = _a.button, element = _a.element;
    if (button && element) {
        button.addEventListener('click', function () {
            element.style.display = element.style.display === 'none' ? 'block' : 'none';
        });
    }
});
