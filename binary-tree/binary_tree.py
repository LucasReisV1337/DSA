from collections import deque

class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinaryTree:
    def __init__(self):
        self.root = None

    def insert(self, value):
        if self.root is None:
            self.root = Node(value)
        else:
            self._insert_recursive(self.root, value)

    def _insert_recursive(self, current_node, value):
        if value < current_node.value:
            if current_node.left is None:
                current_node.left = Node(value)
            else:
                self._insert_recursive(current_node.left, value)
        else:
            if current_node.right is None:
                current_node.right = Node(value)
            else:
                self._insert_recursive(current_node.right, value)
    def search(self, value):
        return self._search_recursive(self.root, value)

    def _search_recursive(self, current_node, value):
        if current_node is None:
            return False
        if current_node.value == value:
            return True
        elif value < current_node.value:
            return self._search_recursive(current_node.left, value)
        else:
            return self._search_recursive(current_node.right, value)

    def inorder_traversal(self):
        return self._inorder_recursive(self.root)

    def _inorder_recursive(self, node):
        result = []
        if node is not None:
            result.extend(self._inorder_recursive(node.left))
            result.append(node.value)
            result.extend(self._inorder_recursive(node.right))
        return result

    def preorder_traversal(self):
        return self._preorder_recursive(self.root)

    def _preorder_recursive(self, node):
        result = []
        if node is not None:
            result.append(node.value)
            result.extend(self._preorder_recursive(node.left))
            result.extend(self._preorder_recursive(node.right))
        return result

    def postorder_traversal(self):
        return self._postorder_recursive(self.root)
    
    def _postorder_recursive(self, node):
        result = []
        if node is not None:
            result.extend(self._postorder_recursive(node.left))
            result.extend(self._postorder_recursive(node.right))
            result.append(node.value)
        return result

    def bfs(self, data):
        if self.root is None:
            return False
        
        queue = deque([self.root])
        
        while queue:
            current_node = queue.popleft()
            if current_node.value == data:
                return True
            if current_node.left:
                queue.append(current_node.left)
            if current_node.right:
                queue.append(current_node.right)
        
        return False
    

    def _dfs_recursive(self, node, data):
        if node is None:
            return False
        if node.value == data:
            return True
        return self._dfs_recursive(node.left, data) or self._dfs_recursive(node.right, data)
    
    def dfs(self, data):
        return self._dfs_recursive(self.root, data)


tree = BinaryTree()
tree.insert(5)
tree.insert(3)
tree.insert(7)
tree.insert(2)
tree.insert(4)
tree.insert(6)
tree.insert(8)



print(tree.search(4))  # Output: True
print(tree.search(10)) # Output: False
print(tree.inorder_traversal())  # Output: [2, 3, 4, 5, 6, 7, 8]
print(tree.preorder_traversal()) # Output: [5, 3, 2, 4, 7, 6, 8]
print(tree.postorder_traversal()) # Output: [2, 4, 3, 6, 8, 7, 5]
print(tree.bfs(4))  # Output: True
print(tree.bfs(10)) # Output: False
print(tree.dfs(4))  # Output: True
print(tree.dfs(10)) # Output: False