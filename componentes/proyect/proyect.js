function proyectos (){
    let section = document.createElement('section');
    section.className = 'section-header';
    section.appendChild(header());
    section.appendChild(item())


    return section;
}

export {proyectos};

function header(){
    let div = document.createElement('div');
    div.className = 'header';

    let h2 = document.createElement('h2');
    h2.innerHTML = "proyectos";
    div.appendChild(h2);

    let btn = document.createElement('div');
    btn.innerHTML= "github";
    div.appendChild(btn);

    return div;
}

function item(){
    let div2 = document.createElement('div');
    div2.innerText = "item de lista"
    return div2;
}