const usuarioAluno = {
    email: "aluno@email.com",
    senha: "1234",
    tipo: "aluno"
};

const usuarioPersonal = {
    email: "personal@email.com",
    senha: "5678",
    tipo: "personal"
};


// ===============================
// ELEMENTOS
// ===============================

const botaoEntrar = document.getElementById("botaoEntrar");

const login = document.getElementById("login");
const areaAluno = document.getElementById("areaAluno");
const areaPersonal = document.getElementById("areaPersonal");

const email = document.getElementById("email");
const senha = document.getElementById("senha");
const mensagemErro = document.getElementById("mensagemErro");

const botoesConcluir =
    document.querySelectorAll(".botao-concluir");

const progresso =
    document.getElementById("progresso");

const botaoVerAluno =
    document.getElementById("botaoVerAluno");

const listaAlunos =
    document.getElementById("listaAlunos");

const detalhesAluno =
    document.getElementById("detalhesAluno");

const treinosAluno =
    document.getElementById("treinosAluno");

const detalhesTreino =
    document.getElementById("detalhesTreino");

const botaoVoltarTreinos =
    document.getElementById("botaoVoltarTreinos");

const botaoVoltarAlunos =
    document.getElementById("botaoVoltarAlunos");

const botaoAdicionarTreino =
    document.getElementById("botaoAdicionarTreino");

const formularioTreino =
    document.getElementById("formularioTreino");

const botaoSalvarTreino =
    document.getElementById("botaoSalvarTreino");

const nomeTreino =
    document.getElementById("nomeTreino");

const listaExerciciosTreino =
    document.getElementById("listaExerciciosTreino");


// ===============================
// ELEMENTOS DOS EXERCÍCIOS
// ===============================

const botaoAdicionarExercicio =
    document.getElementById("botaoAdicionarExercicio");

const formularioExercicio =
    document.getElementById("formularioExercicio");

const botaoSalvarExercicio =
    document.getElementById("botaoSalvarExercicio");

const nomeExercicio =
    document.getElementById("nomeExercicio");

const seriesExercicio =
    document.getElementById("seriesExercicio");

const cargaExercicio =
    document.getElementById("cargaExercicio");

const descansoExercicio =
    document.getElementById("descansoExercicio");

const observacaoExercicio =
    document.getElementById("observacaoExercicio");


// ===============================
// BANCO DE TREINOS
// ===============================

const exerciciosDosTreinos = {

    "Treino A — Peito e Tríceps": [

        {
            nome: "Supino reto",
            series: "4 séries × 10 repetições",
            carga: "40 kg",
            descanso: "60 segundos",
            observacao: "Controlar bem o movimento."
        },

        {
            nome: "Agachamento livre",
            series: "3 séries × 12 repetições",
            carga: "30 kg",
            descanso: "90 segundos",
            observacao: ""
        }

    ],

    "Treino B — Costas e Bíceps": [],

    "Treino C — Pernas": []

};


// Guarda o treino que está aberto

let treinoAtual = null;


// ===============================
// LOGIN
// ===============================

botaoEntrar.addEventListener("click", function() {

    if (
        email.value === usuarioAluno.email &&
        senha.value === usuarioAluno.senha
    ) {

        mensagemErro.textContent = "";

        login.style.display = "none";

        areaAluno.style.display = "block";

    }

    else if (
        email.value === usuarioPersonal.email &&
        senha.value === usuarioPersonal.senha
    ) {

        mensagemErro.textContent = "";

        login.style.display = "none";

        areaPersonal.style.display = "block";

    }

    else {

        mensagemErro.textContent =
            "E-mail ou senha incorretos!";

    }

});


// ===============================
// CONCLUIR EXERCÍCIOS DO ALUNO
// ===============================

botoesConcluir.forEach(function(botao) {

    botao.addEventListener("click", function() {

        botao.textContent =
            "✅ Exercício concluído";

        botao.classList.add("concluido");

        botao.disabled = true;

        const concluidos =
            document.querySelectorAll(".concluido").length;

        progresso.textContent =
            `Progresso: ${concluidos} de ${botoesConcluir.length} exercícios concluídos`;

    });

});


// ===============================
// VER ALUNO
// ===============================

botaoVerAluno.addEventListener("click", function() {

    listaAlunos.style.display = "none";

    detalhesAluno.style.display = "block";

});


// ===============================
// MOSTRAR EXERCÍCIOS DO TREINO
// ===============================

function mostrarExerciciosDoTreino() {

    listaExerciciosTreino.innerHTML = "";

    const exercicios =
        exerciciosDosTreinos[treinoAtual] || [];


    // Nenhum exercício

    if (exercicios.length === 0) {

        listaExerciciosTreino.innerHTML = `
            <p>
                Este treino ainda não possui exercícios cadastrados.
            </p>
        `;

        return;

    }


    // Criar cada exercício

    exercicios.forEach(function(exercicio) {

        const div =
            document.createElement("div");

        div.classList.add("exercicio");

        div.innerHTML = `

            <h4>${exercicio.nome}</h4>

            <p>${exercicio.series}</p>

            <p>Carga: ${exercicio.carga}</p>

            <p>Descanso: ${exercicio.descanso}</p>

            ${
                exercicio.observacao
                ? `<p>Observação: ${exercicio.observacao}</p>`
                : ""
            }

        `;

        listaExerciciosTreino.appendChild(div);

    });

}


// ===============================
// ABRIR TREINO
// ===============================

treinosAluno.addEventListener("click", function(event) {

    if (
        !event.target.classList.contains("botaoVerTreino")
    ) {

        return;

    }


    const treinoSelecionado =
        event.target.closest(".treino");


    if (!treinoSelecionado) {

        return;

    }


    const nome =
        treinoSelecionado.dataset.nome;


    // Guarda o treino atual

    treinoAtual = nome;


    // Coloca o nome no título

    detalhesTreino.querySelector("h3").textContent =
        nome;


    // Mostra os exercícios desse treino

    mostrarExerciciosDoTreino();


    // Troca a tela

    treinosAluno.style.display = "none";

    detalhesTreino.style.display = "block";

});


// ===============================
// VOLTAR PARA TREINOS
// ===============================

botaoVoltarTreinos.addEventListener("click", function() {

    detalhesTreino.style.display = "none";

    treinosAluno.style.display = "block";

});


// ===============================
// VOLTAR PARA ALUNOS
// ===============================

botaoVoltarAlunos.addEventListener("click", function() {

    detalhesAluno.style.display = "none";

    listaAlunos.style.display = "block";

});


// ===============================
// ADICIONAR TREINO
// ===============================

botaoAdicionarTreino.addEventListener("click", function() {

    formularioTreino.style.display = "block";

});


// ===============================
// SALVAR NOVO TREINO
// ===============================

botaoSalvarTreino.addEventListener("click", function() {

    const nome =
        nomeTreino.value.trim();


    if (nome === "") {

        alert("Digite o nome do treino!");

        return;

    }


    // Verifica se já existe

    if (exerciciosDosTreinos[nome]) {

        alert(
            "Já existe um treino com esse nome!"
        );

        return;

    }


    // Cria o treino no nosso banco

    exerciciosDosTreinos[nome] = [];


    // Cria o elemento visual

    const novoTreino =
        document.createElement("div");

    novoTreino.classList.add("treino");

    novoTreino.dataset.nome = nome;


    novoTreino.innerHTML = `

        <h4>${nome}</h4>

        <p>0 exercícios cadastrados</p>

        <button class="botaoVerTreino">
            Ver treino
        </button>

    `;


    // Coloca na lista

    treinosAluno.appendChild(novoTreino);


    // Limpa o campo

    nomeTreino.value = "";


    // Fecha o formulário

    formularioTreino.style.display = "none";

});


// ===============================
// ABRIR FORMULÁRIO DE EXERCÍCIO
// ===============================

botaoAdicionarExercicio.addEventListener(
    "click",
    function() {

        formularioExercicio.style.display =
            "block";

    }
);


// ===============================
// SALVAR EXERCÍCIO
// ===============================

botaoSalvarExercicio.addEventListener(
    "click",
    function() {

        const nome =
            nomeExercicio.value.trim();

        const series =
            seriesExercicio.value.trim();

        const carga =
            cargaExercicio.value.trim();

        const descanso =
            descansoExercicio.value.trim();

        const observacao =
            observacaoExercicio.value.trim();


        // Verifica nome

        if (nome === "") {

            alert(
                "Digite o nome do exercício!"
            );

            return;

        }


        // Verifica treino

        if (!treinoAtual) {

            alert(
                "Nenhum treino selecionado!"
            );

            return;

        }


        // Cria o exercício

        const novoExercicio = {

            nome: nome,

            series: series,

            carga: carga,

            descanso: descanso,

            observacao: observacao

        };


        // Adiciona dentro do treino atual

        exerciciosDosTreinos[treinoAtual].push(
            novoExercicio
        );


        // Limpa os campos

        nomeExercicio.value = "";

        seriesExercicio.value = "";

        cargaExercicio.value = "";

        descansoExercicio.value = "";

        observacaoExercicio.value = "";


        // Fecha formulário

        formularioExercicio.style.display =
            "none";


        // Atualiza a tela

        mostrarExerciciosDoTreino();


        // Atualiza quantidade de exercícios

        atualizarQuantidadeTreino();

    }
);


// ===============================
// ATUALIZAR QUANTIDADE DE EXERCÍCIOS
// ===============================

function atualizarQuantidadeTreino() {

    const treinos =
        document.querySelectorAll(".treino");


    treinos.forEach(function(treino) {

        const nome =
            treino.dataset.nome;

        const exercicios =
            exerciciosDosTreinos[nome] || [];


        const textoQuantidade =
            treino.querySelector("p");


        if (textoQuantidade) {

            textoQuantidade.textContent =
                `${exercicios.length} exercícios cadastrados`;

        }

    });

}