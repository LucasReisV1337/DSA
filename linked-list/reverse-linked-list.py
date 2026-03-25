class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev = None
        current = head

        while current:
            next_node = current.next  # Store the next node
            current.next = prev       # Reverse the link
            prev = current            # Move prev to the current node
            current = next_node       # Move to the next node

        return prev  # At the end, prev will be the new head of the reversed list

#Exemplo de uso

# Criando uma lista encadeada: 1 -> 2 -> 3 -> 4 -> 5
head = ListNode(1)
head.next = ListNode(2)
head.next.next = ListNode(3)
head.next.next.next = ListNode(4)
head.next.next.next.next = ListNode(5)
solution = Solution()
reversed_head = solution.reverseList(head)
# Imprimindo a lista encadeada reversa: 5 -> 4 -> 3 -> 2 -> 1
current = reversed_head
while current:
    print(current.val, end=' ')
    current = current.next
#Complexidade de tempo: O(n) - O algoritmo percorre a lista encadeada uma vez para inverter os links entre os nós.
#Complexidade de espaço: O(1) - O algoritmo utiliza apenas um número constante de variáveis para armazenar os ponteiros, independentemente do tamanho da lista encadeada.



