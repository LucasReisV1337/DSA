Deque 

Deque ou Double-Ended Queue, seria uma fila de duas pontas.

É basicamente uma generalização de pilha + fila: você pode inserir e remover elementos tanto no início quanto no final.

Operações fundamentais

| Operação        | Descrição        | Complexidade |
| --------------- | ---------------- | ------------ |
| `push_front(x)` | insere no começo | **O(1)**     |
| `push_back(x)`  | insere no final  | **O(1)**     |
| `pop_front()`   | remove do começo | **O(1)**     |
| `pop_back()`    | remove do final  | **O(1)**     |
| `front()`       | consulta início  | **O(1)**     |
| `back()`        | consulta final   | **O(1)**     |


Relacao com outras estruturas

| Estrutura | Restrições                 |
| --------- | -------------------------- |
| Pilha     | só um lado                 |
| Fila      | entra atrás, sai na frente |
| **Deque** | nenhum lado restrito       |


deque é muito usada em problemas que utilizam Sliding Window (janela deslizante) pois ao instanciar os ponteiros (head e tail), é criado uma espécie de "janela" e ser movida para os lados ao remover ou avancar cada ponteiro

Problemas clássicos de algoritmo:

máximo em subarray k, monotonic queue, média móvel

Aqui ela brilha porque você remove de um lado e adiciona do outro o tempo todo.