import {myElement} from './elements'
function randomQuoteGenerator(){
    const website="https://api.quotable.io/random";
    const quoteDiv=myElement().myDiv('quote-author-class','').myDiv;
    const quote=myElement().myDiv('quote-class','').myDiv;
    const author=myElement().myDiv('author-class','').myDiv;
    quoteDiv.appendChild(quote);
    quoteDiv.appendChild(author);
    async function generateQuote(){

        try {
            const response=await fetch(website);
            if(!response.ok){
                throw(response.statusText)
            }
            const json=await response.json();
            quote.innerHTML=json.content;
            author.innerHTML=`-${json.author}`;
            
        } catch (err) {
            console.log(err);
            alert('sorry could not find out a new quote hope you are doing well');
        }
        return quoteDiv;
    }
    generateQuote();
    return quoteDiv;
}
export {randomQuoteGenerator};