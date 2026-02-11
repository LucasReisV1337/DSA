Hashmap

Hashmap ( Map, Mapa, Dictionary, Dicionário ou tabela hash) é uma estrutura de dados que armazena informações no formato chave:valor. Ela permite localizar um valor sem percorrer a coleção, utilizando uma função hash, que transforma a chave em um índice dentro de um array interno.

Diferente de um array — onde o índice já determina diretamente a posição — na hashmap a chave é convertida matematicamente em uma posição de armazenamento.

Operações fundamentais

| Operação          | Descrição           | Complexidade média |
| ----------------- | ------------------- | ------------------ |
| `put(key, value)` | insere/atualiza     | **O(1)**           |
| `get(key)`        | busca valor         | **O(1)**           |
| `remove(key)`     | remove              | **O(1)**           |
| `contains(key)`   | verifica existência  | **O(1)**           |


Ou seja, hashmap é excelente quando o problema envolve acessar elementos, seja para buscar, remover, editar, inserir, etc. Porém, ele não mantem ordenacao nem classificacao, ele otimiza o acesso direto por chave, nao navegacao