const artificialInput = document.querySelector('.artificial-input');
const body = document.querySelector('.inline_editing');

const currentColor = localStorage.getItem('artificialInput');
artificialInput.innerHTML = currentColor;

body.addEventListener('click', (e) => {
    artificialInput.contentEditable = 'true';

    if (!e.target.matches('.artificial-input') ) {
        artificialInput.contentEditable = 'false';
    }
});

artificialInput.addEventListener('keydown', (e) => {
    if (e.keyCode === 27 || e.keyCode === 13) {
        artificialInput.contentEditable = 'false';
    }
});

artificialInput.addEventListener('input', (e) => {
    if (artificialInput.isContentEditable) {
        const artificialInputValue = artificialInput.textContent;
        saveContent(artificialInputValue);
    }
});

const saveContent = (content) => {
    localStorage.setItem('artificialInput', content);
}