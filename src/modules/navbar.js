import {myElement} from './elements';

function navBar ()  {
    const navDiv=myElement().myDiv('nav-bar-class','').myDiv;
    const navHeading=myElement().myHeading('nav-heading-class','').heading1;
    navDiv.appendChild(navHeading);
    if(!localStorage.getItem('name')){
        const name=prompt('Enter your name');
        localStorage.setItem('name',name);
        console.log('phle se naam nahi hai');
        navHeading.innerHTML=`welcome ${name}`;
    }
    else{
        navHeading.innerHTML=`Welcome ${localStorage.getItem('name')}`;
    }
    return navDiv;
}
export {navBar};