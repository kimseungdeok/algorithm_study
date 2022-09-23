import sys

sys.stdin = open('example.txt', 'r')

# input = sys.stdin.readline().split('\n')

NandX = input().split()
n = NandX[0]
x = int(NandX[1])
nums = list(map(int, input().split()))
# print(type(nums[2]))

for i in nums:
    if(i < x):
        print(i, end=' ')

