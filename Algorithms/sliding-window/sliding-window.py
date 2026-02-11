def slidingWindow (arr, k):
    n = len(arr)
    if n * k == 0:
        return []

    if k > n:
        return []

    window_sum = sum(arr[:k])
    max_sum = window_sum
    result = [max_sum]

    for i in range(n - k):
        window_sum = window_sum - arr[i] + arr[i + k]
        max_sum = max(max_sum, window_sum)
        result.append(max_sum)

    return result


slidingWindow([1, 2, 3, 4, 5], 3)

#Complexidade de tempo: O(n) - O algoritmo percorre o array arr uma vez para calcular a soma da janela deslizante e atualizar o resultado.
#Complexidade de espaço: O(n - k + 1) - O algoritmo armazena os resultados em uma lista que pode conter até n - k + 1 elementos, onde n é o tamanho do array arr e k é o tamanho da janela.