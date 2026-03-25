"""
Deque (Double-Ended Queue) - DEQue: Fila de Duas Pontas

Um deque permite inserção e remoção de elementos em ambas as extremidades.
Combina funções de Stack e Queue simultaneamente.

Operações principais:
- push_front(x): adiciona no início - O(1)
- push_back(x): adiciona no final - O(1)
- pop_front(): remove do início - O(1)
- pop_back(): remove do final - O(1)
- front(): acessa primeiro elemento - O(1)
- back(): acessa último elemento - O(1)
- isEmpty(): verifica se vazio - O(1)
- size(): tamanho do deque - O(1)

Casos de uso: Sliding Window, Monotonic Deque, Undo/Redo
"""

from collections import deque as python_deque


class Deque:
    """Implementação de Deque usando collections.deque do Python."""
    
    def __init__(self):
        """Inicializa deque vazio."""
        self.items = python_deque()
    
    # Operações no INÍCIO (front)
    # ============================
    
    def push_front(self, item):
        """
        Adiciona item no início do deque.
        
        Complexidade: O(1)
        """
        self.items.appendleft(item)
    
    def pop_front(self):
        """
        Remove e retorna o primeiro item do deque.
        
        Complexidade: O(1)
        Lança IndexError se o deque estiver vazio.
        """
        if self.is_empty():
            raise ValueError("Cannot pop from empty deque")
        return self.items.popleft()
    
    def front(self):
        """
        Acessa o primeiro item sem remover.
        
        Complexidade: O(1)
        Lança ValueError se o deque estiver vazio.
        """
        if self.is_empty():
            raise ValueError("Deque is empty")
        return self.items[0]
    
    # Operações no FINAL (back)
    # ==========================
    
    def push_back(self, item):
        """
        Adiciona item no final do deque.
        
        Complexidade: O(1)
        """
        self.items.append(item)
    
    def pop_back(self):
        """
        Remove e retorna o último item do deque.
        
        Complexidade: O(1)
        Lança ValueError se o deque estiver vazio.
        """
        if self.is_empty():
            raise ValueError("Cannot pop from empty deque")
        return self.items.pop()
    
    def back(self):
        """
        Acessa o último item sem remover.
        
        Complexidade: O(1)
        Lança ValueError se o deque estiver vazio.
        """
        if self.is_empty():
            raise ValueError("Deque is empty")
        return self.items[-1]
    
    # Operações gerais
    # =================
    
    def is_empty(self):
        """
        Verifica se o deque está vazio.
        
        Complexidade: O(1)
        """
        return len(self.items) == 0
    
    def size(self):
        """
        Retorna o número de elementos no deque.
        
        Complexidade: O(1)
        """
        return len(self.items)
    
    def __str__(self):
        """Representação em string do deque."""
        return f"Deque({list(self.items)})"
    
    def __repr__(self):
        return self.__str__()
    
    def __iter__(self):
        """Permite iteração sobre o deque."""
        return iter(self.items)


class MonotonicDeque:
    """
    Deque Monotônico para problemas de Sliding Window.
    
    Mantém índices de elementos em ordem decrescente de valores.
    Útil para encontrar máximos/mínimos em subarrays eficientemente.
    
    Exemplo de uso:
        - Sliding Window Maximum
        - Sliding Window Minimum
        - Problemas com "máximo de cada janela"
    """
    
    def __init__(self, max_window_size=0):
        """Inicializa deque monotônico."""
        self.dq = python_deque()  # Armazena (índice, valor)
        self.window_size = max_window_size
    
    def add(self, index, value):
        """
        Adiciona novo elemento mantendo ordem monotônica.
        Remove elementos fora da janela e menores que o novo.
        
        Complexidade: O(1) amortizado
        """
        # Remove elementos fora da janela (esquerda)
        if self.dq and self.dq[0][0] < index - self.window_size + 1:
            self.dq.popleft()
        
        # Remove elementos menores da direita (mantém monotônico decrescente)
        while self.dq and self.dq[-1][1] < value:
            self.dq.pop()
        
        # Adiciona novo elemento
        self.dq.append((index, value))
    
    def get_max(self):
        """
        Retorna o máximo da janela atual.
        
        Complexidade: O(1)
        """
        if self.dq:
            return self.dq[0][1]  # Primeiro sempre é o máximo
        return None
    
    def get_front_index(self):
        """Retorna o índice do máximo."""
        if self.dq:
            return self.dq[0][0]
        return None


# ============================================================================
# EXEMPLO DE USO
# ============================================================================

if __name__ == "__main__":
    print("=" * 60)
    print("DEQUE (Double-Ended Queue) - Fila de Duas Pontas")
    print("=" * 60)
    
    # 1. Operações básicas
    print("\n1. OPERAÇÕES BÁSICAS:")
    dq = Deque()
    
    print("\n   Adicionando elementos:")
    dq.push_back(30)
    dq.push_front(10)
    dq.push_back(40)
    dq.push_front(5)
    print(f"   Deque após operações: {dq}")
    
    print("\n   Acessando extremidades:")
    print(f"   Frente (front): {dq.front()}")
    print(f"   Trás (back): {dq.back()}")
    print(f"   Tamanho: {dq.size()}")
    
    print("\n   Removendo elementos:")
    print(f"   pop_front() → {dq.pop_front()}, deque: {dq}")
    print(f"   pop_back() → {dq.pop_back()}, deque: {dq}")
    print(f"   pop_front() → {dq.pop_front()}, deque: {dq}")
    print(f"   pop_back() → {dq.pop_back()}, deque: {dq}")
    
    # 2. Stack (usar como pilha)
    print("\n" + "=" * 60)
    print("2. DEQUE COMO STACK (LIFO):")
    print("=" * 60)
    
    stack_dq = Deque()
    print("\n   Empilhando (push_back): 1, 2, 3, 4, 5")
    for i in [1, 2, 3, 4, 5]:
        stack_dq.push_back(i)
    print(f"   {stack_dq}")
    
    print("\n   Desempilhando (pop_back):")
    while not stack_dq.is_empty():
        print(f"   pop_back() → {stack_dq.pop_back()}")
    
    # 3. Queue (usar como fila)
    print("\n" + "=" * 60)
    print("3. DEQUE COMO QUEUE (FIFO):")
    print("=" * 60)
    
    queue_dq = Deque()
    print("\n   Enfileirando (push_back): A, B, C, D, E")
    for letra in ['A', 'B', 'C', 'D', 'E']:
        queue_dq.push_back(letra)
    print(f"   {queue_dq}")
    
    print("\n   Desenfileirando (pop_front):")
    while not queue_dq.is_empty():
        print(f"   pop_front() → {queue_dq.pop_front()}")
    
    # 4. Sliding Window Maximum exemplo
    print("\n" + "=" * 60)
    print("4. MONOTONIC DEQUE - Sliding Window Maximum:")
    print("=" * 60)
    
    arr = [1, 3, 1, 2, 0, 5]
    k = 3  # Tamanho da janela
    
    print(f"\n   Array: {arr}")
    print(f"   Tamanho da janela: {k}")
    print(f"\n   Máximos de cada janela:")
    
    mono_dq = MonotonicDeque(k)
    result = []
    
    for i, val in enumerate(arr):
        mono_dq.add(i, val)
        
        # Só processar quando temos janela completa
        if i >= k - 1:
            max_val = mono_dq.get_max()
            result.append(max_val)
            start = i - k + 1
            end = i
            print(f"   Janela [{start}:{end+1}] = {arr[start:end+1]} → Máximo = {max_val}")
    
    print(f"\n   Resultado: {result}")
