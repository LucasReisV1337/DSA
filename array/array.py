"""
Array (Vetor Dinâmico) - Lista Implementada

Um array é uma estrutura de dados linear que armazena elementos
em posições contíguas de memória, acessíveis por índice.

Implementação de um vetor dinâmico (como ArrayList ou List em Python)
que redimensiona quando necessário.

Operações:
- append(x): adiciona no final - O(1) amortizado
- insert(i, x): insere na posição - O(n)
- remove(i): remove da posição - O(n)
- access(i): acessa por índice - O(1)
- search(x): procura valor - O(n)
- size(): tamanho - O(1)

Performance:
- Acesso: O(1) ✓
- Busca: O(n)
- Inserção no final: O(1) amortizado ✓
- Inserção no meio: O(n)
- Remoção: O(n)
"""


class DynamicArray:
    """
    Implementação de um Array Dinâmico (vetor que cresce).
    
    Similar ao ArrayList (Java) ou Vector (C++).
    Redimensiona quando atinge a capacidade.
    """
    
    def __init__(self, capacity=10):
        """
        Inicializa array dinâmico.
        
        Args:
            capacity: Capacidade inicial (padrão: 10)
        """
        self.capacity = capacity
        self.size = 0
        self.data = [None] * capacity
    
    def append(self, item):
        """
        Adiciona item no final do array.
        
        Complexidade: O(1) amortizado
        (O(n) apenas quando precisa redimensionar, raro)
        """
        if self.size == self.capacity:
            self._resize()
        
        self.data[self.size] = item
        self.size += 1
    
    def insert(self, index, item):
        """
        Insere item na posição especificada.
        
        Complexidade: O(n) - precisa deslocar elementos
        
        Args:
            index: Posição onde inserir (0 a size)
            item: Elemento a inserir
            
        Lança IndexError se índice inválido.
        """
        if index < 0 or index > self.size:
            raise IndexError(f"Index {index} out of range")
        
        if self.size == self.capacity:
            self._resize()
        
        # Desloca elementos para direita
        for i in range(self.size, index, -1):
            self.data[i] = self.data[i - 1]
        
        self.data[index] = item
        self.size += 1
    
    def remove(self, index):
        """
        Remove e retorna elemento na posição.
        
        Complexidade: O(n) - precisa deslocar elementos
        
        Args:
            index: Posição do elemento a remover
            
        Returns:
            Elemento removido
            
        Lança IndexError se índice inválido.
        """
        if index < 0 or index >= self.size:
            raise IndexError(f"Index {index} out of range")
        
        item = self.data[index]
        
        # Desloca elementos para esquerda
        for i in range(index, self.size - 1):
            self.data[i] = self.data[i + 1]
        
        self.size -= 1
        return item
    
    def remove_value(self, value):
        """
        Remove primeira ocorrência de um valor.
        
        Complexidade: O(n)
        
        Returns:
            True se removido, False se não encontrado
        """
        for i in range(self.size):
            if self.data[i] == value:
                self.remove(i)
                return True
        return False
    
    def get(self, index):
        """
        Retorna elemento na posição.
        
        Complexidade: O(1)
        
        Lança IndexError se índice inválido.
        """
        if index < 0 or index >= self.size:
            raise IndexError(f"Index {index} out of range")
        return self.data[index]
    
    def set(self, index, value):
        """
        Modifica elemento na posição.
        
        Complexidade: O(1)
        """
        if index < 0 or index >= self.size:
            raise IndexError(f"Index {index} out of range")
        self.data[index] = value
    
    def search(self, value):
        """
        Busca um valor no array.
        
        Complexidade: O(n)
        
        Returns:
            Índice do elemento ou -1 se não encontrado
        """
        for i in range(self.size):
            if self.data[i] == value:
                return i
        return -1
    
    def contains(self, value):
        """
        Verifica se um valor existe no array.
        
        Complexidade: O(n)
        """
        return self.search(value) != -1
    
    def clear(self):
        """
        Remove todos os elementos.
        
        Complexidade: O(1)
        """
        self.size = 0
    
    def is_empty(self):
        """Verifica se o array está vazio."""
        return self.size == 0
    
    def get_size(self):
        """Retorna número de elementos."""
        return self.size
    
    def get_capacity(self):
        """Retorna capacidade total."""
        return self.capacity
    
    def _resize(self):
        """
        Aumenta a capacidade quando necessário.
        
        Estratégia: dobra a capacidade
        Complexidade: O(n)
        """
        self.capacity *= 2
        new_data = [None] * self.capacity
        
        for i in range(self.size):
            new_data[i] = self.data[i]
        
        self.data = new_data
    
    def to_list(self):
        """Converte para lista Python."""
        return self.data[:self.size]
    
    def __str__(self):
        """Representação em string."""
        return f"DynamicArray({self.to_list()})"
    
    def __repr__(self):
        return self.__str__()
    
    def __getitem__(self, index):
        """Permite acesso com arr[index]."""
        return self.get(index)
    
    def __setitem__(self, index, value):
        """Permite atribuição com arr[index] = value."""
        self.set(index, value)
    
    def __len__(self):
        """Permite len(arr)."""
        return self.size
    
    def __iter__(self):
        """Permite iteração."""
        for i in range(self.size):
            yield self.data[i]


# ============================================================================
# EXEMPLO DE USO
# ============================================================================

if __name__ == "__main__":
    print("=" * 60)
    print("DYNAMIC ARRAY (VETOR DINÂMICO)")
    print("=" * 60)
    
    # 1. Operações básicas
    print("\n1. OPERAÇÕES BÁSICAS:")
    arr = DynamicArray()
    
    print("\n   Adicionando elementos (append):")
    for i in [10, 20, 30, 40, 50]:
        arr.append(i)
        print(f"   append({i}) → size={arr.get_size()}, capacity={arr.get_capacity()}")
    
    print(f"\n   Array: {arr}")
    
    # 2. Acesso
    print("\n" + "=" * 60)
    print("2. ACESSO POR ÍNDICE (O(1)):")
    print("=" * 60)
    
    print(f"\n   arr[0] = {arr[0]}")
    print(f"   arr[2] = {arr[2]}")
    print(f"   arr[4] = {arr[4]}")
    
    # 3. Busca
    print("\n" + "=" * 60)
    print("3. BUSCA (O(n)):")
    print("=" * 60)
    
    print(f"\n   Procurando 30: índice = {arr.search(30)}")
    print(f"   Procurando 100: índice = {arr.search(100)}")
    print(f"   Contém 40? {arr.contains(40)}")
    
    # 4. Inserção
    print("\n" + "=" * 60)
    print("4. INSERÇÃO (O(n)):")
    print("=" * 60)
    
    print(f"\n   Antes: {arr}")
    arr.insert(2, 25)  # Insere 25 no índice 2
    print(f"   insert(2, 25) → {arr}")
    arr.insert(0, 5)  # Insere 5 no início
    print(f"   insert(0, 5) → {arr}")
    
    # 5. Remoção
    print("\n" + "=" * 60)
    print("5. REMOÇÃO (O(n)):")
    print("=" * 60)
    
    print(f"\n   Antes: {arr}")
    removido = arr.remove(1)
    print(f"   remove(1) → removido {removido}, resultado: {arr}")
    arr.remove_value(25)
    print(f"   remove_value(25) → {arr}")
    
    # 6. Modificação
    print("\n" + "=" * 60)
    print("6. MODIFICAÇÃO (O(1)):")
    print("=" * 60)
    
    print(f"\n   Antes: {arr}")
    arr[0] = 100
    print(f"   arr[0] = 100 → {arr}")
    arr.set(3, 999)
    print(f"   set(3, 999) → {arr}")
    
    # 7. Redimensionamento
    print("\n" + "=" * 60)
    print("7. REDIMENSIONAMENTO AUTOMÁTICO:")
    print("=" * 60)
    
    arr2 = DynamicArray(capacity=3)
    print(f"\n   Array com capacity=3:")
    print(f"   Antes: size={arr2.get_size()}, capacity={arr2.get_capacity()}")
    
    for i in [1, 2, 3, 4, 5]:
        arr2.append(i)
        print(f"   append({i}) → size={arr2.get_size()}, capacity={arr2.get_capacity()}")
    
    print(f"   Array final: {arr2}")
    
    # 8. Iteração
    print("\n" + "=" * 60)
    print("8. ITERAÇÃO:")
    print("=" * 60)
    
    print(f"\n   Array: {arr2}")
    print("   Elementos:")
    for idx, val in enumerate(arr2):
        print(f"      [{idx}] = {val}")
    
    # 9. Comparação com List Python
    print("\n" + "=" * 60)
    print("9. PERFORMANCE COMPARADO COM LIST PYTHON:")
    print("=" * 60)
    
    import time
    
    # Dynamic Array
    start = time.time()
    da = DynamicArray()
    for i in range(100000):
        da.append(i)
    da_time = time.time() - start
    
    # Python List
    start = time.time()
    lst = []
    for i in range(100000):
        lst.append(i)
    list_time = time.time() - start
    
    print(f"\n   DynamicArray (100k appends): {da_time:.6f}s")
    print(f"   Python List (100k appends): {list_time:.6f}s")
    print(f"   (Python list é C-otimizado, DynamicArray é educacional)")
