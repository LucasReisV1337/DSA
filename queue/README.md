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

Dessa forma, a fila é a estrutura de dados principal quando a ordem temporal importa, mas ela é uma estrutura de dados sequencial, e não de consulta, não sendo recomendada para acessar elementos internos, buscar valores e ordenação dinâmica.