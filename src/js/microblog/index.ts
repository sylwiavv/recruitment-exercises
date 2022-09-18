import { renderArticles } from './helpers/render-articles';
import { allArticles } from './data/articles';
import { Article } from './types/types';
import { closeModal } from "./helpers/modal";

const getFormArticle: HTMLFormElement = document.querySelector('#form-wrapper');
const body: HTMLBodyElement = document.querySelector('body');

const addArticle: HTMLButtonElement = document.querySelector('#add-article');

const getTitleInput: HTMLInputElement = document.querySelector('#article-title');
const getContentInput: HTMLInputElement = document.querySelector('#article-content');

let titleValue = '';
let contentValue = '';

const errorMessage: string = 'You need to fill all fields';

export const createErrorMessage = document.createElement('p');
createErrorMessage.classList.add('error-message');
const getAllArticlesWrapper: HTMLElement = document.querySelector('.articles');

const addNewArticle = (article: Article) => {
  getAllArticlesWrapper.innerHTML = '';
  allArticles.push(article);
};

addArticle.addEventListener('click', (e: Event) => {
  createErrorMessage.remove();

  e.preventDefault();

  if (getTitleInput.value && getContentInput.value) {
    addNewArticle(new Article(titleValue, contentValue, 0, 0));
    renderArticles(updateLikes);
    closeModal();
  } else {
    createErrorMessage.innerText = errorMessage;
    getFormArticle.appendChild(createErrorMessage);
  }
});

const updateLikes = (childLikes: number, likesNumberElement: Element, currentArticleIndex: number) => {
  allArticles[currentArticleIndex].likes = childLikes;
  likesNumberElement.innerHTML = String(childLikes);
};

renderArticles(updateLikes);

body.addEventListener('click', (e: Event) => {
  if ((e.target as HTMLButtonElement).matches('#button-like') || (e.target as HTMLButtonElement).matches('#button-dislikes')) {
    let parent = (e.target as HTMLElement).parentNode;
    let currentArticleIndex: number = parseInt((parent.parentNode.parentNode as HTMLElement).getAttribute('for'));
    let likesNumberElement = parent.children[1];
    let childLikes: number = parseInt(parent.children[1].innerHTML);

    if ((e.target as HTMLButtonElement).matches('#button-like') || (e.target as HTMLButtonElement).matches('#button-dislikes')) {
      childLikes++;
      updateLikes(childLikes, likesNumberElement, currentArticleIndex);
    }
  }
});

const allArticlesDom = document.querySelector('.articles');

allArticlesDom.addEventListener('click', (e) => {
  if ((e.target as HTMLButtonElement).matches('.remove')) {
    let parent = (e.target as HTMLElement).parentNode.parentNode;
    let currentArticleIndex: number = parseInt((parent as HTMLElement).getAttribute('for'));
    allArticles.splice(currentArticleIndex, 1);

    getAllArticlesWrapper.innerHTML = '';

    renderArticles(updateLikes);
  }
});