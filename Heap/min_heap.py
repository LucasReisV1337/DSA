class MinHeap:
    def __init__(self):
        self.heap = []

    def _left_child(self, index):
        return 2 * index + 1
    
    def _right_child(self, index):
        return 2 * index + 2
    
    def _parent(self, index):
        return (index - 1) // 2
    
    def insert(self, value):
        self.heap.append(value)
        self._heapify_up(len(self.heap) - 1)
    def _heapify_up(self, index):
        while index > 0:
            parent_index = self._parent(index)
            if self.heap[index] < self.heap[parent_index]:
                self.heap[index], self.heap[parent_index] = self.heap[parent_index], self.heap[index]
                index = parent_index
            else:
                break
    def extract_min(self):
        if not self.heap:
            raise IndexError("Heap is empty")
        min_value = self.heap[0]
        last_value = self.heap.pop()
        if self.heap:
            self.heap[0] = last_value
            self._heapify_down(0)
        return min_value
    def _heapify_down(self, index):
        smallest = index
        left_index = self._left_child(index)
        right_index = self._right_child(index)

        if left_index < len(self.heap) and self.heap[left_index] < self.heap[smallest]:
            smallest = left_index
        if right_index < len(self.heap) and self.heap[right_index] < self.heap[smallest]:
            smallest = right_index
        if smallest != index:
            self.heap[index], self.heap[smallest] = self.heap[smallest], self.heap[index]
            self._heapify_down(smallest)
# Example usage:
min_heap = MinHeap()
min_heap.insert(5)
min_heap.insert(3)
min_heap.insert(8)
print(min_heap.extract_min())  # Output: 3
print(min_heap.extract_min())  # Output: 5
print(min_heap.extract_min())  # Output: 8
