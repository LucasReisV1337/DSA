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


Binary Search Tree
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

