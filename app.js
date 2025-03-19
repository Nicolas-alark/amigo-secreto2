// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos= [];
function agregarAmigo(){
    //console.log(amigos.length[i]);
    let nombre = document.getElementById('amigo').value;
        
        if(nombre === ''){
            alert("Ingresa un Nombre valido");
            return;
           }else if (/[^A-Za-zÁáÉéÍíÓóÚúÑñ\s]/.test(nombre)) {
            // Si el nombre contiene caracteres no permitidos (números o caracteres especiales)
            alert("Solo se permiten letras y espacios. No se pueden ingresar números.");
            return;
           }else {
            amigos.push(nombre);
            mostrarAmigos();
            }
         
        

  document.getElementById('amigo').value="";
  
}

function mostrarAmigos(){
    let listaAmigos=document.getElementById('listaAmigos');
    listaAmigos.innerHTML="";

    for(let i=0;i < amigos.length;i++){
        let li = document.createElement('li');
        li.textContent=amigos[i];
        listaAmigos.appendChild(li);
    }
    

}

function sortearAmigo(){
    if(amigos.length===0){
        alert("No hay amigos para sortear");
    }
        let sorteo= Math.floor(Math.random()*amigos.length);
        let amigoSorteado = amigos[sorteo];

        let resultado=document.getElementById('resultado');
        resultado.innerHTML=`El amigo secreto sorteado es: <strong>${amigoSorteado}</strong>`;
    
}