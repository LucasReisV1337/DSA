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

Ou seja, a stack é adequada quando o problema exige reversão de contexto ou processamento em ordem inversa ao armazenamento:

- Backtracking (tentar → falhar → desfazer)
- Parsing e validação de expressões ({ [ ( ) ] })
- Controle de chamadas de função (call stack)
- Funcionalidades de undo/redo

Situações onde o último estado salvo deve ser o primeiro recuperado.



Porém, a pilha não permite acesso eficiente a elementos fora do topo pois não possui acesso indexado, a busca é O(n) e remoção intermediária é custosa.

Por isso não é adequada para consultas arbitrárias ou manipulação interna da coleção.

