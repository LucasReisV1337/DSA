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

---

## 📚 Tabela de Exercícios / Exercises

| # | Título / Title | Dificuldade | Status | Arquivo | LeetCode |
|:-:|-------|-----------|--------|---------|----------|
| 133 | Clone Graph | Medium | ✅ | [133.Clone_Graph.py](133.Clone_Graph.py) | [Link](https://leetcode.com/problems/clone-graph/) |
| 743 | Network Delay Time (Dijkstra) | Medium | ✅ | [743.Network_Delay_Time.py](743.Network_Delay_Time.py) | [Link](https://leetcode.com/problems/network-delay-time/) |
| — | Dijkstra Algorithm | Algorithm | ✅ | [dijkstra.py](dijkstra.py) | — |

---

## 🔧 Implementações Base / Base Implementations

Veja [dijkstra.py](dijkstra.py) para implementação do algoritmo de caminho mínimo.