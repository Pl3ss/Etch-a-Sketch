let button = document.getElementById('button');

let x = 0;

function gridNumber() {
    let y = prompt('Insert number of grids: ', '');
    x = Number(y);

    if (x <= 100) {
        createDiv();
    } else {
        alert('Error! Maximum input number is 100');
    }
}


let container = document.getElementById('container');


function createDiv(){
for (let i = 1; i<=x; i++) {
    let div = document.createElement('div');
    div.className = 'gridHolder';

    for (let j=1 ; j<=x; j++){
        let div2 = document.createElement('div');
        div2.className ='grid';
        div.appendChild(div2);
    }
    container.appendChild(div);
}
}




