Um array é uma estrutura de dados linear e indexada que armazena elementos de tamanho fixo em posições contínuas de memória.

Ele não é apenas uma lista lógica, é um bloco contínuo de memória acessado por cálculo matemático de endereço.

Nos materiais teóricos desta pasta, o array aparece também como base para lista linear sequencial, busca linear ordenada, busca binária, deque circular e exercícios de palíndromo.


Operações fundamentais do Array

| Operação       | Descrição                     | Complexidade        |
| -------------- | ----------------------------- | ------------------- |
| `read(i)`      | ler elemento pelo índice      | **O(1)**            |
| `write(i, x)`  | alterar elemento pelo índice  | **O(1)**            |
| `append(x)`    | inserir no final*              | **O(1)**            |
| `insert(i, x)` | inserir em posição arbitrária | **O(n)**            |
| `remove(i)`    | remover em posição arbitrária | **O(n)**            |
| `search(x)`    | buscar valor sem saber índice | **O(n)**            |


Exemplo:

arr = [10, 20, 30, 40]

Memória:

Endereço inicial	Valor
    1000	         10
    1004	         20
    1008	         30
    1012	         40

Cada valor ocupa vários bytes consecutivos (ex: int32 ocupa 4 bytes, por isso o endereco do 1000 ao 1003 representa o valor 10).

O acesso não por percorrer os elementos; o endereço que é calculado:

endereço = endereço_base + (índice × tamanho_do_tipo)
ex: o elemento de índíce 3,
    1012 = 1000 + (3 * 4)

Portanto o acesso ou altereção de um valor pelo índice é Big O(1), inserir/remover é Big O(n) (mesmo informando o índice). Devido ao cálculo matemático, não é necessário percorrer o array inteiro para acessa o elemento 1000, ou o elemento 10, a velocidade é a mesma.

Arrays são ideais quando a coleção é estruturalmente estável e o padrão dominante é leitura sequencial,
acesso indexado, ou edicao de um valor.

Isso inclui listas com inclusão e exclusão em vetor, busca por interpolação e manipulação de matrizes.

**Arrays excel in stable collections with sequential reading, indexed access, or value editing.**

---

## 🎯 Quando Usar? / When to Use?

### ✅ Use Arrays quando:
- Acesso indexado é frequente e crítico para performance
- Coleção é **estruturalmente estável** (tamanho fixo ou predito)
- Processamento **sequencial, agregações, filtros** dominam
- Memória contígua é vantaja (cache efficiency)

### ❌ Não use Arrays quando:
- Muitas **inserções/remoções frequentes** no meio
- Tamanho é **altamente variável** → use Linked List
- Precisa ser dinâmica → use List (Python), Vector (C++)

---

## 📚 Tabela de Problemas / Problems

Nota: Arrays são estruturas básicas. Exercícios de array geralmente aparecem em outros contextos (sliding window, two pointer, etc).

Veja em:
- [two-pointer/](../algorithms/two-pointer/) — Problemas em arrays
- [sliding-window/](../algorithms/sliding-window/) — Subarrays
- [sorting/](../sorting/) — Ordenação de arrays
- [algorithms/text-search/](../algorithms/text-search/) — Padrões em texto quando o array representa caracteres

## 🧩 Material Teórico Relacionado

- [01-arq-sequenciais.pdf](01-arq-sequenciais.pdf)
- [4 - lista Linear - Alocação Sequencial.pdf](4%20-%20lista%20Linear%20-%20Alocação%20Sequencial.pdf)
- [Lista de Exercícios - Estruturas de Dados - Lista Linear com alocação sequencial.pdf](Lista%20de%20Exercícios%20-%20Estruturas%20de%20Dados%20-%20Lista%20Linear%20com%20alocação%20sequencial.pdf)
- [mata54-lista01.pdf](mata54-lista01.pdf)

---

## 💡 Conceitos Principais / Key Concepts

### Acesso O(1) por Endereço
```
endereço = endereço_base + (índice × tamanho_do_tipo)
```

### Inserção/Remoção O(n)
Requer deslocamento ou reallocation de memória.

### Cache Locality
Arrays em memória contígua → melhor cache hit ratio que Linked Lists.
