import { header } from "../header/header.js";
import { dataproyectos } from "../../data/data.js";

function proyectos() {
    let section = document.createElement('section');
    section.className = 'section-header';
    section.appendChild(header());
    section.appendChild(listaProyectos());

    return section;
}

export { proyectos };

function listaProyectos() { 
    let div3 = document.createElement('div');
    div3.className = "lista-proyectos";

    dataproyectos.forEach((proyecto) => {
        div3.appendChild(item(proyecto.nombre, proyecto.desarrolladores, proyecto.fecha, proyecto.github, proyecto.stacks, proyecto.descargas ));
    });
    return div3;
}

function item(nombre, desarrolladores, fecha, github, stacks, descargas) {
    let div2 = document.createElement('div');

    let a = document.createElement('a');
    a.className = "link-githubpage";
    a.href = github; 
    a.innerText = nombre; 
    div2.appendChild(a);

    let stacks1 = document.createElement('div');
    stacks1.innerText = stacks.join(', ');  
    div2.appendChild(stacks1);

    let personas = document.createElement('div');
    personas.innerText = desarrolladores;  
    div2.appendChild(personas);

    let fecha1 = document.createElement('div');
    fecha1.innerText = fecha; 
    div2.appendChild(fecha1);

    let btnDiv = document.createElement('a');
    btnDiv.className = "btn-github";
    btnDiv.href = github;  
    btnDiv.innerText = "GitHub";
    div2.appendChild(btnDiv);

    let btndescargar = document.createElement("a");
    btndescargar.className = "descargar";
    btndescargar.href = descargas;  
    btndescargar.innerText = "Descargar";
    div2.appendChild(btndescargar);

    div2.className = "div-item";

    return div2;
}
