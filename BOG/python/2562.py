import sys

sys.stdin = open('example.txt', 'r')

input = list(map(int, sys.stdin.read().splitlines()))

print(max(input))
print(input.index(max(input))+1)