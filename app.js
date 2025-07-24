// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];

function obtenerElemento(id) {
  return document.getElementById(id);
}

function limpiarInput(id) {
  obtenerElemento(id).value = "";
}

function mostrarAlerta(mensaje) {
  alert(mensaje);
}

function agregarAmigo() {
  const input = obtenerElemento("amigo");
  const nombre = input.value.trim();

  if (!nombre) {
    mostrarAlerta("Por favor, inserte un nombre");
    return;
  }

  amigos.push(nombre);
  limpiarInput("amigo");
  actualizarListaAmigos();
}

function actualizarListaAmigos() {
  const lista = obtenerElemento("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((nombre) => {
    const item = document.createElement("li");
    item.textContent = nombre;
    lista.appendChild(item);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    mostrarAlerta("Por favor, inserte un nombre antes de sortear");
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const resultado = obtenerElemento("resultado");
  resultado.textContent = amigos[indice];
}
