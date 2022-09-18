import { renderArticles } from './helpers/render-articles';
import { allArticles } from './articles';
import { Article } from './types/types';

const getFormArticle: HTMLFormElement = document.querySelector('#form-wrapper');
const body: HTMLBodyElement = document.querySelector('body');

const addArticle: HTMLButtonElement = document.querySelector('#add-article');

const getTitleInput: HTMLInputElement = document.querySelector('#article-title');
const getContentInput: HTMLInputElement = document.querySelector('#article-content');

let titleValue = '';
let contentValue = '';

const errorMessage: string = 'You need to fill all fields';

const createErrorMessage = document.createElement('p');
const getAllArticlesWrapper: HTMLElement = document.querySelector('.articles');

const addNewArticle = (article: Article) => {
  getAllArticlesWrapper.innerHTML = '';
  allArticles.push(article);
};

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

getFormArticle.addEventListener('input', (e: Event) => {
  if ((e.target as HTMLInputElement).matches('#article-title')) {
    titleValue = (e.target as HTMLTextAreaElement).value;
  }

  if ((e.target as HTMLInputElement).matches('#article-content')) {
    contentValue = (e.target as HTMLTextAreaElement).value;
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

addArticle.addEventListener('click', (e: Event) => {
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

  //remove
  // if ((e.target as HTMLButtonElement).matches('.remove')) {
  //   let parent = (e.target as HTMLElement).parentNode;
  //   let currentArticleIndex: number = parseInt((parent.parentNode.parentNode as HTMLElement).getAttribute('for'));
  //   console.log(parent);
  // }
});

const allArticlesDom = document.querySelector('.articles');

allArticlesDom.addEventListener('click', (e) => {
  if ((e.target as HTMLButtonElement).matches('.remove')) {
    let parent = (e.target as HTMLElement).parentNode.parentNode;
    let currentArticleIndex: number = parseInt((parent as HTMLElement).getAttribute('for'));
    console.log(allArticles);
    allArticles.splice(currentArticleIndex, 1);
    console.log(allArticles);

    getAllArticlesWrapper.innerHTML = '';

    renderArticles(updateLikes);
  }
});