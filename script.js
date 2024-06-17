const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como é sua noite de sono?,
            alternativas: [
            {   
            alternativa:"Boa",
            "Ruim"
            {
            }
                texto."Boa",
                afirmação:"afirmação",
            },
            ]
    {
        enunciado: "Sua alimentação é saudavel?",
        alternativas: [
            {   
            alternativa:"Sim",
            "Não"
            {
            }
                texto."Não",
                afirmação:"afirmação",
            },
            ]
    },
    {
        enunciado: "Qual é a duração do seu sono?",
        alternativas: [
            {   
            alternativa:"Mais de 8 horas",
            "Menos de 8 horas"
            {
            }
                texto."Menos de 8 horas",
                afirmação:"afirmação",
            },
            ]
    },
    {
        enunciado: "Qual sua cor preferida?",
        alternativas: [
            {   
            alternativa:"Azul",
            "Rosa"
            {
            }
                texto."Azul",
                afirmação:"afirmação",
            },
            ]
    },
    {
        enunciado: "Quantos litros de agua você?",
        alternativas: [
            {   
                alternativa:"Mais de 3 litros",
                "Menos de 3 litros "
                {
                }
                    texto."Mais de 3 litros",
                    afirmação:"afirmação",
                },
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal ="";

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta
