const emailCorreto = "aluno@email.com";
const senhaCorreta = "1234";

const botaoEntrar = document.getElementById("botaoEntrar");
const login = document.getElementById("login");
const areaAluno = document.getElementById("areaAluno");

const email = document.getElementById("email");
const senha = document.getElementById("senha");

const mensagemErro = document.getElementById("mensagemErro");

botaoEntrar.addEventListener("click", function() {

    if (email.value === emailCorreto && senha.value === senhaCorreta) {
        mensagemErro.textContent = "";
        login.style.display = "none";
        areaAluno.style.display = "block";

    } else {
        mensagemErro.textContent = "E-mail ou senha incorretos!";
    }


    const botoesConcluir = document.querySelectorAll(".botao-concluir");
    const progresso = document.getElementById("progresso");

    botoesConcluir.forEach(function(botao) {

        botao.addEventListener("click", function() {
    
            botao.textContent = "✅ Exercício concluído";
            botao.classList.add("concluido");
            botao.disabled = true;

            const concluidos = document.querySelectorAll(".concluido").length;

progresso.textContent = `Progresso: ${concluidos} de ${botoesConcluir.length} exercícios concluídos`;
    
        });
    
    });

});
