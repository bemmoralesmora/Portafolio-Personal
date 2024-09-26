import { header } from "../header/header.js";
function proyectos (){
    let section = document.createElement('section');
    section.className = 'section-header';
    section.appendChild(header());
    section.appendChild(item())


    return section;
}

export {proyectos};



function item(){
    let div2 = document.createElement('div');
    div2.innerText = "item de lista"
    return div2;
}