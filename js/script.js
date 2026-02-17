const cep = document.getElementById('cep');
const rua = document.getElementById('rua');
const bairro = document.getElementById('bairro');
const cidade = document.getElementById('cidade');
const estado = document.getElementById('estado');
const tema = document.getElementById('dark-theme')
const temaIcon = tema.querySelector('img')

async function buscarCep() {
    const cepValor = cep.value.replace(/\D/g, '');

    try {
        const cepResponse = await fetch(`https://viacep.com.br/ws/${cepValor}/json/`);
        const cepData = await cepResponse.json();

        if (cepData.erro) {
            alert("CEP não encontrado!");
            limparFormulario();
            return;
        }

        rua.value = cepData.logradouro || "";
        bairro.value = cepData.bairro || "";
        cidade.value = cepData.localidade || "";
        estado.value = cepData.uf || "";


    } catch (error) {
        console.error("Erro ao buscar o CEP:", error);
    }
}

function limparFormulario() {
    rua.value = "";
    bairro.value = "";
    cidade.value = "";
    estado.value = "";
}

function atualizarIcon(isDark) {
    if (isDark) {
        temaIcon.setAttribute("src", "images/sun.svg")
        temaIcon.setAttribute("light-theme");
    } else {
        temaIcon.setAttribute("src", "images/moon.svg")
        temaIcon.setAttribute("dark-theme");
    }
}

if(localStorage.getItem("tema") === "dark"){
    document.body.classList.add("dark-theme");
    atualizarIcon(true);
}

tema.addEventListener("click", function(event){
    event.preventDefault();

    document.body.classList.toggle("dark-theme");
    const isDark = document.body.classList.contains("dark-theme");

    localStorage.setItem("tema", isDark ? "escuro" : "claro");

    atualizarIcon(isDark);
})


cep.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        buscarCep();
    }
})

cep.addEventListener('change', buscarCep);