# -*- coding: utf-8 -*-

def eh_palindromo_com_pilha(palavra):
    pilha = []
    for caractere in palavra:
        pilha.append(caractere)

    invertida = []
    while pilha:
        invertida.append(pilha.pop())

    return palavra == invertida


def eh_palindromo_sem_estrutura(palavra):
    esquerda = 0
    direita = len(palavra) - 1

    while esquerda < direita:
        if palavra[esquerda] != palavra[direita]:
            return False
        esquerda += 1
        direita -= 1

    return True


def ler_palavra():
    entrada = input("Digite uma palavra: ").strip()
    return list(entrada)


palavra = ler_palavra()

if eh_palindromo_com_pilha(palavra):
    print("A palavra e um palindromo (usando pilha).")
else:
    print("A palavra nao e um palindromo (usando pilha).")

if eh_palindromo_sem_estrutura(palavra):
    print("A palavra e um palindromo (sem estrutura adicional).")
else:
    print("A palavra nao e um palindromo (sem estrutura adicional).")