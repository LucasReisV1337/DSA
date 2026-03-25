# -*- coding: utf-8 -*-


class MinPriorityQueue:
    def __init__(self):
        self.data = []

    def _parent(self, index):
        return (index - 1) // 2

    def _left(self, index):
        return 2 * index + 1

    def _right(self, index):
        return 2 * index + 2

    def push(self, value):
        self.data.append(value)
        self._sift_up(len(self.data) - 1)

    def _sift_up(self, index):
        while index > 0:
            parent = self._parent(index)
            if self.data[parent] <= self.data[index]:
                break
            self.data[parent], self.data[index] = self.data[index], self.data[parent]
            index = parent

    def pop(self):
        if not self.data:
            raise IndexError("heap vazia")
        root = self.data[0]
        last = self.data.pop()
        if self.data:
            self.data[0] = last
            self._sift_down(0)
        return root

    def _sift_down(self, index):
        size = len(self.data)
        while True:
            left = self._left(index)
            right = self._right(index)
            smallest = index
            if left < size and self.data[left] < self.data[smallest]:
                smallest = left
            if right < size and self.data[right] < self.data[smallest]:
                smallest = right
            if smallest == index:
                break
            self.data[index], self.data[smallest] = self.data[smallest], self.data[index]
            index = smallest

    def peek(self):
        if not self.data:
            raise IndexError("heap vazia")
        return self.data[0]


if __name__ == "__main__":
    pq = MinPriorityQueue()
    for value in [5, 3, 9, 1, 4]:
        pq.push(value)
    print(pq.peek())
    print(pq.pop())
    print(pq.data)
