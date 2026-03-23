def bubble(nums):
    size = len(nums)
    for _ in nums:
        is_sorted = True
        for j in range(size - 1):
            if nums[j] > nums[j + 1]:
                is_sorted = False
                nums[j], nums[j + 1] = nums[j + 1], nums[j]
        if is_sorted:
            return

bubble([5, 1, 4, 2, 8])  # Deve retornar [1, 2, 4, 5, 8]
#Complexidade de tempo: O(n^2) - O algoritmo percorre a lista des elementos n vezes, e para cada elemento, ele compara com os próximos elementos, resultando em uma complexidade quadrática.
#Complexidade de espaço: O(1) - O algoritmo utiliza apenas um número constante de variáveis para realizar as trocas, independentemente do tamanho da lista.