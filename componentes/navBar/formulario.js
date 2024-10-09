let formulario = document.createElement('section');
formulario.className = "formulario"

let titulo = document.createElement('h1')
titulo.className = "titulo"
titulo.innerText = "contactar"
formulario.appendChild(titulo);

let cuadro1 = document.createElement('div')
cuadro1.className = "cuadro1"
formulario.appendChild(cuadro1)

let cuadro2 = document.createElement('div')
cuadro2.className = "cuadro2"
formulario.appendChild(cuadro2)

let cuadro3 = document.createElement('div')
cuadro3.className = "cuadro3"
formulario.appendChild(cuadro3)

let cuadro4 = document.createElement('div')
cuadro4.innerText = "enviar";
cuadro4.className = "cuadro4"
formulario.appendChild(cuadro4)

export {formulario}