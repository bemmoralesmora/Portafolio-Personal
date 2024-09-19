import { navBArVid } from "./componentes/navBar/navBar.js";
/* COMPONENTES DE LA PÁGINA */
let DOM = document.querySelector("#root");

/* navBar */

let navBAr = document.createElement('section');
navBAr.className = "nav-Bar"
navBAr.appendChild(navBArVid);
DOM.appendChild(navBAr);

let proyect = document.createElement('section');
proyect.classList = "proyect";
proyect.innerHTML = "ola k ace me yamo proyect"
DOM.appendChild(proyect);