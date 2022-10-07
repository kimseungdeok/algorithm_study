from sys import stdin

# 7
# A B C
# B D .
# C E F
# E . .
# F . G
# D . .
# G . .
stdin = open('example.txt','r')

input = stdin.readline
N = int(input())
tree = {}
for _ in range(N):
    root, left, right = input().split()
    tree[root] = [left, right]

# print(tree)

def preorder(root):
    if root != '.':
        print(root, end='')
        preorder(tree[root][0])
        preorder(tree[root][1])

def inorder(root):
    if root != '.':
        inorder(tree[root][0])
        print(root, end='')
        inorder(tree[root][1])

def postorder(root):
    if root != '.':
        postorder(tree[root][0])
        postorder(tree[root][1])
        print(root, end='')

preorder('A')
print()
inorder('A')
print()
postorder('A')
