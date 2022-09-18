const getFormArticle: HTMLFormElement = document.querySelector('#form-wrapper');
const body: HTMLBodyElement = document.querySelector('body');
const getTitleInput: HTMLInputElement = document.querySelector('#article-title');
const getContentInput: HTMLInputElement = document.querySelector('#article-content');

body.addEventListener('click', (e: Event) => {
    if ((e.target as HTMLButtonElement).matches('#create-article')) {
        getFormArticle.classList.toggle('active');

        if (getFormArticle.classList.contains('active')) {
            body.classList.add('active');
        } else {
            body.classList.remove('active');
        }
    } else if ((e.target as Element).matches('body') || (e.target as Element).matches('.close-button')) {
        closeModal();
    }
});

export const closeModal = () => {
    getFormArticle.classList.remove('active');
    body.classList.remove('active');

    getTitleInput.value = '';
    getContentInput.value = '';

};