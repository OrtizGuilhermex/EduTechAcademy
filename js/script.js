const cep = document.getElementById('cep');
const rua = document.getElementById('rua');
const bairro = document.getElementById('bairro');
const cidade = document.getElementById('cidade');
const estado = document.getElementById('estado');

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


cep.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        buscarCep();
    }
})

cep.addEventListener('change', buscarCep);