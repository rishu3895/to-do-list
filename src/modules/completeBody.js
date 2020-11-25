import {myElement} from './elements';

var projectNameArray=[];
var listNameArray=[];
 
function createInputFields(){
    const inputField=myElement().myInput('text','Enter the name of the project','input-project-name-class').input1;
    inputField.autofocus=true;
    return inputField;
}
function addToProjects(val){
    console.log(val);
}

function manageProjects(givenDivision){
    const headingPlusDiv=myElement().myDiv('heading-lower-left-icon','').myDiv;
    const headingProject=myElement().myHeading('heading-lower-left','Projects').heading1;
    const plusIcon=myElement().myIcon('fas fa-plus').myIcon;
    headingPlusDiv.appendChild(headingProject);
    headingPlusDiv.appendChild(plusIcon);
    givenDivision.appendChild(headingPlusDiv);
    let isInputAvailable=false;
    const newProject=myElement().myDiv('new-project-div','').myDiv;
    plusIcon.addEventListener('click',()=>{
        if(!isInputAvailable){
            const inputField=createInputFields();
            newProject.appendChild(inputField);
            inputField.addEventListener('keyup',e=>{
                if(e.keyCode==13){
                    addToProjects(inputField.value);
                }
            });
        }
        isInputAvailable=true;
    });
    givenDivision.appendChild(newProject);


}

function createBody(){
    const finalDiv=myElement().myDiv('lower-body','').myDiv;
    const leftFinalDiv=myElement().myDiv('lower-left-body','').myDiv;
    const rightFinalDiv=myElement().myDiv('lower-right-body','').myDiv;
    manageProjects(leftFinalDiv);
    finalDiv.appendChild(leftFinalDiv);
    finalDiv.appendChild(rightFinalDiv);



    return finalDiv;
}
export {createBody};