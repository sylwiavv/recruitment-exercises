import { renderArticles } from './helpers/render-articles.js';
import { allArticles } from './articles.js';
import { Article } from './types/types.js';
const getFormArticle = document.querySelector('#form-wrapper');
const body = document.querySelector('body');
const addArticle = document.querySelector('#add-article');
const getTitleInput = document.querySelector('#article-title');
const getContentInput = document.querySelector('#article-content');
let titleValue = '';
let contentValue = '';
const errorMessage = 'You need to fill all fields';
const createErrorMessage = document.createElement('p');
const getAllArticlesWrapper = document.querySelector('.articles');
const addNewArticle = (article) => {
    getAllArticlesWrapper.innerHTML = '';
    allArticles.push(article);
};
body.addEventListener('click', (e) => {
    if (e.target.matches('#create-article')) {
        getFormArticle.classList.toggle('active');
        if (getFormArticle.classList.contains('active')) {
            body.classList.add('active');
        }
        else {
            body.classList.remove('active');
        }
    }
    else if (e.target.matches('body') || e.target.matches('.close-button')) {
        closeModal();
    }
});
getFormArticle.addEventListener('input', (e) => {
    if (e.target.matches('#article-title')) {
        titleValue = e.target.value;
    }
    if (e.target.matches('#article-content')) {
        contentValue = e.target.value;
    }
    if (createErrorMessage) {
        createErrorMessage.remove();
    }
});
const closeModal = () => {
    getFormArticle.classList.remove('active');
    body.classList.remove('active');
    getTitleInput.value = '';
    getContentInput.value = '';
};
addArticle.addEventListener('click', (e) => {
    e.preventDefault();
    if (getTitleInput.value && getContentInput.value) {
        addNewArticle(new Article(titleValue, contentValue, 0, 0));
        renderArticles(updateLikes);
        closeModal();
    }
    else {
        createErrorMessage.innerText = errorMessage;
        getFormArticle.appendChild(createErrorMessage);
    }
});
const updateLikes = (childLikes, likesNumberElement, currentArticleIndex) => {
    allArticles[currentArticleIndex].likes = childLikes;
    likesNumberElement.innerHTML = String(childLikes);
};
renderArticles(updateLikes);
body.addEventListener('click', (e) => {
    if (e.target.matches('#button-like') || e.target.matches('#button-dislikes')) {
        let parent = e.target.parentNode;
        let currentArticleIndex = parseInt(parent.parentNode.parentNode.getAttribute('for'));
        let likesNumberElement = parent.children[1];
        let childLikes = parseInt(parent.children[1].innerHTML);
        if (e.target.matches('#button-like') || e.target.matches('#button-dislikes')) {
            childLikes++;
            updateLikes(childLikes, likesNumberElement, currentArticleIndex);
        }
    }
});
