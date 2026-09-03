/*
BATERIA COMPLETA DE DSA EM JAVASCRIPT

Objetivo: sair dos fundamentos de lógica/Big-O e avançar até estruturas e algoritmos de nível Hard/Extreme Hard.
Total de exercícios: 128

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
// 01 — FUNDAMENTOS, LÓGICA E BIG-O
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

// #region EXERCÍCIO 004 — Contar de 1 até N
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

// #region EXERCÍCIO 005 — Somar elementos de um array
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

// #region EXERCÍCIO 006 — Encontrar maior valor do array
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

// #region EXERCÍCIO 007 — Contar ocorrências de um valor
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

// #region EXERCÍCIO 008 — Inverter string sem reverse
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

// #region EXERCÍCIO 009 — Fatorial iterativo
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

// #region EXERCÍCIO 010 — Comparar crescimento de loops
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

// #region EXERCÍCIO 011 — Índice do primeiro alvo
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

// #region EXERCÍCIO 012 — Remover duplicados preservando ordem
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

// #region EXERCÍCIO 013 — Mover zeros para o final
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

// #region EXERCÍCIO 014 — Segundo maior distinto
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

// #region EXERCÍCIO 015 — Rotacionar array à direita K posições
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

// #region EXERCÍCIO 016 — Verificar palíndromo simples
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

// #region EXERCÍCIO 017 — Maior prefixo comum
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

// #region EXERCÍCIO 018 — Compressão simples de string
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

// #region EXERCÍCIO 019 — Produto do array exceto o próprio índice
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

// #region EXERCÍCIO 020 — Maior subarray por soma
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

// #region EXERCÍCIO 021 — Contagem de frequência
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

// #region EXERCÍCIO 022 — Contém duplicado
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

// #region EXERCÍCIO 023 — Anagrama válido
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

// #region EXERCÍCIO 024 — Interseção única de arrays
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

// #region EXERCÍCIO 025 — Two Sum
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

// #region EXERCÍCIO 026 — Primeiro caractere não repetido
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

// #region EXERCÍCIO 027 — Agrupar anagramas
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

// #region EXERCÍCIO 028 — Maior sequência consecutiva
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


// ============================================================
// 04 — TWO POINTERS E SLIDING WINDOW
// ============================================================

// #region EXERCÍCIO 029 — Remover duplicados de array ordenado
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

// #region EXERCÍCIO 030 — Par com soma em array ordenado
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

// #region EXERCÍCIO 031 — Palíndromo ignorando símbolos
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

// #region EXERCÍCIO 032 — 3Sum
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

// #region EXERCÍCIO 033 — Maior área entre linhas
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

// #region EXERCÍCIO 034 — Maior soma de janela fixa K
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

// #region EXERCÍCIO 035 — Maior substring sem repetição
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

// #region EXERCÍCIO 036 — Menor substring contendo padrão
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

// #region EXERCÍCIO 037 — Parênteses válidos
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

// #region EXERCÍCIO 038 — Remover adjacentes duplicados
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

// #region EXERCÍCIO 039 — Avaliar expressão pós-fixa
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

// #region EXERCÍCIO 040 — Próximo elemento maior
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

// #region EXERCÍCIO 041 — Temperaturas diárias
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

// #region EXERCÍCIO 042 — Fila usando duas pilhas
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

// #region EXERCÍCIO 043 — Máximo em cada janela
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

// #region EXERCÍCIO 044 — Maior retângulo no histograma
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

// #region EXERCÍCIO 045 — Criar lista encadeada a partir de array
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

// #region EXERCÍCIO 046 — Inverter lista encadeada
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

// #region EXERCÍCIO 047 — Encontrar nó do meio
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

// #region EXERCÍCIO 048 — Detectar ciclo em lista
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

// #region EXERCÍCIO 049 — Mesclar duas listas ordenadas
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

// #region EXERCÍCIO 050 — Remover N-ésimo nó a partir do fim
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

// #region EXERCÍCIO 051 — Verificar palíndromo em lista
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

// #region EXERCÍCIO 052 — Mesclar K listas ordenadas
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

// #region EXERCÍCIO 053 — Bubble Sort
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

// #region EXERCÍCIO 054 — Insertion Sort
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

// #region EXERCÍCIO 055 — Merge Sort
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

// #region EXERCÍCIO 056 — Quick Sort
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

// #region EXERCÍCIO 057 — Busca binária
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

// #region EXERCÍCIO 058 — Primeira ocorrência por busca binária
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

// #region EXERCÍCIO 059 — Buscar em array rotacionado
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

// #region EXERCÍCIO 060 — Mediana de dois arrays ordenados
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

// #region EXERCÍCIO 061 — Fatorial recursivo
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

// #region EXERCÍCIO 062 — Fibonacci com memoização
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

// #region EXERCÍCIO 063 — Gerar todas as subsequências
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

// #region EXERCÍCIO 064 — Permutações
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

// #region EXERCÍCIO 065 — Combinações de N escolha K
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

// #region EXERCÍCIO 066 — Combination Sum
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

// #region EXERCÍCIO 067 — Resolver N-Queens
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

// #region EXERCÍCIO 068 — Sudoku Solver
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

// #region EXERCÍCIO 069 — Percurso pré-ordem de árvore binária
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

// #region EXERCÍCIO 070 — Percurso em ordem
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

// #region EXERCÍCIO 071 — Percurso por níveis
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

// #region EXERCÍCIO 072 — Altura máxima da árvore
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

// #region EXERCÍCIO 073 — Inverter árvore binária
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

// #region EXERCÍCIO 074 — Verificar árvore balanceada
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

// #region EXERCÍCIO 075 — Diâmetro da árvore binária
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

// #region EXERCÍCIO 076 — Validar BST
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

// #region EXERCÍCIO 077 — K-ésimo menor em BST
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

// #region EXERCÍCIO 078 — Menor ancestral comum em BST
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

// #region EXERCÍCIO 079 — Construir BST balanceada de array ordenado
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

// #region EXERCÍCIO 080 — Serializar e desserializar árvore
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


// ============================================================
// 10 — HEAP, GREEDY E INTERVALS
// ============================================================

// #region EXERCÍCIO 081 — K maiores elementos
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

// #region EXERCÍCIO 082 — K-ésimo maior elemento
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

// #region EXERCÍCIO 083 — Top K palavras frequentes
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

// #region EXERCÍCIO 084 — Selecionar máximo de atividades
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

// #region EXERCÍCIO 085 — Mesclar intervalos
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

// #region EXERCÍCIO 086 — Inserir intervalo
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

// #region EXERCÍCIO 087 — Mínimo de salas de reunião
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

// #region EXERCÍCIO 088 — Job Scheduling com lucro
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

// #region EXERCÍCIO 089 — Construir lista de adjacência
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

// #region EXERCÍCIO 090 — DFS em grafo
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

// #region EXERCÍCIO 091 — BFS em grafo
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

// #region EXERCÍCIO 092 — Número de componentes conexos
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

// #region EXERCÍCIO 093 — Número de ilhas
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

// #region EXERCÍCIO 094 — Menor caminho em grafo não ponderado
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

// #region EXERCÍCIO 095 — Detectar ciclo em grafo não direcionado
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

// #region EXERCÍCIO 096 — Detectar ciclo em grafo direcionado
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

// #region EXERCÍCIO 097 — Ordenação topológica
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

// #region EXERCÍCIO 098 — Course Schedule
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

// #region EXERCÍCIO 099 — Dijkstra - menor caminho ponderado
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

// #region EXERCÍCIO 100 — A* em grid
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

// #region EXERCÍCIO 101 — Climbing Stairs
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

// #region EXERCÍCIO 102 — House Robber
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

// #region EXERCÍCIO 103 — Coin Change - mínimo de moedas
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

// #region EXERCÍCIO 104 — Número de formas de Coin Change
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

// #region EXERCÍCIO 105 — Longest Increasing Subsequence
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

// #region EXERCÍCIO 106 — Longest Common Subsequence
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

// #region EXERCÍCIO 107 — 0/1 Knapsack
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

// #region EXERCÍCIO 108 — Partition Equal Subset Sum
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

// #region EXERCÍCIO 109 — Unique Paths
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

// #region EXERCÍCIO 110 — Minimum Path Sum
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

// #region EXERCÍCIO 111 — Word Break
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

// #region EXERCÍCIO 112 — Decode Ways
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

// #region EXERCÍCIO 113 — Trie - inserir e buscar palavras
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

// #region EXERCÍCIO 114 — Union-Find - componentes após uniões
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

// #region EXERCÍCIO 115 — Single Number com XOR
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

// #region EXERCÍCIO 116 — Contar bits 1
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

// #region EXERCÍCIO 117 — Fenwick Tree - somas de prefixo
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

// #region EXERCÍCIO 118 — Segment Tree - mínimo em intervalo
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

// #region EXERCÍCIO 119 — LRU Cache
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

// #region EXERCÍCIO 120 — KMP - encontrar padrão
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


// ============================================================
// 14 — ALGORITMOS HARD / EXTREME HARD
// ============================================================

// #region EXERCÍCIO 121 — Bellman-Ford com detecção de ciclo negativo
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

// #region EXERCÍCIO 122 — Floyd-Warshall
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

// #region EXERCÍCIO 123 — Kosaraju - componentes fortemente conexas
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

// #region EXERCÍCIO 124 — Kruskal - Minimum Spanning Tree
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

// #region EXERCÍCIO 125 — Edit Distance
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

// #region EXERCÍCIO 126 — Regex Matching com . e *
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

// #region EXERCÍCIO 127 — Burst Balloons
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

// #region EXERCÍCIO 128 — Edmonds-Karp - Maximum Flow
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
