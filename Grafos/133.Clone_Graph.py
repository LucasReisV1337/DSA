from typing import Optional

class Solution:
    def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:
        if not node:
            return None
        
        q = deque([node])

        clones = {}
        clones[node.val] = Node(node.val, [])

        while q:
            curr = q.popleft()

            for neighbor in curr.neighbors:
                if neighbor.val not in clones:
                    clones[neighbor.val] = Node(neighbor.val, [])
                    q.append(neighbor)
                clones[curr.val].neighbors.append(clones[neighbor.val])

        return clones[node.val]


# https://leetcode.com/problems/clone-graph/description/