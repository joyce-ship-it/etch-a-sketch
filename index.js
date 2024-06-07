const button = document.querySelector('button');

function changeDimensions() {
    let dimension = prompt("Enter a dimension lesser than or equal to 100");
    if (dimension > 100) {
        dimension = prompt("Try again with a number lesser than or equal to 100");
    }
    else {
        etchASketch(dimension);
    }
}
button.addEventListener('click', changeDimensions);

function randomColor(){
    return Math.floor(Math.random() * 256);
}
function darken(event){
    if(event.target.style.opacity === ""){
        event.target.style.opacity = "1";
        console.log(event.target.style.opacity);
    }
    else{
        let opacity = +event.target.style.opacity;
        opacity -= 0.1;
        event.target.style.opacity = opacity.toString();
    }
}

function etchASketch(dimension) {
    const numOfDivs = dimension * dimension;
    const container = document.querySelector('.container');
    while(container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }
    for (let i = 0; i < numOfDivs; i++) {
        const div = document.createElement('div');
        div.style.backgroundColor = 'white';
        // console.log(i + 1);
        div.style.width = `${(1400 / dimension)}px`;
        container.appendChild(div);
    }

    container.addEventListener('mouseover', (e) => {

        if (e.target.className != 'container') {
            e.target.style.backgroundColor =`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
            darken(e);
        }

    })

}
etchASketch(16);
