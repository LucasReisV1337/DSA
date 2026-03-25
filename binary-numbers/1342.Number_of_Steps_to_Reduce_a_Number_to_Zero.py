class Solution:
    def missingNumber(self, num:int) -> int:
        steps = 0
        while num > 0:
            if num % 2 == 0:
                num //= 2
            else:
                num -= 1
            steps += 1
        return steps

    def missingNumber2(self, num: int) -> int:
        steps = 0
        while num > 0:
            if num & 1 == 0:  # Verifica se o número é par usando bitwise AND
                num >>= 1    # Divide o número por 2 usando bitwise right shift
            else:
                num -= 1     # Subtrai 1 do número se for ímpar
            steps += 1
        return steps

#Exemplo de uso
solution = Solution()
print(solution.missingNumber(14))  # Deve retornar 6
print(solution.missingNumber(8))   # Deve retornar 4
print(solution.missingNumber2(14))  # Deve retornar 6
print(solution.missingNumber2(8))   # Deve retornar 4
print(solution.missingNumber2(123)) # Deve retornar 12
#Complexidade de tempo: O(log n) - O algoritmo reduz o número pela metade a cada passo, resultando em uma complexidade logarítmica.
#Complexidade de espaço: O(1) - O algoritmo utiliza apenas um número constante de variáveis para contar os passos e armazenar o número, independentemente do valor de entrada.

