import { navBArVid } from "./componentes/navBar/navBar.js";
import { proyectos } from "./componentes/proyect/proyect.js";
import { section } from "./componentes/navBar/lista.js";
import { formulario } from "./componentes/navBar/formulario.js";
/* COMPONENTES DE LA PÁGINA */
let DOM = document.querySelector("#root");

/* navBar */
let navBAr = document.createElement('section');
navBAr.className = "nav-Bar";
navBAr.appendChild(navBArVid);
navBAr.appendChild(section)
navBAr.appendChild(formulario)
DOM.appendChild(navBAr);

/* Sección de proyectos */
let proyect = document.createElement('section');
proyect.classList = "proyect";
proyect.appendChild(proyectos());
DOM.appendChild(proyect);
