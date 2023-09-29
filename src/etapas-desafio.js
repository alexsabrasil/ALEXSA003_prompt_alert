// Desafio Prompt Game

// Índice

// [Desafio Prompt Game](#desafio-prompt-game)
// [Índice](#índice)
// [Resumo do projeto](#resumo-do-projeto)
// [Objetivos de aprendizagem](#objetivos-de-aprendizagem)
// [Git e GitHub:](#git-e-github)
// [Orientações:](#orientações)
// [Critérios de aceitação](#critérios-de-aceitação)
// [Desafio:](#desafio)
// [Lembre-se que essa sessão é opcional](#lembre-se-que-essa-sessão-é-opcional)
// [Dicas](#dicas)



// Resumo do projeto 

// O que é preciso fazer? 

// Você usará o que foi aprendido sobre entrada e saída de dados com `prompt()` e `alert()` para receber informações sobre o usuário da sua aplicação e em seguida exibi-las na tela. 

// O que deve ser feito: 

// Elabore um programa que leia um numero e devolva para o usuário o dobro do número informado.


//javascript

  //Entrada de dados: ler um número.
  //Processamento: calcular o dobro.
  //Saída: informar o resultado.



// Solicita ao usuário que insira um número
const numero = parseFloat(prompt("Digite um número:"));

// Calcula o dobro do número informado
const dobro = numero * 2;

// Exibe o resultado para o usuário
alert(`O dobro de ${numero} é ${dobro}.`);
  
//Elabore um programa que calcule o valor do jantar, sendo o valor total do jantar composto pela conta junto com a taxa de atendimento do garçom. 

//javascript

  //Entrada de dados: ler o valor da conta.
  //Processamento: calcular junto com o valor do custo do garçom.
  //Saída: informar o resultado.



  
//Elabore um programa para uma pizzaria, o qual leia o valor total de uma conta e quantos clientes vão pagá-la. Calcule e informe o valor a ser pago por cliente. 

//javascript

  //Entrada de dados: ler o valor da conta e a quantidade de clientes.
  //Processamento: calcular o valor a ser pago por cliente.
  //Saída: informar o resultado.



// Solicita ao usuário que insira o valor da conta do jantar
const valorConta = parseFloat(prompt("Digite o valor da conta do jantar:"));

// Solicita ao usuário que insira a taxa de atendimento do garçom (em porcentagem)
const taxaAtendimento = parseFloat(prompt("Digite a taxa de atendimento do garçom (%):"));

// Calcula o valor da taxa de atendimento
const valorTaxaAtendimento = (taxaAtendimento / 100) * valorConta;

// Calcula o valor total do jantar (conta + taxa de atendimento)
const valorTotal = valorConta + valorTaxaAtendimento;

// Exibe o resultado para o usuário
alert(`O valor total do jantar, incluindo a taxa de atendimento do garçom, é R$${valorTotal.toFixed(2)}`);



//Objetivos de aprendizagem
  
//JavaScript:

//Saída de dados com `alert()`
//Variáveis e constantes 
//Entrada de dados com `prompt()`
//Entrada de dados e uso de variáveis

//Git e GitHub:

//Uso de comandos de git: `git add` `git commit` `git pull` `git push`
//Gerenciamento de repositorios de GitHub (clone e fork)

//Orientações:


//O projeto será feito individualmente.
//O projeto deverá ser entregue subindo o seu código no GitHub (commit/push) em seguida o link do repositório deverá ser enviado na atividade na plataforma da Campinho Digital. 

//Critérios de aceitação

//Todas as perguntas e respostas precisam ser exibidas na tela. 