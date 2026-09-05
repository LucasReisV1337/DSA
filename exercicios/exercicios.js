/*
BATERIA COMPLETA DE DSA EM JAVASCRIPT

Objetivo: sair do JavaScript/lógica mais básico, consolidar os principais padrões de DSA e avançar até estruturas e algoritmos de nível Hard/Extreme Hard.
Total de exercícios: 168

COMO USAR NO VS CODE
1. Abra este .txt e altere o Language Mode para JavaScript.
2. Cada exercício está entre // #region e // #endregion, permitindo recolher/expandir individualmente.
3. Na versão de estudos, escreva primeiro o RACIOCÍNIO antes da implementação.
4. Só depois implemente, rode os console.log e preencha complexidade de tempo/espaço.
5. Compare com o gabarito apenas após finalizar ou ficar realmente bloqueado.
6. Para entrevistas, explique em voz alta: entendimento -> abordagem ingênua -> otimização -> implementação -> edge cases -> Big-O.

REGRA DE PROGRESSÃO SUGERIDA
- Easy: tente resolver em até ~30 min.
- Medium: priorize entender o padrão; não memorize código.
- Hard: faça depois de dominar os padrões anteriores e refaça alguns dias depois sem consultar.

============================================================
*/

// ============================================================
// 01 — JAVASCRIPT BÁSICO, LÓGICA E BIG-O
// ============================================================

// #region EXERCÍCIO 001 — Somar dois números
/*
CATEGORIA: Fundamentos
DIFICULDADE: Extremo Easy

OBJETIVO DO EXERCÍCIO:
Revisar parâmetros, retorno e chamada de função.

ENTRADA DE EXEMPLO:
sumTwo(2, 3)

SAÍDA ESPERADA:
5

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
zeros; negativos; decimais

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function sumTwo(a, b) {
  // Insira sua implementação aqui
}

console.log(sumTwo(2, 3)); // Esperado: 5
// #endregion

// #region EXERCÍCIO 002 — Verificar se um número é par
/*
CATEGORIA: Fundamentos
DIFICULDADE: Extremo Easy

OBJETIVO DO EXERCÍCIO:
Praticar operador módulo e retorno booleano.

ENTRADA DE EXEMPLO:
isEven(14)

SAÍDA ESPERADA:
true

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
0; negativos; números ímpares

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function isEven(n) {
  // Insira sua implementação aqui
}

console.log(isEven(14)); // Esperado: true
// #endregion

// #region EXERCÍCIO 003 — Maior entre três números
/*
CATEGORIA: Fundamentos
DIFICULDADE: Extremo Easy

OBJETIVO DO EXERCÍCIO:
Revisar comparações e condicionais.

ENTRADA DE EXEMPLO:
maxOfThree(7, 3, 9)

SAÍDA ESPERADA:
9

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
valores iguais; negativos

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function maxOfThree(a, b, c) {
  // Insira sua implementação aqui
}

console.log(maxOfThree(7, 3, 9)); // Esperado: 9
// #endregion

// #region EXERCÍCIO 004 — Classificar número por sinal
/*
CATEGORIA: Fundamentos / Condicionais
DIFICULDADE: Extremo Easy

OBJETIVO DO EXERCÍCIO:
Praticar if/else encadeado e retorno de strings.

ENTRADA DE EXEMPLO:
classifyNumber(-7)

SAÍDA ESPERADA:
"negative"

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
zero; positivos; negativos

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function classifyNumber(n) {
  // Insira sua implementação aqui
}

console.log(classifyNumber(-7)); // Esperado: "negative"
// #endregion

// #region EXERCÍCIO 005 — Contar de 1 até N
/*
CATEGORIA: Fundamentos
DIFICULDADE: Extremo Easy

OBJETIVO DO EXERCÍCIO:
Praticar loop e construção incremental de array.

ENTRADA DE EXEMPLO:
rangeToN(5)

SAÍDA ESPERADA:
[1, 2, 3, 4, 5]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
n = 0; n = 1

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function rangeToN(n) {
  // Insira sua implementação aqui
}

console.log(rangeToN(5)); // Esperado: [1, 2, 3, 4, 5]
// #endregion

// #region EXERCÍCIO 006 — Somar de 1 até N
/*
CATEGORIA: Fundamentos / Loops
DIFICULDADE: Extremo Easy

OBJETIVO DO EXERCÍCIO:
Praticar for, acumulador e atualização de variável.

ENTRADA DE EXEMPLO:
sumToN(5)

SAÍDA ESPERADA:
15

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
n = 0; n = 1

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function sumToN(n) {
  // Insira sua implementação aqui
}

console.log(sumToN(5)); // Esperado: 15
// #endregion

// #region EXERCÍCIO 007 — Contagem regressiva com while
/*
CATEGORIA: Fundamentos / Loops
DIFICULDADE: Extremo Easy

OBJETIVO DO EXERCÍCIO:
Praticar while, condição de parada e atualização de contador.

ENTRADA DE EXEMPLO:
countDownWhile(4)

SAÍDA ESPERADA:
[4, 3, 2, 1]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
n = 0; n = 1

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function countDownWhile(n) {
  // Insira sua implementação aqui
}

console.log(countDownWhile(4)); // Esperado: [4, 3, 2, 1]
// #endregion

// #region EXERCÍCIO 008 — Somar elementos de um array
/*
CATEGORIA: Fundamentos
DIFICULDADE: Extremo Easy

OBJETIVO DO EXERCÍCIO:
Praticar travessia linear e acumulador.

ENTRADA DE EXEMPLO:
sumArray([1, 2, 3, 4])

SAÍDA ESPERADA:
10

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
array vazio; negativos

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function sumArray(arr) {
  // Insira sua implementação aqui
}

console.log(sumArray([1, 2, 3, 4])); // Esperado: 10
// #endregion

// #region EXERCÍCIO 009 — Encontrar maior valor do array
/*
CATEGORIA: Fundamentos
DIFICULDADE: Extremo Easy

OBJETIVO DO EXERCÍCIO:
Praticar estado corrente durante uma travessia.

ENTRADA DE EXEMPLO:
maxArray([3, 1, 8, 2])

SAÍDA ESPERADA:
8

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
um elemento; negativos

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function maxArray(arr) {
  // Insira sua implementação aqui
}

console.log(maxArray([3, 1, 8, 2])); // Esperado: 8
// #endregion

// #region EXERCÍCIO 010 — Contar ocorrências de um valor
/*
CATEGORIA: Fundamentos
DIFICULDADE: Extremo Easy

OBJETIVO DO EXERCÍCIO:
Praticar condição dentro de loop.

ENTRADA DE EXEMPLO:
countValue([1, 2, 2, 3, 2], 2)

SAÍDA ESPERADA:
3

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
target ausente; array vazio

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function countValue(arr, target) {
  // Insira sua implementação aqui
}

console.log(countValue([1, 2, 2, 3, 2], 2)); // Esperado: 3
// #endregion

// #region EXERCÍCIO 011 — Inverter string sem reverse
/*
CATEGORIA: Fundamentos
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Praticar índices e construção de string.

ENTRADA DE EXEMPLO:
reverseString("dev")

SAÍDA ESPERADA:
"ved"

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
string vazia; 1 caractere

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function reverseString(str) {
  // Insira sua implementação aqui
}

console.log(reverseString("dev")); // Esperado: "ved"
// #endregion

// #region EXERCÍCIO 012 — Contar vogais em uma string
/*
CATEGORIA: Fundamentos / Strings
DIFICULDADE: Extremo Easy

OBJETIVO DO EXERCÍCIO:
Praticar travessia de string, condição e contador.

ENTRADA DE EXEMPLO:
countVowels("developer")

SAÍDA ESPERADA:
4

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
string vazia; maiúsculas; sem vogais

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function countVowels(str) {
  // Insira sua implementação aqui
}

console.log(countVowels("developer")); // Esperado: 4
// #endregion

// #region EXERCÍCIO 013 — Somar valores numéricos de um objeto
/*
CATEGORIA: JavaScript / Objects
DIFICULDADE: Extremo Easy

OBJETIVO DO EXERCÍCIO:
Praticar leitura de propriedades e iteração sobre Object.values.

ENTRADA DE EXEMPLO:
sumObjectValues({ a: 2, b: 5, c: 3 })

SAÍDA ESPERADA:
10

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
objeto vazio; zero; negativos

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function sumObjectValues(obj) {
  // Insira sua implementação aqui
}

console.log(sumObjectValues({ a: 2, b: 5, c: 3 })); // Esperado: 10
// #endregion

// #region EXERCÍCIO 014 — Fatorial iterativo
/*
CATEGORIA: Fundamentos
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Praticar loop multiplicativo e definição de caso base.

ENTRADA DE EXEMPLO:
factorialIterative(5)

SAÍDA ESPERADA:
120

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
n = 0; n = 1

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function factorialIterative(n) {
  // Insira sua implementação aqui
}

console.log(factorialIterative(5)); // Esperado: 120
// #endregion

// #region EXERCÍCIO 015 — Somar todos os elementos de uma matriz
/*
CATEGORIA: Fundamentos / Matrizes
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Aprender travessia de array 2D com loops aninhados.

ENTRADA DE EXEMPLO:
matrixSum([[1,2],[3,4]])

SAÍDA ESPERADA:
10

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
matriz vazia; uma linha; números negativos

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function matrixSum(matrix) {
  // Insira sua implementação aqui
}

console.log(matrixSum([[1,2],[3,4]])); // Esperado: 10
// #endregion

// #region EXERCÍCIO 016 — Somar diagonal principal
/*
CATEGORIA: Fundamentos / Matrizes
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Praticar relação entre índice de linha e coluna em matriz quadrada.

ENTRADA DE EXEMPLO:
mainDiagonalSum([[1,2,3],[4,5,6],[7,8,9]])

SAÍDA ESPERADA:
15

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
matriz 1x1; valores negativos

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function mainDiagonalSum(matrix) {
  // Insira sua implementação aqui
}

console.log(mainDiagonalSum([[1,2,3],[4,5,6],[7,8,9]])); // Esperado: 15
// #endregion

// #region EXERCÍCIO 017 — Transpor matriz
/*
CATEGORIA: Fundamentos / Matrizes
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Consolidar criação e indexação de arrays 2D.

ENTRADA DE EXEMPLO:
transposeMatrix([[1,2,3],[4,5,6]])

SAÍDA ESPERADA:
[[1,4],[2,5],[3,6]]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
matriz vazia; uma linha; uma coluna

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function transposeMatrix(matrix) {
  // Insira sua implementação aqui
}

console.log(transposeMatrix([[1,2,3],[4,5,6]])); // Esperado: [[1,4],[2,5],[3,6]]
// #endregion

// #region EXERCÍCIO 018 — Comparar crescimento de loops
/*
CATEGORIA: Fundamentos / Big-O
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Consolidar a diferença entre O(n) e O(n²) implementando pares ordenados.

ENTRADA DE EXEMPLO:
allPairs([1, 2])

SAÍDA ESPERADA:
[[1, 1], [1, 2], [2, 1], [2, 2]]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
array vazio; um elemento

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function allPairs(arr) {
  // Insira sua implementação aqui
}

console.log(allPairs([1, 2])); // Esperado: [[1, 1], [1, 2], [2, 1], [2, 2]]
// #endregion

// ============================================================
// 02 — ARRAYS E STRINGS
// ============================================================

// #region EXERCÍCIO 019 — Índice do primeiro alvo
/*
CATEGORIA: Arrays
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Implementar busca linear retornando índice ou -1.

ENTRADA DE EXEMPLO:
linearSearch([4, 7, 1, 9], 1)

SAÍDA ESPERADA:
2

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
alvo no início/fim; ausente

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function linearSearch(arr, target) {
  // Insira sua implementação aqui
}

console.log(linearSearch([4, 7, 1, 9], 1)); // Esperado: 2
// #endregion

// #region EXERCÍCIO 020 — Remover duplicados preservando ordem
/*
CATEGORIA: Arrays
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Praticar reconstrução de array com verificação de presença.

ENTRADA DE EXEMPLO:
uniqueOrdered([3, 1, 3, 2, 1])

SAÍDA ESPERADA:
[3, 1, 2]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
array vazio; todos iguais

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function uniqueOrdered(arr) {
  // Insira sua implementação aqui
}

console.log(uniqueOrdered([3, 1, 3, 2, 1])); // Esperado: [3, 1, 2]
// #endregion

// #region EXERCÍCIO 021 — Mover zeros para o final
/*
CATEGORIA: Arrays
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Praticar reorganização in-place e ponteiro de escrita.

ENTRADA DE EXEMPLO:
moveZeros([0, 1, 0, 3, 12])

SAÍDA ESPERADA:
[1, 3, 12, 0, 0]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
todos zeros; sem zeros

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function moveZeros(arr) {
  // Insira sua implementação aqui
}

console.log(moveZeros([0, 1, 0, 3, 12])); // Esperado: [1, 3, 12, 0, 0]
// #endregion

// #region EXERCÍCIO 022 — Inverter array in-place
/*
CATEGORIA: Arrays / Two Pointers
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Introduzir dois ponteiros por uma transformação simples in-place.

ENTRADA DE EXEMPLO:
reverseArrayInPlace([1,2,3,4])

SAÍDA ESPERADA:
[4,3,2,1]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
array vazio; tamanho 1; tamanho ímpar

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function reverseArrayInPlace(arr) {
  // Insira sua implementação aqui
}

console.log(reverseArrayInPlace([1,2,3,4])); // Esperado: [4,3,2,1]
// #endregion

// #region EXERCÍCIO 023 — Segundo maior distinto
/*
CATEGORIA: Arrays
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Praticar manutenção dos dois melhores valores sem ordenar.

ENTRADA DE EXEMPLO:
secondLargest([5, 1, 5, 3, 4])

SAÍDA ESPERADA:
4

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
menos de 2 distintos; negativos

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function secondLargest(arr) {
  // Insira sua implementação aqui
}

console.log(secondLargest([5, 1, 5, 3, 4])); // Esperado: 4
// #endregion

// #region EXERCÍCIO 024 — Rotacionar array à direita K posições
/*
CATEGORIA: Arrays
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Praticar aritmética modular e manipulação de segmentos.

ENTRADA DE EXEMPLO:
rotateRight([1, 2, 3, 4, 5], 2)

SAÍDA ESPERADA:
[4, 5, 1, 2, 3]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
k = 0; k > n; array vazio

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function rotateRight(arr, k) {
  // Insira sua implementação aqui
}

console.log(rotateRight([1, 2, 3, 4, 5], 2)); // Esperado: [4, 5, 1, 2, 3]
// #endregion

// #region EXERCÍCIO 025 — Verificar palíndromo simples
/*
CATEGORIA: Strings
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Praticar comparação simétrica por índices.

ENTRADA DE EXEMPLO:
isPalindrome("radar")

SAÍDA ESPERADA:
true

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
string vazia; tamanho 1

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function isPalindrome(str) {
  // Insira sua implementação aqui
}

console.log(isPalindrome("radar")); // Esperado: true
// #endregion

// #region EXERCÍCIO 026 — Maior prefixo comum
/*
CATEGORIA: Strings
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Praticar comparação entre várias strings.

ENTRADA DE EXEMPLO:
longestCommonPrefix(["flower", "flow", "flight"])

SAÍDA ESPERADA:
"fl"

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
array vazio; uma string; sem prefixo

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function longestCommonPrefix(strs) {
  // Insira sua implementação aqui
}

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Esperado: "fl"
// #endregion

// #region EXERCÍCIO 027 — Compressão simples de string
/*
CATEGORIA: Strings
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Praticar contagem de runs consecutivas.

ENTRADA DE EXEMPLO:
compressString("aaabbc")

SAÍDA ESPERADA:
"a3b2c1"

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
string vazia; sem repetição

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function compressString(str) {
  // Insira sua implementação aqui
}

console.log(compressString("aaabbc")); // Esperado: "a3b2c1"
// #endregion

// #region EXERCÍCIO 028 — Construir prefix sums
/*
CATEGORIA: Arrays / Prefix Sum
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Aprender a transformar um array em somas prefixadas.

ENTRADA DE EXEMPLO:
prefixSums([2,4,1,3])

SAÍDA ESPERADA:
[2,6,7,10]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
array vazio; negativos

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function prefixSums(nums) {
  // Insira sua implementação aqui
}

console.log(prefixSums([2,4,1,3])); // Esperado: [2,6,7,10]
// #endregion

// #region EXERCÍCIO 029 — Responder somas de intervalos com prefix sum
/*
CATEGORIA: Arrays / Prefix Sum
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Aplicar prefix sum para responder várias consultas de intervalo rapidamente.

ENTRADA DE EXEMPLO:
rangeSumQueries([2,4,1,3], [[0,1],[1,3]])

SAÍDA ESPERADA:
[6,8]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
intervalo de um elemento; array completo; várias consultas

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function rangeSumQueries(nums, queries) {
  // Insira sua implementação aqui
}

console.log(rangeSumQueries([2,4,1,3], [[0,1],[1,3]])); // Esperado: [6,8]
// #endregion

// #region EXERCÍCIO 030 — Percorrer matriz em espiral
/*
CATEGORIA: Arrays / Matrix
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Praticar controle de quatro limites em matriz.

ENTRADA DE EXEMPLO:
spiralOrder([[1,2,3],[4,5,6],[7,8,9]])

SAÍDA ESPERADA:
[1,2,3,6,9,8,7,4,5]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
1xN; Nx1; matriz vazia

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function spiralOrder(matrix) {
  // Insira sua implementação aqui
}

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]])); // Esperado: [1,2,3,6,9,8,7,4,5]
// #endregion

// #region EXERCÍCIO 031 — Rotacionar matriz 90 graus in-place
/*
CATEGORIA: Arrays / Matrix
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Combinar transposição e reversão de linhas em uma matriz quadrada.

ENTRADA DE EXEMPLO:
rotateMatrix90([[1,2,3],[4,5,6],[7,8,9]])

SAÍDA ESPERADA:
[[7,4,1],[8,5,2],[9,6,3]]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
1x1; 2x2

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function rotateMatrix90(matrix) {
  // Insira sua implementação aqui
}

console.log(rotateMatrix90([[1,2,3],[4,5,6],[7,8,9]])); // Esperado: [[7,4,1],[8,5,2],[9,6,3]]
// #endregion

// #region EXERCÍCIO 032 — Produto do array exceto o próprio índice
/*
CATEGORIA: Arrays
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Praticar prefixos e sufixos sem divisão.

ENTRADA DE EXEMPLO:
productExceptSelf([1, 2, 3, 4])

SAÍDA ESPERADA:
[24, 12, 8, 6]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
zeros; negativos; tamanho 2

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function productExceptSelf(nums) {
  // Insira sua implementação aqui
}

console.log(productExceptSelf([1, 2, 3, 4])); // Esperado: [24, 12, 8, 6]
// #endregion

// #region EXERCÍCIO 033 — Maior subarray por soma
/*
CATEGORIA: Arrays / Kadane
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Aprender Kadane e estado local versus global.

ENTRADA DE EXEMPLO:
maxSubarraySum([-2,1,-3,4,-1,2,1,-5,4])

SAÍDA ESPERADA:
6

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
todos negativos; um elemento

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function maxSubarraySum(nums) {
  // Insira sua implementação aqui
}

console.log(maxSubarraySum([-2,1,-3,4,-1,2,1,-5,4])); // Esperado: 6
// #endregion

// ============================================================
// 03 — HASHMAP E SET
// ============================================================

// #region EXERCÍCIO 034 — Contagem de frequência
/*
CATEGORIA: HashMap
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Aprender Map como tabela de frequência.

ENTRADA DE EXEMPLO:
frequencyMap(["a", "b", "a"])

SAÍDA ESPERADA:
[["a", 2], ["b", 1]]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
array vazio; muitos repetidos

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function frequencyMap(arr) {
  // Insira sua implementação aqui
}

console.log(frequencyMap(["a", "b", "a"])); // Esperado: [["a", 2], ["b", 1]]
// #endregion

// #region EXERCÍCIO 035 — Contém duplicado
/*
CATEGORIA: Set
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Reconhecer Set como detector de repetição.

ENTRADA DE EXEMPLO:
containsDuplicate([1, 2, 3, 1])

SAÍDA ESPERADA:
true

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
array vazio; todos únicos

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function containsDuplicate(nums) {
  // Insira sua implementação aqui
}

console.log(containsDuplicate([1, 2, 3, 1])); // Esperado: true
// #endregion

// #region EXERCÍCIO 036 — Anagrama válido
/*
CATEGORIA: HashMap
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Comparar multiconjuntos de caracteres.

ENTRADA DE EXEMPLO:
isAnagram("listen", "silent")

SAÍDA ESPERADA:
true

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
tamanhos diferentes; caracteres repetidos

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function isAnagram(a, b) {
  // Insira sua implementação aqui
}

console.log(isAnagram("listen", "silent")); // Esperado: true
// #endregion

// #region EXERCÍCIO 037 — Interseção única de arrays
/*
CATEGORIA: Set
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Praticar operações de conjunto.

ENTRADA DE EXEMPLO:
intersectionUnique([1,2,2,3], [2,2,4])

SAÍDA ESPERADA:
[2]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
sem interseção; arrays vazios

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function intersectionUnique(a, b) {
  // Insira sua implementação aqui
}

console.log(intersectionUnique([1,2,2,3], [2,2,4])); // Esperado: [2]
// #endregion

// #region EXERCÍCIO 038 — Two Sum
/*
CATEGORIA: HashMap
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Aprender lookup O(1) médio para complemento.

ENTRADA DE EXEMPLO:
twoSum([2,7,11,15], 9)

SAÍDA ESPERADA:
[0, 1]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
duplicados; solução no final

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function twoSum(nums, target) {
  // Insira sua implementação aqui
}

console.log(twoSum([2,7,11,15], 9)); // Esperado: [0, 1]
// #endregion

// #region EXERCÍCIO 039 — Primeiro caractere não repetido
/*
CATEGORIA: HashMap
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Combinar frequência com segunda varredura para preservar ordem.

ENTRADA DE EXEMPLO:
firstUniqueChar("leetcode")

SAÍDA ESPERADA:
0

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
nenhum único; um caractere

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function firstUniqueChar(str) {
  // Insira sua implementação aqui
}

console.log(firstUniqueChar("leetcode")); // Esperado: 0
// #endregion

// #region EXERCÍCIO 040 — Agrupar anagramas
/*
CATEGORIA: HashMap
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Aprender chave canônica para agrupamento.

ENTRADA DE EXEMPLO:
groupAnagrams(["eat","tea","tan","ate","nat","bat"])

SAÍDA ESPERADA:
[["eat","tea","ate"],["tan","nat"],["bat"]]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
strings vazias; grupos unitários

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function groupAnagrams(strs) {
  // Insira sua implementação aqui
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])); // Esperado: [["eat","tea","ate"],["tan","nat"],["bat"]]
// #endregion

// #region EXERCÍCIO 041 — Maior sequência consecutiva
/*
CATEGORIA: HashSet
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Aprender como Set elimina necessidade de ordenar.

ENTRADA DE EXEMPLO:
longestConsecutive([100,4,200,1,3,2])

SAÍDA ESPERADA:
4

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
duplicados; array vazio

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function longestConsecutive(nums) {
  // Insira sua implementação aqui
}

console.log(longestConsecutive([100,4,200,1,3,2])); // Esperado: 4
// #endregion

// #region EXERCÍCIO 042 — Contar subarrays com soma K
/*
CATEGORIA: Prefix Sum / HashMap
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Combinar prefix sum com HashMap para contar subarrays em O(n).

ENTRADA DE EXEMPLO:
subarraySumEqualsK([1,1,1], 2)

SAÍDA ESPERADA:
2

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
números negativos; k = 0; array vazio

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function subarraySumEqualsK(nums, k) {
  // Insira sua implementação aqui
}

console.log(subarraySumEqualsK([1,1,1], 2)); // Esperado: 2
// #endregion

// ============================================================
// 04 — TWO POINTERS E SLIDING WINDOW
// ============================================================

// #region EXERCÍCIO 043 — Remover duplicados de array ordenado
/*
CATEGORIA: Two Pointers
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Praticar ponteiro de leitura e escrita in-place.

ENTRADA DE EXEMPLO:
removeDuplicatesSorted([1,1,2,2,3])

SAÍDA ESPERADA:
[1,2,3]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
array vazio; todos iguais

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function removeDuplicatesSorted(nums) {
  // Insira sua implementação aqui
}

console.log(removeDuplicatesSorted([1,1,2,2,3])); // Esperado: [1,2,3]
// #endregion

// #region EXERCÍCIO 044 — Par com soma em array ordenado
/*
CATEGORIA: Two Pointers
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Aprender ajuste monotônico das extremidades.

ENTRADA DE EXEMPLO:
twoSumSorted([1,2,4,6,10], 8)

SAÍDA ESPERADA:
[1,3]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
sem solução; valores negativos

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function twoSumSorted(nums, target) {
  // Insira sua implementação aqui
}

console.log(twoSumSorted([1,2,4,6,10], 8)); // Esperado: [1,3]
// #endregion

// #region EXERCÍCIO 045 — Palíndromo ignorando símbolos
/*
CATEGORIA: Two Pointers
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Combinar normalização e comparação simétrica.

ENTRADA DE EXEMPLO:
validPalindromeNormalized("A man, a plan, a canal: Panama")

SAÍDA ESPERADA:
true

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
apenas símbolos; caixa mista

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function validPalindromeNormalized(str) {
  // Insira sua implementação aqui
}

console.log(validPalindromeNormalized("A man, a plan, a canal: Panama")); // Esperado: true
// #endregion

// #region EXERCÍCIO 046 — 3Sum
/*
CATEGORIA: Two Pointers
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Combinar ordenação, fixação de pivô e dois ponteiros evitando duplicatas.

ENTRADA DE EXEMPLO:
threeSum([-1,0,1,2,-1,-4])

SAÍDA ESPERADA:
[[-1,-1,2],[-1,0,1]]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
duplicados; sem solução

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function threeSum(nums) {
  // Insira sua implementação aqui
}

console.log(threeSum([-1,0,1,2,-1,-4])); // Esperado: [[-1,-1,2],[-1,0,1]]
// #endregion

// #region EXERCÍCIO 047 — Maior área entre linhas
/*
CATEGORIA: Two Pointers
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Aprender decisão gulosa de mover a menor altura.

ENTRADA DE EXEMPLO:
maxContainerArea([1,8,6,2,5,4,8,3,7])

SAÍDA ESPERADA:
49

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
duas barras; alturas zero

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function maxContainerArea(height) {
  // Insira sua implementação aqui
}

console.log(maxContainerArea([1,8,6,2,5,4,8,3,7])); // Esperado: 49
// #endregion

// #region EXERCÍCIO 048 — Maior soma de janela fixa K
/*
CATEGORIA: Sliding Window
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Aprender janela fixa reaproveitando a soma anterior.

ENTRADA DE EXEMPLO:
maxWindowSum([2,1,5,1,3,2], 3)

SAÍDA ESPERADA:
9

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
k=1; k=n; k>n

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function maxWindowSum(nums, k) {
  // Insira sua implementação aqui
}

console.log(maxWindowSum([2,1,5,1,3,2], 3)); // Esperado: 9
// #endregion

// #region EXERCÍCIO 049 — Menor subarray com soma pelo menos target
/*
CATEGORIA: Sliding Window
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Aprender sliding window variável quando os valores são positivos.

ENTRADA DE EXEMPLO:
minSubarrayLen(7, [2,3,1,2,4,3])

SAÍDA ESPERADA:
2

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
nenhuma janela válida; um elemento; janela inteira

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function minSubarrayLen(target, nums) {
  // Insira sua implementação aqui
}

console.log(minSubarrayLen(7, [2,3,1,2,4,3])); // Esperado: 2
// #endregion

// #region EXERCÍCIO 050 — Maior substring sem repetição
/*
CATEGORIA: Sliding Window
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Aprender janela variável com última posição vista.

ENTRADA DE EXEMPLO:
lengthOfLongestSubstring("abcabcbb")

SAÍDA ESPERADA:
3

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
string vazia; todos iguais

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function lengthOfLongestSubstring(str) {
  // Insira sua implementação aqui
}

console.log(lengthOfLongestSubstring("abcabcbb")); // Esperado: 3
// #endregion

// #region EXERCÍCIO 051 — Encontrar anagramas em uma string
/*
CATEGORIA: Sliding Window / HashMap
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Praticar janela fixa com frequência de caracteres.

ENTRADA DE EXEMPLO:
findAnagramsInString("cbaebabacd", "abc")

SAÍDA ESPERADA:
[0,6]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
padrão maior que texto; repetições; nenhuma ocorrência

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function findAnagramsInString(s, p) {
  // Insira sua implementação aqui
}

console.log(findAnagramsInString("cbaebabacd", "abc")); // Esperado: [0,6]
// #endregion

// #region EXERCÍCIO 052 — Menor substring contendo padrão
/*
CATEGORIA: Sliding Window
DIFICULDADE: Hard

OBJETIVO DO EXERCÍCIO:
Aprender janela variável com frequências requeridas e satisfação parcial.

ENTRADA DE EXEMPLO:
minWindow("ADOBECODEBANC", "ABC")

SAÍDA ESPERADA:
"BANC"

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
t maior que s; sem solução; repetidos em t

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function minWindow(s, t) {
  // Insira sua implementação aqui
}

console.log(minWindow("ADOBECODEBANC", "ABC")); // Esperado: "BANC"
// #endregion

// ============================================================
// 05 — STACK, QUEUE E DEQUE
// ============================================================

// #region EXERCÍCIO 053 — Parênteses válidos
/*
CATEGORIA: Stack
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Aprender LIFO e casamento de delimitadores.

ENTRADA DE EXEMPLO:
validParentheses("({[]})")

SAÍDA ESPERADA:
true

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
string vazia; fechamento sem abertura; tipos mistos

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function validParentheses(str) {
  // Insira sua implementação aqui
}

console.log(validParentheses("({[]})")); // Esperado: true
// #endregion

// #region EXERCÍCIO 054 — Remover adjacentes duplicados
/*
CATEGORIA: Stack
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Praticar cancelamento local usando topo da pilha.

ENTRADA DE EXEMPLO:
removeAdjacentDuplicates("abbaca")

SAÍDA ESPERADA:
"ca"

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
string vazia; toda removida

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function removeAdjacentDuplicates(str) {
  // Insira sua implementação aqui
}

console.log(removeAdjacentDuplicates("abbaca")); // Esperado: "ca"
// #endregion

// #region EXERCÍCIO 055 — Implementar operações básicas de Stack
/*
CATEGORIA: Stack
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Consolidar LIFO implementando push, pop e peek.

ENTRADA DE EXEMPLO:
stackOperations([["push",1],["push",2],["peek"],["pop"],["peek"]])

SAÍDA ESPERADA:
[2,2,1]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
peek/pop em pilha vazia; várias operações

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function stackOperations(operations) {
  // Insira sua implementação aqui
}

console.log(stackOperations([["push",1],["push",2],["peek"],["pop"],["peek"]])); // Esperado: [2,2,1]
// #endregion

// #region EXERCÍCIO 056 — Avaliar expressão pós-fixa
/*
CATEGORIA: Stack
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Usar pilha para avaliação de Reverse Polish Notation.

ENTRADA DE EXEMPLO:
evalRPN(["2","1","+","3","*"])

SAÍDA ESPERADA:
9

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
divisão; negativos; um número

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function evalRPN(tokens) {
  // Insira sua implementação aqui
}

console.log(evalRPN(["2","1","+","3","*"])); // Esperado: 9
// #endregion

// #region EXERCÍCIO 057 — Min Stack
/*
CATEGORIA: Stack
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Aprender a manter uma informação agregada em O(1) por operação.

ENTRADA DE EXEMPLO:
minStackSimulation([["push",3],["push",1],["push",2],["min"],["pop"],["min"]])

SAÍDA ESPERADA:
[1,2,1]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
valores iguais; negativos; pop após mínimo

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function minStackSimulation(operations) {
  // Insira sua implementação aqui
}

console.log(minStackSimulation([["push",3],["push",1],["push",2],["min"],["pop"],["min"]])); // Esperado: [1,2,1]
// #endregion

// #region EXERCÍCIO 058 — Próximo elemento maior
/*
CATEGORIA: Monotonic Stack
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Aprender pilha monotônica para resolver relações de próximo maior em O(n).

ENTRADA DE EXEMPLO:
nextGreaterElements([2,1,2,4,3])

SAÍDA ESPERADA:
[4,2,4,-1,-1]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
estritamente decrescente; duplicados

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function nextGreaterElements(nums) {
  // Insira sua implementação aqui
}

console.log(nextGreaterElements([2,1,2,4,3])); // Esperado: [4,2,4,-1,-1]
// #endregion

// #region EXERCÍCIO 059 — Temperaturas diárias
/*
CATEGORIA: Monotonic Stack
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Aplicar pilha monotônica a distância até próximo valor maior.

ENTRADA DE EXEMPLO:
dailyTemperatures([73,74,75,71,69,72,76,73])

SAÍDA ESPERADA:
[1,1,4,2,1,1,0,0]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
decrescente; uma temperatura

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function dailyTemperatures(temps) {
  // Insira sua implementação aqui
}

console.log(dailyTemperatures([73,74,75,71,69,72,76,73])); // Esperado: [1,1,4,2,1,1,0,0]
// #endregion

// #region EXERCÍCIO 060 — Fila usando duas pilhas
/*
CATEGORIA: Queue / Stack
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Entender como transformar duas estruturas LIFO em FIFO amortizado.

ENTRADA DE EXEMPLO:
queueWithStacks([["push",1],["push",2],["pop"],["peek"]])

SAÍDA ESPERADA:
[1,2]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
pop em fila vazia; alternância push/pop

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function queueWithStacks(operations) {
  // Insira sua implementação aqui
}

console.log(queueWithStacks([["push",1],["push",2],["pop"],["peek"]])); // Esperado: [1,2]
// #endregion

// #region EXERCÍCIO 061 — Implementar Queue sem usar shift
/*
CATEGORIA: Queue
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Entender FIFO e evitar o custo O(n) de Array.shift usando índice de cabeça.

ENTRADA DE EXEMPLO:
queueOperations([["enqueue",1],["enqueue",2],["peek"],["dequeue"],["peek"]])

SAÍDA ESPERADA:
[1,1,2]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
fila vazia; alternância enqueue/dequeue

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function queueOperations(operations) {
  // Insira sua implementação aqui
}

console.log(queueOperations([["enqueue",1],["enqueue",2],["peek"],["dequeue"],["peek"]])); // Esperado: [1,1,2]
// #endregion

// #region EXERCÍCIO 062 — Máximo em cada janela
/*
CATEGORIA: Monotonic Deque
DIFICULDADE: Hard

OBJETIVO DO EXERCÍCIO:
Aprender deque monotônico para manter máximo de janela em O(n).

ENTRADA DE EXEMPLO:
maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)

SAÍDA ESPERADA:
[3,3,5,5,6,7]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
k=1; k=n; valores iguais

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function maxSlidingWindow(nums, k) {
  // Insira sua implementação aqui
}

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)); // Esperado: [3,3,5,5,6,7]
// #endregion

// #region EXERCÍCIO 063 — Maior retângulo no histograma
/*
CATEGORIA: Monotonic Stack
DIFICULDADE: Hard

OBJETIVO DO EXERCÍCIO:
Aplicar pilha crescente para encontrar limites de cada barra.

ENTRADA DE EXEMPLO:
largestRectangleArea([2,1,5,6,2,3])

SAÍDA ESPERADA:
10

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
crescente; decrescente; uma barra

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function largestRectangleArea(heights) {
  // Insira sua implementação aqui
}

console.log(largestRectangleArea([2,1,5,6,2,3])); // Esperado: 10
// #endregion

// ============================================================
// 06 — LINKED LISTS
// ============================================================

// #region EXERCÍCIO 064 — Criar lista encadeada a partir de array
/*
CATEGORIA: Linked List
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Entender nó, ponteiro next e construção sequencial.

ENTRADA DE EXEMPLO:
arrayToLinkedList([1,2,3])

SAÍDA ESPERADA:
[1,2,3]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
array vazio; um elemento

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function arrayToLinkedList(arr) {
  // Insira sua implementação aqui
}

console.log(arrayToLinkedList([1,2,3])); // Esperado: [1,2,3]
// #endregion

// #region EXERCÍCIO 065 — Inverter lista encadeada
/*
CATEGORIA: Linked List
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Aprender alteração de ponteiros com prev/current/next.

ENTRADA DE EXEMPLO:
reverseLinkedList([1,2,3,4])

SAÍDA ESPERADA:
[4,3,2,1]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
vazia; um nó

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function reverseLinkedList(arr) {
  // Insira sua implementação aqui
}

console.log(reverseLinkedList([1,2,3,4])); // Esperado: [4,3,2,1]
// #endregion

// #region EXERCÍCIO 066 — Encontrar nó do meio
/*
CATEGORIA: Linked List / Fast-Slow
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Aprender técnica de ponteiros lento e rápido.

ENTRADA DE EXEMPLO:
middleOfLinkedList([1,2,3,4,5])

SAÍDA ESPERADA:
3

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
comprimento par; um nó

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function middleOfLinkedList(arr) {
  // Insira sua implementação aqui
}

console.log(middleOfLinkedList([1,2,3,4,5])); // Esperado: 3
// #endregion

// #region EXERCÍCIO 067 — Detectar ciclo em lista
/*
CATEGORIA: Linked List / Floyd
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Aprender algoritmo de Floyd sem memória auxiliar.

ENTRADA DE EXEMPLO:
hasCycle([3,2,0,-4], 1)

SAÍDA ESPERADA:
true

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
sem ciclo; ciclo no head; lista vazia

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function hasCycle(values, cycleIndex) {
  // Insira sua implementação aqui
}

console.log(hasCycle([3,2,0,-4], 1)); // Esperado: true
// #endregion

// #region EXERCÍCIO 068 — Mesclar duas listas ordenadas
/*
CATEGORIA: Linked List
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Praticar merge linear comparando heads.

ENTRADA DE EXEMPLO:
mergeSortedLists([1,2,4], [1,3,4])

SAÍDA ESPERADA:
[1,1,2,3,4,4]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
uma lista vazia; duplicados

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function mergeSortedLists(a, b) {
  // Insira sua implementação aqui
}

console.log(mergeSortedLists([1,2,4], [1,3,4])); // Esperado: [1,1,2,3,4,4]
// #endregion

// #region EXERCÍCIO 069 — Remover N-ésimo nó a partir do fim
/*
CATEGORIA: Linked List / Two Pointers
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Aprender gap entre dois ponteiros e dummy node.

ENTRADA DE EXEMPLO:
removeNthFromEnd([1,2,3,4,5], 2)

SAÍDA ESPERADA:
[1,2,3,5]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
remover head; n=1

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function removeNthFromEnd(arr, n) {
  // Insira sua implementação aqui
}

console.log(removeNthFromEnd([1,2,3,4,5], 2)); // Esperado: [1,2,3,5]
// #endregion

// #region EXERCÍCIO 070 — Somar dois números representados por listas
/*
CATEGORIA: Linked List
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Praticar travessia simultânea, carry e criação incremental de nós.

ENTRADA DE EXEMPLO:
addTwoNumbersLinkedList([2,4,3], [5,6,4])

SAÍDA ESPERADA:
[7,0,8]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
tamanhos diferentes; carry final; zero

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function addTwoNumbersLinkedList(a, b) {
  // Insira sua implementação aqui
}

console.log(addTwoNumbersLinkedList([2,4,3], [5,6,4])); // Esperado: [7,0,8]
// #endregion

// #region EXERCÍCIO 071 — Verificar palíndromo em lista
/*
CATEGORIA: Linked List
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Combinar meio, reversão da segunda metade e comparação.

ENTRADA DE EXEMPLO:
isLinkedListPalindrome([1,2,2,1])

SAÍDA ESPERADA:
true

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
ímpar; um nó; vazia

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function isLinkedListPalindrome(arr) {
  // Insira sua implementação aqui
}

console.log(isLinkedListPalindrome([1,2,2,1])); // Esperado: true
// #endregion

// #region EXERCÍCIO 072 — Mesclar K listas ordenadas
/*
CATEGORIA: Linked List / Heap
DIFICULDADE: Hard

OBJETIVO DO EXERCÍCIO:
Generalizar merge usando fila de prioridade.

ENTRADA DE EXEMPLO:
mergeKSortedLists([[1,4,5],[1,3,4],[2,6]])

SAÍDA ESPERADA:
[1,1,2,3,4,4,5,6]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
listas vazias; uma lista

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function mergeKSortedLists(lists) {
  // Insira sua implementação aqui
}

console.log(mergeKSortedLists([[1,4,5],[1,3,4],[2,6]])); // Esperado: [1,1,2,3,4,4,5,6]
// #endregion

// ============================================================
// 07 — SORTING E BINARY SEARCH
// ============================================================

// #region EXERCÍCIO 073 — Bubble Sort
/*
CATEGORIA: Sorting
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Aprender algoritmo de ordenação simples e custo quadrático.

ENTRADA DE EXEMPLO:
bubbleSort([5,1,4,2])

SAÍDA ESPERADA:
[1,2,4,5]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
já ordenado; reverso

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function bubbleSort(arr) {
  // Insira sua implementação aqui
}

console.log(bubbleSort([5,1,4,2])); // Esperado: [1,2,4,5]
// #endregion

// #region EXERCÍCIO 074 — Selection Sort
/*
CATEGORIA: Sorting
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Aprender seleção do menor elemento e custo O(n²).

ENTRADA DE EXEMPLO:
selectionSort([5,3,1,4,2])

SAÍDA ESPERADA:
[1,2,3,4,5]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
já ordenado; reverso; duplicados

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function selectionSort(arr) {
  // Insira sua implementação aqui
}

console.log(selectionSort([5,3,1,4,2])); // Esperado: [1,2,3,4,5]
// #endregion

// #region EXERCÍCIO 075 — Insertion Sort
/*
CATEGORIA: Sorting
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Aprender inserção incremental em prefixo ordenado.

ENTRADA DE EXEMPLO:
insertionSort([5,2,4,6,1,3])

SAÍDA ESPERADA:
[1,2,3,4,5,6]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
já ordenado; duplicados

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function insertionSort(arr) {
  // Insira sua implementação aqui
}

console.log(insertionSort([5,2,4,6,1,3])); // Esperado: [1,2,3,4,5,6]
// #endregion

// #region EXERCÍCIO 076 — Merge Sort
/*
CATEGORIA: Sorting
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Aprender dividir-e-conquistar e merge estável.

ENTRADA DE EXEMPLO:
mergeSort([5,2,3,1])

SAÍDA ESPERADA:
[1,2,3,5]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
vazio; um elemento

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function mergeSort(arr) {
  // Insira sua implementação aqui
}

console.log(mergeSort([5,2,3,1])); // Esperado: [1,2,3,5]
// #endregion

// #region EXERCÍCIO 077 — Quick Sort
/*
CATEGORIA: Sorting
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Aprender particionamento em torno de pivô e trade-offs.

ENTRADA DE EXEMPLO:
quickSort([10,7,8,9,1,5])

SAÍDA ESPERADA:
[1,5,7,8,9,10]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
duplicados; já ordenado

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function quickSort(arr) {
  // Insira sua implementação aqui
}

console.log(quickSort([10,7,8,9,1,5])); // Esperado: [1,5,7,8,9,10]
// #endregion

// #region EXERCÍCIO 078 — Busca binária
/*
CATEGORIA: Binary Search
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Dominar busca O(log n) em dados ordenados.

ENTRADA DE EXEMPLO:
binarySearch([1,3,5,7,9], 7)

SAÍDA ESPERADA:
3

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
alvo ausente; extremos

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function binarySearch(arr, target) {
  // Insira sua implementação aqui
}

console.log(binarySearch([1,3,5,7,9], 7)); // Esperado: 3
// #endregion

// #region EXERCÍCIO 079 — Raiz quadrada inteira com busca binária
/*
CATEGORIA: Binary Search
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Praticar busca binária fora de um array pronto, procurando um valor numérico.

ENTRADA DE EXEMPLO:
sqrtFloor(27)

SAÍDA ESPERADA:
5

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
n = 0; n = 1; quadrado perfeito

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function sqrtFloor(n) {
  // Insira sua implementação aqui
}

console.log(sqrtFloor(27)); // Esperado: 5
// #endregion

// #region EXERCÍCIO 080 — Primeira ocorrência por busca binária
/*
CATEGORIA: Binary Search
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Aprender variante lower-bound.

ENTRADA DE EXEMPLO:
firstOccurrence([1,2,2,2,3], 2)

SAÍDA ESPERADA:
1

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
alvo ausente; um elemento

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function firstOccurrence(arr, target) {
  // Insira sua implementação aqui
}

console.log(firstOccurrence([1,2,2,2,3], 2)); // Esperado: 1
// #endregion

// #region EXERCÍCIO 081 — Koko Eating Bananas
/*
CATEGORIA: Binary Search on Answer
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Dominar o padrão de busca binária sobre a resposta usando uma função de viabilidade monotônica.

ENTRADA DE EXEMPLO:
kokoEatingBananas([3,6,7,11], 8)

SAÍDA ESPERADA:
4

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
uma pilha; h igual ao número de pilhas; valores grandes

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function kokoEatingBananas(piles, h) {
  // Insira sua implementação aqui
}

console.log(kokoEatingBananas([3,6,7,11], 8)); // Esperado: 4
// #endregion

// #region EXERCÍCIO 082 — Buscar em array rotacionado
/*
CATEGORIA: Binary Search
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Aprender a identificar qual metade permanece ordenada.

ENTRADA DE EXEMPLO:
searchRotated([4,5,6,7,0,1,2], 0)

SAÍDA ESPERADA:
4

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
não rotacionado; alvo ausente

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function searchRotated(nums, target) {
  // Insira sua implementação aqui
}

console.log(searchRotated([4,5,6,7,0,1,2], 0)); // Esperado: 4
// #endregion

// #region EXERCÍCIO 083 — Mediana de dois arrays ordenados
/*
CATEGORIA: Binary Search
DIFICULDADE: Hard

OBJETIVO DO EXERCÍCIO:
Aprender particionamento binário entre dois arrays.

ENTRADA DE EXEMPLO:
findMedianSortedArrays([1,3], [2])

SAÍDA ESPERADA:
2

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
um array vazio; total par

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function findMedianSortedArrays(a, b) {
  // Insira sua implementação aqui
}

console.log(findMedianSortedArrays([1,3], [2])); // Esperado: 2
// #endregion

// ============================================================
// 08 — RECURSION E BACKTRACKING
// ============================================================

// #region EXERCÍCIO 084 — Fatorial recursivo
/*
CATEGORIA: Recursion
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Aprender caso base e redução do problema.

ENTRADA DE EXEMPLO:
factorialRecursive(5)

SAÍDA ESPERADA:
120

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
n=0; n=1

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function factorialRecursive(n) {
  // Insira sua implementação aqui
}

console.log(factorialRecursive(5)); // Esperado: 120
// #endregion

// #region EXERCÍCIO 085 — Fibonacci com memoização
/*
CATEGORIA: Recursion / Memoization
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Entender subproblemas repetidos e cache.

ENTRADA DE EXEMPLO:
fibonacciMemo(10)

SAÍDA ESPERADA:
55

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
n=0; n=1

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function fibonacciMemo(n) {
  // Insira sua implementação aqui
}

console.log(fibonacciMemo(10)); // Esperado: 55
// #endregion

// #region EXERCÍCIO 086 — Gerar todas as subsequências
/*
CATEGORIA: Backtracking
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Aprender decisão incluir/não incluir.

ENTRADA DE EXEMPLO:
allSubsequences([1,2])

SAÍDA ESPERADA:
[[],[2],[1],[1,2]]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
array vazio

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function allSubsequences(arr) {
  // Insira sua implementação aqui
}

console.log(allSubsequences([1,2])); // Esperado: [[],[2],[1],[1,2]]
// #endregion

// #region EXERCÍCIO 087 — Subsets II - subconjuntos sem duplicatas
/*
CATEGORIA: Backtracking
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Aprender ordenação + poda para evitar resultados duplicados no mesmo nível de decisão.

ENTRADA DE EXEMPLO:
subsetsWithDup([1,2,2])

SAÍDA ESPERADA:
[[],[1],[1,2],[1,2,2],[2],[2,2]]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
todos iguais; array vazio

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function subsetsWithDup(nums) {
  // Insira sua implementação aqui
}

console.log(subsetsWithDup([1,2,2])); // Esperado: [[],[1],[1,2],[1,2,2],[2],[2,2]]
// #endregion

// #region EXERCÍCIO 088 — Permutações
/*
CATEGORIA: Backtracking
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Aprender escolha, marcação e undo.

ENTRADA DE EXEMPLO:
permutations([1,2,3])

SAÍDA ESPERADA:
[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
array vazio; um elemento

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function permutations(nums) {
  // Insira sua implementação aqui
}

console.log(permutations([1,2,3])); // Esperado: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// #endregion

// #region EXERCÍCIO 089 — Combinações de N escolha K
/*
CATEGORIA: Backtracking
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Praticar poda simples por índice inicial.

ENTRADA DE EXEMPLO:
combinations(4, 2)

SAÍDA ESPERADA:
[[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
k=0; k=n

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function combinations(n, k) {
  // Insira sua implementação aqui
}

console.log(combinations(4, 2)); // Esperado: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
// #endregion

// #region EXERCÍCIO 090 — Combination Sum
/*
CATEGORIA: Backtracking
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Aprender árvore de escolhas com reutilização e poda por soma.

ENTRADA DE EXEMPLO:
combinationSum([2,3,6,7], 7)

SAÍDA ESPERADA:
[[2,2,3],[7]]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
sem solução; candidato igual target

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function combinationSum(candidates, target) {
  // Insira sua implementação aqui
}

console.log(combinationSum([2,3,6,7], 7)); // Esperado: [[2,2,3],[7]]
// #endregion

// #region EXERCÍCIO 091 — Word Search em matriz
/*
CATEGORIA: Backtracking / Grid
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Combinar DFS, backtracking e marcação temporária de células.

ENTRADA DE EXEMPLO:
wordSearch([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")

SAÍDA ESPERADA:
true

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
palavra vazia; uma célula; reutilização proibida

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function wordSearch(board, word) {
  // Insira sua implementação aqui
}

console.log(wordSearch([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")); // Esperado: true
// #endregion

// #region EXERCÍCIO 092 — Resolver N-Queens
/*
CATEGORIA: Backtracking
DIFICULDADE: Hard

OBJETIVO DO EXERCÍCIO:
Praticar poda com colunas e diagonais ocupadas.

ENTRADA DE EXEMPLO:
solveNQueens(4)

SAÍDA ESPERADA:
[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
n=1; n=2/3 sem solução

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function solveNQueens(n) {
  // Insira sua implementação aqui
}

console.log(solveNQueens(4)); // Esperado: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// #endregion

// #region EXERCÍCIO 093 — Sudoku Solver
/*
CATEGORIA: Backtracking
DIFICULDADE: Hard

OBJETIVO DO EXERCÍCIO:
Praticar busca com restrições múltiplas.

ENTRADA DE EXEMPLO:
solveSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]])

SAÍDA ESPERADA:
["534678912","672195348","198342567","859761423","426853791","713924856","961537284","287419635","345286179"]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
tabuleiro já resolvido; entrada inválida

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function solveSudoku(board) {
  // Insira sua implementação aqui
}

console.log(solveSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]])); // Esperado: ["534678912","672195348","198342567","859761423","426853791","713924856","961537284","287419635","345286179"]
// #endregion

// ============================================================
// 09 — BINARY TREES E BST
// ============================================================

// #region EXERCÍCIO 094 — Percurso pré-ordem de árvore binária
/*
CATEGORIA: Binary Tree
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Entender estrutura de árvore e DFS root-left-right.

ENTRADA DE EXEMPLO:
preorderTraversal([1,null,2,3])

SAÍDA ESPERADA:
[1,2,3]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
árvore vazia; um nó

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function preorderTraversal(levelOrder) {
  // Insira sua implementação aqui
}

console.log(preorderTraversal([1,null,2,3])); // Esperado: [1,2,3]
// #endregion

// #region EXERCÍCIO 095 — Percurso em ordem
/*
CATEGORIA: Binary Tree
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Entender DFS left-root-right e sua relação com BST.

ENTRADA DE EXEMPLO:
inorderTraversal([2,1,3])

SAÍDA ESPERADA:
[1,2,3]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
árvore vazia; degenerada

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function inorderTraversal(levelOrder) {
  // Insira sua implementação aqui
}

console.log(inorderTraversal([2,1,3])); // Esperado: [1,2,3]
// #endregion

// #region EXERCÍCIO 096 — Percurso pós-ordem
/*
CATEGORIA: Binary Tree
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Completar os três percursos DFS clássicos: left-right-root.

ENTRADA DE EXEMPLO:
postorderTraversal([1,null,2,3])

SAÍDA ESPERADA:
[3,2,1]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
árvore vazia; um nó; degenerada

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function postorderTraversal(levelOrder) {
  // Insira sua implementação aqui
}

console.log(postorderTraversal([1,null,2,3])); // Esperado: [3,2,1]
// #endregion

// #region EXERCÍCIO 097 — Percurso por níveis
/*
CATEGORIA: Binary Tree / BFS
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Aprender BFS com fila em árvore.

ENTRADA DE EXEMPLO:
levelOrderTraversal([3,9,20,null,null,15,7])

SAÍDA ESPERADA:
[[3],[9,20],[15,7]]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
árvore vazia; um nível

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function levelOrderTraversal(values) {
  // Insira sua implementação aqui
}

console.log(levelOrderTraversal([3,9,20,null,null,15,7])); // Esperado: [[3],[9,20],[15,7]]
// #endregion

// #region EXERCÍCIO 098 — Altura máxima da árvore
/*
CATEGORIA: Binary Tree
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Praticar definição recursiva de altura.

ENTRADA DE EXEMPLO:
maxTreeDepth([3,9,20,null,null,15,7])

SAÍDA ESPERADA:
3

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
vazia; árvore em linha

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function maxTreeDepth(values) {
  // Insira sua implementação aqui
}

console.log(maxTreeDepth([3,9,20,null,null,15,7])); // Esperado: 3
// #endregion

// #region EXERCÍCIO 099 — Inverter árvore binária
/*
CATEGORIA: Binary Tree
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Praticar transformação recursiva de ponteiros.

ENTRADA DE EXEMPLO:
invertTree([4,2,7,1,3,6,9])

SAÍDA ESPERADA:
[4,7,2,9,6,3,1]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
vazia; um nó

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function invertTree(values) {
  // Insira sua implementação aqui
}

console.log(invertTree([4,2,7,1,3,6,9])); // Esperado: [4,7,2,9,6,3,1]
// #endregion

// #region EXERCÍCIO 100 — Verificar árvore balanceada
/*
CATEGORIA: Binary Tree
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Aprender pós-ordem que retorna informação e sinal de falha.

ENTRADA DE EXEMPLO:
isBalancedTree([3,9,20,null,null,15,7])

SAÍDA ESPERADA:
true

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
vazia; degenerada

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function isBalancedTree(values) {
  // Insira sua implementação aqui
}

console.log(isBalancedTree([3,9,20,null,null,15,7])); // Esperado: true
// #endregion

// #region EXERCÍCIO 101 — Diâmetro da árvore binária
/*
CATEGORIA: Binary Tree
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Combinar alturas locais com melhor resposta global.

ENTRADA DE EXEMPLO:
diameterOfBinaryTree([1,2,3,4,5])

SAÍDA ESPERADA:
3

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
um nó; árvore vazia

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function diameterOfBinaryTree(values) {
  // Insira sua implementação aqui
}

console.log(diameterOfBinaryTree([1,2,3,4,5])); // Esperado: 3
// #endregion

// #region EXERCÍCIO 102 — Buscar valor em BST
/*
CATEGORIA: Binary Search Tree
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Entender como a propriedade ordenada da BST elimina metade lógica da árvore a cada comparação.

ENTRADA DE EXEMPLO:
searchBST({val:4,left:{val:2,left:{val:1},right:{val:3}},right:{val:7}}, 3)

SAÍDA ESPERADA:
true

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
alvo na raiz; ausente; árvore vazia

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function searchBST(root, target) {
  // Insira sua implementação aqui
}

console.log(searchBST({val:4,left:{val:2,left:{val:1},right:{val:3}},right:{val:7}}, 3)); // Esperado: true
// #endregion

// #region EXERCÍCIO 103 — Inserir valor em BST
/*
CATEGORIA: Binary Search Tree
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Praticar inserção preservando a invariável esquerda < nó < direita.

ENTRADA DE EXEMPLO:
insertBST({val:4,left:{val:2,left:{val:1},right:{val:3}},right:{val:7}}, 5)

SAÍDA ESPERADA:
[1,2,3,4,5,7]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
árvore vazia; inserir menor/maior; duplicado

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function insertBST(root, target) {
  // Insira sua implementação aqui
}

console.log(insertBST({val:4,left:{val:2,left:{val:1},right:{val:3}},right:{val:7}}, 5)); // Esperado: [1,2,3,4,5,7]
// #endregion

// #region EXERCÍCIO 104 — Remover valor de BST
/*
CATEGORIA: Binary Search Tree
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Aprender os três casos de remoção: folha, um filho e dois filhos.

ENTRADA DE EXEMPLO:
deleteBST({val:5,left:{val:3,left:{val:2},right:{val:4}},right:{val:6,right:{val:7}}}, 3)

SAÍDA ESPERADA:
[2,4,5,6,7]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
folha; raiz; nó com um ou dois filhos; alvo ausente

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function deleteBST(root, target) {
  // Insira sua implementação aqui
}

console.log(deleteBST({val:5,left:{val:3,left:{val:2},right:{val:4}},right:{val:6,right:{val:7}}}, 3)); // Esperado: [2,4,5,6,7]
// #endregion

// #region EXERCÍCIO 105 — Validar BST
/*
CATEGORIA: Binary Search Tree
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Aprender restrições de intervalo propagadas na árvore.

ENTRADA DE EXEMPLO:
isValidBST([2,1,3])

SAÍDA ESPERADA:
true

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
duplicados; violação profunda

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function isValidBST(values) {
  // Insira sua implementação aqui
}

console.log(isValidBST([2,1,3])); // Esperado: true
// #endregion

// #region EXERCÍCIO 106 — K-ésimo menor em BST
/*
CATEGORIA: Binary Search Tree
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Usar propriedade de inorder ordenado.

ENTRADA DE EXEMPLO:
kthSmallestBST([3,1,4,null,2], 1)

SAÍDA ESPERADA:
1

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
k=1; k=n

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function kthSmallestBST(values, k) {
  // Insira sua implementação aqui
}

console.log(kthSmallestBST([3,1,4,null,2], 1)); // Esperado: 1
// #endregion

// #region EXERCÍCIO 107 — Menor ancestral comum em BST
/*
CATEGORIA: Binary Search Tree
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Explorar ordenação da BST para evitar busca completa.

ENTRADA DE EXEMPLO:
lowestCommonAncestorBST([6,2,8,0,4,7,9,null,null,3,5], 2, 8)

SAÍDA ESPERADA:
6

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
um nó ancestral do outro

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function lowestCommonAncestorBST(values, p, q) {
  // Insira sua implementação aqui
}

console.log(lowestCommonAncestorBST([6,2,8,0,4,7,9,null,null,3,5], 2, 8)); // Esperado: 6
// #endregion

// #region EXERCÍCIO 108 — Construir BST balanceada de array ordenado
/*
CATEGORIA: Binary Search Tree
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Aprender escolha do meio para limitar altura.

ENTRADA DE EXEMPLO:
sortedArrayToBSTPreorder([-10,-3,0,5,9])

SAÍDA ESPERADA:
[0,-10,-3,5,9]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
array vazio; um elemento

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function sortedArrayToBSTPreorder(nums) {
  // Insira sua implementação aqui
}

console.log(sortedArrayToBSTPreorder([-10,-3,0,5,9])); // Esperado: [0,-10,-3,5,9]
// #endregion

// #region EXERCÍCIO 109 — Serializar e desserializar árvore
/*
CATEGORIA: Binary Tree
DIFICULDADE: Hard

OBJETIVO DO EXERCÍCIO:
Entender representação completa de estrutura com marcadores null.

ENTRADA DE EXEMPLO:
serializeDeserializeTree([1,2,3,null,null,4,5])

SAÍDA ESPERADA:
[1,2,3,null,null,4,5]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
vazia; nós faltantes

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function serializeDeserializeTree(values) {
  // Insira sua implementação aqui
}

console.log(serializeDeserializeTree([1,2,3,null,null,4,5])); // Esperado: [1,2,3,null,null,4,5]
// #endregion

// #region EXERCÍCIO 110 — Maior soma de caminho em árvore binária
/*
CATEGORIA: Binary Tree / Tree DP
DIFICULDADE: Hard

OBJETIVO DO EXERCÍCIO:
Aprender a combinar contribuição retornada ao pai com resposta global que pode usar os dois filhos.

ENTRADA DE EXEMPLO:
binaryTreeMaxPathSum([-10,9,20,null,null,15,7])

SAÍDA ESPERADA:
42

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
todos negativos; um nó; árvore degenerada

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function binaryTreeMaxPathSum(levelOrder) {
  // Insira sua implementação aqui
}

console.log(binaryTreeMaxPathSum([-10,9,20,null,null,15,7])); // Esperado: 42
// #endregion

// ============================================================
// 10 — HEAP, GREEDY E INTERVALS
// ============================================================

// #region EXERCÍCIO 111 — Implementar Min-Heap do zero
/*
CATEGORIA: Heap / Priority Queue
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Entender representação em array, parent/children, sift-up e sift-down.

ENTRADA DE EXEMPLO:
minHeapOperations([["push",3],["push",1],["push",2],["peek"],["pop"],["peek"]])

SAÍDA ESPERADA:
[1,1,2]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
heap vazio; valores iguais; sequência alternada

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function minHeapOperations(operations) {
  // Insira sua implementação aqui
}

console.log(minHeapOperations([["push",3],["push",1],["push",2],["peek"],["pop"],["peek"]])); // Esperado: [1,1,2]
// #endregion

// #region EXERCÍCIO 112 — K maiores elementos
/*
CATEGORIA: Heap / Priority Queue
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Aprender heap mínimo limitado a K elementos.

ENTRADA DE EXEMPLO:
topKLargest([3,2,1,5,6,4], 2)

SAÍDA ESPERADA:
[6,5]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
k=1; k=n; duplicados

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function topKLargest(nums, k) {
  // Insira sua implementação aqui
}

console.log(topKLargest([3,2,1,5,6,4], 2)); // Esperado: [6,5]
// #endregion

// #region EXERCÍCIO 113 — K-ésimo maior elemento
/*
CATEGORIA: Heap
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Aplicar heap de tamanho K sem ordenar todos os dados.

ENTRADA DE EXEMPLO:
kthLargest([3,2,1,5,6,4], 2)

SAÍDA ESPERADA:
5

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
duplicados; k=n

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function kthLargest(nums, k) {
  // Insira sua implementação aqui
}

console.log(kthLargest([3,2,1,5,6,4], 2)); // Esperado: 5
// #endregion

// #region EXERCÍCIO 114 — Top K palavras frequentes
/*
CATEGORIA: Heap / HashMap
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Combinar contagem de frequência com ordenação por prioridade.

ENTRADA DE EXEMPLO:
topKFrequentWords(["i","love","leetcode","i","love","coding"], 2)

SAÍDA ESPERADA:
["i","love"]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
empate lexicográfico; k=1

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function topKFrequentWords(words, k) {
  // Insira sua implementação aqui
}

console.log(topKFrequentWords(["i","love","leetcode","i","love","coding"], 2)); // Esperado: ["i","love"]
// #endregion

// #region EXERCÍCIO 115 — Selecionar máximo de atividades
/*
CATEGORIA: Greedy
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Aprender escolha gulosa por menor término.

ENTRADA DE EXEMPLO:
activitySelection([[1,3],[2,4],[3,5],[0,7],[5,7],[5,9],[7,9]])

SAÍDA ESPERADA:
[[1,3],[3,5],[5,7],[7,9]]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
intervalos vazios; empates

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function activitySelection(intervals) {
  // Insira sua implementação aqui
}

console.log(activitySelection([[1,3],[2,4],[3,5],[0,7],[5,7],[5,9],[7,9]])); // Esperado: [[1,3],[3,5],[5,7],[7,9]]
// #endregion

// #region EXERCÍCIO 116 — Jump Game
/*
CATEGORIA: Greedy
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Aprender a manter o alcance máximo possível como estado guloso.

ENTRADA DE EXEMPLO:
jumpGame([2,3,1,1,4])

SAÍDA ESPERADA:
true

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
um elemento; zero bloqueando; impossível

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function jumpGame(nums) {
  // Insira sua implementação aqui
}

console.log(jumpGame([2,3,1,1,4])); // Esperado: true
// #endregion

// #region EXERCÍCIO 117 — Mesclar intervalos
/*
CATEGORIA: Intervals
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Aprender ordenação + fusão de sobreposições.

ENTRADA DE EXEMPLO:
mergeIntervals([[1,3],[2,6],[8,10],[15,18]])

SAÍDA ESPERADA:
[[1,6],[8,10],[15,18]]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
vazio; intervalos contidos

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function mergeIntervals(intervals) {
  // Insira sua implementação aqui
}

console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]])); // Esperado: [[1,6],[8,10],[15,18]]
// #endregion

// #region EXERCÍCIO 118 — Inserir intervalo
/*
CATEGORIA: Intervals
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Praticar varredura em três fases: antes, merge, depois.

ENTRADA DE EXEMPLO:
insertInterval([[1,3],[6,9]], [2,5])

SAÍDA ESPERADA:
[[1,5],[6,9]]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
inserir no início/fim; englobar vários

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function insertInterval(intervals, newInterval) {
  // Insira sua implementação aqui
}

console.log(insertInterval([[1,3],[6,9]], [2,5])); // Esperado: [[1,5],[6,9]]
// #endregion

// #region EXERCÍCIO 119 — Mínimo de salas de reunião
/*
CATEGORIA: Intervals / Heap
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Aprender sweep de eventos ou heap de horários de término.

ENTRADA DE EXEMPLO:
minMeetingRooms([[0,30],[5,10],[15,20]])

SAÍDA ESPERADA:
2

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
sem reuniões; sem sobreposição

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function minMeetingRooms(intervals) {
  // Insira sua implementação aqui
}

console.log(minMeetingRooms([[0,30],[5,10],[15,20]])); // Esperado: 2
// #endregion

// #region EXERCÍCIO 120 — Job Scheduling com lucro
/*
CATEGORIA: Greedy / Binary Search / DP
DIFICULDADE: Hard

OBJETIVO DO EXERCÍCIO:
Combinar ordenação, busca binária e DP ponderada de intervalos.

ENTRADA DE EXEMPLO:
maxJobProfit([1,2,3,3],[3,4,5,6],[50,10,40,70])

SAÍDA ESPERADA:
120

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
trabalhos com mesmo horário; todos sobrepostos

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function maxJobProfit(startTime, endTime, profit) {
  // Insira sua implementação aqui
}

console.log(maxJobProfit([1,2,3,3],[3,4,5,6],[50,10,40,70])); // Esperado: 120
// #endregion

// ============================================================
// 11 — GRAPHS
// ============================================================

// #region EXERCÍCIO 121 — Construir lista de adjacência
/*
CATEGORIA: Graph
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Entender representação de grafo esparso.

ENTRADA DE EXEMPLO:
buildAdjacencyList(4, [[0,1],[0,2],[1,3]])

SAÍDA ESPERADA:
[[1,2],[0,3],[0],[1]]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
sem arestas; vértice isolado

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function buildAdjacencyList(n, edges) {
  // Insira sua implementação aqui
}

console.log(buildAdjacencyList(4, [[0,1],[0,2],[1,3]])); // Esperado: [[1,2],[0,3],[0],[1]]
// #endregion

// #region EXERCÍCIO 122 — DFS em grafo
/*
CATEGORIA: Graph / DFS
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Aprender travessia profunda e conjunto de visitados.

ENTRADA DE EXEMPLO:
graphDFS(5, [[0,1],[0,2],[1,3],[2,4]], 0)

SAÍDA ESPERADA:
[0,1,3,2,4]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
grafo desconexo; ciclo

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function graphDFS(n, edges, start) {
  // Insira sua implementação aqui
}

console.log(graphDFS(5, [[0,1],[0,2],[1,3],[2,4]], 0)); // Esperado: [0,1,3,2,4]
// #endregion

// #region EXERCÍCIO 123 — BFS em grafo
/*
CATEGORIA: Graph / BFS
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Aprender travessia por distância crescente.

ENTRADA DE EXEMPLO:
graphBFS(5, [[0,1],[0,2],[1,3],[2,4]], 0)

SAÍDA ESPERADA:
[0,1,2,3,4]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
grafo desconexo; ciclo

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function graphBFS(n, edges, start) {
  // Insira sua implementação aqui
}

console.log(graphBFS(5, [[0,1],[0,2],[1,3],[2,4]], 0)); // Esperado: [0,1,2,3,4]
// #endregion

// #region EXERCÍCIO 124 — Número de componentes conexos
/*
CATEGORIA: Graph
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Aprender a iniciar uma travessia por componente ainda não visitado.

ENTRADA DE EXEMPLO:
countComponents(5, [[0,1],[1,2],[3,4]])

SAÍDA ESPERADA:
2

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
sem arestas; totalmente conectado

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function countComponents(n, edges) {
  // Insira sua implementação aqui
}

console.log(countComponents(5, [[0,1],[1,2],[3,4]])); // Esperado: 2
// #endregion

// #region EXERCÍCIO 125 — Verificar se grafo é bipartido
/*
CATEGORIA: Graph / BFS
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Praticar coloração de grafo e BFS em múltiplos componentes.

ENTRADA DE EXEMPLO:
isBipartite([[1,3],[0,2],[1,3],[0,2]])

SAÍDA ESPERADA:
true

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
grafo desconexo; nó isolado; ciclo ímpar

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function isBipartite(graph) {
  // Insira sua implementação aqui
}

console.log(isBipartite([[1,3],[0,2],[1,3],[0,2]])); // Esperado: true
// #endregion

// #region EXERCÍCIO 126 — Número de ilhas
/*
CATEGORIA: Graph / Grid DFS
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Mapear matriz para grafo implícito e explorar 4 direções.

ENTRADA DE EXEMPLO:
numIslands([["1","1","0","0"],["1","0","0","1"],["0","0","1","1"]])

SAÍDA ESPERADA:
2

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
toda água; toda terra

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function numIslands(grid) {
  // Insira sua implementação aqui
}

console.log(numIslands([["1","1","0","0"],["1","0","0","1"],["0","0","1","1"]])); // Esperado: 2
// #endregion

// #region EXERCÍCIO 127 — Rotting Oranges - BFS multi-source
/*
CATEGORIA: Graph / Grid BFS
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Aprender BFS iniciando simultaneamente de múltiplas fontes.

ENTRADA DE EXEMPLO:
rottingOranges([[2,1,1],[1,1,0],[0,1,1]])

SAÍDA ESPERADA:
4

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
nenhuma fresca; fresca inalcançável; uma célula

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function rottingOranges(grid) {
  // Insira sua implementação aqui
}

console.log(rottingOranges([[2,1,1],[1,1,0],[0,1,1]])); // Esperado: 4
// #endregion

// #region EXERCÍCIO 128 — Menor caminho em grafo não ponderado
/*
CATEGORIA: Graph / BFS
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Usar BFS para distância mínima em número de arestas.

ENTRADA DE EXEMPLO:
shortestPathUnweighted(6, [[0,1],[0,2],[1,3],[2,4],[4,5],[3,5]], 0, 5)

SAÍDA ESPERADA:
3

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
source=target; inalcançável

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function shortestPathUnweighted(n, edges, source, target) {
  // Insira sua implementação aqui
}

console.log(shortestPathUnweighted(6, [[0,1],[0,2],[1,3],[2,4],[4,5],[3,5]], 0, 5)); // Esperado: 3
// #endregion

// #region EXERCÍCIO 129 — Detectar ciclo em grafo não direcionado
/*
CATEGORIA: Graph / DFS
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Aprender a distinguir aresta de retorno do pai imediato.

ENTRADA DE EXEMPLO:
hasUndirectedCycle(4, [[0,1],[1,2],[2,0],[2,3]])

SAÍDA ESPERADA:
true

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
árvore; componente isolada

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function hasUndirectedCycle(n, edges) {
  // Insira sua implementação aqui
}

console.log(hasUndirectedCycle(4, [[0,1],[1,2],[2,0],[2,3]])); // Esperado: true
// #endregion

// #region EXERCÍCIO 130 — Detectar ciclo em grafo direcionado
/*
CATEGORIA: Graph / DFS
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Aprender estados de visita/recursion stack.

ENTRADA DE EXEMPLO:
hasDirectedCycle(4, [[0,1],[1,2],[2,3],[3,1]])

SAÍDA ESPERADA:
true

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
DAG; self-loop

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function hasDirectedCycle(n, edges) {
  // Insira sua implementação aqui
}

console.log(hasDirectedCycle(4, [[0,1],[1,2],[2,3],[3,1]])); // Esperado: true
// #endregion

// #region EXERCÍCIO 131 — Ordenação topológica
/*
CATEGORIA: Graph / Topological Sort
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Aprender Kahn e dependências por indegree.

ENTRADA DE EXEMPLO:
topologicalSort(4, [[0,1],[0,2],[1,3],[2,3]])

SAÍDA ESPERADA:
[0,1,2,3]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
ciclo; vários nós de indegree 0

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function topologicalSort(n, edges) {
  // Insira sua implementação aqui
}

console.log(topologicalSort(4, [[0,1],[0,2],[1,3],[2,3]])); // Esperado: [0,1,2,3]
// #endregion

// #region EXERCÍCIO 132 — Course Schedule
/*
CATEGORIA: Graph / Topological Sort
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Reconhecer dependências como DAG e detectar impossibilidade.

ENTRADA DE EXEMPLO:
canFinishCourses(2, [[1,0]])

SAÍDA ESPERADA:
true

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
ciclo; sem pré-requisitos

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function canFinishCourses(numCourses, prerequisites) {
  // Insira sua implementação aqui
}

console.log(canFinishCourses(2, [[1,0]])); // Esperado: true
// #endregion

// #region EXERCÍCIO 133 — Dijkstra - menor caminho ponderado
/*
CATEGORIA: Graph / Dijkstra
DIFICULDADE: Hard

OBJETIVO DO EXERCÍCIO:
Aprender relaxamento com min-heap em pesos não negativos.

ENTRADA DE EXEMPLO:
dijkstra(5, [[0,1,4],[0,2,1],[2,1,2],[1,3,1],[2,3,5],[3,4,3]], 0)

SAÍDA ESPERADA:
[0,3,1,4,7]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
vértice inalcançável; múltiplas arestas

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function dijkstra(n, edges, source) {
  // Insira sua implementação aqui
}

console.log(dijkstra(5, [[0,1,4],[0,2,1],[2,1,2],[1,3,1],[2,3,5],[3,4,3]], 0)); // Esperado: [0,3,1,4,7]
// #endregion

// #region EXERCÍCIO 134 — Prim - Minimum Spanning Tree
/*
CATEGORIA: Graph / MST / Heap
DIFICULDADE: Hard

OBJETIVO DO EXERCÍCIO:
Aprender uma segunda estratégia de MST, expandindo a árvore pela aresta mais barata.

ENTRADA DE EXEMPLO:
primMST(4, [[0,1,1],[0,2,4],[1,2,2],[1,3,5],[2,3,3]])

SAÍDA ESPERADA:
6

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
um vértice; grafo desconexo; arestas paralelas

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function primMST(n, edges) {
  // Insira sua implementação aqui
}

console.log(primMST(4, [[0,1,1],[0,2,4],[1,2,2],[1,3,5],[2,3,3]])); // Esperado: 6
// #endregion

// #region EXERCÍCIO 135 — A* em grid
/*
CATEGORIA: Graph / A*
DIFICULDADE: Hard

OBJETIVO DO EXERCÍCIO:
Entender busca informada com heurística admissível.

ENTRADA DE EXEMPLO:
aStarGrid([[0,0,0],[1,1,0],[0,0,0]], [0,0], [2,2])

SAÍDA ESPERADA:
4

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
sem caminho; start=goal

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function aStarGrid(grid, start, goal) {
  // Insira sua implementação aqui
}

console.log(aStarGrid([[0,0,0],[1,1,0],[0,0,0]], [0,0], [2,2])); // Esperado: 4
// #endregion

// ============================================================
// 12 — DYNAMIC PROGRAMMING
// ============================================================

// #region EXERCÍCIO 136 — Climbing Stairs
/*
CATEGORIA: Dynamic Programming
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Aprender DP 1D e recorrência baseada nas últimas decisões.

ENTRADA DE EXEMPLO:
climbStairs(5)

SAÍDA ESPERADA:
8

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
n=1; n=2

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function climbStairs(n) {
  // Insira sua implementação aqui
}

console.log(climbStairs(5)); // Esperado: 8
// #endregion

// #region EXERCÍCIO 137 — House Robber
/*
CATEGORIA: Dynamic Programming
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Aprender DP de escolha com restrição de adjacência.

ENTRADA DE EXEMPLO:
houseRobber([2,7,9,3,1])

SAÍDA ESPERADA:
12

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
array vazio; uma casa

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function houseRobber(nums) {
  // Insira sua implementação aqui
}

console.log(houseRobber([2,7,9,3,1])); // Esperado: 12
// #endregion

// #region EXERCÍCIO 138 — Best Time to Buy and Sell Stock com cooldown
/*
CATEGORIA: Dynamic Programming / State Machine
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Aprender DP por estados: hold, sold e rest.

ENTRADA DE EXEMPLO:
stockWithCooldown([1,2,3,0,2])

SAÍDA ESPERADA:
3

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
array vazio; preços decrescentes; um dia

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function stockWithCooldown(prices) {
  // Insira sua implementação aqui
}

console.log(stockWithCooldown([1,2,3,0,2])); // Esperado: 3
// #endregion

// #region EXERCÍCIO 139 — Coin Change - mínimo de moedas
/*
CATEGORIA: Dynamic Programming
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Aprender DP de minimização sobre valores alcançáveis.

ENTRADA DE EXEMPLO:
coinChange([1,2,5], 11)

SAÍDA ESPERADA:
3

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
amount=0; impossível

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function coinChange(coins, amount) {
  // Insira sua implementação aqui
}

console.log(coinChange([1,2,5], 11)); // Esperado: 3
// #endregion

// #region EXERCÍCIO 140 — Número de formas de Coin Change
/*
CATEGORIA: Dynamic Programming
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Diferenciar combinação de moedas de permutação.

ENTRADA DE EXEMPLO:
coinChangeWays([1,2,5], 5)

SAÍDA ESPERADA:
4

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
amount=0; sem moedas

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function coinChangeWays(coins, amount) {
  // Insira sua implementação aqui
}

console.log(coinChangeWays([1,2,5], 5)); // Esperado: 4
// #endregion

// #region EXERCÍCIO 141 — Longest Increasing Subsequence
/*
CATEGORIA: Dynamic Programming
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Aprender DP de subsequência e depois reconhecer otimização por binary search.

ENTRADA DE EXEMPLO:
lengthOfLIS([10,9,2,5,3,7,101,18])

SAÍDA ESPERADA:
4

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
decrescente; duplicados

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function lengthOfLIS(nums) {
  // Insira sua implementação aqui
}

console.log(lengthOfLIS([10,9,2,5,3,7,101,18])); // Esperado: 4
// #endregion

// #region EXERCÍCIO 142 — Longest Common Subsequence
/*
CATEGORIA: Dynamic Programming 2D
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Aprender DP em dois índices comparando prefixos.

ENTRADA DE EXEMPLO:
longestCommonSubsequence("abcde", "ace")

SAÍDA ESPERADA:
3

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
uma string vazia; strings iguais

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function longestCommonSubsequence(a, b) {
  // Insira sua implementação aqui
}

console.log(longestCommonSubsequence("abcde", "ace")); // Esperado: 3
// #endregion

// #region EXERCÍCIO 143 — 0/1 Knapsack
/*
CATEGORIA: Dynamic Programming
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Aprender escolha usar/não usar item com capacidade limitada.

ENTRADA DE EXEMPLO:
knapsack01([1,3,4,5], [1,4,5,7], 7)

SAÍDA ESPERADA:
9

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
capacidade 0; item maior que capacidade

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function knapsack01(weights, values, capacity) {
  // Insira sua implementação aqui
}

console.log(knapsack01([1,3,4,5], [1,4,5,7], 7)); // Esperado: 9
// #endregion

// #region EXERCÍCIO 144 — Partition Equal Subset Sum
/*
CATEGORIA: Dynamic Programming
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Transformar particionamento em subset sum.

ENTRADA DE EXEMPLO:
canPartition([1,5,11,5])

SAÍDA ESPERADA:
true

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
soma ímpar; zeros

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function canPartition(nums) {
  // Insira sua implementação aqui
}

console.log(canPartition([1,5,11,5])); // Esperado: true
// #endregion

// #region EXERCÍCIO 145 — Target Sum
/*
CATEGORIA: Dynamic Programming / HashMap
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Praticar DP de contagem quando cada elemento gera duas transições (+ e -).

ENTRADA DE EXEMPLO:
targetSumWays([1,1,1,1,1], 3)

SAÍDA ESPERADA:
5

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
zeros; target negativo; nenhuma solução

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function targetSumWays(nums, target) {
  // Insira sua implementação aqui
}

console.log(targetSumWays([1,1,1,1,1], 3)); // Esperado: 5
// #endregion

// #region EXERCÍCIO 146 — Unique Paths
/*
CATEGORIA: Dynamic Programming 2D
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Aprender DP em grid quando movimentos vêm de cima/esquerda.

ENTRADA DE EXEMPLO:
uniquePaths(3, 7)

SAÍDA ESPERADA:
28

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
1x1; uma linha

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function uniquePaths(m, n) {
  // Insira sua implementação aqui
}

console.log(uniquePaths(3, 7)); // Esperado: 28
// #endregion

// #region EXERCÍCIO 147 — Minimum Path Sum
/*
CATEGORIA: Dynamic Programming 2D
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Praticar minimização em grid.

ENTRADA DE EXEMPLO:
minPathSum([[1,3,1],[1,5,1],[4,2,1]])

SAÍDA ESPERADA:
7

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
1x1; uma linha/coluna

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function minPathSum(grid) {
  // Insira sua implementação aqui
}

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]])); // Esperado: 7
// #endregion

// #region EXERCÍCIO 148 — Word Break
/*
CATEGORIA: Dynamic Programming
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Aprender DP de segmentação de string.

ENTRADA DE EXEMPLO:
wordBreak("leetcode", ["leet","code"])

SAÍDA ESPERADA:
true

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
string vazia; prefixos sobrepostos

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function wordBreak(s, wordDict) {
  // Insira sua implementação aqui
}

console.log(wordBreak("leetcode", ["leet","code"])); // Esperado: true
// #endregion

// #region EXERCÍCIO 149 — Decode Ways
/*
CATEGORIA: Dynamic Programming
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Praticar recorrência baseada em 1 ou 2 caracteres válidos.

ENTRADA DE EXEMPLO:
numDecodings("226")

SAÍDA ESPERADA:
3

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
começa com 0; contém 10/20; vazia

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function numDecodings(s) {
  // Insira sua implementação aqui
}

console.log(numDecodings("226")); // Esperado: 3
// #endregion

// ============================================================
// 13 — TRIE, DSU, BIT E ESTRUTURAS AVANÇADAS
// ============================================================

// #region EXERCÍCIO 150 — Trie - inserir e buscar palavras
/*
CATEGORIA: Trie
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Aprender árvore de prefixos e custo proporcional ao tamanho da chave.

ENTRADA DE EXEMPLO:
trieOperations([["insert","cat"],["insert","car"],["search","cat"],["search","can"],["prefix","ca"]])

SAÍDA ESPERADA:
[true,false,true]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
palavra vazia; prefixo igual à palavra

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function trieOperations(operations) {
  // Insira sua implementação aqui
}

console.log(trieOperations([["insert","cat"],["insert","car"],["search","cat"],["search","can"],["prefix","ca"]])); // Esperado: [true,false,true]
// #endregion

// #region EXERCÍCIO 151 — Union-Find - componentes após uniões
/*
CATEGORIA: Disjoint Set Union
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Aprender parent, rank/size, path compression e union by rank.

ENTRADA DE EXEMPLO:
unionFindComponents(5, [[0,1],[1,2],[3,4]])

SAÍDA ESPERADA:
2

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
união repetida; self union

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function unionFindComponents(n, unions) {
  // Insira sua implementação aqui
}

console.log(unionFindComponents(5, [[0,1],[1,2],[3,4]])); // Esperado: 2
// #endregion

// #region EXERCÍCIO 152 — Single Number com XOR
/*
CATEGORIA: Bit Manipulation
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Aprender propriedades x^x=0 e x^0=x.

ENTRADA DE EXEMPLO:
singleNumber([4,1,2,1,2])

SAÍDA ESPERADA:
4

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
um elemento; negativos

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function singleNumber(nums) {
  // Insira sua implementação aqui
}

console.log(singleNumber([4,1,2,1,2])); // Esperado: 4
// #endregion

// #region EXERCÍCIO 153 — Missing Number com XOR
/*
CATEGORIA: Bit Manipulation
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Aplicar propriedades de XOR para cancelar pares e encontrar o valor ausente.

ENTRADA DE EXEMPLO:
missingNumberXor([3,0,1])

SAÍDA ESPERADA:
2

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
ausente = 0; ausente = n; um elemento

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function missingNumberXor(nums) {
  // Insira sua implementação aqui
}

console.log(missingNumberXor([3,0,1])); // Esperado: 2
// #endregion

// #region EXERCÍCIO 154 — Contar bits 1
/*
CATEGORIA: Bit Manipulation
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Aprender técnica n & (n-1) para remover o bit 1 menos significativo.

ENTRADA DE EXEMPLO:
countSetBits(13)

SAÍDA ESPERADA:
3

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
n=0; potência de 2

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function countSetBits(n) {
  // Insira sua implementação aqui
}

console.log(countSetBits(13)); // Esperado: 3
// #endregion

// #region EXERCÍCIO 155 — Gerar subconjuntos com bitmask
/*
CATEGORIA: Bit Manipulation
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Relacionar bits de uma máscara às decisões incluir/não incluir elementos.

ENTRADA DE EXEMPLO:
subsetsBitmask([1,2,3])

SAÍDA ESPERADA:
[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
array vazio; um elemento

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function subsetsBitmask(nums) {
  // Insira sua implementação aqui
}

console.log(subsetsBitmask([1,2,3])); // Esperado: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// #endregion

// #region EXERCÍCIO 156 — Fenwick Tree - somas de prefixo
/*
CATEGORIA: Fenwick Tree
DIFICULDADE: Hard

OBJETIVO DO EXERCÍCIO:
Aprender estrutura para update pontual e prefix/range sum em O(log n).

ENTRADA DE EXEMPLO:
fenwickQueries([1,2,3,4,5], [["sum",1,3],["add",2,5],["sum",1,3]])

SAÍDA ESPERADA:
[9,14]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
índice 0; range completo; múltiplos updates

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function fenwickQueries(arr, operations) {
  // Insira sua implementação aqui
}

console.log(fenwickQueries([1,2,3,4,5], [["sum",1,3],["add",2,5],["sum",1,3]])); // Esperado: [9,14]
// #endregion

// #region EXERCÍCIO 157 — Segment Tree - mínimo em intervalo
/*
CATEGORIA: Segment Tree
DIFICULDADE: Hard

OBJETIVO DO EXERCÍCIO:
Aprender árvore de intervalos para query e update logarítmicos.

ENTRADA DE EXEMPLO:
segmentTreeMin([5,2,6,3,1,7], [["min",1,4],["set",4,8],["min",1,4]])

SAÍDA ESPERADA:
[1,2]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
um elemento; query total

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function segmentTreeMin(arr, operations) {
  // Insira sua implementação aqui
}

console.log(segmentTreeMin([5,2,6,3,1,7], [["min",1,4],["set",4,8],["min",1,4]])); // Esperado: [1,2]
// #endregion

// #region EXERCÍCIO 158 — LRU Cache
/*
CATEGORIA: HashMap + Doubly Linked List
DIFICULDADE: Hard

OBJETIVO DO EXERCÍCIO:
Entender combinação de hash O(1) com lista duplamente ligada para recência.

ENTRADA DE EXEMPLO:
lruCacheSimulation(2, [["put",1,1],["put",2,2],["get",1],["put",3,3],["get",2],["get",3]])

SAÍDA ESPERADA:
[1,-1,3]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
capacity=1; atualizar chave existente

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function lruCacheSimulation(capacity, operations) {
  // Insira sua implementação aqui
}

console.log(lruCacheSimulation(2, [["put",1,1],["put",2,2],["get",1],["put",3,3],["get",2],["get",3]])); // Esperado: [1,-1,3]
// #endregion

// #region EXERCÍCIO 159 — KMP - encontrar padrão
/*
CATEGORIA: String Algorithms / KMP
DIFICULDADE: Hard

OBJETIVO DO EXERCÍCIO:
Aprender prefix function/LPS para evitar retrocessos no texto.

ENTRADA DE EXEMPLO:
kmpSearch("abxabcabcaby", "abcaby")

SAÍDA ESPERADA:
6

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
pattern vazio; não encontrado; sobreposição

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function kmpSearch(text, pattern) {
  // Insira sua implementação aqui
}

console.log(kmpSearch("abxabcabcaby", "abcaby")); // Esperado: 6
// #endregion

// #region EXERCÍCIO 160 — Rabin-Karp - busca por rolling hash
/*
CATEGORIA: String Algorithms / Rolling Hash
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Aprender rolling hash para comparar janelas de string sem recalcular tudo.

ENTRADA DE EXEMPLO:
rabinKarpSearch("abracadabra", "cada")

SAÍDA ESPERADA:
4

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
padrão vazio; padrão maior; colisão de hash

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function rabinKarpSearch(text, pattern) {
  // Insira sua implementação aqui
}

console.log(rabinKarpSearch("abracadabra", "cada")); // Esperado: 4
// #endregion

// ============================================================
// 14 — ALGORITMOS HARD / EXTREME HARD
// ============================================================

// #region EXERCÍCIO 161 — Bellman-Ford com detecção de ciclo negativo
/*
CATEGORIA: Graph / Bellman-Ford
DIFICULDADE: Hard

OBJETIVO DO EXERCÍCIO:
Aprender relaxamento global que suporta pesos negativos.

ENTRADA DE EXEMPLO:
bellmanFord(5, [[0,1,6],[0,2,7],[1,2,8],[1,3,5],[1,4,-4],[2,3,-3],[2,4,9],[3,1,-2],[4,3,7],[4,0,2]], 0)

SAÍDA ESPERADA:
{"dist":[0,2,7,4,-2],"negativeCycle":false}

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
vértice inalcançável; ciclo negativo

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function bellmanFord(n, edges, source) {
  // Insira sua implementação aqui
}

console.log(bellmanFord(5, [[0,1,6],[0,2,7],[1,2,8],[1,3,5],[1,4,-4],[2,3,-3],[2,4,9],[3,1,-2],[4,3,7],[4,0,2]], 0)); // Esperado: {"dist":[0,2,7,4,-2],"negativeCycle":false}
// #endregion

// #region EXERCÍCIO 162 — Floyd-Warshall
/*
CATEGORIA: Graph / All-Pairs Shortest Path
DIFICULDADE: Hard

OBJETIVO DO EXERCÍCIO:
Aprender DP sobre vértices intermediários para todos os pares.

ENTRADA DE EXEMPLO:
floydWarshall([[0,3,null,7],[8,0,2,null],[5,null,0,1],[2,null,null,0]])

SAÍDA ESPERADA:
[[0,3,5,6],[5,0,2,3],[3,6,0,1],[2,5,7,0]]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
grafo desconexo; diagonal zero

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function floydWarshall(matrix) {
  // Insira sua implementação aqui
}

console.log(floydWarshall([[0,3,null,7],[8,0,2,null],[5,null,0,1],[2,null,null,0]])); // Esperado: [[0,3,5,6],[5,0,2,3],[3,6,0,1],[2,5,7,0]]
// #endregion

// #region EXERCÍCIO 163 — Kosaraju - componentes fortemente conexas
/*
CATEGORIA: Graph / SCC
DIFICULDADE: Hard

OBJETIVO DO EXERCÍCIO:
Aprender SCC com ordem de término e grafo transposto.

ENTRADA DE EXEMPLO:
stronglyConnectedComponents(5, [[1,0],[0,2],[2,1],[0,3],[3,4]])

SAÍDA ESPERADA:
[[0,1,2],[3],[4]]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
DAG; uma SCC única

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function stronglyConnectedComponents(n, edges) {
  // Insira sua implementação aqui
}

console.log(stronglyConnectedComponents(5, [[1,0],[0,2],[2,1],[0,3],[3,4]])); // Esperado: [[0,1,2],[3],[4]]
// #endregion

// #region EXERCÍCIO 164 — Kruskal - Minimum Spanning Tree
/*
CATEGORIA: Graph / MST / DSU
DIFICULDADE: Hard

OBJETIVO DO EXERCÍCIO:
Combinar ordenação de arestas com Union-Find.

ENTRADA DE EXEMPLO:
kruskalMST(4, [[0,1,10],[0,2,6],[0,3,5],[1,3,15],[2,3,4]])

SAÍDA ESPERADA:
19

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
grafo desconexo; pesos iguais

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function kruskalMST(n, edges) {
  // Insira sua implementação aqui
}

console.log(kruskalMST(4, [[0,1,10],[0,2,6],[0,3,5],[1,3,15],[2,3,4]])); // Esperado: 19
// #endregion

// #region EXERCÍCIO 165 — Edit Distance
/*
CATEGORIA: Dynamic Programming
DIFICULDADE: Hard

OBJETIVO DO EXERCÍCIO:
Aprender DP clássica com inserir, remover e substituir.

ENTRADA DE EXEMPLO:
editDistance("horse", "ros")

SAÍDA ESPERADA:
3

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
string vazia; strings iguais

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function editDistance(a, b) {
  // Insira sua implementação aqui
}

console.log(editDistance("horse", "ros")); // Esperado: 3
// #endregion

// #region EXERCÍCIO 166 — Regex Matching com . e *
/*
CATEGORIA: Dynamic Programming
DIFICULDADE: Extreme Hard

OBJETIVO DO EXERCÍCIO:
Praticar DP de matching com operador que representa zero ou múltiplas ocorrências.

ENTRADA DE EXEMPLO:
regexMatch("aab", "c*a*b")

SAÍDA ESPERADA:
true

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
string vazia; padrão com múltiplos *

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function regexMatch(s, p) {
  // Insira sua implementação aqui
}

console.log(regexMatch("aab", "c*a*b")); // Esperado: true
// #endregion

// #region EXERCÍCIO 167 — Burst Balloons
/*
CATEGORIA: Interval Dynamic Programming
DIFICULDADE: Extreme Hard

OBJETIVO DO EXERCÍCIO:
Aprender DP de intervalos escolhendo o último elemento processado.

ENTRADA DE EXEMPLO:
burstBalloons([3,1,5,8])

SAÍDA ESPERADA:
167

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
array vazio; um balão

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function burstBalloons(nums) {
  // Insira sua implementação aqui
}

console.log(burstBalloons([3,1,5,8])); // Esperado: 167
// #endregion

// #region EXERCÍCIO 168 — Edmonds-Karp - Maximum Flow
/*
CATEGORIA: Graph / Max Flow
DIFICULDADE: Extreme Hard

OBJETIVO DO EXERCÍCIO:
Aprender rede residual, caminhos aumentantes e capacidade reversa.

ENTRADA DE EXEMPLO:
maxFlow(6, [[0,1,16],[0,2,13],[1,2,10],[2,1,4],[1,3,12],[3,2,9],[2,4,14],[4,3,7],[3,5,20],[4,5,4]], 0, 5)

SAÍDA ESPERADA:
23

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
sem caminho; múltiplas arestas; capacidades zero

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function maxFlow(n, edges, source, sink) {
  // Insira sua implementação aqui
}

console.log(maxFlow(6, [[0,1,16],[0,2,13],[1,2,10],[2,1,4],[1,3,12],[3,2,9],[2,4,14],[4,3,7],[3,5,20],[4,5,4]], 0, 5)); // Esperado: 23
// #endregion

// ============================================================
// 15 — MATA40 & MATA54 CONCEITOS ACADÊMICOS E DE BAIXO NÍVEL
// ============================================================

// #region EXERCÍCIO 169 — TAD Lista Sequencial com Limite e Shift
/*
CATEGORIA: Fundamentos / Listas Sequenciais
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Implementar o TAD clássico de Lista Sequencial (array estático com capacidade fixa),
tratando Overflow na inserção e Underflow/índice inválido na remoção, com shift de elementos.

ENTRADA DE EXEMPLO:
const list = new StaticArrayList(3);
list.insertAt(0, 10);
list.insertAt(1, 20);
list.insertAt(1, 15);
list.removeAt(0);
list.get(0)

SAÍDA ESPERADA:
15

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
lista cheia (overflow); índice inválido (underflow); remoção em lista vazia; inserção/remoção nas extremidades

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
class StaticArrayList {
  constructor(capacity) {
    // Insira sua implementação aqui
  }

  insertAt(index, val) {
    // Insira sua implementação aqui
  }

  removeAt(index) {
    // Insira sua implementação aqui
  }

  get(index) {
    // Insira sua implementação aqui
  }

  size() {
    // Insira sua implementação aqui
  }
}

const list169 = new StaticArrayList(3);
list169.insertAt(0, 10);
list169.insertAt(1, 20);
list169.insertAt(1, 15);
list169.removeAt(0);
console.log(list169.get(0)); // Esperado: 15
// #endregion

// #region EXERCÍCIO 170 — Duas Pilhas em um Único Vetor (Two Stacks)
/*
CATEGORIA: Stack
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Implementar duas pilhas independentes compartilhando um único vetor de capacidade fixa,
crescendo a partir de extremidades opostas, detectando overflow quando os topos se encontram.

ENTRADA DE EXEMPLO:
const ts = new TwoStacksOneArray(5);
ts.push1(1);
ts.push1(2);
ts.push2(9);
ts.pop1()

SAÍDA ESPERADA:
2

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
overflow (top1 + 1 === top2); pop em pilha vazia; capacidade 0 ou 1

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
class TwoStacksOneArray {
  constructor(capacity) {
    // Insira sua implementação aqui
  }

  push1(val) {
    // Insira sua implementação aqui
  }

  push2(val) {
    // Insira sua implementação aqui
  }

  pop1() {
    // Insira sua implementação aqui
  }

  pop2() {
    // Insira sua implementação aqui
  }
}

const ts170 = new TwoStacksOneArray(5);
ts170.push1(1);
ts170.push1(2);
ts170.push2(9);
console.log(ts170.pop1()); // Esperado: 2
// #endregion

// #region EXERCÍCIO 171 — Fila Circular Sequencial com Aritmética Modular
/*
CATEGORIA: Queue
DIFICULDADE: Easy

OBJETIVO DO EXERCÍCIO:
Implementar uma fila circular usando um vetor de tamanho fixo, controlando front, rear e
count com aritmética modular para reaproveitar os espaços liberados.

ENTRADA DE EXEMPLO:
const q = new CircularArrayQueue(3);
q.enqueue(1);
q.enqueue(2);
q.dequeue();
q.enqueue(3);
q.enqueue(4);
q.dequeue()

SAÍDA ESPERADA:
2

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
fila cheia (isFull); fila vazia (isEmpty); wrap-around do índice rear/front

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
class CircularArrayQueue {
  constructor(capacity) {
    // Insira sua implementação aqui
  }

  enqueue(val) {
    // Insira sua implementação aqui
  }

  dequeue() {
    // Insira sua implementação aqui
  }

  isFull() {
    // Insira sua implementação aqui
  }

  isEmpty() {
    // Insira sua implementação aqui
  }
}

const q171 = new CircularArrayQueue(3);
q171.enqueue(1);
q171.enqueue(2);
q171.dequeue();
q171.enqueue(3);
q171.enqueue(4);
console.log(q171.dequeue()); // Esperado: 2
// #endregion

// #region EXERCÍCIO 172 — Lista Simplesmente Encadeada com Nó Header
/*
CATEGORIA: Linked List
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Implementar uma lista simplesmente encadeada ordenada usando um nó header (sentinela)
fictício, evitando tratamentos especiais para inserção/remoção na cabeça da lista.

ENTRADA DE EXEMPLO:
const l = new HeaderSinglyLinkedList();
l.insertSorted(5);
l.insertSorted(2);
l.insertSorted(8);
l.toArray()

SAÍDA ESPERADA:
[2, 5, 8]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
lista vazia; valor duplicado; remoção de valor inexistente; remoção do único elemento

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
class HeaderSinglyLinkedList {
  constructor() {
    // Insira sua implementação aqui (nó header fictício: { val: null, next: null })
  }

  insertSorted(val) {
    // Insira sua implementação aqui
  }

  removeVal(val) {
    // Insira sua implementação aqui
  }

  search(val) {
    // Insira sua implementação aqui
  }

  toArray() {
    // Insira sua implementação aqui
  }
}

const l172 = new HeaderSinglyLinkedList();
l172.insertSorted(5);
l172.insertSorted(2);
l172.insertSorted(8);
console.log(l172.toArray()); // Esperado: [2, 5, 8]
// #endregion

// #region EXERCÍCIO 173 — Lista Duplamente Encadeada Circular com Nó Header
/*
CATEGORIA: Linked List
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Implementar uma lista duplamente encadeada circular com nó header (sentinela), de modo
que header.next aponte para o primeiro elemento e header.prev para o último.

ENTRADA DE EXEMPLO:
const l = new HeaderCircularDoublyLinkedList();
l.insertTail(1);
l.insertTail(2);
l.insertHead(0);
l.toArray()

SAÍDA ESPERADA:
[0, 1, 2]

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
lista vazia; remoção do único elemento; remoção de valor inexistente; circularidade (header conectado nas duas pontas)

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
class HeaderCircularDoublyLinkedList {
  constructor() {
    // Insira sua implementação aqui (nó header fictício: { val: null, prev: header, next: header })
  }

  insertHead(val) {
    // Insira sua implementação aqui
  }

  insertTail(val) {
    // Insira sua implementação aqui
  }

  remove(val) {
    // Insira sua implementação aqui
  }

  toArray() {
    // Insira sua implementação aqui
  }
}

const l173 = new HeaderCircularDoublyLinkedList();
l173.insertTail(1);
l173.insertTail(2);
l173.insertHead(0);
console.log(l173.toArray()); // Esperado: [0, 1, 2]
// #endregion

// #region EXERCÍCIO 174 — Percursos Iterativos em Árvore Binária usando Pilha
/*
CATEGORIA: Binary Tree
DIFICULDADE: Medium

OBJETIVO DO EXERCÍCIO:
Implementar os percursos pré-ordem, em-ordem e pós-ordem em árvore binária de forma
estritamente iterativa (sem recursão), utilizando pilhas explícitas (arrays).

ENTRADA DE EXEMPLO:
const root = { val: 1, left: { val: 2, left: null, right: null }, right: { val: 3, left: null, right: null } };
treeTraversalsIterative(root)

SAÍDA ESPERADA:
{ preorder: [1, 2, 3], inorder: [2, 1, 3], postorder: [2, 3, 1] }

RACIOCÍNIO / EXPLICAÇÃO EM PAIR PROGRAMMING:
[PREENCHA ANTES DE CODIFICAR — explique como em um pair programming]

EDGE CASES ESPERADOS:
árvore vazia (null); árvore só com raiz; árvore desbalanceada (apenas filhos à esquerda ou à direita)

COMPLEXIDADE DE TEMPO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
[PREENCHA A JUSTIFICATIVA]

COMPLEXIDADE DE ESPAÇO:
[PREENCHA]

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
[PREENCHA A JUSTIFICATIVA]
*/
function treeTraversalsIterative(root) {
  // Insira sua implementação aqui
}

const root174 = { val: 1, left: { val: 2, left: null, right: null }, right: { val: 3, left: null, right: null } };
console.log(treeTraversalsIterative(root174)); // Esperado: { preorder: [1, 2, 3], inorder: [2, 1, 3], postorder: [2, 3, 1] }
// #endregion

// #region EXERCÍCIO 175 — Árvore AVL — Rotações e Rebalanceamento
/* CATEGORIA: Binary Tree / AVL | DIFICULDADE: Hard | OBJETIVO: Implementar uma AVL com rotações e rebalanceamento. */
class AVLTree { constructor() {} getHeight(node) {} getBalance(node) {} rotateRight(y) {} rotateLeft(x) {} insert(val) {} toInOrder() {} }
const avl175 = new AVLTree(); [30,20,10,25,28].forEach((value) => avl175.insert(value)); console.log(avl175.toInOrder()); // Esperado: [10, 20, 25, 28, 30]
// #endregion
// #region EXERCÍCIO 176 — Heapsort In-Place em Vetor
/* CATEGORIA: Sorting / Heap | DIFICULDADE: Medium | OBJETIVO: Ordenar in-place usando Max-Heap e heapify. */
function heapSort(arr) {}
console.log(heapSort([4,10,3,5,1])); // Esperado: [1, 3, 4, 5, 10]
// #endregion
// #region EXERCÍCIO 177 — Tabela Hash com Endereçamento Aberto
/* CATEGORIA: Hash Table | DIFICULDADE: Medium | OBJETIVO: Implementar sondagem linear com tombstones. */
class OpenAddressingHashTable { constructor(capacity) {} insert(key,val) {} search(key) {} remove(key) {} }
const table177=new OpenAddressingHashTable(5); table177.insert("ana",10); console.log(table177.search("ana")); // Esperado: 10
// #endregion
// #region EXERCÍCIO 178 — Hashing Extensível (Diretório e Páginas)
/* CATEGORIA: Advanced Data Structures / Hashing | DIFICULDADE: Hard | OBJETIVO: Implementar diretório e páginas expansíveis. */
class ExtendibleHashing { constructor(pageCapacity) {} insert(key) {} search(key) {} }
const hash178=new ExtendibleHashing(2); [1,3,5,7].forEach((key)=>hash178.insert(key)); console.log(hash178.search(5)); // Esperado: true
// #endregion
// #region EXERCÍCIO 179 — Árvore B — Inserção e Split de Nó
/* CATEGORIA: Advanced Data Structures / B-Tree | DIFICULDADE: Hard | OBJETIVO: Implementar inserção, busca e splitChild em Árvore B. */
class BTree { constructor(t) {} search(key) {} insert(key) {} splitChild(parent,index) {} }
const tree179=new BTree(2); [10,20,5,6,12,30,7,17].forEach((key)=>tree179.insert(key)); console.log(tree179.search(6)); // Esperado: true
// #endregion
// #region EXERCÍCIO 180 — Codificação de Huffman (Compressão de Dados)
/* CATEGORIA: Greedy / Compression | DIFICULDADE: Hard | OBJETIVO: Construir códigos de Huffman, codificar e decodificar um texto. */
function huffmanEncoding(text) {}
console.log(huffmanEncoding("banana")); // Esperado: decodedText igual a "banana"
// #endregion
