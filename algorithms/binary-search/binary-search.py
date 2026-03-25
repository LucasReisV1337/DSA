"""
Binary Search - Busca Binária

Algoritmo eficiente para encontrar um elemento em array ORDENADO.
Divide o espaço de busca pela metade a cada iteração.

Complexidade:
- Tempo: O(log n)
- Espaço: O(1) iterativo, O(log n) recursivo

Condições:
- Array DEVE estar ORDENADO
- O(log n) é muito melhor que O(n) para grandes arrays
"""


def binary_search_iterative(arr, target):
    """
    Busca binária iterativa (clássica).
    
    Args:
        arr: Array ordenado
        target: Valor a procurar
        
    Returns:
        Índice do elemento ou -1 se não encontrado
        
    Complexidade: O(log n) tempo, O(1) espaço
    """
    low = 0
    high = len(arr) - 1
    
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    
    return -1


def binary_search_recursive(arr, target, low=None, high=None):
    """
    Busca binária recursiva.
    
    Args:
        arr: Array ordenado
        target: Valor a procurar
        low: Limite inferior (default: 0)
        high: Limite superior (default: len(arr) - 1)
        
    Returns:
        Índice do elemento ou -1 se não encontrado
        
    Complexidade: O(log n) tempo, O(log n) espaço (stack)
    """
    if low is None:
        low = 0
    if high is None:
        high = len(arr) - 1
    
    if low > high:
        return -1
    
    mid = (low + high) // 2
    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        return binary_search_recursive(arr, target, mid + 1, high)
    else:
        return binary_search_recursive(arr, target, low, mid - 1)


def binary_search_leftmost(arr, target):
    """
    Encontra a posição MAIS À ESQUERDA de um elemento (com duplicatas).
    
    Exemplo: arr = [1, 2, 2, 2, 3], target = 2 → retorna 1
    """
    low = 0
    high = len(arr)
    
    while low < high:
        mid = (low + high) // 2
        if arr[mid] < target:
            low = mid + 1
        else:
            high = mid
    
    if low < len(arr) and arr[low] == target:
        return low
    return -1


def binary_search_rightmost(arr, target):
    """
    Encontra a posição MAIS À DIREITA de um elemento (com duplicatas).
    
    Exemplo: arr = [1, 2, 2, 2, 3], target = 2 → retorna 3
    """
    low = 0
    high = len(arr)
    
    while low < high:
        mid = (low + high) // 2
        if arr[mid] <= target:
            low = mid + 1
        else:
            high = mid
    
    if low > 0 and arr[low - 1] == target:
        return low - 1
    return -1


def first_greater_or_equal(arr, target):
    """
    Encontra o primeiro elemento >= target.
    
    Retorna:
        Índice or len(arr) se todos são < target
    """
    low = 0
    high = len(arr)
    
    while low < high:
        mid = (low + high) // 2
        if arr[mid] < target:
            low = mid + 1
        else:
            high = mid
    
    return low


def exponential_search(arr, target):
    """
    Busca Exponencial - combinação de busca exponencial + binária.
    
    Útil quando não conhecemos o tamanho do array (infinito).
    
    Complexidade: O(log n)
    """
    if arr[0] == target:
        return 0
    
    n = len(arr)
    i = 1
    while i < n and arr[i] <= target:
        i *= 2
    
    # Binary search no intervalo encontrado
    return binary_search_recursive(arr, target, i // 2, min(i, n - 1))


# ============================================================================
# EXEMPLOS E TESTES
# ============================================================================

if __name__ == "__main__":
    print("=" * 60)
    print("BINARY SEARCH - Busca Binária")
    print("=" * 60)
    
    # Dataset
    arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    
    print(f"\nArray (ORDENADO): {arr}")
    
    # 1. Busca básica
    print("\n1. BUSCA BÁSICA:")
    targets = [7, 1, 19, 10]
    
    for target in targets:
        idx = binary_search_iterative(arr, target)
        status = "✓ Encontrado" if idx != -1 else "✗ Não encontrado"
        print(f"   Procurando {target:2d}: índice = {idx:2d} {status}")
    
    # 2. Recursivo vs Iterativo
    print("\n2. ITERATIVO VS RECURSIVO:")
    target = 11
    idx_iter = binary_search_iterative(arr, target)
    idx_recur = binary_search_recursive(arr, target)
    print(f"   Procurando {target}:")
    print(f"   - Iterativo: {idx_iter}")
    print(f"   - Recursivo: {idx_recur}")
    
    # 3. Eficiência
    print("\n3. ANÁLISE DE COMPLEXIDADE:")
    print(f"   Array com N=10 elementos:")
    print(f"   - Busca sequencial O(n): máximo 10 comparações")
    print(f"   - Binary search O(log n): máximo ~3 comparações")
    print(f"   - Diferença: 3.3x mais rápido!")
    
    # 4. Com duplicatas
    print("\n4. BUSCA COM DUPLICATAS:")
    arr_dup = [1, 2, 2, 2, 3, 4, 4, 5]
    target = 2
    
    print(f"   Array: {arr_dup}")
    print(f"   Procurando {target}:")
    print(f"   - Leftmost (primeira): índice {binary_search_leftmost(arr_dup, target)}")
    print(f"   - Rightmost (última): índice {binary_search_rightmost(arr_dup, target)}")
    
    # 5. Busca exponencial
    print("\n5. EXPONENTIAL SEARCH:")
    result = exponential_search(arr, 13)
    print(f"   exponential_search(arr, 13) = {result}")
