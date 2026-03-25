class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
node_7 = Node(7)
node_3 = Node(3)
node_5 = Node(5)
node_7.next = node_3
node_3.next = node_5

def findMiddle(head):
    slow = head
    fast = head.next

    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow


def merge(l1, l2):
    head = Node()
    tail = head

    while l1 and l2:
        if l1.value < l2.value:
            tail.next = l1
            l1 = l1.next
        else:
            tail.next = l2
            l2 = l2.next
        tail = tail.next
    tail.next = l1 if l1 else l2
    return head.next    


def mergeSort(head):
    if not head or not head.next:
        return head

    middle = findMiddle(head)
    nextToMiddle = middle.next
    middle.next = None

    leftHalf = mergeSort(head)
    rightHalf = mergeSort(nextToMiddle)

    sortedList = merge(leftHalf, rightHalf)
    return sortedList



sorted_head = mergeSort(node_7)
current = sorted_head
while current:
    print(current.value)  # Deve imprimir os valores em ordem: 3, 5, 7
    current = current.next
#Complexidade de tempo: O(n log n) - O algoritmo de ordenação por mescla tem uma complexidade de tempo média de O(n log n) devido à divisão recursiva da lista e à comparação dos elementos durante a fase de mesclagem.
#Complexidade de espaço: O(n) - O algoritmo de ordenação por mescla tem uma complexidade de espaço de O(n) devido à necessidade de criar listas temporárias para armazenar os elementos durante a fase de mesclagem, embora a complexidade de espaço possa ser otimizada para O(1) usando uma abordagem de mesclagem in-place.