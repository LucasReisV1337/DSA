"""
Padrão Two Pointer - Manipulação Eficiente de Arrays/Strings
==============================================================
O padrão two pointer usa dois ponteiros que se movem em direções complementares
ou reduzem o espaço de busca. É especialmente útil em arrays/strings ORDENADOS.

Casos de uso:
1. Busca em array ordenado (encontrar pair com soma específica)
2. Remover/encontrar elementos em array
3. Reverter estrutura
4. Container with most water / trapping rain water
5. Merge de arrays ordenados

Time Complexity: O(n) em geral
Space Complexity: O(1) ou O(n) dependendo da variante
"""


# ==============================================================================
# PADRÃO 1: Two Sum em Array ORDENADO (encontrar pares com soma alvo)
# ==============================================================================
def two_sum_sorted(nums: list, target: int) -> list:
    """
    Encontra TWO números em array ORDENADO que somam a target.
    Retorna índices [i, j] onde i < j.
    
    Exemplo:
        nums = [2, 7, 11, 15]
        target = 9
        
        Dois ponteiros:
        left=0 (nums[0]=2), right=3 (nums[3]=15)
        2 + 15 = 17 > 9 → move right para esquerda
        2 + 11 = 13 > 9 → move right para esquerda
        2 + 7 = 9 ✓ → encontrado!
        
        Resultado: [0, 1] (índices 0-base)
    
    Time: O(n) | Space: O(1)
    """
    left = 0
    right = len(nums) - 1
    
    while left < right:
        current_sum = nums[left] + nums[right]
        
        if current_sum == target:
            return [left, right]
        elif current_sum < target:
            left += 1  # Precisa de número maior
        else:
            right -= 1  # Precisa de número menor
    
    return []  # Não encontrou


# ==============================================================================
# PADRÃO 2: Remover Duplicatas de Array Ordenado (in-place)
# ==============================================================================
def remove_duplicates(nums: list) -> int:
    """
    Remove duplicatas de array ORDENADO in-place.
    Retorna novo tamanho do array + modifica nums.
    
    Exemplo:
        nums = [1, 1, 1, 2, 2, 3]
        
        Pointer left aponta para posição onde inserir próximo elemento único
        Pointer right varre procurando elementos diferentes
        
        Resultado: [1, 2, 3, 2, 2, 3] (os 3 primeiros são o resultado)
        Retorna: 3
    
    Time: O(n) | Space: O(1)
    """
    if not nums:
        return 0
    
    left = 1  # Posição para inserir próximo elemento único
    
    for right in range(1, len(nums)):
        if nums[right] != nums[right - 1]:
            nums[left] = nums[right]
            left += 1
    
    return left


# ==============================================================================
# PADRÃO 3: Container with Most Water (maior área entre duas linhas)
# ==============================================================================
def max_area_container(heights: list) -> int:
    """
    Encontra dois índices que formam container com máxima área de água.
    Área = min(height[i], height[j]) * (j - i)
    
    Exemplo:
        heights = [1, 8, 6, 2, 5, 4, 8, 3, 7]
        
        Estratégia: começar com máxima largura, depois reduzir
        i=0 (h=1), j=8 (h=7): área = min(1,7) * 8 = 8
        Se remover o lado menor (height[0]=1), talvez encontre maior
        
        i=1 (h=8), j=8 (h=7): área = min(8,7) * 7 = 49
        
        Resultado: 49
    
    Time: O(n) | Space: O(1)
    """
    left = 0
    right = len(heights) - 1
    max_area = 0
    
    while left < right:
        # Calcula área atual
        width = right - left
        height = min(heights[left], heights[right])
        area = width * height
        max_area = max(max_area, area)
        
        # Move o ponteiro com menor altura (não adianta mover maior)
        if heights[left] < heights[right]:
            left += 1
        else:
            right -= 1
    
    return max_area


# ==============================================================================
# PADRÃO 4: Merge Sorted Arrays (combinar dois arrays ordenados)
# ==============================================================================
def merge_sorted_arrays(arr1: list, m: int, arr2: list, n: int) -> None:
    """
    Merge arr2 em arr1 in-place (arr1 tem espaço suficiente no final).
    arr1 tem tamanho m+n, e os primeiros m elementos são válidos.
    arr2 tem n elementos.
    
    Exemplo:
        arr1 = [1, 2, 3, 0, 0, 0], m = 3
        arr2 = [2, 5, 6], n = 3
        
        Strategy: preencher de trás para frente (evita overwrite)
        Compare últimos elementos e coloca o maior no final
        
        Resultado: arr1 = [1, 2, 2, 3, 5, 6]
    
    Time: O(m + n) | Space: O(1)
    """
    p1 = m - 1  # Ponteiro em arr1 (últimos elementos válidos)
    p2 = n - 1  # Ponteiro em arr2 (último elemento)
    p = m + n - 1  # Ponteiro em arr1 (final, para preencher)
    
    # Compara de trás e preenche da direita
    while p1 >= 0 and p2 >= 0:
        if arr1[p1] > arr2[p2]:
            arr1[p] = arr1[p1]
            p1 -= 1
        else:
            arr1[p] = arr2[p2]
            p2 -= 1
        p -= 1
    
    # Se restarem elementos de arr2, copia (arr1 não precisa)
    while p2 >= 0:
        arr1[p] = arr2[p2]
        p2 -= 1
        p -= 1


# ==============================================================================
# PADRÃO 5: Valid Palindrome (verificar se é palíndromo ignorando chars)
# ==============================================================================
def is_valid_palindrome(s: str) -> bool:
    """
    Verifica se string é palíndromo (ignorando espaços e caracteres especiais).
    Case-insensitive.
    
    Exemplo:
        s = "A man, a plan, a canal: Panama"
        
        Limpo: "amanaplanacanalpanama"
        
        Two pointers:
        left=0 (a), right=20 (a) ✓
        left=1 (m), right=19 (m) ✓
        ...
        
        Resultado: True
    
    Time: O(n) | Space: O(1)
    """
    left = 0
    right = len(s) - 1
    
    while left < right:
        # Pula caracteres não alfanuméricos
        while left < right and not s[left].isalnum():
            left += 1
        
        while left < right and not s[right].isalnum():
            right -= 1
        
        # Compara (case-insensitive)
        if s[left].lower() != s[right].lower():
            return False
        
        left += 1
        right -= 1
    
    return True


# ==============================================================================
# PADRÃO 6: Rotate String (verificar se s2 é rotação de s1)
# ==============================================================================
def is_rotation(s1: str, s2: str) -> bool:
    """
    Verifica se s2 é uma rotação de s1.
    
    Exemplo:
        s1 = "waterbottle"
        s2 = "erbottlewat"
        
        Trick: se s2 é rotação de s1, então s2 será substring de s1+s1
        s1+s1 = "waterbottlewaterbottle"
        s2 = "erbottlewat" está em s1+s1? SIM
        
        Resultado: True
    
    Time: O(n) com string matching eficiente | Space: O(n)
    """
    if len(s1) != len(s2):
        return False
    
    return s2 in s1 + s1


# ==============================================================================
# PADRÃO 7: Reverse Words in String (reversão in-place)
# ==============================================================================
def reverse_words(s: str) -> str:
    """
    Reverte ordem das palavras em string (mantém cada palavra em ordem).
    
    Exemplo:
        s = "the sky is blue"
        
        Passo 1: Reverter string toda: "eulb si yks eht"
        Passo 2: Reverter cada palavra: "blue is sky the"
        
        Resultado: "blue is sky the"
    
    Time: O(n) | Space: O(n) para novo string
    """
    # Remove espaços extras e split
    words = s.split()
    
    # Reverte lista de palavras
    words.reverse()
    
    return ' '.join(words)


# ==============================================================================
# PADRÃO 8: Partition Array by Pivot (< pivot | pivot | > pivot)
# ==============================================================================
def partition_by_pivot(arr: list, pivot: int) -> None:
    """
    Particiona array in-place em 3 partes:
    números < pivot | pivot | números > pivot
    
    Similar ao problema de Dutch National Flag com 3 cores.
    
    Exemplo:
        arr = [3, 3, 3, 1, 2, 1], pivot = 3
        
        Resultado: [1, 2, 1, 3, 3, 3]
        (ou qualquer ordem que tenha < pivot | pivot | > pivot)
    
    Time: O(n) | Space: O(1)
    """
    left = 0
    right = len(arr) - 1
    
    while left <= right:
        if arr[left] < pivot:
            left += 1
        elif arr[left] > pivot:
            # Swap com right
            arr[left], arr[right] = arr[right], arr[left]
            right -= 1
        else:  # arr[left] == pivot
            # Swap com right e move left
            if arr[right] != pivot:
                arr[left], arr[right] = arr[right], arr[left]
                left += 1
            else:
                right -= 1


# ==============================================================================
# TESTES
# ==============================================================================
if __name__ == "__main__":
    print("=" * 70)
    print("TWO POINTER - PADRÕES E IMPLEMENTAÇÕES")
    print("=" * 70)
    
    # Teste 1: Two Sum Sorted
    print("\n[1] TWO SUM EM ARRAY ORDENADO")
    print("-" * 70)
    nums1 = [2, 7, 11, 15]
    target1 = 9
    result1 = two_sum_sorted(nums1, target1)
    print(f"Array: {nums1}, Target: {target1}")
    print(f"Resultado: índices {result1} → nums[{result1[0]}]={nums1[result1[0]]}, nums[{result1[1]}]={nums1[result1[1]]}")
    print(f"Time: O(n) | Space: O(1)")
    
    # Teste 2: Remove Duplicates
    print("\n[2] REMOVE DUPLICATAS (in-place)")
    print("-" * 70)
    nums2 = [1, 1, 1, 2, 2, 3]
    result2 = remove_duplicates(nums2)
    print(f"Array original: [1, 1, 1, 2, 2, 3]")
    print(f"Novo tamanho: {result2}")
    print(f"Array após: {nums2[:result2]}")
    print(f"Time: O(n) | Space: O(1)")
    
    # Teste 3: Container with Most Water
    print("\n[3] CONTAINER COM MÁXIMA ÁREA")
    print("-" * 70)
    heights3 = [1, 8, 6, 2, 5, 4, 8, 3, 7]
    result3 = max_area_container(heights3)
    print(f"Heights: {heights3}")
    print(f"✓ Máxima área: {result3}")
    print(f"Time: O(n) | Space: O(1)")
    
    # Teste 4: Merge Sorted Arrays
    print("\n[4] MERGE DE ARRAYS ORDENADOS (in-place)")
    print("-" * 70)
    arr1 = [1, 2, 3, 0, 0, 0]
    arr2 = [2, 5, 6]
    print(f"Array 1: {arr1} (primeiros 3 elementos válidos)")
    print(f"Array 2: {arr2}")
    merge_sorted_arrays(arr1, 3, arr2, 3)
    print(f"✓ Resultado: {arr1}")
    print(f"Time: O(m + n) | Space: O(1)")
    
    # Teste 5: Valid Palindrome
    print("\n[5] VERIFICAR PALÍNDROMO VÁLIDO")
    print("-" * 70)
    test_cases_5 = ["A man, a plan, a canal: Panama", "race a car", "0P"]
    for s in test_cases_5:
        result = is_valid_palindrome(s)
        print(f"'{s}' → {result}")
    print(f"Time: O(n) | Space: O(1)")
    
    # Teste 6: Rotate String
    print("\n[6] VERIFICAR SE É ROTAÇÃO")
    print("-" * 70)
    s1_6 = "waterbottle"
    s2_6 = "erbottlewat"
    result6 = is_rotation(s1_6, s2_6)
    print(f"s1: '{s1_6}'")
    print(f"s2: '{s2_6}'")
    print(f"É rotação? {result6}")
    print(f"Time: O(n) | Space: O(n)")
    
    # Teste 7: Reverse Words
    print("\n[7] REVERTER ORDEM DE PALAVRAS")
    print("-" * 70)
    s7 = "the sky is blue"
    result7 = reverse_words(s7)
    print(f"Original: '{s7}'")
    print(f"✓ Revertido: '{result7}'")
    print(f"Time: O(n) | Space: O(n)")
    
    # Teste 8: Partition by Pivot
    print("\n[8] PARTICIONAR ARRAY POR PIVOT")
    print("-" * 70)
    arr8 = [3, 3, 3, 1, 2, 1]
    pivot8 = 3
    print(f"Array original: {arr8}")
    print(f"Pivot: {pivot8}")
    partition_by_pivot(arr8, pivot8)
    print(f"✓ Particionado: {arr8}")
    print(f"(< {pivot8}) | {pivot8} | (> {pivot8})")
    print(f"Time: O(n) | Space: O(1)")
    
    print("\n" + "=" * 70)
    print("PADRÕES GERAIS DE TWO POINTER")
    print("=" * 70)
    print("""
    1. ARRAY ORDENADO - BUSCA:
       - Começar nos extremos (left=0, right=n-1)
       - Move left se precisa aumentar, right se precisa diminuir
       - Excelente para arrays inteiros/ordenados
    
    2. ARRAY DESORDENADO - PARTIÇÃO:
       - Começar nos extremos
       - Swap elementos até satisfazer condição
       - Use para remover/reorganizar in-place
    
    3. STRING/ARRAY - VALIDAÇÃO:
       - Expandir de dentro para fora (para palindromo)
       - Ou comparar pontos simétricos
       - Zero espaço extra
    
    4. MERGE:
       - Preencher de trás para frente para evitar overwrite
       - Compare e coloque maior/menor conforme necessário
    
    5. OTIMIZAÇÕES:
       - Sempre O(n), pois cada elemento visitado no máximo 2x
       - In-place economiza espaço
       - Funciona especialmente bem em arrays ORDENADOS
    """)
