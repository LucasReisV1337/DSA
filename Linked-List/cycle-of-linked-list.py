class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        slow = head
        fast = head

        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

            if slow == fast:
                return True

        return False  # If we exit the loop, there is no cycle

#Exemplo de uso
# Criando uma lista encadeada com ciclo: 1 -> 2 -> 3
head = ListNode(1)
second = ListNode(2)
third = ListNode(3)
head.next = second
second.next = third
third.next = second  # Criando o ciclo
solution = Solution()
print(solution.hasCycle(head))  # Deve retornar True
# Criando uma lista encadeada sem ciclo: 1 -> 2 -> 3
head2 = ListNode(1)
second2 = ListNode(2)
third2 = ListNode(3)
head2.next = second2
second2.next = third2
solution2 = Solution()
print(solution2.hasCycle(head2))  # Deve retornar False
#Complexidade de tempo: O(n) - O algoritmo percorre a lista encadeada no máximo uma vez para determinar se há um ciclo.
#Complexidade de espaço: O(1) - O algoritmo utiliza apenas um número constante de variáveis para os ponteiros, independentemente do tamanho da lista encadeada.
