class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
       q = collections.deque()
       q.append(root)
       res = []
       while q:
            level = []
            for i in range(len(q)):
                node = q.popleft()
                if node:
                    level.append(node.val)
                    if node.left:
                        q.append(node.left)
                    if node.right:
                        q.append(node.right)
            if level:
                res.append(level)

         return res

        #bfs

