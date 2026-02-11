Um array é uma estrutura de dados linear e indexada que armazena elementos de tamanho fixo em posições contínuas de memória.

Ele não é apenas uma lista lógica, é um bloco contínuo de memória acessado por cálculo matemático de endereço.


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

Eles não são eficientes para inserções e remoções frequentes, pois exigem deslocamento de elementos. Ou seja, seria necessário alocar um novo espaco na memória caso eu queira inserir ou remover um elemento de um array, sendo necessário a linguagem criar outro array no novo espacamento da memória.

O array brilha em processamento de dados: agregações, filtros, cálculos e varreduras. etc.
Quando vc tem dados salvos, e precisa gerar resultados através deles.
