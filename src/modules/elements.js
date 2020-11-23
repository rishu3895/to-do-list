const myElement = () => {
    const myHeading = (classHtml,innerHtml) => {
        const heading1 = document.createElement('h3');
        heading1.innerHTML = innerHtml;
        heading1.classList = classHtml;
        return { heading1 };
    }
    const myInput = (inputType, inputPlaceholder, inputClass) => {
        const input1=document.createElement('input');
        input1.type=inputType;
        input1.placeholder=inputPlaceholder;
        input1.classList=inputClass;
        return {input1};
    }
    const myButton = (buttonClass, buttonHtml) => {
        const myButton = document.createElement('button');
        myButton.innerHTML=buttonHtml;
        myButton.classList=buttonClass;
        return {myButton};
    }
    const myDiv = (divClass, divHtml) => {
        const myDiv=document.createElement('div');
        myDiv.classList=divClass;
        myDiv.innerHTML=divHtml;
        return {myDiv};
    }
    

    return {myHeading, myInput, myButton, myDiv};
};
export {myElement};