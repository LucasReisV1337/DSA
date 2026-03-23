class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        slow = head
        fast = head

        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        return slow  # Slow will be at the middle node when fast reaches the end

#Exemplo de uso
# Criando uma lista encadeada: 1 -> 2 -> 3 -> 4 -> 5
head = ListNode(1)
head.next = ListNode(2)
head.next.next = ListNode(3)
head.next.next.next = ListNode(4)
head.next.next.next.next = ListNode(5)
solution = Solution()
middle_node = solution.middleNode(head)
# Imprimindo o valor do nó do meio: 3
print(middle_node.val)


#Complexidade de tempo: O(n) - O algoritmo percorre a lista encadeada uma vez para encontrar o nó do meio.
#Complexidade de espaço: O(1) - O algoritmo utiliza apenas um número constante de