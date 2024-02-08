const perguntas = [
    {
      pergunta: "Qual palavra-chave é utilizada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "const",
      ],
      correta: 2
    },
    {
      pergunta: "Como você escreveria um comentário de uma única linha em JavaScript?",
      respostas: [
        "// Comentário",
        "# Comentário",
        "/* Comentário */",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de comparação estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "!=",
      ],
      correta: 1
    },
    {
      pergunta: "Como você chama uma função em JavaScript?",
      respostas: [
        "invokeFunction()",
        "callFunction()",
        "functionName()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "append()",
        "push()",
        "addToEnd()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
      respostas: [
        "Verificar o tipo de dado",
        "Comparar valores",
        "Executar uma operação ternária",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'map()' faz em JavaScript?",
      respostas: [
        "Filtra elementos de um array",
        "Mapeia os elementos de um array e transforma-os",
        "Remove elementos duplicados de um array",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
      respostas: [
        "Nenhuma, são sinônimos",
        "'let' é para valores constantes, 'const' é para valores mutáveis",
        "'const' é para valores constantes, 'let' é para valores mutáveis",
      ],
      correta: 2
    },
    {
      pergunta: "O que o método 'addEventListener()' faz em JavaScript?",
      respostas: [
        "Remove um evento",
        "Adiciona um evento a um elemento",
        "Executa um evento imediatamente",
      ],
      correta: 1
    },
    {
      pergunta: "Como você converte uma string para um número em JavaScript?",
      respostas: [
        "toNumber()",
        "parseInt()",
        "convertToNumber()",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
         corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      
      
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }