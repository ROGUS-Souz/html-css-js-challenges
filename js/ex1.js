let botao = document.querySelector('#botao');
let quebrado = false;


botao.style.background="blue";
botao.style.color = "black";

    botao.addEventListener('mouseover',  e => {
        if (!quebrado) {
            botao.style.background = "green";
            botao.style.color = "white";
            }});

    botao.addEventListener('mouseout',  e => {
        if (!quebrado) {
            botao.style.background = "blue";
            botao.style.color = "black";
            }});

botao.addEventListener('click', e => {
    botao.style.background = "red";
    botao.innerHTML = "QUEBRADO";
    quebrado = true;

})

