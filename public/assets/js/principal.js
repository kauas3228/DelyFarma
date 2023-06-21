// Menus de hamburguer

const menu = document.querySelector('.hamburguer');
const itens = document.querySelector('.itens');
const itensCategoria = document.querySelector('.itens-categoria');
const menuCat = document.querySelector('.hamburguerCat');

menu.addEventListener("click", () => {
    menu.classList.toggle('active');
    itens.classList.toggle('active');
})
menuCat.addEventListener("click", () => {
    menuCat.classList.toggle('active');
    itensCategoria.classList.toggle('active');
})


// Rodando Carrousel

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 5000)

function nextImage(){
    count++;
    if(count>3){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}

let todasCategorias = document.querySelector('.itens-compras');
let ofertas = document.querySelector('.ofertas');
let produtosInfantis = document.querySelector('.produtosInfantis');
let higiene = document.querySelector('.produtosHigiene');
let saude = document.querySelector('.produtosSaude');
let whey = document.querySelector('.produtoswhey');
let vitaminas = document.querySelector('.produtosVitaminas');
let skinCare = document.querySelector('.produtosSkin');
let perfumaria = document.querySelector('.produtosPerfume');

document.getElementById('todasCategorias').addEventListener('click', () => {
    todasCategorias.style.display = 'flex';
    ofertas.style.display = 'none';
    produtosInfantis.style.display = 'none';
    higiene.style.display = 'none';
    saude.style.display = 'none';
    whey.style.display = 'none';
    vitaminas.style.display = 'none';
    skinCare.style.display = 'none';
    perfumaria.style.display = 'none';
    menuCat.classList.toggle('active');
    itensCategoria.classList.toggle('active');
})
document.getElementById('ofertas').addEventListener('click', () => {
    todasCategorias.style.display = 'none';
    ofertas.style.display = 'flex';
    produtosInfantis.style.display = 'none';
    higiene.style.display = 'none';
    saude.style.display = 'none';
    whey.style.display = 'none';
    vitaminas.style.display = 'none';
    skinCare.style.display = 'none';
    perfumaria.style.display = 'none';
    menuCat.classList.toggle('active');
    itensCategoria.classList.toggle('active');
})
document.getElementById('produtosInfantis').addEventListener('click', () =>{
    todasCategorias.style.display = 'none';
    ofertas.style.display = 'none';
    produtosInfantis.style.display = 'flex';
    higiene.style.display = 'none';
    saude.style.display = 'none';
    whey.style.display = 'none';
    vitaminas.style.display = 'none';
    skinCare.style.display = 'none';
    perfumaria.style.display = 'none'; 
    menuCat.classList.toggle('active');
    itensCategoria.classList.toggle('active');
})
document.getElementById('higiene').addEventListener('click', () =>{
    todasCategorias.style.display = 'none';
    ofertas.style.display = 'none';
    produtosInfantis.style.display = 'none';
    higiene.style.display = 'flex';
    saude.style.display = 'none';
    whey.style.display = 'none';
    vitaminas.style.display = 'none';
    skinCare.style.display = 'none';
    perfumaria.style.display = 'none'; 
    menuCat.classList.toggle('active');
    itensCategoria.classList.toggle('active');
})
document.getElementById('medicamentos').addEventListener('click', () =>{
    todasCategorias.style.display = 'none';
    ofertas.style.display = 'none';
    produtosInfantis.style.display = 'none';
    higiene.style.display = 'none';
    saude.style.display = 'flex';
    whey.style.display = 'none';
    vitaminas.style.display = 'none';
    skinCare.style.display = 'none';
    perfumaria.style.display = 'none'; 
    menuCat.classList.toggle('active');
    itensCategoria.classList.toggle('active');
})
document.getElementById('produtoswhey').addEventListener('click', () =>{
    todasCategorias.style.display = 'none';
    ofertas.style.display = 'none';
    produtosInfantis.style.display = 'none';
    higiene.style.display = 'none';
    saude.style.display = 'none';
    whey.style.display = 'flex';
    vitaminas.style.display = 'none';
    skinCare.style.display = 'none';
    perfumaria.style.display = 'none'; 
    menuCat.classList.toggle('active');
    itensCategoria.classList.toggle('active');
})
document.getElementById('vitaminas').addEventListener('click', () =>{
    todasCategorias.style.display = 'none';
    ofertas.style.display = 'none';
    produtosInfantis.style.display = 'none';
    higiene.style.display = 'none';
    saude.style.display = 'none';
    whey.style.display = 'none';
    vitaminas.style.display = 'flex';
    skinCare.style.display = 'none';
    perfumaria.style.display = 'none'; 
    menuCat.classList.toggle('active');
    itensCategoria.classList.toggle('active');
})
document.getElementById('skinCare').addEventListener('click', () =>{
    todasCategorias.style.display = 'none';
    ofertas.style.display = 'none';
    produtosInfantis.style.display = 'none';
    higiene.style.display = 'none';
    saude.style.display = 'none';
    whey.style.display = 'none';
    vitaminas.style.display = 'none';
    skinCare.style.display = 'flex';
    perfumaria.style.display = 'none'; 
    menuCat.classList.toggle('active');
    itensCategoria.classList.toggle('active');
})
document.getElementById('perfumaria').addEventListener('click', () =>{
    todasCategorias.style.display = 'none';
    ofertas.style.display = 'none';
    produtosInfantis.style.display = 'none';
    higiene.style.display = 'none';
    saude.style.display = 'none';
    whey.style.display = 'none';
    vitaminas.style.display = 'none';
    skinCare.style.display = 'none';
    perfumaria.style.display = 'flex'; 
    menuCat.classList.toggle('active');
    itensCategoria.classList.toggle('active');
})

let qtdItens = 0;

function adicionarItens(){
    qtdItens += 1;
    document.querySelector('.noti').setAttribute('style', `--qtd-itens: "${String(qtdItens)}";`);
}