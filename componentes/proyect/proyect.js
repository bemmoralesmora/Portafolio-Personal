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
        div3.appendChild(item(proyecto.nombre, proyecto.descripcion, proyecto.web, ));
    });
    return div3;
}

function item(nombre, descripcion, githubpage, github, stacks) {
    let div2 = document.createElement('div');

    let a = document.createElement('a');
    a.className = "link-githubpage"
    a.href = "https://bemmoralesmora.github.io/Proyecto-formulario/";
    a.innerText = "PF-githubpage";
    div2.appendChild(a);

    let stacks1 = document.createElement('div');
    stacks1.innerText = "js, css, html";
    div2.appendChild(stacks1);

    let btnDiv = document.createElement('a');
    btnDiv.className = "btn-github";
    btnDiv.href = "https://github.com/bemmoralesmora/Proyecto-formulario";
    btnDiv.innerText = "github"
    div2.appendChild(btnDiv);


    div2.className = "div-item"

    return div2;
}
