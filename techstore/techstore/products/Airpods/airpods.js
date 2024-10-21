
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let button4 = document.getElementById('button4');

let counter = 0;
let text = document.getElementById('text');


function pressButton(){
    alert('added to cart');
    counter += 1;
    text.innerHTML = counter;
}

button1.addEventListener('click', pressButton);
button2.addEventListener('click', pressButton);
button3.addEventListener('click', pressButton);
button4.addEventListener('click', pressButton);

//pend stuff add a counter