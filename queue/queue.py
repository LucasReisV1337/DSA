"""
Queue (Fila) - FIFO: First In, First Out

Uma fila é uma estrutura de dados linear que segue o princípio FIFO.
O primeiro elemento a entrar é o primeiro a sair.

Operações principais:
- enqueue(x): adiciona no final - O(1)
- dequeue(): remove do início - O(1)
- front(): acessa primeiro elemento - O(1)
- isEmpty(): verifica se vazia - O(1)
- size(): tamanho da fila - O(1)
"""

from collections import deque as python_deque


class Queue:
    """Implementação de Fila usando lista Python."""
    
    def __init__(self):
        """Inicializa fila vazia."""
        self.items = []
    
    def enqueue(self, item):
        """
        Adiciona item no final da fila.
        Complexidade: O(1) amortizado
        """
        self.items.append(item)
    
    def dequeue(self):
        """
        Remove e retorna o primeiro item da fila.
        Complexidade: O(n) ⚠️ - remove do início é caro em listas
        
        Lança ValueError se a fila estiver vazia.
        """
        if self.is_empty():
            raise ValueError("Cannot dequeue from empty queue")
        return self.items.pop(0)
    
    def front(self):
        """
        Acessa o primeiro item sem remover.
        Complexidade: O(1)
        
        Lança ValueError se a fila estiver vazia.
        """
        if self.is_empty():
            raise ValueError("Queue is empty")
        return self.items[0]
    
    def is_empty(self):
        """
        Verifica se a fila está vazia.
        Complexidade: O(1)
        """
        return len(self.items) == 0
    
    def size(self):
        """
        Retorna o número de elementos na fila.
        Complexidade: O(1)
        """
        return len(self.items)
    
    def __str__(self):
        """Representação em string da fila."""
        return f"Queue({self.items})"
    
    def __repr__(self):
        return self.__str__()


class OptimizedQueue:
    """
    Implementação otimizada de Fila usando collections.deque.
    
    deque (double-ended queue) em Python é mais eficiente:
    - enqueue: O(1)
    - dequeue: O(1) ✓ - popleft é O(1), não O(n)
    """
    
    def __init__(self):
        """Inicializa fila vazia usando deque."""
        self.items = python_deque()
    
    def enqueue(self, item):
        """
        Adiciona item no final da fila.
        Complexidade: O(1)
        """
        self.items.append(item)
    
    def dequeue(self):
        """
        Remove e retorna o primeiro item da fila.
        Complexidade: O(1) - popleft de deque é constante
        
        Lança IndexError se a fila estiver vazia.
        """
        if self.is_empty():
            raise ValueError("Cannot dequeue from empty queue")
        return self.items.popleft()
    
    def front(self):
        """
        Acessa o primeiro item sem remover.
        Complexidade: O(1)
        """
        if self.is_empty():
            raise ValueError("Queue is empty")
        return self.items[0]
    
    def is_empty(self):
        """
        Verifica se a fila está vazia.
        Complexidade: O(1)
        """
        return len(self.items) == 0
    
    def size(self):
        """
        Retorna o número de elementos na fila.
        Complexidade: O(1)
        """
        return len(self.items)
    
    def __str__(self):
        """Representação em string da fila."""
        return f"OptimizedQueue({list(self.items)})"
    
    def __repr__(self):
        return self.__str__()


# ============================================================================
# EXEMPLO DE USO
# ============================================================================

if __name__ == "__main__":
    print("=" * 60)
    print("FILA (QUEUE) - FIFO: First In, First Out")
    print("=" * 60)
    
    # Criar fila
    q = OptimizedQueue()
    
    print("\n1. Adicionando elementos (enqueue):")
    for i in [10, 20, 30, 40, 50]:
        q.enqueue(i)
        print(f"   enqueue({i}) → {q}")
    
    print(f"\n2. Tamanho da fila: {q.size()}")
    print(f"   Primeiro elemento: {q.front()}")
    
    print("\n3. Removendo elementos (dequeue):")
    while not q.is_empty():
        item = q.dequeue()
        print(f"   dequeue() → {item}, fila restante: {q}")
    
    print(f"\n4. Fila vazia? {q.is_empty()}")
    
    # Simular fila de atendimento
    print("\n" + "=" * 60)
    print("EXEMPLO: Fila de Atendimento (Service Queue)")
    print("=" * 60)
    
    service_queue = OptimizedQueue()
    customers = ["Alice", "Bob", "Carlos", "Diana"]
    
    print("\n📋 Clientes entrando na fila:")
    for customer in customers:
        service_queue.enqueue(customer)
        print(f"   {customer} entrou na fila → {service_queue}")
    
    print(f"\n👤 Próximo cliente a ser atendido: {service_queue.front()}")
    
    print("\n🎫 Atendendo clientes:")
    while not service_queue.is_empty():
        customer = service_queue.dequeue()
        print(f"   Atendendo {customer}... fila: {service_queue}")
    
    print("\n✅ Todos os clientes foram atendidos!")
