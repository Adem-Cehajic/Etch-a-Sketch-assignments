let r = document.querySelector('.canvas');
let inp = 16;
function makecanvas(size) {
    while (r.hasChildNodes()) {
        r.removeChild(r.firstChild);
    }
    for (let i = 0; i < size; i++) {
        let k = document.createElement('div');
        for(let i = 0; i < size; i++) {
            let v = document.createElement('div');
            k.appendChild(v);
    }
    r.appendChild(k);
    }
    g = document.querySelectorAll('.canvas > div > div');
    g.forEach( (div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = "black";
        })
        
    });
}
makecanvas(inp);
const but = document.querySelector('button');
but.addEventListener('click', () => {
    inp = parseInt(window.prompt('Select canvas size'));
    makecanvas(inp);
})
const res = document.querySelectorAll('button')[1];
res.addEventListener('click', () => {
    makecanvas(inp);
})
