# -*- coding: utf-8 -*-


class SecondaryKeyIndex:
    def __init__(self):
        self.index = {}

    def add(self, record, secondary_key):
        self.index.setdefault(secondary_key, []).append(record)

    def search(self, secondary_key):
        return self.index.get(secondary_key, [])


if __name__ == "__main__":
    index = SecondaryKeyIndex()
    index.add({"id": 1, "name": "Ana"}, "A")
    index.add({"id": 2, "name": "Arthur"}, "A")
    index.add({"id": 3, "name": "Bruna"}, "B")
    print(index.search("A"))
