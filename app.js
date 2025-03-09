// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = 0;
let amigoSecreto = " ";
let nombreAmigo = " ";
let amigorepetido = 1;
let listaAmigosSecretos = [];

function agregarAmigo() {
    nombreAmigo = document.getElementById('amigo').value; 
    //comprobar si ha ingresado algun nombre
    if (!nombreAmigo.trim()) {
        alert("Por favor, inserte un nombre.");
        return;
    }
    if (listaAmigosSecretos.includes(nombreAmigo)) {
            //Agrega un número al final si se repite el nombre de un amigo
            listaAmigosSecretos.push(nombreAmigo+amigorepetido);
            amigorepetido++;
        } else {
            // Agregamos el nombre a la lista
            listaAmigosSecretos.push(nombreAmigo);       
        }
        // Limpiamos el input para que el usuario pueda ingresar otro nombre
        document.getElementById('amigo').value = "";
        // Mostramos la lista actualizada en la consola
        console.log("Lista de amigos: ", listaAmigosSecretos);
        if (listaAmigosSecretos.length >= 3) {
            document.getElementById("sorteo").removeAttribute('disabled'); 
        }
    actualizarlistaamigos();
}
function actualizarlistaamigos() {
    // 1. Obtener el elemento de la lista
    const listaAmigos = document.getElementById("listaAmigos");

    // 2. Limpiar la lista existente
    listaAmigos.innerHTML = "";

    // 3. Iterar sobre el arreglo amigos usando un bucle for
    for (let i = 0; i < listaAmigosSecretos.length; i++) {
        // 4. Crear un nuevo elemento <li> para cada amigo
        const li = document.createElement("li");

        // Asignar el texto del <li> con el nombre del amigo
        li.textContent = listaAmigosSecretos[i];

        // Agregar el <li> al <ul>
        listaAmigos.appendChild(li);
    }
}
function sortearAmigo() {
    const ul = document.getElementById("resultado");
    // Limpiar el contenido anterior
    ul.innerHTML = "";
    if(listaAmigosSecretos.length <= 2){
        //reiniciar lista y mostrar mensaje que faltan agregar amigos      
        const li = document.createElement("li");
        li.innerHTML = "";
        li.textContent = `Agrega ${listaAmigosSecretos.length <= 1 ? 'tus amigos' : 'al menos otro amigo'}`;
        document.getElementById("resultado").appendChild(li); 
    }else{
        // Limpiar el contenido de lista de amigos
        const ul = document.getElementById("listaAmigos");        
        ul.innerHTML = "";
        // Limpiar el contenido del mensaje
        const ul1 = document.getElementById("resultado");
        ul1.innerHTML = "";
        //mostrar el mensaje del amigo secreto
        const li = document.createElement("li");
        let numRandom = Math.floor(Math.random()*listaAmigosSecretos.length);
        console.log(numRandom);
        li.textContent = `El Amigo secreto es: ${listaAmigosSecretos[numRandom]}`;
        document.getElementById("resultado").appendChild(li);
        
    }
}