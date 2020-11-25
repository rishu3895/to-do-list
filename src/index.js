// import statements
import {navBar} from './modules/navbar';
import {randomQuoteGenerator} from './modules/randomQuoteGenerator';
import {createBody} from './modules/completeBody';
import { myElement } from './modules/elements';
// global scopes
const content=document.querySelector('.content');

// working on navbar
const navDiv=navBar();
const quoteAuthorDiv=randomQuoteGenerator();
const quoteAuthorClassClass=myElement().myDiv('quote-author-class-class','').myDiv
quoteAuthorClassClass.appendChild(quoteAuthorDiv);
navDiv.appendChild(quoteAuthorClassClass);
content.appendChild(navDiv);
console.log(quoteAuthorDiv);

// working on body
const lowerDiv=createBody();
content.appendChild(lowerDiv);
