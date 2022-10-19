const inlineEditingWrapper = document.querySelector('#inline_editing-wrapper');
const artificialInput = document.querySelector('.artificial-input');
const body = document.querySelector('.inline_editing');

body.addEventListener('click', (e) => {
    artificialInput.contentEditable = 'true';

    if (!e.target.matches('.artificial-input') ) {
        artificialInput.contentEditable = 'false';
    }
})

artificialInput.addEventListener('keydown', (e) => {
    if (e.keyCode === 27) {
        artificialInput.contentEditable = 'false';
    }
})

artificialInput.addEventListener('input', (e) => {
    if (artificialInput.isContentEditable) {
        const test = artificialInput.textContent;
    }
})