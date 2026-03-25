# Binary Numbers & Bit Manipulation

## 📖 O Que É? / What is it?

**Bit Manipulation** (manipulação de bits) envolve trabalhar diretamente com **representações binárias** de números usando operações lógicas como AND, OR, XOR, SHIFT. Esses problemas exploram propriedades de bits para resolver problemas com **eficiência extra**.

**Bit manipulation works directly with binary representations using logical operations (AND, OR, XOR, SHIFT) to solve problems with extra efficiency.**

---

## 🎯 Quando Usar? / When to Use?

### ✅ Use Bit Manipulation quando:
- Precisa contar bits, encontrar padrões binários
- Quer otimizar espaço (1 bit = 1 informação)
- Trabalha com **powers of 2**, **flags**, **masks**
- Problemas exploram **XOR**, **AND**, **OR** properties
- Gaming, graphics, networking (low-level)

### ❌ Não use quando:
- Solução com inteiros normais é clara o suficiente
- Legibilidade é prioritária (bits são menos intuitivos)

---

## 🔢 Operações Essenciais / Essential Bitwise Operations

| Operação | Símbolo | Exemplo | Descrição |
|----------|---------|---------|-----------|
| AND | `&` | `5 & 3 = 1` | `(101) & (011) = (001)` |
| OR | `\|` | `5 \| 3 = 7` | `(101) \| (011) = (111)` |
| XOR | `^` | `5 ^ 3 = 6` | `(101) ^ (011) = (110)` |
| NOT | `~` | `~5 = -6` | Inverte todos os bits |
| Left Shift | `<<` | `5 << 1 = 10` | Multiplica por 2 |
| Right Shift | `>>` | `5 >> 1 = 2` | Divide por 2 (inteiro) |

---

## 💡 Truques e Propriedades / Tricks & Properties

| Truque | Código | Uso |
|--------|--------|-----|
| **is Power of 2** | `(n & (n-1)) == 0` | Verificar se n é potência de 2 |
| **Count Bits** | `bin(n).count('1')` | Contar bits 1 em n |
| **Toggle Bit** | `n ^ (1 << i)` | Inverter i-ésimo bit |
| **Clear i-th Bit** | `n & ~(1 << i)` | Limpar i-ésimo bit |
| **Set i-th Bit** | `n \| (1 << i)` | Ativar i-ésimo bit |
| **Get i-th Bit** | `(n >> i) & 1` | Extrair i-ésimo bit |
| **XOR = Diferente** | `a ^ b` | Se bits são diferentes, resultado 1 |
| **XOR Autoanula** | `a ^ a = 0` | Todo número XOR com si = 0 |

---

## 📚 Tabela de Exercícios / Exercises

| # | Título / Title | Dificuldade | Status | Arquivo | LeetCode |
|:-:|-------|-----------|--------|---------|----------|
| 1342 | Number of Steps to Reduce Number to Zero | Easy | ✅ | [1342.number-of-steps-to-reduce-a-number-to-zero.py](1342.number-of-steps-to-reduce-a-number-to-zero.py) | [Link](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/) |
| 268 | Missing Number | Easy | ✅ | [268.missing-number.py](268.missing-number.py) | [Link](https://leetcode.com/problems/missing-number/) |

---

## 🧠 Problemas Clássicos / Classic Problems

### 1. **Single Number (XOR Magic)**
Encontre o único número que aparece uma vez enquanto outros aparecem duas vezes.
```
Solução: XOR todos → resultado é o número único
Porque: a ^ a = 0, a ^ 0 = a
```

### 2. **Power of Two**
Verificar se um número é potência de 2.
```
Solução: (n & (n-1)) == 0
Porque: Potência de 2 em binário tem 1 bit ligado apenas
```

### 3. **Hamming Distance**
Contar número de posições onde bits diferem em dois inteiros.
```
Solução: XOR e contar bits 1
```

### 4. **Missing Number (XOR ou Math)**
Encontre o número faltante em [0, 1, 2, ..., n].
```
Solução 1: XOR todos os indices com todos os números
Solução 2: Fórmula de soma
```

---

## 🔗 Recursos / Resources

- [Biwise Operations Cheatsheet](https://www.hackerrank.com/challenges/bitwise-and/problem)
- [LeetCode Bit Manipulation](https://leetcode.com/tag/bit-manipulation/)
- [Brian Kernighan Algorithm](https://www.youtube.com/results?search_query=brian+kernighan+bit+counting)

---

## 📈 Progresso / Progress

Exercícios completados: **2/2** ✅

| Status | Contagem |
|--------|----------|
| ✅ Completo | 2 |
| ⏳ Em progresso | 0 |
| ❌ Bloqueado | 0 |

---

**Última atualização**: 25-Mar-2026  
**Last updated**: Mar 25, 2026
