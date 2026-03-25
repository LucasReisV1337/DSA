# -*- coding: utf-8 -*-
def buscar(chave, n):
    ind = 0
    while ((ind<n) and (lista[ind]!=chave)):
        ind = ind + 1
    return ind

def incluir(chave,n, m):
    ind = 0
    if n<m:
        ind = buscar(chave, n)
        if (ind==n):
            lista[n]=chave
            n = n + 1
        else:
            print("Numero existe na lista.")
    else:
        print("Overflow")
    return n

def excluir(chave, n):
    ind = 0
    i = 0
    if (n>0):
        ind = buscar(chave,n)
        if ((ind<n) and (lista[ind]==chave)):
            for i in range (ind,n-1):
                lista[i] = lista[i+1]
            lista[n-1] = 0
            n = n - 1
        else:
            print("Numero nao existe na lista.")
    else:
        print("Underflow")
    return n
    
lista = [0,0,0,0,0,0,0,0,0,0]
n = 0
m = 10
cont = 1
while (cont != 0):
    cont = int(input("Digite (1) Inclusão, (2) exclusão, (3) mostrar lista, (0) sair"))
    if (cont==1):
        chave = int(input("Digite valor para incluir"))
        n = incluir(chave, n, m)
    else:
        if (cont == 2):
            chave = int(input("Digite valor para excluir"))
            n = excluir(chave, n)
        else:
            if (cont == 3):
                for i in range (0,n):
                    print(lista[i])
           