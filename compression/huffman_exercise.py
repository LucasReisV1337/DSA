# -*- coding: utf-8 -*-

from collections import Counter
from heapq import heappush, heappop


class Node:
    def __init__(self, frequency, symbol=None, left=None, right=None):
        self.frequency = frequency
        self.symbol = symbol
        self.left = left
        self.right = right

    def __lt__(self, other):
        return self.frequency < other.frequency



def build_tree(text):
    heap = []
    for symbol, frequency in Counter(text).items():
        heappush(heap, Node(frequency, symbol))

    while len(heap) > 1:
        left = heappop(heap)
        right = heappop(heap)
        heappush(heap, Node(left.frequency + right.frequency, None, left, right))

    return heap[0] if heap else None



def build_codes(node, prefix="", codes=None):
    if codes is None:
        codes = {}
    if node is None:
        return codes
    if node.symbol is not None:
        codes[node.symbol] = prefix or "0"
        return codes
    build_codes(node.left, prefix + "0", codes)
    build_codes(node.right, prefix + "1", codes)
    return codes


if __name__ == "__main__":
    text = "arvore de huffman"
    root = build_tree(text)
    codes = build_codes(root)
    encoded = "".join(codes[ch] for ch in text)
    print(codes)
    print(encoded)
