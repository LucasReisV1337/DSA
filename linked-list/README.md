Single Linked List

Uma Linked List (lista encadeada) é uma estrutura de dados linear dinâmica em que os elementos (nós) não ficam em posições contínuas de memória como em um array.

Cada elemento aponta explicitamente para o próximo — por isso “encadeada”.

Cada nó (node) normalmente possui:

valor (data) → o dado armazenado

ponteiro (next) → endereço do próximo nó

[data | ponteiro do próximo nó]

[10 | 1001] → [25 | 8884] → [7 | 2390] → [42 | null]

Operações principais
| Operação                           | Descrição               | Complexidade |
| ---------------------------------- | ----------------------- | ------------ |
| Access by index                    | Percorrer até posição i | **O(n)**     |
| Search                             | Procurar valor          | **O(n)**     |
| Insert at head                     | Inserir no início       | **O(1)**     |
| Insert at tail (sem ponteiro tail) | Percorrer até final      | **O(n)**     |
| Insert at tail (com tail)          | Inserir direto          | **O(1)**     |
| Insert after node                  | Já tenho nó             | **O(1)**     |
| Remove head                        | Remover primeiro        | **O(1)**     |
| Remove after node                  | Já tenho anterior       | **O(1)**     |
| Remove by value                    | Precisa procurar        | **O(n)**     |


Diferente do array, a linked list não possui acesso direto por índice, pois não existe cálculo matemático de posição em memória.
Para acessar um elemento é necessário percorrer os nós sequencialmente, tornando o acesso O(n) e menos previsível para leitura.

Por outro lado, justamente por não depender de posições contínuas em memória, inserir ou remover elementos pode ser mais eficiente, pois não é necessário realocar ou deslocar os demais elementos — basta ajustar ponteiros.

(Observação: isso é O(1) quando já possuímos a referência ao nó anterior.)

Dessa forma, linked lists levam vantagem quando:

- há muitas inserções/remoções no meio
- o tamanho é altamente variável
- não há necessidade frequente de acesso aleatório

---

## 📚 Tabela de Exercícios / Exercises

### Single Linked List

| # | Título / Title | Tipo | Status | Arquivo | LeetCode |
|:-:|-------|------|--------|---------|----------|
| — | Linked List (Implementação Base) | Implementation | ✅ | [linked-list.py](linked-list.py) | — |
| — | Cycle Detection | Pattern | ✅ | [cycle-of-linked-list.py](cycle-of-linked-list.py) | [Link](https://leetcode.com/problems/linked-list-cycle/) |
| — | Middle of List | Pattern | ✅ | [middle-of-linked-list.py](middle-of-linked-list.py) | [Link](https://leetcode.com/problems/middle-of-the-linked-list/) |
| — | Reverse List | Pattern | ✅ | [reverse-linked-list.py](reverse-linked-list.py) | [Link](https://leetcode.com/problems/reverse-linked-list/) |

---

## 🔧 Implementações Base / Base Implementations

Veja [linked-list.py](linked-list.py) para implementação completa com operações fundamentais.

A Doubly Linked List (lista duplamente encadeada) é uma variação em que cada nó possui dois ponteiros:

prev → endereço do nó anterior

next → endereço do próximo nó

Estrutura do nó:
[prev | data | next]
null ← A ⇄ B ⇄ C ⇄ D → null

Operações principais
| Operação                  | Complexidade |
| ------------------------- | ------------ |
| Access by index           | **O(n)**     |
| Search                    | **O(n)**     |
| Insert at head            | **O(1)**     |
| Insert at tail (com tail) | **O(1)**     |
| Remove head               | **O(1)**     |
| Remove tail               | **O(1)**     |
| Remove node conhecido     | **O(1)**     |
| Insert before node        | **O(1)**     |
| Insert after node         | **O(1)**     |


Vantagens:

- Permite percurso bidirecional

- Remoção de um nó conhecido é sempre O(1), pois não é necessário procurar o anterior

- Muito utilizada em estruturas como cache LRU, histórico de navegação e sistemas de undo/redo

Desvantagem:

- Maior consumo de memória (um ponteiro extra por nó)

- Atualização estrutural mais complexa (é preciso ajustar dois ponteiros)

-------------------------------------------------------------------------

Circular Linked List

A Circular Linked List (lista circular) é uma variação em que o último nó não aponta para null, mas sim para o primeiro nó da lista.

A → B → C → D
↑         ↓
└─────────┘

Isso significa que a estrutura forma um ciclo fechado.

Características:

Não existe um “fim” explícito

É possível iniciar o percurso em qualquer nó

Pode ser singly ou doubly

Operações principais
| Operação                      | Complexidade |
| ----------------------------- | ------------ |
| Percorrer N elementos         | **O(n)**     |
| Inserir após tail             | **O(1)**     |
| Remover após tail             | **O(1)**     |
| Rotacionar lista (mover head) | **O(1)**     |


Uso comum:

- Filas circulares

- Buffers contínuos

- Algoritmos de escalonamento (round-robin)