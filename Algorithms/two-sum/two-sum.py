    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # Cria um dicionário vazio para armazenar
        # números já processados e seus índices
        # Exemplo inicial:
        # nums = [2, 7, 11, 15]
        # target = 9

        num_map = {}

        # Percorre o array nums usando enumerate
        # i  -> índice atual
        # num -> valor no índice i
        for i, num in enumerate(nums):

            # Calcula o número que falta para atingir o target
            # complement = target - num
            #
            # Iteração 1:
            # i = 0, num = 2
            # complement = 9 - 2 = 7
            complement = target - num

            # Verifica se o complemento já foi visto
            # Ou seja, se já existe como chave em num_map
            #
            # Iteração 1:
            # complement = 7
            # num_map = {}
            # 7 não está em num_map → condição falsa
            if complement in num_map:

                # Se o complemento existir, significa que:
                # nums[num_map[complement]] + num == target
                #
                # Retorna os índices dos dois números
                return [num_map[complement], i]

            # Se o complemento não foi encontrado,
            # armazena o número atual e seu índice
            #
            # Iteração 1:
            # num = 2, i = 0
            # num_map passa a ser:
            # { 2: 0 }
            num_map[num] = i

        # Caso nenhum par seja encontrado
        return []

#Complexidade de tempo: O(n) - O algoritmo percorre o array nums uma vez para encontrar os índices dos números que somam o target.
#Complexidade de espaço: O(n) - O algoritmo utiliza um dicionário para armazenar os números já processados e seus índices, o que pode ocupar espaço proporcional ao tamanho do array nums.