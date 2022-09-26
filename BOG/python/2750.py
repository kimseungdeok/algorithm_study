import sys

sys.stdin = open('example.txt', 'r')

input = sys.stdin.read().split()

testCase = int(input[0])
input.pop(0)

nums = list(map(int, input))

result = []

# print(nums)
for i in range(testCase):
    result.append(min(nums))
    nums.remove(min(nums))

for num in result:
    print(num)
    
    