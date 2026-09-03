/*
BATERIA COMPLETA DE DSA EM JAVASCRIPT

Objetivo: sair dos fundamentos de lógica/Big-O e avançar até estruturas e algoritmos de nível Hard/Extreme Hard.
Total de exercícios: 128

COMO USAR NO VS CODE
1. Abra este .txt e altere o Language Mode para JavaScript.
2. Cada exercício está entre // #region e // #endregion, permitindo recolher/expandir individualmente.
3. Na versão gabaritada, escreva primeiro o RACIOCÍNIO antes da implementação.
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
Somar diretamente os dois parâmetros e retornar o resultado.

EDGE CASES ESPERADOS:
zeros; negativos; decimais

COMPLEXIDADE DE TEMPO:
O(1)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(1) porque somar diretamente os dois parâmetros e retornar o resultado.

COMPLEXIDADE DE ESPAÇO:
O(1)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(1).
*/
function sumTwo(a, b) {
  return a + b;
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
Um inteiro é par quando o resto da divisão por 2 é zero.

EDGE CASES ESPERADOS:
0; negativos; números ímpares

COMPLEXIDADE DE TEMPO:
O(1)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(1) porque um inteiro é par quando o resto da divisão por 2 é zero.

COMPLEXIDADE DE ESPAÇO:
O(1)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(1).
*/
function isEven(n) {
  return n % 2 === 0;
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
Comparar os três valores sem precisar ordenar.

EDGE CASES ESPERADOS:
valores iguais; negativos

COMPLEXIDADE DE TEMPO:
O(1)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(1) porque comparar os três valores sem precisar ordenar.

COMPLEXIDADE DE ESPAÇO:
O(1)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(1).
*/
function maxOfThree(a, b, c) {
  return Math.max(a, b, c);
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
Percorrer de 1 até n e armazenar cada valor.

EDGE CASES ESPERADOS:
n = 0; n = 1

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque percorrer de 1 até n e armazenar cada valor.

COMPLEXIDADE DE ESPAÇO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(n).
*/
function rangeToN(n) {
  const out = [];
  for (let i = 1; i <= n; i++) out.push(i);
  return out;
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
Manter um acumulador e visitar cada posição uma única vez.

EDGE CASES ESPERADOS:
array vazio; negativos

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque manter um acumulador e visitar cada posição uma única vez.

COMPLEXIDADE DE ESPAÇO:
O(1)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(1).
*/
function sumArray(arr) {
  let total = 0;
  for (const n of arr) total += n;
  return total;
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
Inicializar com o primeiro elemento e atualizar quando surgir valor maior.

EDGE CASES ESPERADOS:
um elemento; negativos

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque inicializar com o primeiro elemento e atualizar quando surgir valor maior.

COMPLEXIDADE DE ESPAÇO:
O(1)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(1).
*/
function maxArray(arr) {
  if (!arr.length) return null;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) if (arr[i] > max) max = arr[i];
  return max;
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
Incrementar um contador sempre que o elemento for igual ao alvo.

EDGE CASES ESPERADOS:
target ausente; array vazio

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque incrementar um contador sempre que o elemento for igual ao alvo.

COMPLEXIDADE DE ESPAÇO:
O(1)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(1).
*/
function countValue(arr, target) {
  let count = 0;
  for (const value of arr) if (value === target) count++;
  return count;
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
Percorrer a string do fim para o início acumulando os caracteres.

EDGE CASES ESPERADOS:
string vazia; 1 caractere

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque percorrer a string do fim para o início acumulando os caracteres.

COMPLEXIDADE DE ESPAÇO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(n).
*/
function reverseString(str) {
  let out = "";
  for (let i = str.length - 1; i >= 0; i--) out += str[i];
  return out;
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
Começar em 1 e multiplicar pelos inteiros de 2 até n.

EDGE CASES ESPERADOS:
n = 0; n = 1

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque começar em 1 e multiplicar pelos inteiros de 2 até n.

COMPLEXIDADE DE ESPAÇO:
O(1)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(1).
*/
function factorialIterative(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
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
Dois loops aninhados geram todas as combinações ordenadas entre elementos.

EDGE CASES ESPERADOS:
array vazio; um elemento

COMPLEXIDADE DE TEMPO:
O(n²)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n²) porque dois loops aninhados geram todas as combinações ordenadas entre elementos.

COMPLEXIDADE DE ESPAÇO:
O(n²)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(n²).
*/
function allPairs(arr) {
  const out = [];
  for (const a of arr) for (const b of arr) out.push([a, b]);
  return out;
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
Percorrer até encontrar o alvo e retornar imediatamente.

EDGE CASES ESPERADOS:
alvo no início/fim; ausente

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque percorrer até encontrar o alvo e retornar imediatamente.

COMPLEXIDADE DE ESPAÇO:
O(1)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(1).
*/
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) if (arr[i] === target) return i;
  return -1;
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
Usar Set para saber se um valor já foi visto e manter a primeira ocorrência.

EDGE CASES ESPERADOS:
array vazio; todos iguais

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque usar Set para saber se um valor já foi visto e manter a primeira ocorrência.

COMPLEXIDADE DE ESPAÇO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(n).
*/
function uniqueOrdered(arr) {
  const seen = new Set();
  const out = [];
  for (const v of arr) if (!seen.has(v)) { seen.add(v); out.push(v); }
  return out;
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
Compactar não-zeros na frente e preencher o restante com zeros.

EDGE CASES ESPERADOS:
todos zeros; sem zeros

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque compactar não-zeros na frente e preencher o restante com zeros.

COMPLEXIDADE DE ESPAÇO:
O(1)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(1).
*/
function moveZeros(arr) {
  let write = 0;
  for (const v of arr) if (v !== 0) arr[write++] = v;
  while (write < arr.length) arr[write++] = 0;
  return arr;
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
Manter maior e segundo maior distintos durante uma única varredura.

EDGE CASES ESPERADOS:
menos de 2 distintos; negativos

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque manter maior e segundo maior distintos durante uma única varredura.

COMPLEXIDADE DE ESPAÇO:
O(1)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(1).
*/
function secondLargest(arr) {
  let first = -Infinity, second = -Infinity;
  for (const n of arr) {
    if (n > first) { second = first; first = n; }
    else if (n < first && n > second) second = n;
  }
  return second === -Infinity ? null : second;
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
Normalizar k por n e concatenar o sufixo com o prefixo.

EDGE CASES ESPERADOS:
k = 0; k > n; array vazio

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque normalizar k por n e concatenar o sufixo com o prefixo.

COMPLEXIDADE DE ESPAÇO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(n).
*/
function rotateRight(arr, k) {
  if (!arr.length) return [];
  k %= arr.length;
  return arr.slice(-k).concat(arr.slice(0, arr.length - k));
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
Comparar caracteres das extremidades caminhando para o centro.

EDGE CASES ESPERADOS:
string vazia; tamanho 1

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque comparar caracteres das extremidades caminhando para o centro.

COMPLEXIDADE DE ESPAÇO:
O(1)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(1).
*/
function isPalindrome(str) {
  let l = 0, r = str.length - 1;
  while (l < r) if (str[l++] !== str[r--]) return false;
  return true;
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
Usar a primeira string como referência e reduzir o prefixo quando houver divergência.

EDGE CASES ESPERADOS:
array vazio; uma string; sem prefixo

COMPLEXIDADE DE TEMPO:
O(n*m)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n*m) porque usar a primeira string como referência e reduzir o prefixo quando houver divergência.

COMPLEXIDADE DE ESPAÇO:
O(m)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(m).
*/
function longestCommonPrefix(strs) {
  if (!strs.length) return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
      if (!prefix) return "";
    }
  }
  return prefix;
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
Contar quantos caracteres iguais aparecem consecutivamente e emitir caractere+contagem.

EDGE CASES ESPERADOS:
string vazia; sem repetição

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque contar quantos caracteres iguais aparecem consecutivamente e emitir caractere+contagem.

COMPLEXIDADE DE ESPAÇO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(n).
*/
function compressString(str) {
  if (!str) return "";
  let out = "", count = 1;
  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) count++;
    else { out += str[i - 1] + count; count = 1; }
  }
  return out;
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
Construir produtos de prefixo na saída e multiplicar por um sufixo acumulado.

EDGE CASES ESPERADOS:
zeros; negativos; tamanho 2

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque construir produtos de prefixo na saída e multiplicar por um sufixo acumulado.

COMPLEXIDADE DE ESPAÇO:
O(1) extra além da saída

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(1) extra além da saída.
*/
function productExceptSelf(nums) {
  const out = Array(nums.length).fill(1);
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) { out[i] = prefix; prefix *= nums[i]; }
  let suffix = 1;
  for (let i = nums.length - 1; i >= 0; i--) { out[i] *= suffix; suffix *= nums[i]; }
  return out;
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
Para cada posição, decidir entre começar novo subarray ou estender o anterior.

EDGE CASES ESPERADOS:
todos negativos; um elemento

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque para cada posição, decidir entre começar novo subarray ou estender o anterior.

COMPLEXIDADE DE ESPAÇO:
O(1)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(1).
*/
function maxSubarraySum(nums) {
  let current = nums[0], best = nums[0];
  for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i], current + nums[i]);
    best = Math.max(best, current);
  }
  return best;
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
Incrementar no Map a contagem associada a cada valor.

EDGE CASES ESPERADOS:
array vazio; muitos repetidos

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque incrementar no Map a contagem associada a cada valor.

COMPLEXIDADE DE ESPAÇO:
O(k)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(k).
*/
function frequencyMap(arr) {
  const map = new Map();
  for (const v of arr) map.set(v, (map.get(v) || 0) + 1);
  return [...map.entries()];
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
Se um valor já estiver no Set, há duplicata.

EDGE CASES ESPERADOS:
array vazio; todos únicos

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque se um valor já estiver no Set, há duplicata.

COMPLEXIDADE DE ESPAÇO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(n).
*/
function containsDuplicate(nums) {
  const seen = new Set();
  for (const n of nums) { if (seen.has(n)) return true; seen.add(n); }
  return false;
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
Contar caracteres da primeira string e consumir com a segunda.

EDGE CASES ESPERADOS:
tamanhos diferentes; caracteres repetidos

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque contar caracteres da primeira string e consumir com a segunda.

COMPLEXIDADE DE ESPAÇO:
O(k)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(k).
*/
function isAnagram(a, b) {
  if (a.length !== b.length) return false;
  const map = new Map();
  for (const c of a) map.set(c, (map.get(c) || 0) + 1);
  for (const c of b) {
    if (!map.get(c)) return false;
    map.set(c, map.get(c) - 1);
  }
  return true;
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
Criar Set do primeiro array e coletar únicos presentes no segundo.

EDGE CASES ESPERADOS:
sem interseção; arrays vazios

COMPLEXIDADE DE TEMPO:
O(n+m)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n+m) porque criar Set do primeiro array e coletar únicos presentes no segundo.

COMPLEXIDADE DE ESPAÇO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(n).
*/
function intersectionUnique(a, b) {
  const setA = new Set(a), out = new Set();
  for (const v of b) if (setA.has(v)) out.add(v);
  return [...out];
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
Para cada número, procurar se o complemento já apareceu; se não, registrar índice atual.

EDGE CASES ESPERADOS:
duplicados; solução no final

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque para cada número, procurar se o complemento já apareceu; se não, registrar índice atual.

COMPLEXIDADE DE ESPAÇO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(n).
*/
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (map.has(need)) return [map.get(need), i];
    map.set(nums[i], i);
  }
  return [];
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
Contar frequências e depois retornar o primeiro índice com contagem 1.

EDGE CASES ESPERADOS:
nenhum único; um caractere

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque contar frequências e depois retornar o primeiro índice com contagem 1.

COMPLEXIDADE DE ESPAÇO:
O(k)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(k).
*/
function firstUniqueChar(str) {
  const freq = new Map();
  for (const c of str) freq.set(c, (freq.get(c) || 0) + 1);
  for (let i = 0; i < str.length; i++) if (freq.get(str[i]) === 1) return i;
  return -1;
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
Ordenar cada palavra para gerar uma chave igual entre anagramas e agrupar no Map.

EDGE CASES ESPERADOS:
strings vazias; grupos unitários

COMPLEXIDADE DE TEMPO:
O(n*k log k)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n*k log k) porque ordenar cada palavra para gerar uma chave igual entre anagramas e agrupar no Map.

COMPLEXIDADE DE ESPAÇO:
O(n*k)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(n*k).
*/
function groupAnagrams(strs) {
  const groups = new Map();
  for (const s of strs) {
    const key = [...s].sort().join("");
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(s);
  }
  return [...groups.values()];
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
Só iniciar contagem quando n-1 não existir; assim cada sequência é percorrida uma vez.

EDGE CASES ESPERADOS:
duplicados; array vazio

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque só iniciar contagem quando n-1 não existir; assim cada sequência é percorrida uma vez.

COMPLEXIDADE DE ESPAÇO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(n).
*/
function longestConsecutive(nums) {
  const set = new Set(nums);
  let best = 0;
  for (const n of set) {
    if (!set.has(n - 1)) {
      let cur = n, len = 1;
      while (set.has(cur + 1)) { cur++; len++; }
      best = Math.max(best, len);
    }
  }
  return best;
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
Manter write na próxima posição única e avançar read pelo array.

EDGE CASES ESPERADOS:
array vazio; todos iguais

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque manter write na próxima posição única e avançar read pelo array.

COMPLEXIDADE DE ESPAÇO:
O(1)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(1).
*/
function removeDuplicatesSorted(nums) {
  if (!nums.length) return [];
  let write = 1;
  for (let read = 1; read < nums.length; read++) if (nums[read] !== nums[read - 1]) nums[write++] = nums[read];
  return nums.slice(0, write);
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
Somar extremos; se soma pequena, mover esquerda; se grande, mover direita.

EDGE CASES ESPERADOS:
sem solução; valores negativos

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque somar extremos; se soma pequena, mover esquerda; se grande, mover direita.

COMPLEXIDADE DE ESPAÇO:
O(1)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(1).
*/
function twoSumSorted(nums, target) {
  let l = 0, r = nums.length - 1;
  while (l < r) {
    const sum = nums[l] + nums[r];
    if (sum === target) return [l, r];
    if (sum < target) l++; else r--;
  }
  return [];
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
Normalizar para alfanuméricos minúsculos e comparar extremidades.

EDGE CASES ESPERADOS:
apenas símbolos; caixa mista

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque normalizar para alfanuméricos minúsculos e comparar extremidades.

COMPLEXIDADE DE ESPAÇO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(n).
*/
function validPalindromeNormalized(str) {
  const s = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let l = 0, r = s.length - 1;
  while (l < r) if (s[l++] !== s[r--]) return false;
  return true;
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
Ordenar, fixar i e procurar pares que somem -nums[i] com dois ponteiros.

EDGE CASES ESPERADOS:
duplicados; sem solução

COMPLEXIDADE DE TEMPO:
O(n²)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n²) porque ordenar, fixar i e procurar pares que somem -nums[i] com dois ponteiros.

COMPLEXIDADE DE ESPAÇO:
O(1) extra além da saída

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(1) extra além da saída.
*/
function threeSum(nums) {
  nums.sort((a,b)=>a-b);
  const out = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i && nums[i] === nums[i-1]) continue;
    let l = i + 1, r = nums.length - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum === 0) {
        out.push([nums[i], nums[l], nums[r]]); l++; r--;
        while (l < r && nums[l] === nums[l-1]) l++;
        while (l < r && nums[r] === nums[r+1]) r--;
      } else if (sum < 0) l++; else r--;
    }
  }
  return out;
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
A largura sempre diminui; só há chance de melhorar movendo a menor altura.

EDGE CASES ESPERADOS:
duas barras; alturas zero

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque a largura sempre diminui; só há chance de melhorar movendo a menor altura.

COMPLEXIDADE DE ESPAÇO:
O(1)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(1).
*/
function maxContainerArea(height) {
  let l = 0, r = height.length - 1, best = 0;
  while (l < r) {
    best = Math.max(best, Math.min(height[l], height[r]) * (r - l));
    if (height[l] < height[r]) l++; else r--;
  }
  return best;
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
Somar primeira janela e depois adicionar o novo elemento removendo o que saiu.

EDGE CASES ESPERADOS:
k=1; k=n; k>n

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque somar primeira janela e depois adicionar o novo elemento removendo o que saiu.

COMPLEXIDADE DE ESPAÇO:
O(1)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(1).
*/
function maxWindowSum(nums, k) {
  if (k > nums.length || k <= 0) return null;
  let sum = 0;
  for (let i = 0; i < k; i++) sum += nums[i];
  let best = sum;
  for (let r = k; r < nums.length; r++) { sum += nums[r] - nums[r-k]; best = Math.max(best, sum); }
  return best;
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
Mover a esquerda para depois da última ocorrência do caractere repetido.

EDGE CASES ESPERADOS:
string vazia; todos iguais

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque mover a esquerda para depois da última ocorrência do caractere repetido.

COMPLEXIDADE DE ESPAÇO:
O(k)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(k).
*/
function lengthOfLongestSubstring(str) {
  const last = new Map();
  let left = 0, best = 0;
  for (let right = 0; right < str.length; right++) {
    const c = str[right];
    if (last.has(c) && last.get(c) >= left) left = last.get(c) + 1;
    last.set(c, right);
    best = Math.max(best, right - left + 1);
  }
  return best;
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
Expandir até satisfazer todos os caracteres necessários e contrair enquanto continuar válida.

EDGE CASES ESPERADOS:
t maior que s; sem solução; repetidos em t

COMPLEXIDADE DE TEMPO:
O(n+m)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n+m) porque expandir até satisfazer todos os caracteres necessários e contrair enquanto continuar válida.

COMPLEXIDADE DE ESPAÇO:
O(k)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(k).
*/
function minWindow(s, t) {
  if (!t || t.length > s.length) return "";
  const need = new Map();
  for (const c of t) need.set(c, (need.get(c) || 0) + 1);
  const have = new Map();
  let formed = 0, required = need.size, left = 0, bestLen = Infinity, bestStart = 0;
  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    have.set(c, (have.get(c) || 0) + 1);
    if (need.has(c) && have.get(c) === need.get(c)) formed++;
    while (formed === required) {
      if (right - left + 1 < bestLen) { bestLen = right - left + 1; bestStart = left; }
      const lc = s[left++];
      have.set(lc, have.get(lc) - 1);
      if (need.has(lc) && have.get(lc) < need.get(lc)) formed--;
    }
  }
  return bestLen === Infinity ? "" : s.slice(bestStart, bestStart + bestLen);
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
Empilhar aberturas e, em cada fechamento, conferir o topo esperado.

EDGE CASES ESPERADOS:
string vazia; fechamento sem abertura; tipos mistos

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque empilhar aberturas e, em cada fechamento, conferir o topo esperado.

COMPLEXIDADE DE ESPAÇO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(n).
*/
function validParentheses(str) {
  const stack = [];
  const pairs = { ")": "(", "]": "[", "}": "{" };
  for (const c of str) {
    if (c === "(" || c === "[" || c === "{") stack.push(c);
    else if (stack.pop() !== pairs[c]) return false;
  }
  return stack.length === 0;
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
Se o caractere atual for igual ao topo, remover; caso contrário, empilhar.

EDGE CASES ESPERADOS:
string vazia; toda removida

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque se o caractere atual for igual ao topo, remover; caso contrário, empilhar.

COMPLEXIDADE DE ESPAÇO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(n).
*/
function removeAdjacentDuplicates(str) {
  const stack = [];
  for (const c of str) {
    if (stack[stack.length - 1] === c) stack.pop(); else stack.push(c);
  }
  return stack.join("");
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
Operandos entram na pilha; operador consome os dois últimos e empilha o resultado.

EDGE CASES ESPERADOS:
divisão; negativos; um número

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque operandos entram na pilha; operador consome os dois últimos e empilha o resultado.

COMPLEXIDADE DE ESPAÇO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(n).
*/
function evalRPN(tokens) {
  const stack = [];
  for (const t of tokens) {
    if (!Number.isNaN(Number(t))) stack.push(Number(t));
    else {
      const b = stack.pop(), a = stack.pop();
      if (t === "+") stack.push(a + b);
      else if (t === "-") stack.push(a - b);
      else if (t === "*") stack.push(a * b);
      else stack.push(Math.trunc(a / b));
    }
  }
  return stack.pop();
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
Guardar índices ainda sem resposta; ao surgir valor maior, resolver do topo para baixo.

EDGE CASES ESPERADOS:
estritamente decrescente; duplicados

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque guardar índices ainda sem resposta; ao surgir valor maior, resolver do topo para baixo.

COMPLEXIDADE DE ESPAÇO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(n).
*/
function nextGreaterElements(nums) {
  const out = Array(nums.length).fill(-1), stack = [];
  for (let i = 0; i < nums.length; i++) {
    while (stack.length && nums[i] > nums[stack[stack.length - 1]]) out[stack.pop()] = nums[i];
    stack.push(i);
  }
  return out;
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
Empilhar índices com temperaturas não resolvidas e calcular distância quando surge temperatura maior.

EDGE CASES ESPERADOS:
decrescente; uma temperatura

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque empilhar índices com temperaturas não resolvidas e calcular distância quando surge temperatura maior.

COMPLEXIDADE DE ESPAÇO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(n).
*/
function dailyTemperatures(temps) {
  const out = Array(temps.length).fill(0), stack = [];
  for (let i = 0; i < temps.length; i++) {
    while (stack.length && temps[i] > temps[stack[stack.length - 1]]) {
      const j = stack.pop(); out[j] = i - j;
    }
    stack.push(i);
  }
  return out;
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
Empilhar entradas; quando saída estiver vazia, transferir todos invertendo a ordem.

EDGE CASES ESPERADOS:
pop em fila vazia; alternância push/pop

COMPLEXIDADE DE TEMPO:
O(n) total amortizado

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) total amortizado porque empilhar entradas; quando saída estiver vazia, transferir todos invertendo a ordem.

COMPLEXIDADE DE ESPAÇO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(n).
*/
function queueWithStacks(operations) {
  const input = [], output = [], ans = [];
  const move = () => { if (!output.length) while (input.length) output.push(input.pop()); };
  for (const [op, value] of operations) {
    if (op === "push") input.push(value);
    else if (op === "pop") { move(); ans.push(output.length ? output.pop() : null); }
    else if (op === "peek") { move(); ans.push(output.length ? output[output.length - 1] : null); }
  }
  return ans;
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
Manter índices em ordem decrescente de valor, removendo expirados pela frente.

EDGE CASES ESPERADOS:
k=1; k=n; valores iguais

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque manter índices em ordem decrescente de valor, removendo expirados pela frente.

COMPLEXIDADE DE ESPAÇO:
O(k)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(k).
*/
function maxSlidingWindow(nums, k) {
  const deque = [], out = [];
  let head = 0;
  for (let i = 0; i < nums.length; i++) {
    while (head < deque.length && deque[head] <= i - k) head++;
    while (deque.length > head && nums[deque[deque.length - 1]] <= nums[i]) deque.pop();
    deque.push(i);
    if (i >= k - 1) out.push(nums[deque[head]]);
  }
  return out;
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
Usar pilha de índices crescentes; quando a altura cai, fechar retângulos cujo limite direito foi encontrado.

EDGE CASES ESPERADOS:
crescente; decrescente; uma barra

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque usar pilha de índices crescentes; quando a altura cai, fechar retângulos cujo limite direito foi encontrado.

COMPLEXIDADE DE ESPAÇO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(n).
*/
function largestRectangleArea(heights) {
  const stack = [], arr = [...heights, 0];
  let best = 0;
  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[i] < arr[stack[stack.length - 1]]) {
      const h = arr[stack.pop()];
      const left = stack.length ? stack[stack.length - 1] : -1;
      best = Math.max(best, h * (i - left - 1));
    }
    stack.push(i);
  }
  return best;
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
Criar um nó por elemento e ligar o anterior ao novo nó.

EDGE CASES ESPERADOS:
array vazio; um elemento

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque criar um nó por elemento e ligar o anterior ao novo nó.

COMPLEXIDADE DE ESPAÇO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(n).
*/
function arrayToLinkedList(arr) {
  class Node { constructor(value, next=null) { this.value=value; this.next=next; } }
  let dummy = new Node(0), cur = dummy;
  for (const v of arr) { cur.next = new Node(v); cur = cur.next; }
  const out = [];
  for (let n = dummy.next; n; n = n.next) out.push(n.value);
  return out;
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
Salvar next antes de apontar current.next para prev e avançar os três ponteiros.

EDGE CASES ESPERADOS:
vazia; um nó

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque salvar next antes de apontar current.next para prev e avançar os três ponteiros.

COMPLEXIDADE DE ESPAÇO:
O(n) para montar/serializar; O(1) na reversão

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(n) para montar/serializar; O(1) na reversão.
*/
function reverseLinkedList(arr) {
  class Node { constructor(v,next=null){this.value=v;this.next=next;} }
  let head=null, tail=null; for(const v of arr){const n=new Node(v); if(!head) head=tail=n; else {tail.next=n;tail=n;}}
  let prev=null, cur=head;
  while(cur){ const next=cur.next; cur.next=prev; prev=cur; cur=next; }
  const out=[]; for(let n=prev;n;n=n.next) out.push(n.value); return out;
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
Slow anda 1 e fast anda 2; quando fast termina, slow está no meio.

EDGE CASES ESPERADOS:
comprimento par; um nó

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque slow anda 1 e fast anda 2; quando fast termina, slow está no meio.

COMPLEXIDADE DE ESPAÇO:
O(n) para montar lista; O(1) na busca

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(n) para montar lista; O(1) na busca.
*/
function middleOfLinkedList(arr) {
  class Node { constructor(v,next=null){this.value=v;this.next=next;} }
  let head=null,tail=null; for(const v of arr){const n=new Node(v); if(!head)head=tail=n; else {tail.next=n;tail=n;}}
  let slow=head, fast=head; while(fast&&fast.next){slow=slow.next;fast=fast.next.next;} return slow?slow.value:null;
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
Slow e fast eventualmente se encontram se houver ciclo; caso contrário fast chega ao fim.

EDGE CASES ESPERADOS:
sem ciclo; ciclo no head; lista vazia

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque slow e fast eventualmente se encontram se houver ciclo; caso contrário fast chega ao fim.

COMPLEXIDADE DE ESPAÇO:
O(n) para montar lista; O(1) na detecção

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(n) para montar lista; O(1) na detecção.
*/
function hasCycle(values, cycleIndex) {
  class Node{constructor(v){this.value=v;this.next=null;}}
  const nodes=values.map(v=>new Node(v)); for(let i=0;i<nodes.length-1;i++)nodes[i].next=nodes[i+1];
  if(nodes.length&&cycleIndex>=0)nodes[nodes.length-1].next=nodes[cycleIndex];
  let slow=nodes[0]||null,fast=slow;
  while(fast&&fast.next){slow=slow.next;fast=fast.next.next;if(slow===fast)return true;} return false;
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
Usar ponteiros nos dois arrays/listas e escolher sempre o menor elemento atual.

EDGE CASES ESPERADOS:
uma lista vazia; duplicados

COMPLEXIDADE DE TEMPO:
O(n+m)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n+m) porque usar ponteiros nos dois arrays/listas e escolher sempre o menor elemento atual.

COMPLEXIDADE DE ESPAÇO:
O(n+m)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(n+m).
*/
function mergeSortedLists(a, b) {
  class Node { constructor(v,next=null){this.value=v;this.next=next;} }
  const build=values=>{const dummy=new Node(0);let tail=dummy;for(const v of values){tail.next=new Node(v);tail=tail.next;}return dummy.next;};
  let x=build(a),y=build(b),dummy=new Node(0),tail=dummy;
  while(x&&y){if(x.value<=y.value){tail.next=x;x=x.next;}else{tail.next=y;y=y.next;}tail=tail.next;}
  tail.next=x||y; const out=[];for(let cur=dummy.next;cur;cur=cur.next)out.push(cur.value);return out;
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
Avançar fast n posições à frente de slow; quando fast chega ao fim, slow aponta para o predecessor.

EDGE CASES ESPERADOS:
remover head; n=1

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque avançar fast n posições à frente de slow; quando fast chega ao fim, slow aponta para o predecessor.

COMPLEXIDADE DE ESPAÇO:
O(n) para representação; O(1) adicional

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(n) para representação; O(1) adicional.
*/
function removeNthFromEnd(arr, n) {
  class Node { constructor(v, next=null) { this.value=v; this.next=next; } }
  const dummyBuild = new Node(0); let tail=dummyBuild;
  for (const v of arr) { tail.next=new Node(v); tail=tail.next; }
  const dummy = new Node(0, dummyBuild.next);
  let fast=dummy, slow=dummy;
  for (let i=0;i<n;i++) { if (!fast.next) return arr; fast=fast.next; }
  while (fast.next) { fast=fast.next; slow=slow.next; }
  slow.next=slow.next ? slow.next.next : null;
  const out=[]; for(let cur=dummy.next;cur;cur=cur.next) out.push(cur.value); return out;
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
Encontrar meio, inverter segunda metade e comparar valores das duas metades.

EDGE CASES ESPERADOS:
ímpar; um nó; vazia

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque encontrar meio, inverter segunda metade e comparar valores das duas metades.

COMPLEXIDADE DE ESPAÇO:
O(1) conceitual; O(n) na entrada array

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(1) conceitual; O(n) na entrada array.
*/
function isLinkedListPalindrome(arr) {
  class Node { constructor(v,next=null){this.value=v;this.next=next;} }
  let head=null,tail=null; for(const v of arr){const node=new Node(v);if(!head)head=tail=node;else{tail.next=node;tail=node;}}
  if(!head||!head.next)return true;
  let slow=head,fast=head; while(fast&&fast.next){slow=slow.next;fast=fast.next.next;}
  let prev=null,cur=slow; while(cur){const next=cur.next;cur.next=prev;prev=cur;cur=next;}
  let left=head,right=prev; while(right){if(left.value!==right.value)return false;left=left.next;right=right.next;} return true;
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
Manter no heap apenas o próximo menor candidato de cada lista.

EDGE CASES ESPERADOS:
listas vazias; uma lista

COMPLEXIDADE DE TEMPO:
O(N log k)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(N log k) porque manter no heap apenas o próximo menor candidato de cada lista.

COMPLEXIDADE DE ESPAÇO:
O(k)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(k).
*/
function mergeKSortedLists(lists) {
  const heap=[];
  const push=x=>{heap.push(x);let i=heap.length-1;while(i){let p=(i-1)>>1;if(heap[p].v<=heap[i].v)break;[heap[p],heap[i]]=[heap[i],heap[p]];i=p;}};
  const pop=()=>{if(!heap.length)return null;const root=heap[0],last=heap.pop();if(heap.length){heap[0]=last;let i=0;while(true){let l=i*2+1,r=l+1,s=i;if(l<heap.length&&heap[l].v<heap[s].v)s=l;if(r<heap.length&&heap[r].v<heap[s].v)s=r;if(s===i)break;[heap[i],heap[s]]=[heap[s],heap[i]];i=s;}}return root;};
  for(let li=0;li<lists.length;li++)if(lists[li].length)push({v:lists[li][0],li,idx:0});
  const out=[];let node;while((node=pop())){out.push(node.v);const ni=node.idx+1;if(ni<lists[node.li].length)push({v:lists[node.li][ni],li:node.li,idx:ni});}return out;
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
Comparar vizinhos e trocar inversões; cada passada posiciona um maior no fim.

EDGE CASES ESPERADOS:
já ordenado; reverso

COMPLEXIDADE DE TEMPO:
O(n²)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n²) porque comparar vizinhos e trocar inversões; cada passada posiciona um maior no fim.

COMPLEXIDADE DE ESPAÇO:
O(1)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(1).
*/
function bubbleSort(arr) {
  for(let end=arr.length-1;end>0;end--){let swapped=false;for(let i=0;i<end;i++){if(arr[i]>arr[i+1]){[arr[i],arr[i+1]]=[arr[i+1],arr[i]];swapped=true;}}if(!swapped)break;}return arr;
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
Para cada elemento, deslocar maiores do prefixo até abrir sua posição correta.

EDGE CASES ESPERADOS:
já ordenado; duplicados

COMPLEXIDADE DE TEMPO:
O(n²)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n²) porque para cada elemento, deslocar maiores do prefixo até abrir sua posição correta.

COMPLEXIDADE DE ESPAÇO:
O(1)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(1).
*/
function insertionSort(arr) {
  for(let i=1;i<arr.length;i++){const key=arr[i];let j=i-1;while(j>=0&&arr[j]>key){arr[j+1]=arr[j];j--;}arr[j+1]=key;}return arr;
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
Dividir ao meio recursivamente e mesclar duas metades já ordenadas.

EDGE CASES ESPERADOS:
vazio; um elemento

COMPLEXIDADE DE TEMPO:
O(n log n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n log n) porque dividir ao meio recursivamente e mesclar duas metades já ordenadas.

COMPLEXIDADE DE ESPAÇO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(n).
*/
function mergeSort(arr) {
  if(arr.length<=1)return arr;const mid=Math.floor(arr.length/2),a=mergeSort(arr.slice(0,mid)),b=mergeSort(arr.slice(mid));let i=0,j=0,out=[];while(i<a.length&&j<b.length)out.push(a[i]<=b[j]?a[i++]:b[j++]);return out.concat(a.slice(i),b.slice(j));
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
Particionar em menores/iguais/maiores ao pivô e ordenar recursivamente as partes.

EDGE CASES ESPERADOS:
duplicados; já ordenado

COMPLEXIDADE DE TEMPO:
O(n log n) médio, O(n²) pior

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n log n) médio, O(n²) pior porque particionar em menores/iguais/maiores ao pivô e ordenar recursivamente as partes.

COMPLEXIDADE DE ESPAÇO:
O(log n) médio de pilha

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(log n) médio de pilha.
*/
function quickSort(arr) {
  if(arr.length<=1)return arr;const pivot=arr[Math.floor(arr.length/2)],left=[],equal=[],right=[];for(const x of arr){if(x<pivot)left.push(x);else if(x>pivot)right.push(x);else equal.push(x);}return quickSort(left).concat(equal,quickSort(right));
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
Comparar com o meio e descartar metade impossível a cada passo.

EDGE CASES ESPERADOS:
alvo ausente; extremos

COMPLEXIDADE DE TEMPO:
O(log n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(log n) porque comparar com o meio e descartar metade impossível a cada passo.

COMPLEXIDADE DE ESPAÇO:
O(1)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(1).
*/
function binarySearch(arr, target) {
  let l=0,r=arr.length-1;while(l<=r){const m=l+((r-l)>>1);if(arr[m]===target)return m;if(arr[m]<target)l=m+1;else r=m-1;}return -1;
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
Ao encontrar target, guardar resposta e continuar procurando à esquerda.

EDGE CASES ESPERADOS:
alvo ausente; um elemento

COMPLEXIDADE DE TEMPO:
O(log n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(log n) porque ao encontrar target, guardar resposta e continuar procurando à esquerda.

COMPLEXIDADE DE ESPAÇO:
O(1)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(1).
*/
function firstOccurrence(arr, target) {
  let l=0,r=arr.length-1,ans=-1;while(l<=r){const m=(l+r)>>1;if(arr[m]>=target){if(arr[m]===target)ans=m;r=m-1;}else l=m+1;}return ans;
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
Em cada passo uma metade é ordenada; verificar se o alvo pertence a ela antes de descartar.

EDGE CASES ESPERADOS:
não rotacionado; alvo ausente

COMPLEXIDADE DE TEMPO:
O(log n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(log n) porque em cada passo uma metade é ordenada; verificar se o alvo pertence a ela antes de descartar.

COMPLEXIDADE DE ESPAÇO:
O(1)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(1).
*/
function searchRotated(nums, target) {
  let l=0,r=nums.length-1;while(l<=r){const m=(l+r)>>1;if(nums[m]===target)return m;if(nums[l]<=nums[m]){if(nums[l]<=target&&target<nums[m])r=m-1;else l=m+1;}else{if(nums[m]<target&&target<=nums[r])l=m+1;else r=m-1;}}return -1;
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
Buscar partição no menor array para que lados esquerdos tenham tamanho correto e todos os valores à esquerda sejam <= direita.

EDGE CASES ESPERADOS:
um array vazio; total par

COMPLEXIDADE DE TEMPO:
O(log(min(n,m)))

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(log(min(n,m))) porque buscar partição no menor array para que lados esquerdos tenham tamanho correto e todos os valores à esquerda sejam <= direita.

COMPLEXIDADE DE ESPAÇO:
O(1)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(1).
*/
function findMedianSortedArrays(a, b) {
  if(a.length>b.length)return findMedianSortedArrays(b,a);const m=a.length,n=b.length,half=Math.floor((m+n+1)/2);let l=0,r=m;while(l<=r){const i=(l+r)>>1,j=half-i;const al=i? a[i-1]:-Infinity, ar=i<m?a[i]:Infinity, bl=j?b[j-1]:-Infinity, br=j<n?b[j]:Infinity;if(al<=br&&bl<=ar){if((m+n)%2)return Math.max(al,bl);return (Math.max(al,bl)+Math.min(ar,br))/2;}if(al>br)r=i-1;else l=i+1;}return null;
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
Definir f(0)=1 e reduzir n! para n*(n-1)!.

EDGE CASES ESPERADOS:
n=0; n=1

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque definir f(0)=1 e reduzir n! para n*(n-1)!.

COMPLEXIDADE DE ESPAÇO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(n).
*/
function factorialRecursive(n) {
  if(n<=1)return 1;return n*factorialRecursive(n-1);
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
Cachear resultados para cada n e evitar árvore exponencial de chamadas.

EDGE CASES ESPERADOS:
n=0; n=1

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque cachear resultados para cada n e evitar árvore exponencial de chamadas.

COMPLEXIDADE DE ESPAÇO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(n).
*/
function fibonacciMemo(n) {
  const memo=new Map([[0,0],[1,1]]);const f=x=>{if(memo.has(x))return memo.get(x);memo.set(x,f(x-1)+f(x-2));return memo.get(x);};return f(n);
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
Em cada índice há duas escolhas: ignorar ou incluir o elemento.

EDGE CASES ESPERADOS:
array vazio

COMPLEXIDADE DE TEMPO:
O(2^n * n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(2^n * n) porque em cada índice há duas escolhas: ignorar ou incluir o elemento.

COMPLEXIDADE DE ESPAÇO:
O(n) de pilha além da saída

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(n) de pilha além da saída.
*/
function allSubsequences(arr) {
  const out=[],path=[];const dfs=i=>{if(i===arr.length){out.push([...path]);return;}dfs(i+1);path.push(arr[i]);dfs(i+1);path.pop();};dfs(0);return out;
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
Construir caminho escolhendo elementos ainda não usados e desfazer após cada ramo.

EDGE CASES ESPERADOS:
array vazio; um elemento

COMPLEXIDADE DE TEMPO:
O(n!*n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n!*n) porque construir caminho escolhendo elementos ainda não usados e desfazer após cada ramo.

COMPLEXIDADE DE ESPAÇO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(n).
*/
function permutations(nums) {
  const out=[],path=[],used=Array(nums.length).fill(false);const dfs=()=>{if(path.length===nums.length){out.push([...path]);return;}for(let i=0;i<nums.length;i++){if(used[i])continue;used[i]=true;path.push(nums[i]);dfs();path.pop();used[i]=false;}};dfs();return out;
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
Escolher próximos números sempre após o último escolhido para não gerar permutações duplicadas.

EDGE CASES ESPERADOS:
k=0; k=n

COMPLEXIDADE DE TEMPO:
O(C(n,k)*k)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(C(n,k)*k) porque escolher próximos números sempre após o último escolhido para não gerar permutações duplicadas.

COMPLEXIDADE DE ESPAÇO:
O(k)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(k).
*/
function combinations(n, k) {
  const out=[],path=[];const dfs=start=>{if(path.length===k){out.push([...path]);return;}for(let x=start;x<=n;x++){path.push(x);dfs(x+1);path.pop();}};dfs(1);return out;
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
Ordenar e explorar candidatos a partir do índice atual, interrompendo quando exceder o restante.

EDGE CASES ESPERADOS:
sem solução; candidato igual target

COMPLEXIDADE DE TEMPO:
Exponencial no pior caso

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é Exponencial no pior caso porque ordenar e explorar candidatos a partir do índice atual, interrompendo quando exceder o restante.

COMPLEXIDADE DE ESPAÇO:
O(target/minCandidate) de pilha

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(target/minCandidate) de pilha.
*/
function combinationSum(candidates, target) {
  candidates.sort((a,b)=>a-b);const out=[],path=[];const dfs=(start,remain)=>{if(remain===0){out.push([...path]);return;}for(let i=start;i<candidates.length&&candidates[i]<=remain;i++){path.push(candidates[i]);dfs(i,remain-candidates[i]);path.pop();}};dfs(0,target);return out;
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
Colocar uma rainha por linha e rejeitar colunas/diagonais já usadas antes de recursar.

EDGE CASES ESPERADOS:
n=1; n=2/3 sem solução

COMPLEXIDADE DE TEMPO:
O(n!) aproximado

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n!) aproximado porque colocar uma rainha por linha e rejeitar colunas/diagonais já usadas antes de recursar.

COMPLEXIDADE DE ESPAÇO:
O(n²) pela saída/tabuleiro

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(n²) pela saída/tabuleiro.
*/
function solveNQueens(n) {
  const out=[],cols=new Set(),d1=new Set(),d2=new Set(),pos=[];const dfs=r=>{if(r===n){out.push(pos.map(c=>".".repeat(c)+"Q"+".".repeat(n-c-1)));return;}for(let c=0;c<n;c++){if(cols.has(c)||d1.has(r-c)||d2.has(r+c))continue;cols.add(c);d1.add(r-c);d2.add(r+c);pos.push(c);dfs(r+1);pos.pop();cols.delete(c);d1.delete(r-c);d2.delete(r+c);}};dfs(0);return out;
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
Pré-calcular restrições por linha/coluna/bloco e testar apenas dígitos válidos em cada célula vazia.

EDGE CASES ESPERADOS:
tabuleiro já resolvido; entrada inválida

COMPLEXIDADE DE TEMPO:
Exponencial no pior caso

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é Exponencial no pior caso porque pré-calcular restrições por linha/coluna/bloco e testar apenas dígitos válidos em cada célula vazia.

COMPLEXIDADE DE ESPAÇO:
O(81) de recursão/sets

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(81) de recursão/sets.
*/
function solveSudoku(board) {
  const rows=Array.from({length:9},()=>new Set()),cols=Array.from({length:9},()=>new Set()),boxes=Array.from({length:9},()=>new Set()),empty=[];for(let r=0;r<9;r++)for(let c=0;c<9;c++){const v=board[r][c];if(v===".")empty.push([r,c]);else{rows[r].add(v);cols[c].add(v);boxes[Math.floor(r/3)*3+Math.floor(c/3)].add(v);}}const dfs=i=>{if(i===empty.length)return true;const [r,c]=empty[i],b=Math.floor(r/3)*3+Math.floor(c/3);for(let d=1;d<=9;d++){const s=String(d);if(rows[r].has(s)||cols[c].has(s)||boxes[b].has(s))continue;board[r][c]=s;rows[r].add(s);cols[c].add(s);boxes[b].add(s);if(dfs(i+1))return true;board[r][c]=".";rows[r].delete(s);cols[c].delete(s);boxes[b].delete(s);}return false;};dfs(0);return board.map(row=>row.join(""));
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
Construir a árvore em level-order e visitar raiz, esquerda e direita recursivamente.

EDGE CASES ESPERADOS:
árvore vazia; um nó

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque construir a árvore em level-order e visitar raiz, esquerda e direita recursivamente.

COMPLEXIDADE DE ESPAÇO:
O(h)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(h).
*/
function preorderTraversal(levelOrder) {
  class Node{constructor(v){this.val=v;this.left=null;this.right=null;}}const build=a=>{if(!a.length||a[0]==null)return null;const root=new Node(a[0]),q=[root];let i=1;while(q.length&&i<a.length){const n=q.shift();if(i<a.length&&a[i]!=null){n.left=new Node(a[i]);q.push(n.left);}i++;if(i<a.length&&a[i]!=null){n.right=new Node(a[i]);q.push(n.right);}i++;}return root;};const root=build(levelOrder),out=[];const dfs=n=>{if(!n)return;out.push(n.val);dfs(n.left);dfs(n.right);};dfs(root);return out;
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
Visitar subárvore esquerda, raiz e subárvore direita.

EDGE CASES ESPERADOS:
árvore vazia; degenerada

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque visitar subárvore esquerda, raiz e subárvore direita.

COMPLEXIDADE DE ESPAÇO:
O(h)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(h).
*/
function inorderTraversal(levelOrder) {
  class Node{constructor(v){this.val=v;this.left=null;this.right=null;}}const build=a=>{if(!a.length||a[0]==null)return null;const root=new Node(a[0]),q=[root];let i=1;while(q.length&&i<a.length){const n=q.shift();if(i<a.length&&a[i]!=null){n.left=new Node(a[i]);q.push(n.left);}i++;if(i<a.length&&a[i]!=null){n.right=new Node(a[i]);q.push(n.right);}i++;}return root;};const out=[];const dfs=n=>{if(!n)return;dfs(n.left);out.push(n.val);dfs(n.right);};dfs(build(levelOrder));return out;
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
Processar a fila em lotes do tamanho atual para separar os níveis.

EDGE CASES ESPERADOS:
árvore vazia; um nível

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque processar a fila em lotes do tamanho atual para separar os níveis.

COMPLEXIDADE DE ESPAÇO:
O(w)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(w).
*/
function levelOrderTraversal(values) {
  class Node{constructor(v){this.val=v;this.left=null;this.right=null;}}const build=a=>{if(!a.length||a[0]==null)return null;const root=new Node(a[0]),q=[root];let i=1;while(q.length&&i<a.length){const n=q.shift();if(i<a.length&&a[i]!=null){n.left=new Node(a[i]);q.push(n.left);}i++;if(i<a.length&&a[i]!=null){n.right=new Node(a[i]);q.push(n.right);}i++;}return root;};const root=build(values);if(!root)return[];const q=[root],out=[];while(q.length){const size=q.length,level=[];for(let i=0;i<size;i++){const n=q.shift();level.push(n.val);if(n.left)q.push(n.left);if(n.right)q.push(n.right);}out.push(level);}return out;
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
A profundidade de um nó é 1 + máximo das profundidades de seus filhos.

EDGE CASES ESPERADOS:
vazia; árvore em linha

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque a profundidade de um nó é 1 + máximo das profundidades de seus filhos.

COMPLEXIDADE DE ESPAÇO:
O(h)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(h).
*/
function maxTreeDepth(values) {
  class Node{constructor(v){this.val=v;this.left=null;this.right=null;}}const build=a=>{if(!a.length||a[0]==null)return null;const root=new Node(a[0]),q=[root];let i=1;while(q.length&&i<a.length){const n=q.shift();if(i<a.length&&a[i]!=null){n.left=new Node(a[i]);q.push(n.left);}i++;if(i<a.length&&a[i]!=null){n.right=new Node(a[i]);q.push(n.right);}i++;}return root;};const depth=n=>!n?0:1+Math.max(depth(n.left),depth(n.right));return depth(build(values));
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
Trocar filhos esquerdo/direito de cada nó recursivamente e serializar por nível.

EDGE CASES ESPERADOS:
vazia; um nó

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque trocar filhos esquerdo/direito de cada nó recursivamente e serializar por nível.

COMPLEXIDADE DE ESPAÇO:
O(h)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(h).
*/
function invertTree(values) {
  class Node{constructor(v){this.val=v;this.left=null;this.right=null;}}const build=a=>{if(!a.length||a[0]==null)return null;const root=new Node(a[0]),q=[root];let i=1;while(q.length&&i<a.length){const n=q.shift();if(i<a.length&&a[i]!=null){n.left=new Node(a[i]);q.push(n.left);}i++;if(i<a.length&&a[i]!=null){n.right=new Node(a[i]);q.push(n.right);}i++;}return root;};const inv=n=>{if(!n)return null;[n.left,n.right]=[inv(n.right),inv(n.left)];return n;};const root=inv(build(values));if(!root)return[];const q=[root],out=[];while(q.length){const n=q.shift();out.push(n?n.val:null);if(n){q.push(n.left);q.push(n.right);}}while(out.length&&out[out.length-1]==null)out.pop();return out;
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
Calcular altura bottom-up; retornar -1 assim que alguma diferença exceder 1.

EDGE CASES ESPERADOS:
vazia; degenerada

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque calcular altura bottom-up; retornar -1 assim que alguma diferença exceder 1.

COMPLEXIDADE DE ESPAÇO:
O(h)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(h).
*/
function isBalancedTree(values) {
  class Node{constructor(v){this.val=v;this.left=null;this.right=null;}}const build=a=>{if(!a.length||a[0]==null)return null;const root=new Node(a[0]),q=[root];let i=1;while(q.length&&i<a.length){const n=q.shift();if(i<a.length&&a[i]!=null){n.left=new Node(a[i]);q.push(n.left);}i++;if(i<a.length&&a[i]!=null){n.right=new Node(a[i]);q.push(n.right);}i++;}return root;};const h=n=>{if(!n)return 0;const l=h(n.left);if(l<0)return-1;const r=h(n.right);if(r<0||Math.abs(l-r)>1)return-1;return 1+Math.max(l,r);};return h(build(values))>=0;
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
Em cada nó, o maior caminho que passa por ele é altura esquerda + altura direita.

EDGE CASES ESPERADOS:
um nó; árvore vazia

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque em cada nó, o maior caminho que passa por ele é altura esquerda + altura direita.

COMPLEXIDADE DE ESPAÇO:
O(h)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(h).
*/
function diameterOfBinaryTree(values) {
  class Node{constructor(v){this.val=v;this.left=null;this.right=null;}}const build=a=>{if(!a.length||a[0]==null)return null;const root=new Node(a[0]),q=[root];let i=1;while(q.length&&i<a.length){const n=q.shift();if(i<a.length&&a[i]!=null){n.left=new Node(a[i]);q.push(n.left);}i++;if(i<a.length&&a[i]!=null){n.right=new Node(a[i]);q.push(n.right);}i++;}return root;};let best=0;const h=n=>{if(!n)return 0;const l=h(n.left),r=h(n.right);best=Math.max(best,l+r);return 1+Math.max(l,r);};h(build(values));return best;
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
Cada nó deve estar estritamente entre limites herdados dos ancestrais.

EDGE CASES ESPERADOS:
duplicados; violação profunda

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque cada nó deve estar estritamente entre limites herdados dos ancestrais.

COMPLEXIDADE DE ESPAÇO:
O(h)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(h).
*/
function isValidBST(values) {
  class Node{constructor(v){this.val=v;this.left=null;this.right=null;}}const build=a=>{if(!a.length||a[0]==null)return null;const root=new Node(a[0]),q=[root];let i=1;while(q.length&&i<a.length){const n=q.shift();if(i<a.length&&a[i]!=null){n.left=new Node(a[i]);q.push(n.left);}i++;if(i<a.length&&a[i]!=null){n.right=new Node(a[i]);q.push(n.right);}i++;}return root;};const valid=(n,min,max)=>!n?true:(n.val>min&&n.val<max&&valid(n.left,min,n.val)&&valid(n.right,n.val,max));return valid(build(values),-Infinity,Infinity);
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
Percurso inorder produz valores em ordem crescente; parar no k-ésimo visitado.

EDGE CASES ESPERADOS:
k=1; k=n

COMPLEXIDADE DE TEMPO:
O(h+k)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(h+k) porque percurso inorder produz valores em ordem crescente; parar no k-ésimo visitado.

COMPLEXIDADE DE ESPAÇO:
O(h)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(h).
*/
function kthSmallestBST(values, k) {
  class Node{constructor(v){this.val=v;this.left=null;this.right=null;}}const build=a=>{if(!a.length||a[0]==null)return null;const root=new Node(a[0]),q=[root];let i=1;while(q.length&&i<a.length){const n=q.shift();if(i<a.length&&a[i]!=null){n.left=new Node(a[i]);q.push(n.left);}i++;if(i<a.length&&a[i]!=null){n.right=new Node(a[i]);q.push(n.right);}i++;}return root;};const stack=[];let cur=build(values);while(cur||stack.length){while(cur){stack.push(cur);cur=cur.left;}cur=stack.pop();if(--k===0)return cur.val;cur=cur.right;}return null;
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
Se ambos são menores, ir à esquerda; se ambos maiores, à direita; caso contrário o nó atual separa os caminhos.

EDGE CASES ESPERADOS:
um nó ancestral do outro

COMPLEXIDADE DE TEMPO:
O(h)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(h) porque se ambos são menores, ir à esquerda; se ambos maiores, à direita; caso contrário o nó atual separa os caminhos.

COMPLEXIDADE DE ESPAÇO:
O(h) pela construção; O(1) na busca

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(h) pela construção; O(1) na busca.
*/
function lowestCommonAncestorBST(values, p, q) {
  class Node{constructor(v){this.val=v;this.left=null;this.right=null;}}const build=a=>{if(!a.length||a[0]==null)return null;const root=new Node(a[0]),qq=[root];let i=1;while(qq.length&&i<a.length){const n=qq.shift();if(i<a.length&&a[i]!=null){n.left=new Node(a[i]);qq.push(n.left);}i++;if(i<a.length&&a[i]!=null){n.right=new Node(a[i]);qq.push(n.right);}i++;}return root;};let n=build(values);while(n){if(p<n.val&&q<n.val)n=n.left;else if(p>n.val&&q>n.val)n=n.right;else return n.val;}return null;
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
Escolher o meio como raiz recursivamente e devolver um preorder determinístico.

EDGE CASES ESPERADOS:
array vazio; um elemento

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque escolher o meio como raiz recursivamente e devolver um preorder determinístico.

COMPLEXIDADE DE ESPAÇO:
O(log n)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(log n).
*/
function sortedArrayToBSTPreorder(nums) {
  const out=[];const dfs=(l,r)=>{if(l>r)return;const m=Math.floor((l+r)/2);out.push(nums[m]);dfs(l,m-1);dfs(m+1,r);};dfs(0,nums.length-1);return out;
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
Serializar em preorder com # para null e reconstruir consumindo tokens na mesma ordem.

EDGE CASES ESPERADOS:
vazia; nós faltantes

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque serializar em preorder com # para null e reconstruir consumindo tokens na mesma ordem.

COMPLEXIDADE DE ESPAÇO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(n).
*/
function serializeDeserializeTree(values) {
  class Node{constructor(v){this.val=v;this.left=null;this.right=null;}}const build=a=>{if(!a.length||a[0]==null)return null;const root=new Node(a[0]),q=[root];let i=1;while(q.length&&i<a.length){const n=q.shift();if(i<a.length&&a[i]!=null){n.left=new Node(a[i]);q.push(n.left);}i++;if(i<a.length&&a[i]!=null){n.right=new Node(a[i]);q.push(n.right);}i++;}return root;};const ser=(n,out=[])=>{if(!n){out.push("#");return out;}out.push(String(n.val));ser(n.left,out);ser(n.right,out);return out;};const tokens=ser(build(values));let idx=0;const de=()=>{const t=tokens[idx++];if(t==="#")return null;const n=new Node(Number(t));n.left=de();n.right=de();return n;};const root=de();if(!root)return[];const q=[root],out=[];while(q.length){const n=q.shift();out.push(n?n.val:null);if(n){q.push(n.left);q.push(n.right);}}while(out.length&&out[out.length-1]==null)out.pop();return out;
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
Manter min-heap de tamanho k; qualquer novo valor maior que a raiz substitui o menor do top-k.

EDGE CASES ESPERADOS:
k=1; k=n; duplicados

COMPLEXIDADE DE TEMPO:
O(n log k)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n log k) porque manter min-heap de tamanho k; qualquer novo valor maior que a raiz substitui o menor do top-k.

COMPLEXIDADE DE ESPAÇO:
O(k)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(k).
*/
function topKLargest(nums, k) {
  const h=[];const up=i=>{while(i){const p=(i-1)>>1;if(h[p]<=h[i])break;[h[p],h[i]]=[h[i],h[p]];i=p;}};const down=i=>{while(true){let l=i*2+1,r=l+1,s=i;if(l<h.length&&h[l]<h[s])s=l;if(r<h.length&&h[r]<h[s])s=r;if(s===i)break;[h[i],h[s]]=[h[s],h[i]];i=s;}};for(const x of nums){if(h.length<k){h.push(x);up(h.length-1);}else if(x>h[0]){h[0]=x;down(0);}}return h.sort((a,b)=>b-a);
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
O menor dos k maiores fica na raiz do min-heap.

EDGE CASES ESPERADOS:
duplicados; k=n

COMPLEXIDADE DE TEMPO:
O(n log k)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n log k) porque o menor dos k maiores fica na raiz do min-heap.

COMPLEXIDADE DE ESPAÇO:
O(k)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(k).
*/
function kthLargest(nums, k) {
  const h=[];const up=i=>{while(i){const p=(i-1)>>1;if(h[p]<=h[i])break;[h[p],h[i]]=[h[i],h[p]];i=p;}};const down=i=>{while(true){let l=i*2+1,r=l+1,s=i;if(l<h.length&&h[l]<h[s])s=l;if(r<h.length&&h[r]<h[s])s=r;if(s===i)break;[h[i],h[s]]=[h[s],h[i]];i=s;}};for(const x of nums){if(h.length<k){h.push(x);up(h.length-1);}else if(x>h[0]){h[0]=x;down(0);}}return h[0];
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
Contar palavras e ordenar chaves por frequência decrescente e lexicografia crescente.

EDGE CASES ESPERADOS:
empate lexicográfico; k=1

COMPLEXIDADE DE TEMPO:
O(n + m log m)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n + m log m) porque contar palavras e ordenar chaves por frequência decrescente e lexicografia crescente.

COMPLEXIDADE DE ESPAÇO:
O(m)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(m).
*/
function topKFrequentWords(words, k) {
  const f=new Map();for(const w of words)f.set(w,(f.get(w)||0)+1);return [...f.keys()].sort((a,b)=>f.get(b)-f.get(a)||a.localeCompare(b)).slice(0,k);
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
Ordenar por fim crescente e aceitar cada atividade cujo início não conflite com a última escolhida.

EDGE CASES ESPERADOS:
intervalos vazios; empates

COMPLEXIDADE DE TEMPO:
O(n log n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n log n) porque ordenar por fim crescente e aceitar cada atividade cujo início não conflite com a última escolhida.

COMPLEXIDADE DE ESPAÇO:
O(n) pela saída

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(n) pela saída.
*/
function activitySelection(intervals) {
  intervals.sort((a,b)=>a[1]-b[1]||a[0]-b[0]);const out=[];let end=-Infinity;for(const it of intervals)if(it[0]>=end){out.push(it);end=it[1];}return out;
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
Ordenar por início e estender o último intervalo enquanto houver sobreposição.

EDGE CASES ESPERADOS:
vazio; intervalos contidos

COMPLEXIDADE DE TEMPO:
O(n log n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n log n) porque ordenar por início e estender o último intervalo enquanto houver sobreposição.

COMPLEXIDADE DE ESPAÇO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(n).
*/
function mergeIntervals(intervals) {
  if(!intervals.length)return[];intervals.sort((a,b)=>a[0]-b[0]);const out=[intervals[0].slice()];for(let i=1;i<intervals.length;i++){const last=out[out.length-1];if(intervals[i][0]<=last[1])last[1]=Math.max(last[1],intervals[i][1]);else out.push(intervals[i].slice());}return out;
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
Copiar intervalos anteriores, fundir os que sobrepõem e copiar os posteriores.

EDGE CASES ESPERADOS:
inserir no início/fim; englobar vários

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque copiar intervalos anteriores, fundir os que sobrepõem e copiar os posteriores.

COMPLEXIDADE DE ESPAÇO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(n).
*/
function insertInterval(intervals, newInterval) {
  const out=[];let i=0,[s,e]=newInterval;while(i<intervals.length&&intervals[i][1]<s)out.push(intervals[i++]);while(i<intervals.length&&intervals[i][0]<=e){s=Math.min(s,intervals[i][0]);e=Math.max(e,intervals[i][1]);i++;}out.push([s,e]);while(i<intervals.length)out.push(intervals[i++]);return out;
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
Ordenar inícios e fins separadamente; incrementar quando uma reunião começa antes de outra terminar.

EDGE CASES ESPERADOS:
sem reuniões; sem sobreposição

COMPLEXIDADE DE TEMPO:
O(n log n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n log n) porque ordenar inícios e fins separadamente; incrementar quando uma reunião começa antes de outra terminar.

COMPLEXIDADE DE ESPAÇO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(n).
*/
function minMeetingRooms(intervals) {
  if(!intervals.length)return 0;const starts=intervals.map(x=>x[0]).sort((a,b)=>a-b),ends=intervals.map(x=>x[1]).sort((a,b)=>a-b);let i=0,j=0,rooms=0,best=0;while(i<starts.length){if(starts[i]<ends[j]){rooms++;best=Math.max(best,rooms);i++;}else{rooms--;j++;}}return best;
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
Ordenar jobs por início e usar DP + busca binária para achar o próximo job compatível.

EDGE CASES ESPERADOS:
trabalhos com mesmo horário; todos sobrepostos

COMPLEXIDADE DE TEMPO:
O(n log n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n log n) porque ordenar jobs por início e usar DP + busca binária para achar o próximo job compatível.

COMPLEXIDADE DE ESPAÇO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(n).
*/
function maxJobProfit(startTime, endTime, profit) {
  const jobs=startTime.map((s,i)=>[s,endTime[i],profit[i]]).sort((a,b)=>a[0]-b[0]);const starts=jobs.map(j=>j[0]),memo=Array(jobs.length).fill(undefined);const lower=x=>{let l=0,r=starts.length;while(l<r){const m=(l+r)>>1;if(starts[m]<x)l=m+1;else r=m;}return l;};const dfs=i=>{if(i>=jobs.length)return 0;if(memo[i]!==undefined)return memo[i];const next=lower(jobs[i][1]);return memo[i]=Math.max(dfs(i+1),jobs[i][2]+dfs(next));};return dfs(0);
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
Criar uma lista por vértice e adicionar ambas as direções para grafo não direcionado.

EDGE CASES ESPERADOS:
sem arestas; vértice isolado

COMPLEXIDADE DE TEMPO:
O(V+E)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(V+E) porque criar uma lista por vértice e adicionar ambas as direções para grafo não direcionado.

COMPLEXIDADE DE ESPAÇO:
O(V+E)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(V+E).
*/
function buildAdjacencyList(n, edges) {
  const g=Array.from({length:n},()=>[]);for(const [u,v] of edges){g[u].push(v);g[v].push(u);}return g;
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
Marcar antes de recursar para evitar ciclos e visitar vizinhos em ordem.

EDGE CASES ESPERADOS:
grafo desconexo; ciclo

COMPLEXIDADE DE TEMPO:
O(V+E)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(V+E) porque marcar antes de recursar para evitar ciclos e visitar vizinhos em ordem.

COMPLEXIDADE DE ESPAÇO:
O(V)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(V).
*/
function graphDFS(n, edges, start) {
  const g=Array.from({length:n},()=>[]);for(const[u,v]of edges){g[u].push(v);g[v].push(u);}g.forEach(a=>a.sort((a,b)=>a-b));const seen=new Set(),out=[];const dfs=u=>{seen.add(u);out.push(u);for(const v of g[u])if(!seen.has(v))dfs(v);};dfs(start);return out;
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
Enfileirar vizinhos ainda não visitados e marcar na entrada da fila.

EDGE CASES ESPERADOS:
grafo desconexo; ciclo

COMPLEXIDADE DE TEMPO:
O(V+E)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(V+E) porque enfileirar vizinhos ainda não visitados e marcar na entrada da fila.

COMPLEXIDADE DE ESPAÇO:
O(V)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(V).
*/
function graphBFS(n, edges, start) {
  const g=Array.from({length:n},()=>[]);for(const[u,v]of edges){g[u].push(v);g[v].push(u);}g.forEach(a=>a.sort((a,b)=>a-b));const q=[start],seen=new Set([start]),out=[];for(let h=0;h<q.length;h++){const u=q[h];out.push(u);for(const v of g[u])if(!seen.has(v)){seen.add(v);q.push(v);}}return out;
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
Cada DFS iniciada em um vértice não visitado identifica exatamente uma componente.

EDGE CASES ESPERADOS:
sem arestas; totalmente conectado

COMPLEXIDADE DE TEMPO:
O(V+E)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(V+E) porque cada DFS iniciada em um vértice não visitado identifica exatamente uma componente.

COMPLEXIDADE DE ESPAÇO:
O(V+E)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(V+E).
*/
function countComponents(n, edges) {
  const g=Array.from({length:n},()=>[]);for(const[u,v]of edges){g[u].push(v);g[v].push(u);}const seen=new Set();let count=0;const dfs=u=>{seen.add(u);for(const v of g[u])if(!seen.has(v))dfs(v);};for(let i=0;i<n;i++)if(!seen.has(i)){count++;dfs(i);}return count;
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
Ao encontrar terra não visitada, contar uma ilha e apagar/visitar toda sua componente.

EDGE CASES ESPERADOS:
toda água; toda terra

COMPLEXIDADE DE TEMPO:
O(rows*cols)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(rows*cols) porque ao encontrar terra não visitada, contar uma ilha e apagar/visitar toda sua componente.

COMPLEXIDADE DE ESPAÇO:
O(rows*cols) pior caso

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(rows*cols) pior caso.
*/
function numIslands(grid) {
  const R=grid.length,C=R?grid[0].length:0;let count=0;const dfs=(r,c)=>{if(r<0||c<0||r>=R||c>=C||grid[r][c]!=="1")return;grid[r][c]="0";dfs(r+1,c);dfs(r-1,c);dfs(r,c+1);dfs(r,c-1);};for(let r=0;r<R;r++)for(let c=0;c<C;c++)if(grid[r][c]==="1"){count++;dfs(r,c);}return count;
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
BFS visita vértices pela menor distância; guardar distância ao enfileirar.

EDGE CASES ESPERADOS:
source=target; inalcançável

COMPLEXIDADE DE TEMPO:
O(V+E)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(V+E) porque bFS visita vértices pela menor distância; guardar distância ao enfileirar.

COMPLEXIDADE DE ESPAÇO:
O(V)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(V).
*/
function shortestPathUnweighted(n, edges, source, target) {
  const g=Array.from({length:n},()=>[]);for(const[u,v]of edges){g[u].push(v);g[v].push(u);}const dist=Array(n).fill(-1),q=[source];dist[source]=0;for(let h=0;h<q.length;h++){const u=q[h];if(u===target)return dist[u];for(const v of g[u])if(dist[v]===-1){dist[v]=dist[u]+1;q.push(v);}}return -1;
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
DFS recebe parent; encontrar vizinho já visitado diferente do pai indica ciclo.

EDGE CASES ESPERADOS:
árvore; componente isolada

COMPLEXIDADE DE TEMPO:
O(V+E)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(V+E) porque dFS recebe parent; encontrar vizinho já visitado diferente do pai indica ciclo.

COMPLEXIDADE DE ESPAÇO:
O(V)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(V).
*/
function hasUndirectedCycle(n, edges) {
  const g=Array.from({length:n},()=>[]);for(const[u,v]of edges){g[u].push(v);g[v].push(u);}const seen=new Set();const dfs=(u,p)=>{seen.add(u);for(const v of g[u]){if(!seen.has(v)){if(dfs(v,u))return true;}else if(v!==p)return true;}return false;};for(let i=0;i<n;i++)if(!seen.has(i)&&dfs(i,-1))return true;return false;
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
Usar 0=novo,1=em processamento,2=finalizado; aresta para estado 1 fecha ciclo.

EDGE CASES ESPERADOS:
DAG; self-loop

COMPLEXIDADE DE TEMPO:
O(V+E)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(V+E) porque usar 0=novo,1=em processamento,2=finalizado; aresta para estado 1 fecha ciclo.

COMPLEXIDADE DE ESPAÇO:
O(V)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(V).
*/
function hasDirectedCycle(n, edges) {
  const g=Array.from({length:n},()=>[]);for(const[u,v]of edges)g[u].push(v);const state=Array(n).fill(0);const dfs=u=>{state[u]=1;for(const v of g[u]){if(state[v]===1)return true;if(state[v]===0&&dfs(v))return true;}state[u]=2;return false;};for(let i=0;i<n;i++)if(state[i]===0&&dfs(i))return true;return false;
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
Enfileirar vértices com indegree zero e liberar dependentes conforme arestas são removidas.

EDGE CASES ESPERADOS:
ciclo; vários nós de indegree 0

COMPLEXIDADE DE TEMPO:
O(V+E)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(V+E) porque enfileirar vértices com indegree zero e liberar dependentes conforme arestas são removidas.

COMPLEXIDADE DE ESPAÇO:
O(V+E)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(V+E).
*/
function topologicalSort(n, edges) {
  const g=Array.from({length:n},()=>[]),ind=Array(n).fill(0);for(const[u,v]of edges){g[u].push(v);ind[v]++;}const q=[];for(let i=0;i<n;i++)if(ind[i]===0)q.push(i);const out=[];for(let h=0;h<q.length;h++){const u=q[h];out.push(u);for(const v of g[u])if(--ind[v]===0)q.push(v);}return out.length===n?out:[];
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
Orientar prerequisite -> course e verificar se Kahn consegue processar todos os cursos.

EDGE CASES ESPERADOS:
ciclo; sem pré-requisitos

COMPLEXIDADE DE TEMPO:
O(V+E)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(V+E) porque orientar prerequisite -> course e verificar se Kahn consegue processar todos os cursos.

COMPLEXIDADE DE ESPAÇO:
O(V+E)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(V+E).
*/
function canFinishCourses(numCourses, prerequisites) {
  const g=Array.from({length:numCourses},()=>[]),ind=Array(numCourses).fill(0);for(const[c,p]of prerequisites){g[p].push(c);ind[c]++;}const q=[];for(let i=0;i<numCourses;i++)if(!ind[i])q.push(i);let done=0;for(let h=0;h<q.length;h++){const u=q[h];done++;for(const v of g[u])if(--ind[v]===0)q.push(v);}return done===numCourses;
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
Extrair sempre a menor distância conhecida e relaxar suas arestas; ignorar entradas obsoletas no heap.

EDGE CASES ESPERADOS:
vértice inalcançável; múltiplas arestas

COMPLEXIDADE DE TEMPO:
O((V+E) log V)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O((V+E) log V) porque extrair sempre a menor distância conhecida e relaxar suas arestas; ignorar entradas obsoletas no heap.

COMPLEXIDADE DE ESPAÇO:
O(V+E)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(V+E).
*/
function dijkstra(n, edges, source) {
  const g=Array.from({length:n},()=>[]);for(const[u,v,w]of edges)g[u].push([v,w]);const dist=Array(n).fill(Infinity);dist[source]=0;const h=[[0,source]];const push=x=>{h.push(x);let i=h.length-1;while(i){let p=(i-1)>>1;if(h[p][0]<=h[i][0])break;[h[p],h[i]]=[h[i],h[p]];i=p;}};const pop=()=>{const root=h[0],last=h.pop();if(h.length){h[0]=last;let i=0;while(true){let l=i*2+1,r=l+1,s=i;if(l<h.length&&h[l][0]<h[s][0])s=l;if(r<h.length&&h[r][0]<h[s][0])s=r;if(s===i)break;[h[i],h[s]]=[h[s],h[i]];i=s;}}return root;};while(h.length){const[d,u]=pop();if(d!==dist[u])continue;for(const[v,w]of g[u])if(d+w<dist[v]){dist[v]=d+w;push([dist[v],v]);}}return dist.map(x=>x===Infinity?null:x);
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
Priorizar f=g+h usando Manhattan; atualizar custo quando um caminho melhor é encontrado.

EDGE CASES ESPERADOS:
sem caminho; start=goal

COMPLEXIDADE DE TEMPO:
O(R*C log(R*C))

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(R*C log(R*C)) porque priorizar f=g+h usando Manhattan; atualizar custo quando um caminho melhor é encontrado.

COMPLEXIDADE DE ESPAÇO:
O(R*C)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(R*C).
*/
function aStarGrid(grid, start, goal) {
  const R=grid.length,C=grid[0].length,key=(r,c)=>r+","+c,h=(r,c)=>Math.abs(r-goal[0])+Math.abs(c-goal[1]);
  const open=[[h(...start),0,start[0],start[1]]],best=new Map([[key(...start),0]]);
  const push=x=>{open.push(x);let i=open.length-1;while(i){const p=(i-1)>>1;if(open[p][0]<=open[i][0])break;[open[p],open[i]]=[open[i],open[p]];i=p;}};
  const pop=()=>{const root=open[0],last=open.pop();if(open.length){open[0]=last;let i=0;while(true){let l=i*2+1,r=l+1,s=i;if(l<open.length&&open[l][0]<open[s][0])s=l;if(r<open.length&&open[r][0]<open[s][0])s=r;if(s===i)break;[open[i],open[s]]=[open[s],open[i]];i=s;}}return root;};
  while(open.length){const[f,g,r,c]=pop();if(r===goal[0]&&c===goal[1])return g;if(g!==best.get(key(r,c)))continue;for(const[dr,dc]of[[1,0],[-1,0],[0,1],[0,-1]]){const nr=r+dr,nc=c+dc;if(nr<0||nc<0||nr>=R||nc>=C||grid[nr][nc]===1)continue;const ng=g+1,k=key(nr,nc);if(ng<(best.get(k)??Infinity)){best.set(k,ng);push([ng+h(nr,nc),ng,nr,nc]);}}}return -1;
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
Para chegar ao degrau i, a última ação veio de i-1 ou i-2; manter só os dois estados anteriores.

EDGE CASES ESPERADOS:
n=1; n=2

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque para chegar ao degrau i, a última ação veio de i-1 ou i-2; manter só os dois estados anteriores.

COMPLEXIDADE DE ESPAÇO:
O(1)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(1).
*/
function climbStairs(n) {
  if(n<=2)return n;let a=1,b=2;for(let i=3;i<=n;i++){[a,b]=[b,a+b];}return b;
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
Em cada casa, escolher entre ignorá-la ou roubá-la somando ao melhor de duas posições atrás.

EDGE CASES ESPERADOS:
array vazio; uma casa

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque em cada casa, escolher entre ignorá-la ou roubá-la somando ao melhor de duas posições atrás.

COMPLEXIDADE DE ESPAÇO:
O(1)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(1).
*/
function houseRobber(nums) {
  let prev2=0,prev1=0;for(const money of nums){const cur=Math.max(prev1,prev2+money);prev2=prev1;prev1=cur;}return prev1;
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
dp[x] guarda o mínimo para formar x; cada moeda tenta transição a partir de x-coin.

EDGE CASES ESPERADOS:
amount=0; impossível

COMPLEXIDADE DE TEMPO:
O(amount * coins)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(amount * coins) porque dp[x] guarda o mínimo para formar x; cada moeda tenta transição a partir de x-coin.

COMPLEXIDADE DE ESPAÇO:
O(amount)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(amount).
*/
function coinChange(coins, amount) {
  const dp=Array(amount+1).fill(Infinity);dp[0]=0;for(let x=1;x<=amount;x++)for(const c of coins)if(c<=x)dp[x]=Math.min(dp[x],dp[x-c]+1);return dp[amount]===Infinity?-1:dp[amount];
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
Iterar moedas por fora garante que ordens diferentes da mesma combinação não sejam contadas várias vezes.

EDGE CASES ESPERADOS:
amount=0; sem moedas

COMPLEXIDADE DE TEMPO:
O(amount * coins)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(amount * coins) porque iterar moedas por fora garante que ordens diferentes da mesma combinação não sejam contadas várias vezes.

COMPLEXIDADE DE ESPAÇO:
O(amount)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(amount).
*/
function coinChangeWays(coins, amount) {
  const dp=Array(amount+1).fill(0);dp[0]=1;for(const c of coins)for(let x=c;x<=amount;x++)dp[x]+=dp[x-c];return dp[amount];
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
Manter tails onde tails[len-1] é o menor final possível de uma subsequência crescente daquele tamanho.

EDGE CASES ESPERADOS:
decrescente; duplicados

COMPLEXIDADE DE TEMPO:
O(n log n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n log n) porque manter tails onde tails[len-1] é o menor final possível de uma subsequência crescente daquele tamanho.

COMPLEXIDADE DE ESPAÇO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(n).
*/
function lengthOfLIS(nums) {
  const tails=[];for(const x of nums){let l=0,r=tails.length;while(l<r){const m=(l+r)>>1;if(tails[m]<x)l=m+1;else r=m;}tails[l]=x;}return tails.length;
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
Se caracteres coincidem, somar 1 à diagonal; senão escolher melhor entre remover de uma das strings.

EDGE CASES ESPERADOS:
uma string vazia; strings iguais

COMPLEXIDADE DE TEMPO:
O(n*m)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n*m) porque se caracteres coincidem, somar 1 à diagonal; senão escolher melhor entre remover de uma das strings.

COMPLEXIDADE DE ESPAÇO:
O(m)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(m).
*/
function longestCommonSubsequence(a, b) {
  const dp=Array(b.length+1).fill(0);for(let i=1;i<=a.length;i++){let diag=0;for(let j=1;j<=b.length;j++){const up=dp[j];if(a[i-1]===b[j-1])dp[j]=diag+1;else dp[j]=Math.max(dp[j],dp[j-1]);diag=up;}}return dp[b.length];
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
Atualizar capacidades em ordem decrescente para impedir reutilização do mesmo item.

EDGE CASES ESPERADOS:
capacidade 0; item maior que capacidade

COMPLEXIDADE DE TEMPO:
O(n*capacity)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n*capacity) porque atualizar capacidades em ordem decrescente para impedir reutilização do mesmo item.

COMPLEXIDADE DE ESPAÇO:
O(capacity)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(capacity).
*/
function knapsack01(weights, values, capacity) {
  const dp=Array(capacity+1).fill(0);for(let i=0;i<weights.length;i++)for(let c=capacity;c>=weights[i];c--)dp[c]=Math.max(dp[c],dp[c-weights[i]]+values[i]);return dp[capacity];
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
Se soma total é par, procurar subconjunto que alcance metade usando DP booleana descendente.

EDGE CASES ESPERADOS:
soma ímpar; zeros

COMPLEXIDADE DE TEMPO:
O(n*sum)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n*sum) porque se soma total é par, procurar subconjunto que alcance metade usando DP booleana descendente.

COMPLEXIDADE DE ESPAÇO:
O(sum)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(sum).
*/
function canPartition(nums) {
  const total=nums.reduce((a,b)=>a+b,0);if(total%2)return false;const target=total/2,dp=Array(target+1).fill(false);dp[0]=true;for(const x of nums)for(let s=target;s>=x;s--)dp[s]=dp[s]||dp[s-x];return dp[target];
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
Cada célula recebe número de caminhos de cima + esquerda; uma linha de DP é suficiente.

EDGE CASES ESPERADOS:
1x1; uma linha

COMPLEXIDADE DE TEMPO:
O(m*n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(m*n) porque cada célula recebe número de caminhos de cima + esquerda; uma linha de DP é suficiente.

COMPLEXIDADE DE ESPAÇO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(n).
*/
function uniquePaths(m, n) {
  const dp=Array(n).fill(1);for(let r=1;r<m;r++)for(let c=1;c<n;c++)dp[c]+=dp[c-1];return dp[n-1];
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
dp[c] representa melhor custo até a coluna c da linha atual, vindo de cima ou esquerda.

EDGE CASES ESPERADOS:
1x1; uma linha/coluna

COMPLEXIDADE DE TEMPO:
O(R*C)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(R*C) porque dp[c] representa melhor custo até a coluna c da linha atual, vindo de cima ou esquerda.

COMPLEXIDADE DE ESPAÇO:
O(C)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(C).
*/
function minPathSum(grid) {
  const R=grid.length,C=grid[0].length,dp=Array(C).fill(Infinity);dp[0]=0;for(let r=0;r<R;r++)for(let c=0;c<C;c++)dp[c]=grid[r][c]+Math.min(dp[c],c?dp[c-1]:Infinity);return dp[C-1];
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
dp[i] indica se prefixo de tamanho i pode ser segmentado; testar cortes anteriores válidos.

EDGE CASES ESPERADOS:
string vazia; prefixos sobrepostos

COMPLEXIDADE DE TEMPO:
O(n²)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n²) porque dp[i] indica se prefixo de tamanho i pode ser segmentado; testar cortes anteriores válidos.

COMPLEXIDADE DE ESPAÇO:
O(n + d)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(n + d).
*/
function wordBreak(s, wordDict) {
  const words=new Set(wordDict),dp=Array(s.length+1).fill(false);dp[0]=true;for(let i=1;i<=s.length;i++)for(let j=0;j<i;j++)if(dp[j]&&words.has(s.slice(j,i))){dp[i]=true;break;}return dp[s.length];
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
Uma posição pode ser decodificada sozinha se 1..9 e junto da anterior se 10..26.

EDGE CASES ESPERADOS:
começa com 0; contém 10/20; vazia

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque uma posição pode ser decodificada sozinha se 1..9 e junto da anterior se 10..26.

COMPLEXIDADE DE ESPAÇO:
O(1)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(1).
*/
function numDecodings(s) {
  if(!s||s[0]==="0")return 0;let prev2=1,prev1=1;for(let i=1;i<s.length;i++){let cur=0;if(s[i]!=="0")cur+=prev1;const two=Number(s.slice(i-1,i+1));if(two>=10&&two<=26)cur+=prev2;prev2=prev1;prev1=cur;}return prev1;
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
Cada nó guarda filhos por caractere e flag de fim; search exige fim, prefix apenas caminho existente.

EDGE CASES ESPERADOS:
palavra vazia; prefixo igual à palavra

COMPLEXIDADE DE TEMPO:
O(total de caracteres)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(total de caracteres) porque cada nó guarda filhos por caractere e flag de fim; search exige fim, prefix apenas caminho existente.

COMPLEXIDADE DE ESPAÇO:
O(total de caracteres)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(total de caracteres).
*/
function trieOperations(operations) {
  class Node{constructor(){this.children=new Map();this.end=false;}}const root=new Node(),ans=[];const insert=w=>{let n=root;for(const c of w){if(!n.children.has(c))n.children.set(c,new Node());n=n.children.get(c);}n.end=true;};const walk=w=>{let n=root;for(const c of w){if(!n.children.has(c))return null;n=n.children.get(c);}return n;};for(const[op,w]of operations){if(op==="insert")insert(w);else if(op==="search")ans.push(!!walk(w)?.end);else ans.push(!!walk(w));}return ans;
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
Cada união reduz componentes somente se raízes eram diferentes; compressão e rank tornam operações quase constantes.

EDGE CASES ESPERADOS:
união repetida; self union

COMPLEXIDADE DE TEMPO:
Quase O(n + m α(n))

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é Quase O(n + m α(n)) porque cada união reduz componentes somente se raízes eram diferentes; compressão e rank tornam operações quase constantes.

COMPLEXIDADE DE ESPAÇO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(n).
*/
function unionFindComponents(n, unions) {
  const parent=Array.from({length:n},(_,i)=>i),rank=Array(n).fill(0);const find=x=>parent[x]===x?x:(parent[x]=find(parent[x]));let count=n;for(const[a,b]of unions){let ra=find(a),rb=find(b);if(ra===rb)continue;if(rank[ra]<rank[rb])[ra,rb]=[rb,ra];parent[rb]=ra;if(rank[ra]===rank[rb])rank[ra]++;count--;}return count;
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
XOR cancela todos os pares e deixa apenas o elemento sem par.

EDGE CASES ESPERADOS:
um elemento; negativos

COMPLEXIDADE DE TEMPO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n) porque xOR cancela todos os pares e deixa apenas o elemento sem par.

COMPLEXIDADE DE ESPAÇO:
O(1)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(1).
*/
function singleNumber(nums) {
  let x=0;for(const n of nums)x^=n;return x;
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
Cada operação n &= n-1 apaga exatamente um bit 1.

EDGE CASES ESPERADOS:
n=0; potência de 2

COMPLEXIDADE DE TEMPO:
O(k)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(k) porque cada operação n &= n-1 apaga exatamente um bit 1.

COMPLEXIDADE DE ESPAÇO:
O(1)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(1).
*/
function countSetBits(n) {
  n=n>>>0;let count=0;while(n){n&=n-1;count++;}return count;
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
Fenwick usa lowbit para navegar por blocos de prefixo; range sum = prefix(r)-prefix(l-1).

EDGE CASES ESPERADOS:
índice 0; range completo; múltiplos updates

COMPLEXIDADE DE TEMPO:
O((n+q) log n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O((n+q) log n) porque fenwick usa lowbit para navegar por blocos de prefixo; range sum = prefix(r)-prefix(l-1).

COMPLEXIDADE DE ESPAÇO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(n).
*/
function fenwickQueries(arr, operations) {
  const bit=Array(arr.length+1).fill(0);const add=(i,d)=>{for(i++;i<bit.length;i+=i&-i)bit[i]+=d;};const pref=i=>{let s=0;for(i++;i>0;i-=i&-i)s+=bit[i];return s;};arr.forEach((v,i)=>add(i,v));const out=[];for(const op of operations){if(op[0]==="add")add(op[1],op[2]);else out.push(pref(op[2])-pref(op[1]-1));}return out;
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
Construir árvore em vetor; query divide intervalos e update altera folha propagando mínimos.

EDGE CASES ESPERADOS:
um elemento; query total

COMPLEXIDADE DE TEMPO:
O(n + q log n)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n + q log n) porque construir árvore em vetor; query divide intervalos e update altera folha propagando mínimos.

COMPLEXIDADE DE ESPAÇO:
O(n)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(n).
*/
function segmentTreeMin(arr, operations) {
  let size=1;while(size<arr.length)size*=2;const t=Array(2*size).fill(Infinity);for(let i=0;i<arr.length;i++)t[size+i]=arr[i];for(let i=size-1;i;i--)t[i]=Math.min(t[i*2],t[i*2+1]);const set=(i,v)=>{i+=size;t[i]=v;for(i>>=1;i;i>>=1)t[i]=Math.min(t[i*2],t[i*2+1]);};const query=(l,r)=>{l+=size;r+=size;let ans=Infinity;while(l<=r){if(l&1)ans=Math.min(ans,t[l++]);if(!(r&1))ans=Math.min(ans,t[r--]);l>>=1;r>>=1;}return ans;};const out=[];for(const op of operations){if(op[0]==="set")set(op[1],op[2]);else out.push(query(op[1],op[2]));}return out;
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
Map localiza nó; lista mantém MRU perto da cabeça e LRU perto da cauda para mover/remover em O(1).

EDGE CASES ESPERADOS:
capacity=1; atualizar chave existente

COMPLEXIDADE DE TEMPO:
O(1) médio por operação

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(1) médio por operação porque map localiza nó; lista mantém MRU perto da cabeça e LRU perto da cauda para mover/remover em O(1).

COMPLEXIDADE DE ESPAÇO:
O(capacity)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(capacity).
*/
function lruCacheSimulation(capacity, operations) {
  class Node{constructor(k=0,v=0){this.k=k;this.v=v;this.prev=null;this.next=null;}}const map=new Map(),head=new Node(),tail=new Node();head.next=tail;tail.prev=head;const remove=n=>{n.prev.next=n.next;n.next.prev=n.prev;};const addFront=n=>{n.next=head.next;n.prev=head;head.next.prev=n;head.next=n;};const touch=n=>{remove(n);addFront(n);};const out=[];for(const op of operations){if(op[0]==="get"){const n=map.get(op[1]);if(!n)out.push(-1);else{touch(n);out.push(n.v);}}else{const[k,v]=[op[1],op[2]];if(map.has(k)){const n=map.get(k);n.v=v;touch(n);}else{const n=new Node(k,v);map.set(k,n);addFront(n);if(map.size>capacity){const old=tail.prev;remove(old);map.delete(old.k);}}}}return out;
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
Pré-calcular LPS do padrão; em mismatch, reutilizar o maior prefixo que também é sufixo.

EDGE CASES ESPERADOS:
pattern vazio; não encontrado; sobreposição

COMPLEXIDADE DE TEMPO:
O(n+m)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n+m) porque pré-calcular LPS do padrão; em mismatch, reutilizar o maior prefixo que também é sufixo.

COMPLEXIDADE DE ESPAÇO:
O(m)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(m).
*/
function kmpSearch(text, pattern) {
  if(pattern==="")return 0;const lps=Array(pattern.length).fill(0);for(let i=1,len=0;i<pattern.length;){if(pattern[i]===pattern[len])lps[i++]=++len;else if(len)len=lps[len-1];else i++;}for(let i=0,j=0;i<text.length;){if(text[i]===pattern[j]){i++;j++;if(j===pattern.length)return i-j;}else if(j)j=lps[j-1];else i++;}return -1;
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
Relaxar todas as arestas V-1 vezes; uma melhoria adicional indica ciclo negativo alcançável.

EDGE CASES ESPERADOS:
vértice inalcançável; ciclo negativo

COMPLEXIDADE DE TEMPO:
O(V*E)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(V*E) porque relaxar todas as arestas V-1 vezes; uma melhoria adicional indica ciclo negativo alcançável.

COMPLEXIDADE DE ESPAÇO:
O(V)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(V).
*/
function bellmanFord(n, edges, source) {
  const dist=Array(n).fill(Infinity);dist[source]=0;for(let i=1;i<n;i++){let changed=false;for(const[u,v,w]of edges)if(dist[u]!==Infinity&&dist[u]+w<dist[v]){dist[v]=dist[u]+w;changed=true;}if(!changed)break;}let negativeCycle=false;for(const[u,v,w]of edges)if(dist[u]!==Infinity&&dist[u]+w<dist[v])negativeCycle=true;return {dist:dist.map(x=>x===Infinity?null:x),negativeCycle};
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
Para cada vértice k, permitir k como intermediário e tentar melhorar dist[i][j] via i->k->j.

EDGE CASES ESPERADOS:
grafo desconexo; diagonal zero

COMPLEXIDADE DE TEMPO:
O(V³)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(V³) porque para cada vértice k, permitir k como intermediário e tentar melhorar dist[i][j] via i->k->j.

COMPLEXIDADE DE ESPAÇO:
O(V²)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(V²).
*/
function floydWarshall(matrix) {
  const n=matrix.length,d=matrix.map(row=>row.map(x=>x==null?Infinity:x));for(let k=0;k<n;k++)for(let i=0;i<n;i++)for(let j=0;j<n;j++)if(d[i][k]+d[k][j]<d[i][j])d[i][j]=d[i][k]+d[k][j];return d.map(r=>r.map(x=>x===Infinity?null:x));
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
Primeiro DFS grava ordem de término; segundo DFS no transposto, em ordem reversa, extrai SCCs.

EDGE CASES ESPERADOS:
DAG; uma SCC única

COMPLEXIDADE DE TEMPO:
O(V+E)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(V+E) porque primeiro DFS grava ordem de término; segundo DFS no transposto, em ordem reversa, extrai SCCs.

COMPLEXIDADE DE ESPAÇO:
O(V+E)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(V+E).
*/
function stronglyConnectedComponents(n, edges) {
  const g=Array.from({length:n},()=>[]),rg=Array.from({length:n},()=>[]);for(const[u,v]of edges){g[u].push(v);rg[v].push(u);}const seen=Array(n).fill(false),order=[];const dfs=u=>{seen[u]=true;for(const v of g[u])if(!seen[v])dfs(v);order.push(u);};for(let i=0;i<n;i++)if(!seen[i])dfs(i);seen.fill(false);const comps=[];const dfs2=(u,c)=>{seen[u]=true;c.push(u);for(const v of rg[u])if(!seen[v])dfs2(v,c);};for(let i=order.length-1;i>=0;i--){const u=order[i];if(!seen[u]){const c=[];dfs2(u,c);c.sort((a,b)=>a-b);comps.push(c);}}return comps;
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
Escolher arestas por peso crescente e aceitar apenas as que conectam componentes diferentes.

EDGE CASES ESPERADOS:
grafo desconexo; pesos iguais

COMPLEXIDADE DE TEMPO:
O(E log E)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(E log E) porque escolher arestas por peso crescente e aceitar apenas as que conectam componentes diferentes.

COMPLEXIDADE DE ESPAÇO:
O(V)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(V).
*/
function kruskalMST(n, edges) {
  edges.sort((a,b)=>a[2]-b[2]);const p=Array.from({length:n},(_,i)=>i),r=Array(n).fill(0);const f=x=>p[x]===x?x:(p[x]=f(p[x]));let total=0,count=0;for(const[u,v,w]of edges){let a=f(u),b=f(v);if(a===b)continue;if(r[a]<r[b])[a,b]=[b,a];p[b]=a;if(r[a]===r[b])r[a]++;total+=w;if(++count===n-1)break;}return count===n-1?total:null;
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
Se caracteres iguais, copiar diagonal; caso contrário 1 + mínimo entre insert, delete e replace.

EDGE CASES ESPERADOS:
string vazia; strings iguais

COMPLEXIDADE DE TEMPO:
O(n*m)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n*m) porque se caracteres iguais, copiar diagonal; caso contrário 1 + mínimo entre insert, delete e replace.

COMPLEXIDADE DE ESPAÇO:
O(m)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(m).
*/
function editDistance(a, b) {
  const dp=Array.from({length:b.length+1},(_,j)=>j);for(let i=1;i<=a.length;i++){let diag=dp[0];dp[0]=i;for(let j=1;j<=b.length;j++){const up=dp[j];if(a[i-1]===b[j-1])dp[j]=diag;else dp[j]=1+Math.min(dp[j],dp[j-1],diag);diag=up;}}return dp[b.length];
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
dp[i][j] indica match dos prefixos; * pode ignorar o par anterior ou consumir um caractere compatível.

EDGE CASES ESPERADOS:
string vazia; padrão com múltiplos *

COMPLEXIDADE DE TEMPO:
O(n*m)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n*m) porque dp[i][j] indica match dos prefixos; * pode ignorar o par anterior ou consumir um caractere compatível.

COMPLEXIDADE DE ESPAÇO:
O(n*m)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(n*m).
*/
function regexMatch(s, p) {
  const n=s.length,m=p.length,dp=Array.from({length:n+1},()=>Array(m+1).fill(false));dp[0][0]=true;for(let j=2;j<=m;j++)if(p[j-1]==="*")dp[0][j]=dp[0][j-2];const match=(i,j)=>i>0&&(p[j-1]==="."||p[j-1]===s[i-1]);for(let i=0;i<=n;i++)for(let j=1;j<=m;j++){if(p[j-1]==="*"){dp[i][j]=dp[i][j-2]||(match(i,j-1)&&dp[i-1][j]);}else if(match(i,j))dp[i][j]=dp[i-1][j-1];}return dp[n][m];
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
Adicionar sentinelas 1 e definir dp[l][r] pelo melhor balão k a ser estourado por último dentro do intervalo.

EDGE CASES ESPERADOS:
array vazio; um balão

COMPLEXIDADE DE TEMPO:
O(n³)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(n³) porque adicionar sentinelas 1 e definir dp[l][r] pelo melhor balão k a ser estourado por último dentro do intervalo.

COMPLEXIDADE DE ESPAÇO:
O(n²)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(n²).
*/
function burstBalloons(nums) {
  const a=[1,...nums.filter(x=>x>0),1],n=a.length,dp=Array.from({length:n},()=>Array(n).fill(0));for(let len=2;len<n;len++)for(let l=0;l+len<n;l++){const r=l+len;for(let k=l+1;k<r;k++)dp[l][r]=Math.max(dp[l][r],dp[l][k]+a[l]*a[k]*a[r]+dp[k][r]);}return dp[0][n-1];
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
BFS encontra caminho aumentante mais curto na rede residual; aumentar pelo gargalo e criar capacidade reversa.

EDGE CASES ESPERADOS:
sem caminho; múltiplas arestas; capacidades zero

COMPLEXIDADE DE TEMPO:
O(V*E²)

JUSTIFICATIVA DA COMPLEXIDADE DE TEMPO:
A complexidade é O(V*E²) porque bFS encontra caminho aumentante mais curto na rede residual; aumentar pelo gargalo e criar capacidade reversa.

COMPLEXIDADE DE ESPAÇO:
O(V²)

JUSTIFICATIVA DA COMPLEXIDADE DE ESPAÇO:
A estrutura auxiliar utilizada leva O(V²).
*/
function maxFlow(n, edges, source, sink) {
  const cap=Array.from({length:n},()=>Array(n).fill(0)),adj=Array.from({length:n},()=>new Set());for(const[u,v,c]of edges){cap[u][v]+=c;adj[u].add(v);adj[v].add(u);}let flow=0;while(true){const parent=Array(n).fill(-1);parent[source]=-2;const q=[[source,Infinity]];let aug=0;for(let h=0;h<q.length&&!aug;h++){const[u,f]=q[h];for(const v of adj[u])if(parent[v]===-1&&cap[u][v]>0){parent[v]=u;const nf=Math.min(f,cap[u][v]);if(v===sink){aug=nf;break;}q.push([v,nf]);}}if(!aug)break;flow+=aug;let v=sink;while(v!==source){const u=parent[v];cap[u][v]-=aug;cap[v][u]+=aug;v=u;}}return flow;
}

console.log(maxFlow(6, [[0,1,16],[0,2,13],[1,2,10],[2,1,4],[1,3,12],[3,2,9],[2,4,14],[4,3,7],[3,5,20],[4,5,4]], 0, 5)); // Esperado: 23
// #endregion
