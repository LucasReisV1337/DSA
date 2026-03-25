class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None

class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def add_to_front(self, data):
    new_node = Node(data)
    new_node.next = self.head
    if self.head:
        self.head.prev = new_node
    else:
        self.tail = new_node
    self.head = new_node
    
    def add_to_end(self, data):
        new_node = Node(data)
        new_node.prev = self.tail
        if self.tail:
            self.tail.next = new_node
        else:
            self.head = new_node
        self.tail = new_node

    def remove_from_front(self):
        if not self.head:
            return None
        removed_data = self.head.data
        self.head = self.head.next
        if self.head:
            self.head.prev = None
        else:
            self.tail = None
        return removed_data
    
    def remove_from_end(self):
        if not self.tail:
            return None
        removed_data = self.tail.data
        self.tail = self.tail.prev
        if self.tail:
            self.tail.next = None
        else:
            self.head = None
        return removed_data
   
    def display(self):
        current = self.head
        while current:
            print(current.data, end=' ')
            current = current.next
        print()


# Exemplo de uso
dll = DoublyLinkedList()
dll.add_to_end(1)
dll.add_to_end(2)
dll.add_to_end(3)
dll.display()  # Output: 1 2 3
dll.add_to_front(0)
dll.display()  # Output: 0 1 2 3
dll.remove_from_front()
dll.display()  # Output: 1 2 3
dll.remove_from_end()
dll.display()  # Output: 1 2

#Complexidade de tempo: O(1) para as operações de adição e remoção, pois elas envolvem apenas a manipulação de ponteiros. A operação de exibição tem complexidade O(n), onde n é o número de nós na lista, pois é necessário percorrer toda a lista para exibir os elementos.
#Complexidade de espaço: O(n) - O algoritmo utiliza espaço proporcional ao número de nós na lista, pois cada nó armazena um valor e ponteiros para os nós adjacentes.