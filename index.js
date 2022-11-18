let container = document.getElementById('container');


function createDiv(){
for (let i = 1; i<=16; i++) {
    let div = document.createElement('div');
    div.className = 'gridHolder';

    for (let j=1 ; j<=16; j++){
        let div2 = document.createElement('div');
        div2.className ='grid';
        div.appendChild(div2);
    }
    container.appendChild(div);
}
}


