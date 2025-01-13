// const nome = "Gustavo"

// console.log(`Hello ${nome}`); 

// //alert("Hello World");

//EXERCIOCIO STRINGS

const nome = prompt('Digite seu nome')

document.body.innerHTML += `Seu nome é: <strong>${nome}</strong><br />`;
document.body.innerHTML += `Seu nome tem <strong>${nome.length}</strong> letras <br /> `
document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome[1]}</strong><br />`
document.body.innerHTML += `Qual o primeiro índice da letra no seu nome? <strong> ${nome.indexOf('a')} </strong><br />`
document.body.innerHTML += `Qual o último índice da letra no seu nome? <strong> ${nome.lastIndexOf('a')} </strong><br />`
document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong>${nome.slice(-3, nome.length)} </strong><br />`
document.body.innerHTML += `As letras do seu nome são: <strong>${nome.split('')} </strong><br />`
document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${nome.toUpperCase()} </strong><br />`
document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${nome.toLowerCase()} </strong><br />`

// EXERCICIO MATH 

const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = ''; 
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}.</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`; 
