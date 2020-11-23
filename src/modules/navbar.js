import {myElement} from './elements';

function navBar ()  {
    const navDiv=myElement().myDiv('nav-bar-class','').myDiv;
    if(!localStorage.getItem('name')){
        const name=prompt('Enter your name');
        localStorage.setItem('name',name);
        console.log('phle se naam nahi hai');
        navDiv.innerHTML=`welcome ${name}`;
    }
    else{
        navDiv.innerHTML=`Welcome ${localStorage.getItem('name')}`;
    }
    return navDiv;
}
export {navBar};