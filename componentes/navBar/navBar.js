
let navBArVid = document.createElement(`div`);
navBArVid.className= "nav-Bar-div";

let imgLOgo = document.createElement('img');
imgLOgo.src = "https://static.vecteezy.com/system/resources/thumbnails/024/553/676/small_2x/skull-wearing-crown-logo-skull-king-sticker-pastel-cute-colors-generative-ai-png.png";
imgLOgo.className ="img-logo"
navBArVid.appendChild(imgLOgo);

let h2 = document.createElement('h2');
h2.innerText= "Brian morales";
navBArVid.appendChild(h2);


export{ navBArVid }
