class LRUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = {}
        self.order = []

    def get(self, key: int) -> int:
        if key in self.cache:
            # Move the accessed key to the end to show that it was recently used
            self.order.remove(key)
            self.order.append(key)
            return self.cache[key]
        return -1

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            # Update the value and move the key to the end
            self.cache[key] = value
            self.order.remove(key)
            self.order.append(key)
        else:
            if len(self.cache) >= self.capacity:
                # Remove the least recently used item
                lru_key = self.order.pop(0)
                del self.cache[lru_key]
            # Add the new key-value pair
            self.cache[key] = value
            self.order.append(key)

# Example usage:
lru_cache = LRUCache(2)
lru_cache.put(1, 1)  # Cache is {1=1}
lru_cache.put(2, 2)  # Cache is {1=1,
lru_cache.get(1))    # Returns 1, Cache is {2=2, 1=1}
lru_cache.put(3, 3)  # Evicts key 2, Cache
lru_cache.get(2))    # Returns -1 (not found)
lru_cache.put(4, 4)  # Evicts key 3, Cache
lru_cache.get(3))    # Returns -1 (not found)
lru_cache.get(4))    # Returns 4, Cache is {1=1
