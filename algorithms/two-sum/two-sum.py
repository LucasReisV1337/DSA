"""
Problema Two Sum - Encontrar Pares de Números com Soma Alvo
=============================================================
Um dos problemas mais famosos de LeetCode (#1). Diversas abordagens:
- HashMap (mais comum)
- Sort + Two Pointer
- Brute Force (não recomendado)

Este arquivo explora as principais soluções com complexidade O(n).
"""

from typing import List, Tuple


# ==============================================================================
# ABORDAGEM 1: HashMap - Uma passada, O(n) time, O(n) space
# ==============================================================================
class TwoSumHashMap:
    """
    Usa HashMap para rastrear números vistos e seus índices.
    Para cada número, verifica se o complemento (target - num) já foi visto.
    """
    
    @staticmethod
    def two_sum(nums: List[int], target: int) -> List[int]:
        """
        Encontra dois índices cujos valores somam ao target.
        
        Time: O(n) - um pass pelo array
        Space: O(n) - armazenar até n números no map
        
        Exemplo:
            nums = [2, 7, 11, 15]
            target = 9
            
            Iteração 0: num=2, complement=7, map={2:0}
            Iteração 1: num=7, complement=2, map={2:0}
                        → 2 está em map! return [0, 1]
            
            Resultado: [0, 1]
        """
        num_map = {}  # num -> index
        
        for i, num in enumerate(nums):
            complement = target - num
            
            if complement in num_map:
                # Encontrou o par!
                return [num_map[complement], i]
            
            # Armazena posição deste número
            num_map[num] = i
        
        return []  # Sem solução


# ==============================================================================
# ABORDAGEM 2: Sort + Two Pointer - O(n log n) time, O(1) space
# ==============================================================================
class TwoSumTwoPointer:
    """
    Ordena array, depois usa dois ponteiros.
    Não retorna índices originais, mas valores (pode ser modificada).
    """
    
    @staticmethod
    def two_sum_values(nums: List[int], target: int) -> Tuple[int, int]:
        """
        Retorna os dois VALORES (não índices) que somam target.
        
        Time: O(n log n) por causa da ordenação
        Space: O(1) ou O(log n) por causa do sort
        
        Exemplo:
            nums = [2, 7, 11, 15]
            target = 9
            
            Sorted: [2, 7, 11, 15]
            left=0 (2), right=3 (15): 2+15=17 > 9 → right--
            left=0 (2), right=2 (11): 2+11=13 > 9 → right--
            left=0 (2), right=1 (7):  2+7=9 ✓ → return (2, 7)
            
            Resultado: (2, 7)
        """
        sorted_nums = sorted(nums)
        left = 0
        right = len(sorted_nums) - 1
        
        while left < right:
            current_sum = sorted_nums[left] + sorted_nums[right]
            
            if current_sum == target:
                return (sorted_nums[left], sorted_nums[right])
            elif current_sum < target:
                left += 1
            else:
                right -= 1
        
        return ()


# ==============================================================================
# ABORDAGEM 3: Brute Force - O(n²) time, O(1) space
# ==============================================================================
class TwoSumBruteForce:
    """
    Compara todos os pares. Não recomendado mas bom para entender a base.
    """
    
    @staticmethod
    def two_sum(nums: List[int], target: int) -> List[int]:
        """
        Force brute - verifica todos os pares.
        
        Time: O(n²) - loops aninhados
        Space: O(1)
        
        Exemplo:
            nums = [2, 7, 11, 15]
            target = 9
            
            i=0: j=1 (2+7=9) ✓ → return [0, 1]
        """
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[i] + nums[j] == target:
                    return [i, j]
        
        return []


# ==============================================================================
# ABORDAGEM 4: HashMap - Variante com Duplicatas
# ==============================================================================
class TwoSumWithDuplicates:
    """
    Encontra TODOS os pares que somam ao target (pode ter duplicatas).
    """
    
    @staticmethod
    def find_all_pairs(nums: List[int], target: int) -> List[Tuple[int, int]]:
        """
        Encontra todos os pares (valores únicos) que somam.
        
        Exemplo:
            nums = [1, 0, -1, 0, -2, 2]
            target = 0
            
            Pares válidos: (-2, 2), (-1, 1), (0, 0)
        """
        num_set = set(nums)
        result_set = set()
        
        for num in num_set:
            complement = target - num
            
            if complement in num_set:
                # Armazena sempre em ordem (smaller first) para evitar duplicatas
                pair = (min(num, complement), max(num, complement))
                result_set.add(pair)
        
        return list(result_set)


# ==============================================================================
# ABORDAGEM 5: Índices Totais - Multiple Solutions
# ==============================================================================
class TwoSumAllSolutions:
    """
    Encontra TODOS os pares de índices (pode ter múltiplas soluções).
    """
    
    @staticmethod
    def find_all_index_pairs(nums: List[int], target: int) -> List[List[int]]:
        """
        Encontra todos os pares de índices que somam target.
        
        Exemplo:
            nums = [1, 1, 1, 2]
            target = 2
            
            Pares válidos: [0,1], [0,2], [0,3], [1,2], [1,3], [2,3]
            (primeiros 3 elementos somam 1+1=2)
        """
        result = []
        num_map = {}
        
        for i, num in enumerate(nums):
            complement = target - num
            
            if complement in num_map:
                # Encontrou par(es)
                for prev_index in num_map[complement]:
                    result.append([prev_index, i])
            
            # Armazena índices de cada número
            if num not in num_map:
                num_map[num] = []
            num_map[num].append(i)
        
        return result


# ==============================================================================
# PROBLEMA RELACIONADO: Two Sum Closest (soma mais próxima do target)
# ==============================================================================
def two_sum_closest(nums: List[int], target: int) -> int:
    """
    Encontra dois números cuja soma é PRÓXIMA ao target (não exata).
    Retorna a soma mais próxima.
    
    Exemplo:
        nums = [2, 1, -3, 4]
        target = 1
        
        Possíveis somas: 
        2+1=3 (diferença 2), 2-3=-1 (diferença 2), 2+4=6 (diferença 5)
        1-3=-2 (diferença 3), 1+4=5 (diferença 4), -3+4=1 (diferença 0)
        
        Resultado: 1 (diferença 0)
    
    Time: O(n log n) | Space: O(log n)
    """
    nums.sort()
    left = 0
    right = len(nums) - 1
    closest_sum = nums[0] + nums[1]
    min_diff = abs(closest_sum - target)
    
    while left < right:
        current_sum = nums[left] + nums[right]
        diff = abs(current_sum - target)
        
        if diff < min_diff:
            min_diff = diff
            closest_sum = current_sum
        
        if current_sum < target:
            left += 1
        else:
            right -= 1
    
    return closest_sum


# ==============================================================================
# PROBLEMA RELACIONADO: Two Sum III (com estrutura Add-Find)
# ==============================================================================
class TwoSumIII:
    """
    Design a data structure que suporte duas operações:
    1. add(num) - adiciona ao data structure
    2. find(target) - existe pais de números que somam target?
    """
    
    def __init__(self):
        self.nums_count = {}  # num -> frequency
    
    def add(self, num: int) -> None:
        """Adiciona número ao data structure."""
        self.nums_count[num] = self.nums_count.get(num, 0) + 1
    
    def find(self, target: int) -> bool:
        """Verifica se existe par que soma target."""
        for num in self.nums_count:
            complement = target - num
            
            # Se complement == num, precisa ter frequência >= 2
            if complement == num:
                if self.nums_count[num] >= 2:
                    return True
            # Senão, só precisa existir
            elif complement in self.nums_count:
                return True
        
        return False


# ==============================================================================
# TESTES
# ==============================================================================
if __name__ == "__main__":
    print("=" * 80)
    print("TWO SUM - ANÁLISE DE MÚLTIPLAS ABORDAGENS")
    print("=" * 80)
    
    # Casos de teste
    test_cases = [
        ([2, 7, 11, 15], 9),
        ([3, 3], 6),
        ([2, 3, 4], 6),
        ([-1, -2, -3, -4, -5], -8),
    ]
    
    # ABORDAGEM 1: HashMap
    print("\n[1] ABORDAGEM: HashMap (RECOMENDADA)")
    print("-" * 80)
    for nums, target in test_cases:
        result = TwoSumHashMap.two_sum(nums.copy(), target)
        print(f"nums={nums}, target={target}")
        if result:
            print(f"  ✓ Índices: {result} → nums[{result[0]}]={nums[result[0]]}, nums[{result[1]}]={nums[result[1]]}")
            print(f"    Soma: {nums[result[0]]} + {nums[result[1]]} = {nums[result[0]] + nums[result[1]]}")
        else:
            print(f"  ✗ Sem solução")
    print(f"Time: O(n) | Space: O(n)")
    
    # ABORDAGEM 2: Two Pointer
    print("\n[2] ABORDAGEM: Sort + Two Pointer")
    print("-" * 80)
    for nums, target in test_cases:
        result = TwoSumTwoPointer.two_sum_values(nums.copy(), target)
        print(f"nums={nums}, target={target}")
        if result:
            print(f"  ✓ Valores: {result[0]} + {result[1]} = {result[0] + result[1]}")
        else:
            print(f"  ✗ Sem solução")
    print(f"Time: O(n log n) | Space: O(log n)")
    
    # ABORDAGEM 3: Brute Force
    print("\n[3] ABORDAGEM: Brute Force (não recomendada)")
    print("-" * 80)
    nums_test = [2, 7, 11, 15]
    target_test = 9
    result = TwoSumBruteForce.two_sum(nums_test, target_test)
    print(f"nums={nums_test}, target={target_test}")
    print(f"  ✓ Resultado: {result}")
    print(f"Time: O(n²) | Space: O(1)")
    
    # Variante com duplicatas
    print("\n[4] VARIANTE: Encontrar TODOS os pares (duplicatas)")
    print("-" * 80)
    nums_dup = [1, 0, -1, 0, -2, 2]
    target_dup = 0
    result_dup = TwoSumWithDuplicates.find_all_pairs(nums_dup, target_dup)
    print(f"nums={nums_dup}, target={target_dup}")
    print(f"  ✓ Pares encontrados: {result_dup}")
    
    # Todos os índices
    print("\n[5] VARIANTE: TODOS os pares de índices")
    print("-" * 80)
    nums_all = [1, 1, 1, 2]
    target_all = 2
    result_all = TwoSumAllSolutions.find_all_index_pairs(nums_all, target_all)
    print(f"nums={nums_all}, target={target_all}")
    print(f"  ✓ Pares encontrados: {len(result_all)} combinações")
    for pair in result_all[:3]:  # Mostra primárias
        print(f"    {pair}")
    if len(result_all) > 3:
        print(f"    ... e mais {len(result_all) - 3}")
    
    # Sum mais próximo
    print("\n[6] VARIANTE: Two Sum Closest")
    print("-" * 80)
    nums_closest = [2, 1, -3, 4]
    target_closest = 1
    result_closest = two_sum_closest(nums_closest, target_closest)
    print(f"nums={nums_closest}, target={target_closest}")
    print(f"  ✓ Soma mais próxima: {result_closest} (diferença: {abs(result_closest - target_closest)})")
    
    # TwoSumIII
    print("\n[7] PROBLEMA RELACIONADO: Two Sum III (Add-Find Structure)")
    print("-" * 80)
    twosum3 = TwoSumIII()
    operations = [
        ("add", 3),
        ("find", 6),
        ("add", 2),
        ("find", 5),
        ("find", 6),
    ]
    
    for op, val in operations:
        if op == "add":
            twosum3.add(val)
            print(f"add({val})")
        else:
            result = twosum3.find(val)
            print(f"find({val}) → {result}")
    
    print("\n" + "=" * 80)
    print("RESUMO: ESCOLHA DA ABORDAGEM")
    print("=" * 80)
    print("""
    RECOMENDAÇÃO GERAL: Use HASHMAP
    ✓ Tempo: O(n)
    ✓ Simples de entender
    ✓ Funciona com arrays desordenados
    
    ALTERNATIVA: Two Pointer (se array já está ordenado)
    ✓ Tempo: O(n log n)
    ✓ Espaço: O(log n)
    ✓ Melhor se o array é mutable e sorting é grátis
    
    EVITAR: Brute Force
    ✗ Tempo: O(n²)
    ✗ Só use em arrays muito pequenos
    
    PROBLEMAS RELACIONADOS:
    • Two Sum II - array ordenado (use Two Pointer diretamente)
    • Two Sum III - add/find structure (use set ou HashMap)
    • Two Sum Closest - soma mais próxima (sort + two pointer)
    • 3Sum - LeetCode #15 (sort + two sum nested)
    • 4Sum - LeetCode #18 (similar a 3sum)
    """)