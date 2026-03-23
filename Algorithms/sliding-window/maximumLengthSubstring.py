class Solution:
    def maximumLengthSubstring(self, s: str) -> int:
        left = 0
        right = 0
        max_length = 0
        counter = {}
        counter[s[0]] = 1

        while r < len(s) -1:
            right += 1
            if counter.get(s[right], 0) == 0:
                counter[s[right]] = 1
            else:
                counter[s[right]] += 1

            while counter[s[right]] == 3:
                counter[s[left]] -= 1
                left += 1
            max_length = max(max_length, right - left + 1)
        return max_length

#Complexidade de tempo: O(n) - O algoritmo percorre a string s uma vez para encontrar o comprimento da maior substring sem caracteres repetidos.
#Complexidade de espaço: O(1) - O algoritmo utiliza um dicionário para

solution = Solution()
print(solution.maximumLengthSubstring("abcabcbb"))