const getArticlesContainer = document.querySelector('.articles');
const numberOfPosts = document.querySelector('#number-of-post');

import {allArticles} from "../articles.js"
let showNumber = '';
let zero = '0';

// const getAllArticlesWrapper: HTMLElement = document.querySelector('.articles');

export const renderArticles = (
    updateLikesCallback: (
        childLikes: number,
        likesNumberElement: Element,
        currentArticleIndex: number,
        articleNumber: number
    ) => void) => {
    let articleNumber = null;

    const fragment = document.createDocumentFragment();

    allArticles.forEach(({title, content, likes, dislikes}, i) => {
        articleNumber++;

        if (articleNumber <= 9) {
            console.log(articleNumber);
            showNumber = `${zero}${articleNumber}`
        } else {
            showNumber = `${articleNumber}`
        }

        const createArticle: HTMLElement = document.createElement('article');
        createArticle.classList.add('article');
        const id: string = `${i}`;
        createArticle.setAttribute('for', id)

        createArticle.innerHTML = `
            <div class="article__title_wrapper" data-whatever="${showNumber}">
               <h2 class="article__title">${title}</h2>
            </div>
           <p class="article__content">${content}</p>
           <div class="box-likes wrapper">
           <p>Do you like this article? </p>
               <div class="button-wrapper">
                   <button class="thumb up" id="button-like"></button>
                   <span class="likes-count" id="people-likes">${likes}</span>
               </div>
               <div class="button-wrapper">
                   <button class="thumb down" id="button-dislikes"></button>
                   <span class="likes-count" id="people-dislikes">${dislikes}</span>
               </div>
           </div>
            <div class="wrapper">
              <button class="remove">Remove article</button>
           </div>
        `;
        fragment.appendChild(createArticle);
    });
    getArticlesContainer.appendChild(fragment);
    numberOfPosts.innerHTML = String(Number(allArticles.length));
}
