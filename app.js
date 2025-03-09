// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//let amigos = 0;
//let amigoSecreto = 0;
let nombreAmigo = " ";
let amigorepetido = 1;
let listaAmigosSecretos = [];

function agregarAmigo() {
    nombreAmigo = document.getElementById('amigo').value; 

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
        
}
/*function actualizarlistaamigos() {
    // Seleccionamos el elemento <ul> del DOM
    const listaAmigos = document.getElementById("listaAmigos");

    // Limpiamos la lista antes de agregar los elementos
    listaAmigos.innerHTML = "";

    // Recorremos el array y agregamos cada nombre a la lista
    listaAmigosSecretos.forEach(function(amigo) {
        // Creamos un elemento <li>
        const li = document.createElement("li");

        // Asignamos el texto del <li> con el nombre del amigo
        li.textContent = amigo;

        // Agregamos el <li> al <ul>
        listaAmigos.appendChild(li);
    });
}*/