def quickSort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quickSort(arr, low, pi - 1)
        quickSort(arr, pi + 1, high)

def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1

    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]

    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1


arr = [10, 7, 8, 9, 1, 5]   
n = len(arr)
quickSort(arr, 0, n - 1)
print("Sorted array:", arr)  # Deve retornar [1, 5, 7, 8, 9, 10]
#Complexidade de tempo: O(n log n) - O algoritmo de ordenação rápida tem uma complexidade média de O(n log n) devido à divisão recursiva do array e à comparação dos elementos.
#Complexidade de espaço: O(log n) - O algoritmo de ordenação rápida tem uma complexidade de espaço média de O(log n) devido à pilha de chamadas recursivas, embora no pior caso possa chegar a O(n) se o pivô escolhido for o menor ou maior elemento em cada partição.