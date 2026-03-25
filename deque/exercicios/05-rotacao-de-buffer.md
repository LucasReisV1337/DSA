# Rotacao De Buffer

## Dificuldade
medio

## Descricao
Rotacione um buffer circular para a esquerda ou direita sem copiar todo o conteudo.

## Regras de Negocio
- O algoritmo deve lidar corretamente com entrada vazia quando aplicavel.
- Nao use solucao pronta da biblioteca para o objetivo principal.
- Mantenha saida deterministica para o mesmo input.

## Input
Recebe o buffer, a direcao e o numero de passos.

## Output
Retorna o buffer rotacionado.

## Exemplos
Input:
1 2 3 4 5
left 2

Output:
3 4 5 1 2

## Objetivo
Treinar uso de indices circulares.
