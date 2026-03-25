# Dynamic Programming

## 📖 O Que É? / What is it?

**Dynamic Programming (DP)** é uma técnica de otimização que resolve problemas complexos dividindo-os em **subproblemas sobrepostos** e armazenando seus resultados para **evitar recálculos**.

**DP solves problems by breaking them into overlapping subproblems and storing results to avoid recalculation — a technique called memoization.**

---

## 🎯 Quando Usar? / When to Use?

### ✅ Use DP quando:
- O problema tem **subestrutura ótima**: solução ótima depende de subproblemas ótimos
- Há **subproblemas sobrepostos**: mesmos subproblemas são resolvidos múltiplas vezes
- Quer melhorar recursão ingênua: de exponencial para polinomial

### ❌ Não use DP quando:
- Não há sobreposição de subproblemas
- Problema é greedy puro (não precisa DP)
- Espaço de memória é crítico (trade-off)

---

## 🛠️ Abordagens / Approaches

| Abordagem | Top-Down | Bottom-Up |
|-----------|--------|-----------|
| **Estilo** | Recursão + Memoização | Iteração + Tabulação |
| **Memória** | O(n) aux | O(n) aux |
| **Intuição** | Quebra problema, resuelve no caminho de volta | Constrói solução pequena até maior |
| **Uso** | Mais intuitivo | Mais eficiente em espaço |

---

## 📊 Complexidade / Complexity

| Problema | Brute Force | Com DP |
|----------|------------|--------|
| Fibonacci(n) | O(2^n) | O(n) |
| Climb Stairs | O(2^n) | O(n) |
| Coin Change | O(n^m) | O(n*m) |
| LCS | O(2^(m+n)) | O(m*n) |

---

## 📚 Tabela de Exercícios / Exercises

| # | Título / Title | Dificuldade | Status | Arquivo | LeetCode |
|:-:|-------|-----------|--------|---------|----------|
| 70 | Climbing Stairs | Easy | ✅ | [70.climbing-stairs.py](70.climbing-stairs.py) | [Link](https://leetcode.com/problems/climbing-stairs/) |
| 91 | Decode Ways | Medium | ✅ | [91.decode-ways.py](91.decode-ways.py) | [Link](https://leetcode.com/problems/decode-ways/) |
| 332 | Coin Change (Minimum Coins) | Medium | ✅ | [332.coin-change.py](332.coin-change.py) | [Link](https://leetcode.com/problems/coin-change/) |
| 146 | LRU Cache | Hard | ✅ | [146.lru-cache.py](146.lru-cache.py) | [Link](https://leetcode.com/problems/lru-cache/) |

---

## 💡 Padrões Comuns / Common Patterns

### 1. Fibonacci-like (Linear Recurrence)
```
dp[i] = dp[i-1] + dp[i-2]
Exemplo: Climbing Stairs
```

### 2. Mochila (Knapsack)
```
dp[i][w] = max(dp[i-1][w], valor[i] + dp[i-1][w - peso[i]])
Exemplo: 0/1 Knapsack
```

### 3. String Matching
```
dp[i][j] = (s1[i] == s2[j]) ? dp[i-1][j-1] : ...
Exemplo: Longest Common Subsequence
```

### 4. Intervalo (Interval DP)
```
dp[i][j] = resultado processando intervalo [i, j]
Exemplo: Matrix Chain Multiplication
```

---

## 🧠 Heurística: Quando Reconhecer DP

1. ✅ **"Qual é o máximo/mínimo?"** → DP
2. ✅ **"Quantas maneiras?"** → DP
3. ✅ **"É possível?"** → DP
4. ✅ **Você escreve uma recursão com parâmetros?** → Considera DP

Contra-exemplo: "Encontre o elemento maior" = não é DP (Greedy puro)

---

## 🔗 Recursos / Resources

- [DP Introduction](https://www.youtube.com/results?search_query=dynamic+programming+introduction)
- [Memoization vs Tabulation](https://www.geeksforgeeks.org/tabulation-vs-memoization/)
- [LeetCode DP Tag](https://leetcode.com/tag/dynamic-programming/)

---

## 📈 Progresso / Progress

Exercícios completados: **4/4** ✅

| Status | Contagem |
|--------|----------|
| ✅ Completo | 4 |
| ⏳ Em progresso | 0 |
| ❌ Bloqueado | 0 |

---

**Última atualização**: 25-Mar-2026  
**Last updated**: Mar 25, 2026
