class Solution:
    def reverseWords(self, s: str) -> str:
        # Exemplo de entrada:
        # s = "Let's take LeetCode contest"

        newS = ''  
        # String acumuladora do resultado final.
        # Ela será construída aos poucos com palavras invertidas.
        # Estado inicial:
        # newS = ""

        leftPointer, rightPointer = 0, 0  
        # leftPointer marca o início da palavra atual
        # rightPointer percorre a string caractere por caractere
        #
        # Estado inicial:
        # leftPointer = 0  -> aponta para 'L' de "Let's take LeetCode contest"
        # rightPointer = 0 -> aponta para 'L' de "Let's take LeetCode contest"

        while rightPointer < len(s):
            # Loop percorre toda a string até o último caractere

            if s[rightPointer] != ' ':
                # Enquanto o caractere atual NÃO for espaço,
                # significa que ainda estamos dentro da mesma palavra.
                #
                # Exemplo:
                # rightPointer anda por: 'L' -> 'e' -> 't' -> ''' -> 's'
                #
                # leftPointer = 0
                # rightPointer = 0..4

                rightPointer += 1

            else:
                # Aqui encontramos um espaço ' '
                # Isso marca o fim de uma palavra.
                #
                # Exemplo ao encontrar o espaço após "Let's":
                # leftPointer = 0
                # rightPointer = 5 (posição do espaço)

                newS += s[leftPointer:rightPointer + 1][::-1]

                # s[leftPointer:rightPointer+1] inclui:
                # - a palavra
                # - o espaço no final
                #
                # s[0:6] -> "Let's "
                #
                # [::-1] inverte toda a substring:
                # "Let's "[::-1] -> " s'teL"

                # newS agora é:
                # " s'teL"

                rightPointer += 1
                # Avança para o próximo caractere após o espaço
                # Agora rightPointer aponta para o início da próxima palavra

                leftPointer = rightPointer
                # Atualiza o início da próxima palavra
                #
                # Agora:
                # leftPointer = 6 (aponta para 't' de "take")

        # Ao sair do while:
        # rightPointer == len(s)
        # Isso significa que chegamos ao fim da string.
        #
        # A última palavra ("contest") NÃO foi processada,
        # porque ela não termina com espaço.

        newS += ' '
        # Adiciona um espaço artificial no final do newS para manter o mesmo padrão usado anteriormente (palavra + espaço invertidos).
        
        # Esse espaço NÃO veio da string original.

        # Processa a última palavra:
        #
        # leftPointer aponta para o início de "contest"
        # rightPointer aponta para len(s)
        #
        # s[leftPointer:rightPointer + 2] -> "contest"
        # (Python ignora índices fora do tamanho da string)
        #
        # "contest"[::-1] -> "tsetnoc"

        newS += s[leftPointer:rightPointer + 2][::-1]

        # newS agora é:
        # " s'teL ekat edoCteeL tsetnoc"

        # O primeiro caractere é um espaço extra,
        # gerado pela inversão do primeiro bloco.
        # Removemos esse espaço com [1:].

        return newS[1:]
        # Resultado final:
        # "s'teL ekat edoCteeL tsetnoc"
