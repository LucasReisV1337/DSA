# Sorting Algorithms

## 📖 O Que É? / What is it?

**Sorting** é o processo de rearranjar elementos em uma coleção segundo uma ordem (crescente, decrescente). Existem diversos **algoritmos de ordenação** com diferentes trade-offs de tempo, espaço e estabilidade.

**Sorting arranges elements in a collection by a criterion (ascending, descending). Various algorithms exist with different time/space/stability trade-offs.**

---

## 🎯 Quando Usar Cada? / When to Use Each?

| Algoritmo | Melhor Caso | Pior Caso | Espaço | Estável? | Uso | 
|-----------|------------|----------|--------|----------|-----|
| **Bubble Sort** | O(n) | O(n²) | O(1) | Sim ✅ | Educacional |
| **Selection Sort** | O(n²) | O(n²) | O(1) | Não ❌ | Educacional |
| **Insertion Sort** | O(n) | O(n²) | O(1) | Sim ✅ | Arrays pequenos |
| **Merge Sort** | O(n log n) | O(n log n) | O(n) | Sim ✅ | Merging, linked lists |
| **Quick Sort** | O(n log n) | O(n²) | O(log n) | Não ❌ | Geral, em-lugar |
| **Heap Sort** | O(n log n) | O(n log n) | O(1) | Não ❌ | Garantido O(n log n) |
| **Counting Sort** | O(n+k) | O(n+k) | O(k) | Sim ✅ | Inteiros pequenos |
| **Radix Sort** | O(d*(n+k)) | O(d*(n+k)) | O(n+k) | Sim ✅ | Múltiplos dígitos |

---

## 📚 Tabela de Exercícios / Exercises

| # | Algoritmo | Arquivo | Tipo | Descrição |
|:-:|-----------|---------|------|-----------|
| 1 | Bubble Sort | [bubble-sort.py](bubble-sort.py) | ✅ Implementação | Simples, compare e troque |
| 2 | Merge Sort | [merge-sort.py](merge-sort.py) | ✅ Implementação | Divisão e conquista |
| 3 | Quick Sort | [quick-sort.py](quick-sort.py) | ✅ Implementação | Pivot-based, rápido prática |

---

## 🔧 Implementações / Implementations

### Bubble Sort
```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(n - i - 1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

# Complexidade: O(n²) | Espaço: O(1)
# Estável: Sim
```

### Merge Sort
```python
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    return merge(left, right)

# Complexidade: O(n log n) | Espaço: O(n)
# Estável: Sim
```

### Quick Sort
```python
def quick_sort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)
    return arr

# Complexidade Média: O(n log n) | Pior: O(n²)
# Espaço: O(log n) | Estável: Não (variações podem ser)
```

### External Sorting / Ordenação Externa
Quando os dados não cabem inteiramente na memória principal, o processo é dividido em fases.

O material teórico desta pasta usa o esquema de **ordenação balanceada p-way merge sort** com:
- geração de sequências ordenadas iniciais
- uso de **selection by replacement**
- intercalação com **heap mínimo**

Esse tipo de solução aparece em cenários de arquivos grandes e em trabalhos práticos da disciplina.

## 📚 Material Teórico Relacionado

- [14-ordenacao-externa.pdf](14-ordenacao-externa.pdf)
- [20251-mata54-trabalho.pdf](20251-mata54-trabalho.pdf)

---

## 💡 Conceitos Principais / Key Concepts

### Estabilidade / Stability
Um algoritmo é **estável** se mantém a ordem relativa de elementos iguais.
- Bubble, Merge, Insertion, Counting = **Estáveis** ✅
- Selection, Quick, Heap = **Não estáveis** ❌

### In-Place Sorting
Algoritmo que usa **espaço O(1) auxiliar** (sem copiar array inteiro).
- Bubble, Selection, Insertion, Quick, Heap = **In-place** ✅
- Merge, Counting, Radix = **Não in-place** (precisam de auxiliar)

### Complexidade de Comparação
**Limite inferior**: Qualquer algoritmo baseado em comparação requer mínimo **O(n log n)** comparações (exceto casos especiais).

---

## 🧠 Estratégia de Escolha / Decision Tree

```
Precisa de estabilidade?
  ├─ Sim → Merge Sort, Bubble Sort, Insertion Sort
  └─ Não → Selection Sort, Quick Sort, Heap Sort

Tem espaço limitado?
  ├─ Sim → Quick Sort (in-place), Heap Sort
  └─ Não → Merge Sort (mais previsível)

Array grande?
  ├─ Sim → Merge Sort (O(n log n) garantido)
  └─ Não → Insertion Sort (rápido p/ pequeno)

Inteiros em range pequeno?
  ├─ Sim → Counting Sort, Radix Sort
  └─ Não → Merge/Quick Sort
```

---

## 🔗 Recursos / Resources

- [Sorting Visualizer](https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html)
- [Sort Stability Visual](https://www.geeksforgeeks.org/stability-in-sorting-algorithms/)
- [LeetCode Sorting Problems](https://leetcode.com/tag/sorting/)

---

## 📈 Progresso / Progress

Implementações base: **3/3** ✅

| Status | Contagem |
|--------|----------|
| ✅ Completo | 3 |
| ⏳ Em progresso | 0 |
| ❌ Bloqueado | 0 |

---

**Última atualização**: 25-Mar-2026  
**Last updated**: Mar 25, 2026
