// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = 0;
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
    if(listaAmigosSecretos.length <= 2){
        console.log(`Agregue ${listaAmigosSecretos.length <= 1? 'mas amigos' : 'al menos otro amigo'}`);
        console.log(listaAmigosSecretos.length);
        //console.log("agregue un amigo");
    }
}