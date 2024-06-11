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
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
        alternativas: [
           "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
            "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial."
        ]
    },
];

let atual = 0;
let perguntaAtual;

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
