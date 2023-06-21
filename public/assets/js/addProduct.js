const stars = document.querySelectorAll('.start')

value = 1
document.querySelector('.btMais').addEventListener('click', () => {
    value ++ ;
    document.querySelector('.value').innerHTML = value;  
})
document.querySelector('.btMenos').addEventListener('click', () => {
    value -- ;
    document.querySelector('.value').innerHTML = value;  
})

function starsHover(estrela){
     var url = window.location;
    url = url.toString()
    url = url.split("index.html");
    url = url[0];
   
    var s1 = document.getElementById("s1").src;
    var s2 = document.getElementById("s2").src;
    var s3 = document.getElementById("s3").src;
    var s4 = document.getElementById("s4").src;
    var s5 = document.getElementById("s5").src;
    var avaliacao = 0;
   
   if (estrela == 5){
    document.getElementById("s1").style.fill = 'yellow';
    document.getElementById("s2").style.fill = 'yellow';
    document.getElementById("s3").style.fill = 'yellow';
    document.getElementById("s4").style.fill = 'yellow';
    document.getElementById("s5").style.fill = 'yellow';
    avaliacao = 5;
    alert('Recebemos sua avaliação, muito obrigado!!');
    }
    
    //ESTRELA 4
   if (estrela == 4){
    document.getElementById("s1").style.fill = 'yellow';
    document.getElementById("s2").style.fill = 'yellow';
    document.getElementById("s3").style.fill = 'yellow';
    document.getElementById("s4").style.fill = 'yellow';
    document.getElementById("s5").style.fill = 'white';
    avaliacao = 4;
    alert('Recebemos sua avaliação, muito obrigado!!')
    }
   
   //ESTRELA 3
   if (estrela == 3){
    document.getElementById("s1").style.fill = 'yellow';
    document.getElementById("s2").style.fill = 'yellow';
    document.getElementById("s3").style.fill = 'yellow';
    document.getElementById("s4").style.fill = 'white';
    document.getElementById("s5").style.fill = 'white';
    avaliacao = 3;
    alert('Recebemos sua avaliação, muito obrigado!!')
    }
    
   //ESTRELA 2
   if (estrela == 2){
    document.getElementById("s1").style.fill = 'yellow';
    document.getElementById("s2").style.fill = 'yellow';
    document.getElementById("s3").style.fill = 'white';
    document.getElementById("s4").style.fill = 'white';
    document.getElementById("s5").style.fill = 'white';
    avaliacao = 2;
    alert('Recebemos sua avaliação, muito obrigado!!')
    }
    
    //ESTRELA 1
   if (estrela == 1){ 
    document.getElementById("s1").style.fill = 'yellow';
    document.getElementById("s2").style.fill = 'white';
    document.getElementById("s3").style.fill = 'white';
    document.getElementById("s4").style.fill = 'white';
    document.getElementById("s5").style.fill = 'white';
    avaliacao = 1;
    alert('Recebemos sua avaliação, muito obrigado!!')
    }
   
}
document.querySelector('.BT').addEventListener('click', () => {
    alert('Item adicionado ao seu carrinho');
})