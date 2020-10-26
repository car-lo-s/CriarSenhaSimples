let quantidade = document.querySelector("#quant");
let alfa1 = document.querySelector("#letra");
let num2 = document.querySelector("#numero");
let esp3 = document.querySelector("#especial");
let big4 = document.querySelector("#alta");
let final = document.querySelector(".resultado");
let recebido = document.querySelector("#envio");
let resposta = new Array();

const letras = () => Math.floor(Math.random() * (122 - 97 + 1)) + 97;
const diferente = () => Math.floor(Math.random() * (64 - 33 + 1)) + 33;
const nume = () => Math.floor(Math.random() * 10);

recebido.onclick = function () {
  if (quantidade.value < 5){
      alert("Senha muito curta, digite um valor maior :)")
  }else{
    final.innerHTML = " ";
    let i = 0;
    let aleatorio;
    while (i < quantidade.value) {
      aleatorio = Math.floor(Math.random() * 4 + 1);
  
      if (aleatorio == 1 && alfa1.checked) {
        resposta[i] = String.fromCharCode(letras());
        final.innerHTML += resposta[i];
      } else if (aleatorio == 2 && num2.checked) {
        resposta[i] = nume();
        final.innerHTML += resposta[i];
      } else if (aleatorio == 3 && esp3.checked) {
        resposta[i] = String.fromCharCode(diferente());
        final.innerHTML += resposta[i];
      } else if (aleatorio == 4 && big4.checked) {
        resposta[i] = String.fromCharCode(letras());
        final.innerHTML += resposta[i].toUpperCase();
      } else {
        resposta[i] = String.fromCharCode(letras());
        final.innerHTML += resposta[i];
      }
  
      i++;
    }
  }
};
