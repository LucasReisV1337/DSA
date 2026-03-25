# -*- coding: utf-8 -*-


class CircularDeque:
    def __init__(self, capacity):
        self.capacity = capacity
        self.data = [None] * capacity
        self.front = 0
        self.size = 0

    def is_empty(self):
        return self.size == 0

    def is_full(self):
        return self.size == self.capacity

    def push_front(self, value):
        if self.is_full():
            raise OverflowError("deque cheia")
        self.front = (self.front - 1) % self.capacity
        self.data[self.front] = value
        self.size += 1

    def push_back(self, value):
        if self.is_full():
            raise OverflowError("deque cheia")
        index = (self.front + self.size) % self.capacity
        self.data[index] = value
        self.size += 1

    def pop_front(self):
        if self.is_empty():
            raise IndexError("deque vazia")
        value = self.data[self.front]
        self.data[self.front] = None
        self.front = (self.front + 1) % self.capacity
        self.size -= 1
        return value

    def pop_back(self):
        if self.is_empty():
            raise IndexError("deque vazia")
        index = (self.front + self.size - 1) % self.capacity
        value = self.data[index]
        self.data[index] = None
        self.size -= 1
        return value

    def snapshot(self):
        return [self.data[(self.front + i) % self.capacity] for i in range(self.size)]


if __name__ == "__main__":
    dq = CircularDeque(5)
    dq.push_back(10)
    dq.push_back(20)
    dq.push_front(5)
    print(dq.snapshot())
    print(dq.pop_back())
    print(dq.snapshot())
