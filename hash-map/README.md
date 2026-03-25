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

Os PDFs desta pasta ampliam o tema para diferentes estratégias de colisão e para estruturas adaptativas usadas em arquivos e bancos de dados.

## Collision Handling / Tratamento de Colisões

### Encadeamento explícito
Cada posição da tabela aponta para uma lista de elementos com a mesma posição hash.

### Encadeamento implícito
As colisões são resolvidas dentro da própria estrutura de armazenamento, usando encadeamento interno.

### Realocação
Quando uma posição fica ocupada, o algoritmo tenta outra posição com uma regra de sondagem ou deslocamento.

## Adaptive Hashing / Hash Adaptativo

Os materiais também cobrem métodos que crescem com o arquivo:
- Hash extensível
- Hash linear

Essas técnicas ajudam quando a tabela precisa se reorganizar sem depender de redimensionamento manual simples.

## Universal and Perfect Hashing

Os PDFs mostram hashing universal e perfeito como modelos para reduzir colisões em cenários controlados.

## Secondary Keys and Signatures

As subpastas [secondary-key/](secondary-key/) e [signatures/](signatures/) organizam materiais sobre:
- busca por chave secundária
- filtros de assinatura
- codificação resumida de campos
- Bloom filters

## 📚 Material Teórico Relacionado

- [02-hahsing-enc-explicito.pdf](02-hahsing-enc-explicito.pdf)
- [03-hashing-encadeamento-implicito.pdf](03-hashing-encadeamento-implicito.pdf)
- [04-hashing-realocacao.pdf](04-hashing-realocacao.pdf)
- [05-hashing-universal-perfeito.pdf](05-hashing-universal-perfeito.pdf)
- [06-hashing-extensivel.pdf](06-hashing-extensivel.pdf)
- [07-hashing-linear.pdf](07-hashing-linear.pdf)
- [09-chave-secundaria.pdf](secondary-key/09-chave-secundaria.pdf)
- [10-assinaturas.pdf](signatures/10-assinaturas.pdf)

---

## 📚 Tabela de Exercícios / Exercises

| # | Título / Title | Dificuldade | Status | Arquivo | LeetCode |
|:-:|-------|-----------|--------|---------|----------|
| 387 | First Unique Character in a String | Easy | ✅ | [firstUniqChar.py](firstUniqChar.py) | [Link](https://leetcode.com/problems/first-unique-character-in-a-string/) |

---

## 💡 Padrões Comuns / Common Patterns

### Two Sum
Encontre dois números que somem a um alvo — usar HashMap para armazenar vistos.

### Anagram Detection
Mapear contagem de caracteres para comparar estruturalmente.

### Frequency Count
Contar frequências de elementos rapidamente com O(1) lookup.