Stack (Pilha)

Uma pilha (stack) é uma estrutura de dados linear (sequência única) que segue o princípio LIFO — Last In, First Out (o último que entra é o primeiro que sai).

Ou seja: você só consegue inserir ou remover elementos pelo mesmo lado, chamado de topo (top).

Operações fundamentais

| Operação           | Descrição                   | Complexidade |
| ------------------ | --------------------------- | ------------ |
| `push(x)`          | Insere elemento no topo     | **O(1)**     |
| `pop()`            | Remove o elemento do topo   | **O(1)**     |
| `peek()` / `top()` | Consulta o topo sem remover | **O(1)**     |
| `isEmpty()`        | Verifica se está vazia       | **O(1)**     |

A pilha possui operações constantes porque restringe o acesso apenas ao topo. Faz com que essas operações principais sejam de tempo constante.

**Stack has constant operations because access is restricted to the top, making main operations O(1).**

---

## 🎯 Quando Usar? / When to Use?

### ✅ Use Stack quando:
- Reversão de contexto ou processamento em ordem inversa ao armazenamento
- **Backtracking** (tentar → falhar → desfazer)
- **Parsing e validação de expressões** ({ [ ( ) ] })
- **Controle de chamadas de função** (call stack)
- **Funcionalidades de undo/redo**

Situações onde o **último estado salvo deve ser o primeiro recuperado**.

### ❌ Não use Stack quando:
- Precisa acessar elementos fora do topo
- Busca é O(n) e remoção intermediária é custosa
- Consultas arbitrárias na coleção

## 🔧 Implementações / Implementations

A pilha aparece em duas formas principais nos PDFs da faculdade:

- **Alocação sequencial**: usa vetor e índice de topo.
- **Alocação encadeada**: usa nós ligados e cresce dinamicamente.

## 📚 Material Teórico Relacionado

- [5 - Pilhas e filas em alocação sequencial.pdf](../deque/5%20-%20Pilhas%20e%20filas%20em%20alocação%20sequencial.pdf)
- [7 - Pilhas e filas com alocação encadeada.pdf](../linked-list/7%20-%20Pilhas%20e%20filas%20com%20alocação%20encadeada.pdf)

---

## 📚 Tabela de Exercícios / Exercises

| # | Título / Title | Dificuldade | Status | Arquivo | LeetCode |
|:-:|-------|-----------|--------|---------|----------|
| 20 | Valid Parentheses | Easy | ✅ | [20.Valid_Parentheses.py](20.Valid_Parentheses.py) | [Link](https://leetcode.com/problems/valid-parentheses/) |
| 155 | Min Stack | Medium | ✅ | [155.Min_Stack.py](155.Min_Stack.py) | [Link](https://leetcode.com/problems/min-stack/) |
| 739 | Daily Temperatures | Medium | ✅ | [739.Daily_Temperatures.py](739.Daily_Temperatures.py) | [Link](https://leetcode.com/problems/daily-temperatures/) |
| — | Stack (Implementação Base) | — | ✅ | [stack.py](stack.py) | — |

---

## 🔧 Implementações Base / Base Implementations

Veja [stack.py](stack.py) para implementação completa com `push()`, `pop()`, `peek()`, `isEmpty()`.

