Binary Tree

Uma Binary Tree (árvore binária) é uma estrutura de dados hierárquica e não linear composta por nós conectados por relações de pai-filho, onde cada nó pode ter no máximo dois filhos:

filho da esquerda (left child)

filho da direita (right child)

Ela é a base conceitual de muitas estruturas avançadas: heaps, árvores balanceadas, índices de banco de dados, parsers, sistemas de arquivos etc. E tem uma similiaridade muito forte com linked-list, por permitir armazenar o enderecamento dos nós.

Terminologia importante:
| Termo   | Significado                       |
| ------- | -------------------------------- |
| Root    | primeiro nó da árvore            |
| Leaf    | nó sem filhos                     |
| Parent  | nó acima                         |
| Child   | nó abaixo                        |
| Height  | maior profundidade até uma folha |
| Depth   | distância até a raiz             |
| Subtree | qualquer árvore dentro da árvore |

| Operação | Complexidade |
| -------- | ------------ |
| Buscar   | O(n)         |
| Inserir  | O(n)         |
| Remover  | O(n)         |

---

## 📚 Tabela de Exercícios / Exercises

| # | Título / Title | Dificuldade | Status | Arquivo | LeetCode |
|:-:|-------|-----------|--------|---------|----------|
| 94 | Binary Tree Inorder Traversal | Medium | ✅ | [94.Binary_Tree_Inorder_Transversal.py](94.Binary_Tree_Inorder_Transversal.py) | [Link](https://leetcode.com/problems/binary-tree-inorder-traversal/) |
| 102 | Binary Tree Level Order Traversal | Medium | ✅ | [102.Binary_Tree_Level_Order_Traversal.py](102.Binary_Tree_Level_Order_Traversal.py) | [Link](https://leetcode.com/problems/binary-tree-level-order-traversal/) |
| 106 | Construct Binary Tree from Inorder and Postorder Traversal | Medium | ✅ | [106.Construct_Binary_Tree_from_Inorder_and_Postorder_Transversal.py](106.Construct_Binary_Tree_from_Inorder_and_Postorder_Transversal.py) | [Link](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/) |
| 112 | Path Sum | Easy | ✅ | [112.Path_Sum.py](112.Path_Sum.py) | [Link](https://leetcode.com/problems/path-sum/) |
| — | Binary Tree (Implementação Base) | — | ✅ | [binary_tree.py](binary_tree.py) | — |

---

## 🔧 Implementações Base / Base Implementations

Veja [binary_tree.py](binary_tree.py) para implementação base com traversals (in-order, pre-order, post-order).

---

## Binary Search Tree
Uma Binary Search Tree é uma árvore binária com ordenação estrutural. Sendo eficiente para inserção mantendo ordenação e busca relacional.



| Operação            | Complexidade |
| ------------------- | ------------ |
| Buscar              | O(log n)     |
| Inserir             | O(log n)     |
| Remover             | O(log n)     |
| Min/Max             | O(log n)     |
| Range query         | O(log n + k) |
| Ordenado (in-order) | O(n)         |



Heap binário
O heap binário é um tipo especial de árvore binária, normalmente utilizada em computação para implementar filas de prioridade, pois em um heap pode-se extrair de forma mais eficiente o valor mínimo ou máximo de uma lista sendo heap maximo ou mínimo. Sendo muito recomendado para otimizar acesso repetido ao menor/maior elemento.

| Operação                | Complexidade |
| ----------------------- | ------------ |
| Ver topo (min/max)      | O(1)         |
| Inserir                 | O(log n)     |
| Remover topo            | O(log n)     |
| Buscar valor arbitrário | O(n)         |


Trie 

Trie ou prefix-tree é uma estrutura de dados em árvore usada para armazenar strings por prefixo comum.

Diferente de uma BST ou HashMap, a chave não fica inteira em um nó —
cada caractere ocupa um nível da árvore.

Operações principais

Considere L = tamanho da palavra

| Operação       | Complexidade |
| -------------- | ------------ |
| Inserir        | O(L)         |
| Buscar palavra | O(L)         |
| Buscar prefixo  | O(L)         |
| Remover        | O(L)         |


B-Tree

A B-Tree é uma árvore de busca balanceada multi-caminhos (multi-way search tree) otimizada para leitura em disco.

Diferente da BST (2 filhos por nó), cada nó pode possuir vários filhos e várias chaves.
Ela foi projetada para minimizar acessos a disco — por isso é a base de índices de bancos de dados e sistemas de arquivos.

| Operação | Complexidade |
| -------- | ------------ |
| Buscar   | O(log n)     |
| Inserir  | O(log n)     |
| Remover  | O(log n)     |

## Balanced Trees / Árvores Balanceadas

Os PDFs desta pasta também cobrem o caso das árvores balanceadas, em especial a **AVL**.

### AVL Tree
Uma AVL é uma BST com fator de balanceamento restrito, de modo que a diferença de altura entre as subárvores esquerda e direita de cada nó fique em um intervalo pequeno.

| Operação | Complexidade |
| -------- | ------------ |
| Buscar   | O(log n)     |
| Inserir  | O(log n)     |
| Remover  | O(log n)     |

### Rotacionamentos
- Rotação simples à esquerda
- Rotação simples à direita
- Rotação dupla à esquerda
- Rotação dupla à direita

Essas rotações aparecem nos exercícios de AVL e na remoção em BST quando a árvore precisa recuperar o balanceamento.

## Binary Search Tree Removal

O material de remoção em BST mostra o caso em que o nó:
- é folha
- tem um filho
- tem dois filhos, exigindo substituição por predecessor ou sucessor

## B-Tree / B+

Além da BST e da AVL, os PDFs também introduzem árvores B e B+ como estruturas multi-caminhos usadas para índices em disco.

## Tries e Patricia

Os materiais avançados mencionam Tries e Patricia para strings e prefixos. A principal ideia é armazenar caminhos por caractere, o que torna busca por prefixo eficiente.

## 📚 Material Teórico Relacionado

- [9 - Árvores.pdf](9%20-%20Árvores.pdf)
- [10 - Árvores Binárias.pdf](10%20-%20Árvores%20Binárias.pdf)
- [11 - Percurso em Árvores Binárias.pdf](11%20-%20Percurso%20em%20Árvores%20Binárias.pdf)
- [12 - Árvore Binária de Busca.pdf](12%20-%20Árvore%20Binária%20de%20Busca.pdf)
- [13 - Árvore Binária de Busca - Remoção.pdf](13%20-%20Árvore%20Binária%20de%20Busca%20-%20Remoção.pdf)
- [14 - Árvore Binária Balanceada.pdf](14%20-%20Árvore%20Binária%20Balanceada.pdf)
- [08-arvores-B.pdf](08-arvores-B.pdf)
- [11-tries-arvores-patricia.pdf](11-tries-arvores-patricia.pdf)

