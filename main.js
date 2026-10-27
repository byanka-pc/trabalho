const nomes = ["Byanka"," Pereira ","Cavalcanti"];

const lista = document.getElementById("lista");
const formulario = document.getElementById("formulario");
const inputNome = document.getElementById("nome");
const contador = document.getElementById("contador");

function mostrarNomes() {
    lista.innerHTML = "";
    for (let nome of nomes) {
        const partes = nome.split(" ");
        for (let parte of partes) {
            if (parte.trim() !== "") {
                lista.innerHTML += `<li>${parte}</li>`;
            }
        }
    }
    const total = lista.querySelectorAll("li").length;
    contador.textContent = `Total de nomes: ${total}`;
}

mostrarNomes();

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    const novoNome = inputNome.value.trim();
    if (novoNome !== "") {
        nomes.push(novoNome);
        mostrarNomes();
        inputNome.value = "";
        inputNome.focus();
    }
});