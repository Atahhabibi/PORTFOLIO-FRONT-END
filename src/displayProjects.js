

const displayProjects=(projects,container)=>{

   container.innerHTML=projects.map((project)=>{

    const {projectName,imgLink,githubLink,info,liveLink}=project;


    return `    <article class="project-work">

    <div class="project-img-container">
        <img src="${imgLink}" alt="project-1" class="img project-page-img">
        <a href="${liveLink}" target="_blank"><img src="../svgs/icons8-live-64 (3).png" alt="live-icon" class="live-icon"></a>
    </div>

    <div class="project-information">

        <h4 class="project-name">${projectName}</h4>
        <p class="project-info">${info}</p>

        <div class="project-footer">
            <a href="${githubLink} " target="_blank"><button class="project-icon"><i class="fa-brands fa-github"></i></button></a>
            <a href="${githubLink} " target="_blank"><button class="source-code">source code</button></a>
        </div>


    </div>



</article>`


   }).join(" ");


}


export {displayProjects}