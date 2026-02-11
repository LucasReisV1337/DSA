def binary_search(arr, target):
    
    low = 0   
    high = len(arr)

    while low < high:     
        mid = int((low + high) / 2)
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid
    return -1

binary_search([1, 2, 3, 4, 5, 6, 7], 5)

#Complexidade de tempo: O(log n) - A cada iteração, o algoritmo reduz pela metade o número de elementos a serem verificados.
#Complexidade de espaço: O(1) - O algoritmo utiliza apenas um número constante de variáveis para armazenar os índices e o valor do meio, independentemente do tamanho do array.