import {getElement} from '../Utils.js';


const toggleBtn=getElement('.toggle-btn');
const linksContainerDOM=getElement('.page-links');
const closeBtnDOM=getElement('.close-btn');
const navHeaderDOM=getElement('.nav-header');




toggleBtn.addEventListener('click',()=>{
    linksContainerDOM.classList.add('show-links');
    navHeaderDOM.classList.remove('show-fixed-small');
})

closeBtnDOM.addEventListener('click',()=>{
    linksContainerDOM.classList.remove('show-links')
})

