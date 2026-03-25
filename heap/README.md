# Heap

## 📖 O Que É? / What is it?

Um **heap** (monte) é uma estrutura de dados baseada em árvore binária que satisfaz a propriedade de heap: em um **min-heap**, cada nó é menor ou igual aos seus filhos; em um **max-heap**, cada nó é maior ou igual aos seus filhos.

**A Heap is a tree-based data structure that maintains the heap property: in a min-heap, each node is smaller than its children; in a max-heap, each node is larger than its children.**

---

## 🎯 Quando Usar? / When to Use?

### ✅ Use Heap quando:
- Precisa acessar repetidamente o **menor/maior elemento** de forma eficiente
- Implementar **filas de prioridade** (priority queue)
- Encontrar os **top-k elementos** em uma lista
- Algoritmos como **dijkstra** ou **heapsort**

Nos PDFs teóricos, heap aparece como **lista de prioridades**, com algoritmos iterativos de subir e descer.

### ❌ Não use Heap quando:
- Precisa buscar elementos arbitrários (use HashMap)
- Precisa manter ordenação completa (use Binary Search Tree)
- A coleção é pequena (<10 elementos)

---

## 📊 Complexidade de Operações / Operation Complexity

| Operação | Min-Heap | Max-Heap | Descrição |
|----------|----------|----------|-----------|
| **Ver topo (peek)** | O(1) | O(1) | Acessar a raiz |
| **Inserir (insert)** | O(log n) | O(log n) | Adicionar elemento e rebubble up |
| **Remover topo (pop)** | O(log n) | O(log n) | Remover raiz e reorganizar |
| **Buscar valor qualquer** | O(n) | O(n) | Sem índice, apenas percurso |
| **Heapify** | O(n) | O(n) | Converter array em heap |

---

## 📚 Tabela de Exercícios / Exercises

| # | Título / Title | Dificuldade | Status | Arquivo | LeetCode |
|:-:|-------|-----------|--------|---------|----------|
| 703 | Kth Largest Element in a Stream | Medium | ✅ | [703.kth-largest-element-in-a-stream.py](703.kth-largest-element-in-a-stream.py) | [Link](https://leetcode.com/problems/kth-largest-element-in-a-stream/) |
| — | Min Heap (Implementação Base) | — | ✅ | [min-heap.py](min-heap.py) | — |

---

## 🔧 Implementações Base / Base Implementations

### Min-Heap (Python)

```python
# min_heap.py — Implementação completa
# Acesse o arquivo para detalhes de push(), pop(), peek()
```

### Operações Essenciais
- `push(x)` — Adicionar elemento
- `pop()` — Remover e retornar mínimo
- `peek()` — Retornar mínimo sem remover

### Exercícios e operações recorrentes
- Construção do heap a partir de um vetor
- Algoritmo de subir (bubble up)
- Algoritmo de descer (bubble down)
- Remoção do topo em fila de prioridades

---

## 💡 Conceitos Principais / Key Concepts

### Propriedade de Heap
- **Complete Binary Tree**: todos os níveis estão preenchidos, exceto o último
- **Ordem de Heap**: pai ≤ filhos (min-heap) ou pai ≥ filhos (max-heap)

### Representação em Array
```
Árvore:           Array:
      1           [1, 3, 2, ...]
     / \
    3   2

- Índice do pai: (i - 1) // 2
- Índice do filho esquerdo: 2 * i + 1
- Índice do filho direito: 2 * i + 2
```

### Operações
- **Bubble Up (Heapify Up)**: propagar para cima após inserção
- **Bubble Down (Heapify Down)**: propagar para baixo após remoção

---

## 🔗 Recursos / Resources

- [Visualize Heaps](https://www.cs.usfca.edu/~galles/visualization/Heap.html)
- [Heap Sort Explained](https://www.youtube.com/results?search_query=heap+sort)
- [Priority Queues in Python](https://docs.python.org/3/library/heapq.html)

---

## 📈 Progresso / Progress

Exercícios completados: **1/2** ⏳ (1 base, 1 LeetCode)

| Status | Contagem |
|--------|----------|
| ✅ Completo | 2 |
| ⏳ Em progresso | 0 |
| ❌ Bloqueado | 0 |

---

**Última atualização**: 25-Mar-2026  
**Last updated**: Mar 25, 2026
