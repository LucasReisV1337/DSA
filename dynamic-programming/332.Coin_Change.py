class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        dp = [float('inf')] * (amount + 1)
        dp[0] = 0
        
        for coin in coins:
            for x in range(coin, amount + 1):
                dp[x] = min(dp[x], dp[x - coin] + 1)
        
        return dp[amount] if dp[amount] != float('inf') else -1


# Example usage:
coins = [1, 2, 5]
amount = 11
solution = Solution()
print(solution.coinChange(coins, amount))  # Output: 3 (11 = 5 + 5 + 1)
coins = [2]
amount = 3
print(solution.coinChange(coins, amount))  # Output: -1 (not possible to make amount 3 with coin 2)
coins = [1]
amount = 0
print(solution.coinChange(coins, amount))  # Output: 0 (0 coins needed to make amount 0)