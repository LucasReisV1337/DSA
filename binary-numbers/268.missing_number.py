class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        n = len(nums)
        expected_sum = n * (n + 1) // 2
        actual_sum = sum(nums)
        return expected_sum - actual_sum

#Exemplo de uso
solution = Solution()
print(solution.missingNumber([3, 0, 1]))  # Deve retornar 2
print(solution.missingNumber([0, 1]))     # Deve retornar 2
print(solution.missingNumber([9,6,4,2,3,5,7,0,1]))  # Deve retornar 8
#Complexidade de tempo: O(n) - O algoritmo percorre a lista de números uma vez para calcular a soma dos elementos, resultando em uma complexidade linear.
#Complexidade de espaço: O(1) - O algoritmo utiliza apenas um número constante de variáveis para armazenar a soma esperada e a soma atual, independentemente do tamanho da lista de números.