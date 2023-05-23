import {getElement} from '../Utils.js';
import { projects } from '../src/projectsData.js';
import { displayProjects } from '../src/displayProjects.js';
import './toggleSidebar.js'
import './showFixed.js'


const projectBtnContainer=getElement('.project-btn-container');
const smallJavaBtn=getElement('.small-btn');
const largeJavaBtn=getElement('.large-btn');
const reactBtn=getElement('.react-btn');
const largeScaleDOM=getElement('.large-scale')
const miniScaleDOM=getElement('.mini-scale')
const mediumScaleDOM=getElement('.medium-scale');



window.addEventListener('DOMContentLoaded',()=>{
    displayProjects(projects[0].largeScale,largeScaleDOM);
    displayProjects(projects[0].miniScale,miniScaleDOM);
    displayProjects(projects[0].mediumScale,mediumScaleDOM);
    
})




projectBtnContainer.addEventListener('click',(e)=>{

    const value=e.target.dataset.value;

    if(value==='react'){
      reactBtn.classList.add('show-active');
      smallJavaBtn.classList.remove('show-active')
      largeJavaBtn.classList.remove('show-active')
     
      

      const reactObject=projects.find((project)=>project.name==='react');
      const {largeScale,miniScale,mediumScale}=reactObject;

      

       displayProjects(largeScale,largeScaleDOM);
       displayProjects(miniScale,miniScaleDOM);
       displayProjects(mediumScale,mediumScaleDOM);
       



    }

    if(value==='javascript' || value==='javascript-2'){

       smallJavaBtn.classList.add('show-active');
       largeJavaBtn.classList.add('show-active');
       reactBtn.classList.remove('show-active')
      
      
      

      const javascriptObject=projects.find((project)=>project.name==='javascript');
     
      const {largeScale,miniScale,mediumScale}=javascriptObject;

       displayProjects(largeScale,largeScaleDOM);
       displayProjects(miniScale,miniScaleDOM);
       displayProjects(mediumScale,mediumScaleDOM);

    }



})


