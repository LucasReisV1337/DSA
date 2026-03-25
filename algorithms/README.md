# Algorithms & Techniques / 算法和技巧

## 📖 O Que É? / What is it?

Esta pasta contém **técnicas e padrões de algoritmos** que se aplicam a vários problemas. Diferente de estruturas de dados (que armazenam), técnicas são **estratégias para resolver diferentes tipos de problemas**.

**This folder contains algorithm techniques and patterns applicable to multiple problems. Unlike data structures (which store), techniques are strategies for solving different problem types.**

---

## 🎯 Índice de Técnicas / Technique Index

### 1. **Binary Search** 🔍
Procura eficiente em array **ordenado**, reduzindo o espaço de busca pela metade.
- **Complexidade**: O(log n)
- **Padrão**: Enquanto esquerda ≤ direita, divida o meio
- **Arquivo**: [binary-search/](binary-search/)

### 2. **Sliding Window** 📏
Manutenção de uma "janela" móvel sobre array para otimizar varreduras contíguas.
- **Complexidade**: O(n) ou O(n + m) em geral (linear)
- **Padrão**: Expanda janela, contraia quando condição falha
- **Arquivo**: [sliding-window/](sliding-window/)

### 3. **Two Pointer** ⬅️➡️
Dois ponteiros avançam/recuam para encontrar relações em array.
- **Complexidade**: O(n) geralmente
- **Padrão**: Comece em extremos, aproxime se soma pequena, afaste se grande
- **Arquivo**: [two-pointer/](two-pointer/)

### 4. **Two Sum** ➕
Encontre dois números que somem a um alvo — padrão fundamental.
- **Complexidade**: O(n) com HashMap ou O(n log n) com sort
- **Padrão**: Use HashMap para lookup O(1)
- **Arquivo**: [two-sum/](two-sum/)

### 5. **Text Search** 🧵
Busca de padrões em texto com pré-processamento e comparação eficiente.
- **Complexidade**: geralmente O(n + m)
- **Padrão**: KMP, Rabin-Karp, Boyer-Moore e autômatos finitos
- **Arquivo**: [text-search/](text-search/)

### 0. **Fundamentals**
Base conceitual para os demais materiais da pasta.
- **Recursion**: decomposição do problema em subproblemas menores
- **Complexity**: análise de tempo e espaço, incluindo Big O
- **ADTs**: abstração do comportamento antes da implementação

---

## 🗺️ Estrutura / Structure

```
algorithms/
├── binary-search/
│   ├── binary-search.py       # Implementação base
│   └── (exercícios LeetCode)
├── sliding-window/
│   ├── sliding-window.py      # Template
│   ├── maximumLengthSubstring.py
│   └── (exercícios)
├── two-pointer/
│   ├── two-pointer.py         # Implementação base
│   └── (exercícios)
└── two-sum/
    ├── two-sum.py             # Implementação base
    └── (exercícios)
└── text-search/
    ├── README.md               # Busca de padrões em texto
    └── (exercícios e resumos)
```

---

## 🧠 Quando Usar Cada Técnica / When to Use

| Situação | Técnica | Razão |
|----------|---------|-------|
| "Array ordenado, encontre valor" | Binary Search | Divide por 2 a cada passo |
| "Encontre subarray/substring com propriedade" | Sliding Window | Evita nested loops |
| "Encontre par que satisfaz condição" | Two Pointer | Aproveita ordenação |
| "Soma de dois números = alvo" | Two Sum | HashMap lookup rápido |
| "Permutação/combinação" | Backtracking | Recursive exploration |
| "Problemas com sobreposição" | Dynamic Programming | Memoization |

---

## 📊 Tabela de Técnicas vs. Complexidade

| Técnica | Tempo | Espaço | Caso de Uso | Links |
|---------|-------|--------|-----------|-------|
| Binary Search | O(log n) | O(1) | Busca em ordenado | [📖](binary-search/README.md) |
| Sliding Window | O(n) | O(k) | Subarrays contígups | [📖](sliding-window/README.md) |
| Two Pointer | O(n) | O(1) | Pares/triplas em ordenado | [📖](two-pointer/README.md) |
| Two Sum | O(n) | O(n) | Pares com soma alvo | [📖](two-sum/README.md) |
| Text Search | O(n + m) | Varia | Busca em texto | [📖](text-search/README.md) |

---

## 💡 Estratégia: Como Reconhecer a Técnica

### Binary Search?
- Array **ordenado**?
- Pergunta envolve "encontre mínimo/máximo que satisfaz"?
- Quer O(log n)?
→ **Use Binary Search**

### Sliding Window?
- Precisa de "subarray/substring contíguo"?
- Quer evitar O(n²)?
- Problema é "expandir/encolher baseado em condição"?
→ **Use Sliding Window**

### Two Pointer?
- Array **ordenado**?
- Procura pares ou triplas?
- Quer espaço O(1)?
→ **Use Two Pointer**

### Two Sum?
- Encontre dois números com soma alvo?
- Quer O(n) tempo?
→ **Use HashMap + Two Sum**

### Text Search?
- Precisa localizar padrão dentro de texto?
- Quer evitar comparações ingênuas repetidas?
- O problema cita KMP, Rabin-Karp ou Boyer-Moore?
→ **Use Text Search**

### Fundamentals?
- O enunciado pede provar complexidade?
- Há decomposição natural em subproblemas?
- O foco é justificar estrutura e custo do algoritmo?
→ **Use Recursion and Complexity foundations**

---

## 🔗 Recursos / Resources

- [LeetCode Algorithm Tag](https://leetcode.com/tag/algorithm/)
- [Algorithm Visualizer](https://algorithm-visualizer.org)
- [Técnicas Explicadas](https://www.youtube.com/results?search_query=sliding+window+binary+search+pattern)

---

## 📈 Status / Progress

| Técnica | Pasta | Arquivos | Status |
|---------|-------|----------|--------|
| Binary Search | `binary-search/` | 1 .py | ⏳ Index needed |
| Sliding Window | `sliding-window/` | 2 .py | ⏳ Index needed |
| Two Pointer | `two-pointer/` | 1 .py | ⏳ Index needed |
| Two Sum | `two-sum/` | 1 .py | ⏳ Index needed |

**Total**: 5 arquivos | Status: ⏳ Aguardando índices por subpasta

---

## 📝 Próximas Melhorias / TODO

- [ ] Criar README individual por técnica (binary-search/README.md, etc)
- [ ] Listar exercícios LeetCode por técnica
- [ ] Adicionar tabelas de complexidade
- [ ] Criar templates de solução por padrão

---

**Última atualização**: 25-Mar-2026  
**Last updated**: Mar 25, 2026
