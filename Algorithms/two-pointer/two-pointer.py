def reverseWords(self, s: str) -> str:
        newS = ''  

        leftPointer, rightPointer = 0, 0  

        while rightPointer < len(s):

            if s[rightPointer] != ' ':
                rightPointer += 1

            else:
                newS += s[leftPointer:rightPointer + 1][::-1] # Adiciona a palavra invertida e o espaço
                rightPointer += 1
                leftPointer = rightPointer

        newS += ' '
        newS += s[leftPointer:rightPointer + 2][::-1]
        return newS[1:]

reverseWords("Let's take LeetCode contest")


#Complexidade de tempo: O(n) - O algoritmo percorre a string uma vez para identificar as palavras e construir a nova string invertida.
#Complexidade de espaço: O(n) - O algoritmo cria uma nova string para armazenar