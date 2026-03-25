class Solution:
    def numDecodings(self, s: str) -> int:
        if not s or s[0] == '0':
            return 0
        
        n = len(s)
        dp = [0] * (n + 1)
        dp[0] = 1
        dp[1] = 1
        
        for i in range(2, n + 1):
            if s[i - 1] != '0':
                dp[i] += dp[i - 1]
            two_digit = int(s[i - 2:i])
            if 10 <= two_digit <= 26:
                dp[i] += dp[i - 2]
        
        return dp[n]


# Example usage:
s = "226"
solution = Solution()
print(solution.numDecodings(s))  # Output: 3 (BZ, VF, BBF)
s = "0"
print(solution.numDecodings(s))  # Output: 0 (no valid decodings)
s = "06"
print(solution.numDecodings(s))  # Output: 0 (no valid decodings)