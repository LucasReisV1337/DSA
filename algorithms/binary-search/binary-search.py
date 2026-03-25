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

def binary_search_recursive(arr, target, low, high):
    if low >= high:
        return -1

    mid = int((low + high) / 2)
    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        return binary_search_recursive(arr, target, mid + 1, high)
    else:
        return binary_search_recursive(arr, target, low, mid)

def exponential_search(arr, target):
    if arr[0] == target:
        return 0

    n = len(arr)
    i = 1
    while i < n and arr[i] <= target:
        i *= 2
    return binary_search_recursive(arr, target, i // 2, min(i, n))

exponential_search([1, 2, 3, 4, 5, 6, 7], 5)

#Complexidade de tempo: O(log n) - O algoritmo realiza uma busca exponencial para encontrar o intervalo onde o target pode estar, seguida por uma busca binária dentro desse intervalo.
#Complexidade de espaço: O(1) - O algoritmo utiliza apenas um número constante de variáveis para armazenar os índices e o valor do meio, independentemente do tamanho do array.