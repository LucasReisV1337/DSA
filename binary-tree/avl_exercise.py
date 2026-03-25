# -*- coding: utf-8 -*-


class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
        self.height = 1



def height(node):
    return node.height if node else 0



def update_height(node):
    node.height = 1 + max(height(node.left), height(node.right))



def balance_factor(node):
    return height(node.left) - height(node.right) if node else 0



def rotate_right(y):
    x = y.left
    t2 = x.right
    x.right = y
    y.left = t2
    update_height(y)
    update_height(x)
    return x



def rotate_left(x):
    y = x.right
    t2 = y.left
    y.left = x
    x.right = t2
    update_height(x)
    update_height(y)
    return y



def insert(node, value):
    if node is None:
        return Node(value)
    if value < node.value:
        node.left = insert(node.left, value)
    elif value > node.value:
        node.right = insert(node.right, value)
    else:
        return node

    update_height(node)
    balance = balance_factor(node)

    if balance > 1 and value < node.left.value:
        return rotate_right(node)
    if balance < -1 and value > node.right.value:
        return rotate_left(node)
    if balance > 1 and value > node.left.value:
        node.left = rotate_left(node.left)
        return rotate_right(node)
    if balance < -1 and value < node.right.value:
        node.right = rotate_right(node.right)
        return rotate_left(node)

    return node



def inorder(node):
    return inorder(node.left) + [node.value] + inorder(node.right) if node else []


if __name__ == "__main__":
    root = None
    for value in [30, 50, 90, 10, 20, 40]:
        root = insert(root, value)
    print(inorder(root))
