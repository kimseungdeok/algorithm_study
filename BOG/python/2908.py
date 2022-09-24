import sys

sys.stdin = open('example.txt', 'r')

nums = input().split(' ')

reverseNumArr = []

for num in nums:
    numArr = list(num)
    numArr.reverse()
    reverseNum = ''.join(n for n in numArr)
    reverseNumArr.append(reverseNum) 

print(max(list(map(int, reverseNumArr))))
