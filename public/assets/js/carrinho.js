let item1 = document.querySelector('.item1');
let item2 = document.querySelector('.item2');
let item3 = document.querySelector('.item3');
let quantidade = document.getElementById('valor');
let total = document.getElementById('total');   
let precoSub = document.querySelector('.precoSub');
let precoTotal = document.querySelector('.precoTotal');
let preco = 6.50;
let count = 1;
let quantidade2 = document.getElementById('valor2');
let total2 = document.getElementById('total2');
let preco2 = 21.50;
let count2 = 1;
let quantidade3 = document.getElementById('valor3');
let total3 = document.getElementById('total3');
let preco3 = 60;
let count3 = 1;
let totalidade = preco + preco2 + preco3;

document.querySelector('.remove').addEventListener('click', () => {
    item1.style.display = 'none';
    totalidade = totalidade - preco;
    precoSub.innerHTML = totalidade;
    precoTotal.innerHTML = totalidade;
})
document.querySelector('.remove2').addEventListener('click', () => {
    item2.style.display = 'none';
    totalidade = totalidade - preco2;
    precoSub.innerHTML = totalidade;
    precoTotal.innerHTML = totalidade;
})
document.querySelector('.remove3').addEventListener('click', () => {
    item3.style.display = 'none';
    totalidade = totalidade - preco3;
    precoSub.innerHTML = totalidade;
    precoTotal.innerHTML = totalidade;
})

precoSub.innerHTML = totalidade;
precoTotal.innerHTML = totalidade;
document.querySelector('.menos').addEventListener('click', () => {

    count = count - 1;
    preco = preco - 6.50;
    totalidade = preco + preco2 + preco3;
    quantidade.innerHTML = count;
    total.innerHTML = preco;
    precoSub.innerHTML = totalidade;
    precoTotal.innerHTML = totalidade;
})
document.querySelector('.mais').addEventListener('click', () => {
    count = count + 1;
    preco = preco + 6.50;
    totalidade = preco + preco2 + preco3;
    quantidade.innerHTML = count;
    total.innerHTML = preco;
    precoSub.innerHTML = totalidade;
    precoTotal.innerHTML = totalidade;
})

document.querySelector('.menos2').addEventListener('click', () => {
    count2 = count2 - 1;
    preco2 = preco2 - 21.50;
    totalidade = preco + preco2 + preco3;
    quantidade2.innerHTML = count2;
    total2.innerHTML = preco2;
    precoSub.innerHTML = totalidade;
    precoTotal.innerHTML = totalidade;
})
document.querySelector('.mais2').addEventListener('click', () => {
    count2 = count2 + 1;
    preco2 = preco2 + 21.50;
    totalidade = preco + preco2 + preco3;
    quantidade2.innerHTML = count2;
    total2.innerHTML = preco2;
    precoSub.innerHTML = totalidade;
    precoTotal.innerHTML = totalidade;
})
document.querySelector('.menos3').addEventListener('click', () => {
    count3 = count3 - 1;
    preco3 = preco3 - 60;
    totalidade = preco + preco3 + preco2;
    quantidade3.innerHTML = count3;
    total3.innerHTML = preco3;
    precoSub.innerHTML = totalidade;
    precoTotal.innerHTML = totalidade;
})
document.querySelector('.mais3').addEventListener('click', () => {
    count3 = count3 + 1;
    preco3 = preco3 + 60;
    totalidade = preco + preco3 + preco2;
    quantidade3.innerHTML = count3;
    total3.innerHTML = preco3;
    precoSub.innerHTML = totalidade;
    precoTotal.innerHTML = totalidade;
})