class Solution:
    def firstUniqChar(self, s: str) -> int:
        char_count = {}
        for idx, char in enumerate(s):
            if not char_count.get(char):
                char_count[char] = [idx, 1]
            else:
                char_count[char][1] += 1

        for char, value in char_count.items():
            if value[1] == 1:
                return value[0]
            
        return -1