# Cache LRU

## Dificuldade
dificil

## Descricao
Simule um cache LRU com capacidade limitada.

## Regras de Negocio
- O algoritmo deve lidar corretamente com entrada vazia quando aplicavel.
- Nao use solucao pronta da biblioteca para o objetivo principal.
- Mantenha saida deterministica para o mesmo input.

## Input
Recebe a capacidade e as operacoes get e put.

## Output
Retorna os estados de eviccao ou acesso.

## Exemplos
Input:
2
put 1 a
put 2 b
get 1
put 3 c

Output:
evict 2

## Objetivo
Treinar uso combinado de mapa e lista encadeada.
