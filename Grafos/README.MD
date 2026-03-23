Grafo

Um grafo (Graph) é uma estrutura de dados não linear composta por:

Vértices (vertices / nodes) → entidades

Arestas (edges) → relações/conexões entre entidades


Operações principais
| Operação          | Complexidade                |
| ----------------- | --------------------------- |
| Adicionar vértice | O(1)                        |
| Adicionar aresta  | O(1)                        |
| Verificar conexão  | O(1) matriz / O(grau) lista |
| Percorrer         | O(V + E)                    |


Quando usar grafo, Use quando o domínio possui relações entre entidades:
- dependências
- conexões
- caminhos
- influência
- proximidade
- recomendação

Não use quando precisa apenas:
- buscar por chave → HashMap
- ordenar → BST
- prioridade → Heap
- sequência → Array