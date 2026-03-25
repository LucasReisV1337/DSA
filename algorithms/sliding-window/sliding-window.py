"""
Padrão Sliding Window - Técnica de Dois Ponteiros
===================================================
O sliding window é uma técnica que usa dois ponteiros para manter uma "janela" móvel
sobre uma estrutura de dados (array, string). A janela se expande e contrai conforme
necessário para resolver o problema de forma eficiente.

Padrões principais:
1. Janela de tamanho fixo (k) - percorre todo array
2. Janela de tamanho variável - encontra subarrays/substrings com propriedade específica
3. Monotonic Deque - mantém máximo/mínimo na janela em O(1)

Time Complexity: O(n) - cada elemento é visitado no máximo 2 vezes
Space Complexity: O(k) ou O(1) - depende da variante
"""


# ==============================================================================
# PADRÃO 1: Janela Fixa - Máxima Soma de Subarray de Tamanho k
# ==============================================================================
def max_sum_subarray(arr: list, k: int) -> int:
    """
    Encontra a máxima soma de um subarray contíguo de tamanho exatamente k.
    
    Exemplo:
        arr = [1, 2, 3, 4, 5]
        k = 3
        
        Janelas: [1,2,3]=6, [2,3,4]=9, [3,4,5]=12
        Resultado: 12
    
    Time: O(n) | Space: O(1)
    """
    if not arr or k > len(arr) or k <= 0:
        return 0
    
    # Calcula soma da primeira janela
    window_sum = sum(arr[:k])
    max_sum = window_sum
    
    # Desliza a janela: remove elemento da esquerda, adiciona elemento da direita
    for i in range(len(arr) - k):
        window_sum = window_sum - arr[i] + arr[i + k]
        max_sum = max(max_sum, window_sum)
    
    return max_sum


# ==============================================================================
# PADRÃO 2: Janela Variável - Substring Mais Longa Sem Caracteres Repetidos
# ==============================================================================
def longest_substring_without_repeating(s: str) -> int:
    """
    Encontra o comprimento da substring mais longa sem caracteres repetidos.
    
    Exemplo:
        s = "abcabcbb"
        Substrings: "a"=1, "ab"=2, "abc"=3, "bca"=3, "cab"=3, "abc"=3, "bcb"=3
        Resultado: 3
        
        s = "pwwkew"
        Substrings: "p"=1, "pw"=2, "wke"=3, "kew"=3
        Resultado: 3
    
    Time: O(n) | Space: O(min(n, charset_size))
    """
    char_index = {}  # Mapeia char -> seu último índice visto
    max_length = 0
    left = 0
    
    for right in range(len(s)):
        char = s[right]
        
        # Se caractere repetido, move left pointer para além da primeira ocorrência
        if char in char_index and char_index[char] >= left:
            left = char_index[char] + 1
        
        # Atualiza índice do char atual
        char_index[char] = right
        
        # Calcula comprimento da janela atual
        max_length = max(max_length, right - left + 1)
    
    return max_length


# ==============================================================================
# PADRÃO 3: Subarray com Soma Alvo - Janela Variável em Array Positivo
# ==============================================================================
def subarray_sum_equals_k(arr: list, target: int) -> int:
    """
    Encontra o comprimento do subarray contíguo mais curto cuja soma = target.
    (Funciona apenas para arrays com números positivos)
    
    Exemplo:
        arr = [1, 4, 20, 3, 10, 5]
        target = 33
        
        Subarrays com soma 33: [20,3,10] com length 3
        Resultado: 3
    
    Time: O(n) | Space: O(1)
    """
    left = 0
    current_sum = 0
    min_length = float('inf')
    
    for right in range(len(arr)):
        current_sum += arr[right]
        
        # Contrai janela enquanto soma >= target
        while current_sum > target and left <= right:
            current_sum -= arr[left]
            left += 1
        
        # Se soma == target, atualiza mínimo
        if current_sum == target:
            min_length = min(min_length, right - left + 1)
    
    return min_length if min_length != float('inf') else -1


# ==============================================================================
# PADRÃO 4: Substring Mínima Contendo Todos Caracteres - Janela Variável
# ==============================================================================
def min_window_substring(s: str, t: str) -> str:
    """
    Encontra a substring mais curta de s que contém todos caracteres de t.
    
    Exemplo:
        s = "ADOBECODEBANC"
        t = "ABC"
        
        Substrings válidas: "ADOBEC"=6, "BANC"=4, "ECODEBA"=7
        Resultado: "BANC" (maior curta válida)
    
    Time: O(n + m) onde n=len(s), m=len(t) | Space: O(charset_size)
    """
    if not s or not t or len(s) < len(t):
        return ""
    
    # Contagem necessária de caracteres
    dict_t = {}
    for char in t:
        dict_t[char] = dict_t.get(char, 0) + 1
    
    required = len(dict_t)  # Número de caracteres únicos em t
    formed = 0  # Número de caracteres únicos em string atual com freq >= dict_t
    
    window_counts = {}  # Contagem de chars na janela atual
    
    left = 0
    min_len = float('inf')
    min_left = 0
    
    for right in range(len(s)):
        char = s[right]
        window_counts[char] = window_counts.get(char, 0) + 1
        
        # Se freq do char agora = freq necessária, incrementa formed
        if char in dict_t and window_counts[char] == dict_t[char]:
            formed += 1
        
        # Tenta contrair janela enquanto tem todos os chars necessários
        while left <= right and formed == required:
            char = s[left]
            
            # Atualiza resultado se janela é melhor
            if right - left + 1 < min_len:
                min_len = right - left + 1
                min_left = left
            
            # Remove char da esquerda e move left
            window_counts[char] -= 1
            if char in dict_t and window_counts[char] < dict_t[char]:
                formed -= 1
            
            left += 1
    
    # Retorna substring mínima ou string vazia se não encontrou
    return "" if min_len == float('inf') else s[min_left:min_left + min_len]


# ==============================================================================
# PADRÃO 5: Máximo de Inteiros Consecutivos (varredura em 2 direções)
# ==============================================================================
def max_consecutive_ones(arr: list) -> int:
    """
    Encontra o máximo número de 1s consecutivos em um array.
    
    Exemplo:
        arr = [1, 1, 0, 1, 1, 1]
        Sequências: [1,1]=2, [1,1,1]=3
        Resultado: 3
    
    Time: O(n) | Space: O(1)
    """
    max_count = 0
    current_count = 0
    
    for num in arr:
        if num == 1:
            current_count += 1
            max_count = max(max_count, current_count)
        else:
            current_count = 0
    
    return max_count


# ==============================================================================
# PADRÃO 6: Produtos de Array Diferente do Índice
# ==============================================================================
def product_of_array_except_self(arr: list) -> list:
    """
    Retorna array where resultado[i] = produto de todos elementos exceto arr[i].
    Sem usar divisão. Sem usar extra O(n).
    
    Exemplo:
        arr = [1, 2, 3, 4]
        
        Índice 0: 2*3*4 = 24
        Índice 1: 1*3*4 = 12
        Índice 2: 1*2*4 = 8  
        Índice 3: 1*2*3 = 6
        Resultado: [24, 12, 8, 6]
    
    Estratégia: passar da esquerda acumulando, depois passar direita acumulando
    Time: O(n) | Space: O(n) para resultado
    """
    n = len(arr)
    result = [1] * n
    
    # Acumula produtos à esquerda
    left_product = 1
    for i in range(n):
        result[i] = left_product
        left_product *= arr[i]
    
    # Acumula produtos à direita
    right_product = 1
    for i in range(n - 1, -1, -1):
        result[i] *= right_product
        right_product *= arr[i]
    
    return result


# ==============================================================================
# TESTES
# ==============================================================================
if __name__ == "__main__":
    print("=" * 70)
    print("SLIDING WINDOW - PADRÕES E IMPLEMENTAÇÕES")
    print("=" * 70)
    
    # Teste 1: Max Sum Subarray
    print("\n[1] MÁXIMA SOMA DE SUBARRAY COM TAMANHO k")
    print("-" * 70)
    arr1 = [1, 2, 3, 4, 5]
    k1 = 3
    result1 = max_sum_subarray(arr1, k1)
    print(f"Array: {arr1}, k={k1}")
    print(f"Janelas: [1,2,3]={1+2+3}, [2,3,4]={2+3+4}, [3,4,5]={3+4+5}")
    print(f"✓ Máxima soma: {result1}")
    print(f"Time: O(n) | Space: O(1)")
    
    # Teste 2: Longest Substring Without Repeating
    print("\n[2] SUBSTRING MAIS LONGA SEM REPETIÇÃO")
    print("-" * 70)
    test_cases_2 = ["abcabcbb", "bbbbb", "pwwkew", "au", "dvdf"]
    for s in test_cases_2:
        result = longest_substring_without_repeating(s)
        print(f"String: '{s}' → Comprimento máximo: {result}")
    print(f"Time: O(n) | Space: O(min(n, charset_size))")
    
    # Teste 3: Subarray Sum Equals K
    print("\n[3] SUBARRAY COM SOMA ALVO (array positivo)")
    print("-" * 70)
    arr3 = [1, 4, 20, 3, 10, 5]
    target3 = 33
    result3 = subarray_sum_equals_k(arr3, target3)
    print(f"Array: {arr3}, Target: {target3}")
    print(f"Subarray [20,3,10] tem soma 33 com comprimento 3")
    print(f"✓ Comprimento mínimo: {result3}")
    print(f"Time: O(n) | Space: O(1)")
    
    # Teste 4: Min Window Substring
    print("\n[4] SUBSTRING MÍNIMA CONTENDO CARACTERES")
    print("-" * 70)
    s4 = "ADOBECODEBANC"
    t4 = "ABC"
    result4 = min_window_substring(s4, t4)
    print(f"String: {s4}")
    print(f"Caracteres necessários: {t4}")
    print(f"✓ Substring mínima: '{result4}' (comprimento: {len(result4)})")
    print(f"Time: O(n + m) | Space: O(charset_size)")
    
    # Teste 5: Max Consecutive Ones
    print("\n[5] MÁXIMO DE 1s CONSECUTIVOS")
    print("-" * 70)
    arr5 = [1, 1, 0, 1, 1, 1]
    result5 = max_consecutive_ones(arr5)
    print(f"Array: {arr5}")
    print(f"Sequências: [1,1]=2, [1,1,1]=3")
    print(f"✓ Máximo: {result5}")
    print(f"Time: O(n) | Space: O(1)")
    
    # Teste 6: Product of Array Except Self
    print("\n[6] PRODUTO DO ARRAY EXCETO O ÍNDICE")
    print("-" * 70)
    arr6 = [1, 2, 3, 4]
    result6 = product_of_array_except_self(arr6)
    print(f"Array: {arr6}")
    print(f"✓ Resultado: {result6}")
    print(f"Verificação: {result6} = [2*3*4, 1*3*4, 1*2*4, 1*2*3]")
    print(f"Time: O(n) | Space: O(n)")
    
    print("\n" + "=" * 70)
    print("PADRÕES GERAIS DO SLIDING WINDOW")
    print("=" * 70)
    print("""
    1. JANELA FIXA:
       - Calcula valor da primeira janela
       - Desliza: remove esquerda, adiciona direita
       - Atualiza resultado
       - Use quando k é constante
    
    2. JANELA VARIÁVEL:
       - Expande adicionando elemento à direita
       - Contrai quando condição não é satisfeita
       - Rastreia índices left e right
       - Use quando procura subarray/substring com propriedade
    
    3. OTIMIZAÇÕES COMUNS:
       - HashMap/Dict: rastrear char/frequencies
       - Set: verificar presença rápida
       - Deque: manter máximo/mínimo em O(1)
    """)
