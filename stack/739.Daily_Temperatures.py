class Solution:
    def dailyTemperatures(self, T: List[int]) -> List[int]:
        stack = []
        result = [0] * len(T)
        
        for i, temp in enumerate(T):
            while stack and temp > T[stack[-1]]:
                prev_index = stack.pop()
                result[prev_index] = i - prev_index
            stack.append(i)
        
        return result

# Example usage:
T = [73, 74, 75, 71, 69, 72, 76, 73]
solution = Solution()
print(solution.dailyTemperatures(T))  # Output: [1, 1, 4, 2, 1, 1, 0, 0]
 
