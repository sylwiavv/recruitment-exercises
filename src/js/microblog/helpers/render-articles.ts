const getArticlesContainer = document.querySelector('.articles');
const numberOfPosts = document.querySelector('#number-of-post');

import { allArticles } from '../articles';
let showNumber = '';

export const renderArticles = (
  updateLikesCallback: (childLikes: number, likesNumberElement: Element, currentArticleIndex: number, articleNumber: number) => void
) => {
  let articleNumber: null | number = null;

  const fragment = document.createDocumentFragment();

  allArticles.forEach(({ title, content, likes, dislikes }, i) => {
    articleNumber++;

    if (articleNumber <= 9) {
      showNumber = `0${articleNumber}`;
    } else {
      showNumber = `${articleNumber}`;
    }

    const createArticle: HTMLElement = document.createElement('article');
    createArticle.classList.add('article');
    const id: string = `${i}`;
    createArticle.setAttribute('for', id);

    createArticle.innerHTML = `
            <div class="wrapper">
              <button data-text="Remove article" class="icon-button remove"></button>
           </div>
            <div class="article__title_wrapper" data-whatever="${showNumber}">
               <h2 class="article__title">${title}</h2>
            </div>
           <p class="article__content">${content}</p>
           <div class="box-likes wrapper">
           <p>Do you like this article? </p>
             <div class="wrapper">
               <div class="button-wrapper">
                   <button class="icon-button thumb-up" id="button-like"></button>
                   <span class="likes-count" id="people-likes">${likes}</span>
               </div>
               <div class="button-wrapper">
                   <button class="icon-button thumb-down" id="button-dislikes"></button>
                   <span class="likes-count" id="people-dislikes">${dislikes}</span>
               </div>
             </div>
           </div>
        `;
    fragment.appendChild(createArticle);
  });
  getArticlesContainer.appendChild(fragment);
  numberOfPosts.innerHTML = String(Number(allArticles.length));
};