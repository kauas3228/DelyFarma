// Pegando dados da página

let formSingIn = document.querySelector('#singIn');
let formSingUp = document.querySelector('#singUp');
let btnColor = document.querySelector('.color');
let login = document.querySelector('#botaoLogin');
let registro = document.querySelector('#botaoRegistre-se');
let opcoes = document.querySelector('.buttonsForm');
let container = document.querySelector('.container');
let img = document.querySelector('.imagem')

// Função de troca do botão login

document.querySelector('#botaoLogin')
    .addEventListener('click', () => {
        formSingIn.style.left = '25px'  
        formSingUp.style.left = '450px'
        btnColor.style.left = '0px'
        login.style.color = 'white'
        registro.style.color = '#3a95b5'
        opcoes.style.top = '0px'
        container.style.height = '25rem'
        document.title = 'Tela | Login'
        img.style.top = '0rem'
    })

// Função click botão de registro

document.querySelector('#botaoRegistre-se')
    .addEventListener('click', () => {
        opcoes.style.top = '-40px'
        formSingIn.style.left = '-450px'    
        formSingUp.style.left = '25px'
        formSingUp.style.top = '6rem'
        btnColor.style.left = '112.5px'
        login.style.color = '#3a95b5'
        registro.style.color = 'white'
        opcoes.style.top = '0rem'
        document.title = 'Tela | Registro'
        container.style.height = '35rem'
        img.style.top = '0rem'
    })

const pass_fild = document.querySelector('.senhaA');
const mostrarBtn = document.querySelector('.mostrarSenha');

mostrarBtn.addEventListener('click', () => {
    if(pass_fild.type === 'password'){
        pass_fild.type = 'text';
        pass_fild.style.color = '#3a95b5';
        mostrarBtn.querySelector('.bi').classList.add('bi-eye-slash');
        mostrarBtn.querySelector('.bi').classList.remove('bi-eye');
    }
    else{
        pass_fild
        pass_fild.type = 'password';
        pass_fild.style.color = '#000';
        mostrarBtn.querySelector('.bi').classList.add('bi-eye');
        mostrarBtn.querySelector('.bi').classList.remove('bi-eye-slash');
    }
});
