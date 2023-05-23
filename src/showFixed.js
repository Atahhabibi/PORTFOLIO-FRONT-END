import { getElement } from "../Utils.js";
const navWrapperDOM=getElement('.nav-wrapper');
const navHeaderDOM=getElement('.nav-header');


window.addEventListener('scroll',()=>{
    if(scrollY>=100){
        navWrapperDOM.classList.add('show-fixed');
        navHeaderDOM.classList.add('show-fixed-small');
    }

    if(scrollY===0){
        navWrapperDOM.classList.remove('show-fixed');
        navHeaderDOM.classList.remove('show-fixed-small');
    }
})