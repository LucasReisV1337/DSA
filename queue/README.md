Fila (Queue)

A fila (queue) é uma estrutura de dados linear que segue o princípio FIFO — First In, First Out (o primeiro que entra é o primeiro que sai).

Ou seja: Ela modela exatamente uma fila do mundo real, você entra no final → é atendido no começo.



Operações fundamentais

| Operação             | Descrição              | Complexidade |
| -------------------- | ---------------------- | ------------ |
| `enqueue(x)`         | Insere no final         | **O(1)**     |
| `dequeue()`          | Remove da frente       | **O(1)**     |
| `front()` / `peek()` | Consulta o primeiro    | **O(1)**     |
| `isEmpty()`          | Verifica se está vazia  | **O(1)**     |


Assim como a pilha, todas as operações principais são constantes porque o acesso é restrito às extremidades.

**Like Stack, all main operations are constant because access is restricted to ends.**

---

## 🎯 Quando Usar? / When to Use?

### ✅ Use Queue quando:
- **Ordem temporal importa** (FIFO — primeiro chegou, primeiro saído)
- Implementar **BFS** (Breadth-First Search)
- **Processamento de tarefas** em fila (job queue)
- **Buffers** de rede, I/O

### ❌ Não use Queue quando:
- Precisa acessar elementos intermediários
- Ordem reversa é necessária → use Stack
- Precisa de acesso arbitrário → use Array/HashMap

## 🔧 Implementações / Implementations

A fila aparece em duas formas principais nos PDFs da faculdade:

- **Alocação sequencial**: usa vetor com índices de frente e fim.
- **Alocação encadeada**: usa nós ligados e cresce dinamicamente.

Os materiais também tratam de fila circular e de deque, que generaliza a fila permitindo inserção e remoção nas duas extremidades.

## 📚 Material Teórico Relacionado

- [5 - Pilhas e filas em alocação sequencial.pdf](../deque/5%20-%20Pilhas%20e%20filas%20em%20alocação%20sequencial.pdf)
- [7 - Pilhas e filas com alocação encadeada.pdf](../linked-list/7%20-%20Pilhas%20e%20filas%20com%20alocação%20encadeada.pdf)

---

## 📚 Tabela de Exercícios / Exercises

A fila é geralmente usada **como estrutura auxiliar** em algoritmos (BFS), mais que exercício direto.

Veja em:
- [graphs/](../graphs/) — BFS em grafos
- [algorithms/sliding-window/](../algorithms/sliding-window/) — Monotonic queue

---

## 💡 Padrões Comuns / Common Patterns

### BFS (Graph Traversal)
```python
queue = collections.deque([start_node])
while queue:
    node = queue.popleft()
    for neighbor in graph[node]:
        queue.append(neighbor)
```

### Level Order Traversal (Binary Tree)
Processe árvore nível por nível usando Queue.