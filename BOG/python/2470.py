# 5
# -2 4 -99 -1 98

from sys import stdin

stdin = open('example.txt', 'r')

N = int(stdin.readline().strip())
liquid = list(map(int, stdin.readline().split()))
liquid.sort() # [-99, -2, -1, 4, 98]
# print(liquid)

left = 0
right = N-1

answer = abs(liquid[left] + liquid[right])
final = [liquid[left], liquid[right]]

while left < right :
    left_val = liquid[left]
    right_val = liquid[right]
    
    sum = left_val + right_val
    
    if abs(sum) < answer:
        answer = abs(sum)
        final = [left_val, right_val]
        # 0이면 문제에서 요구하는 가장 이상적인 값이므로 정지
        if answer == 0:
            break
    if sum < 0:
        left += 1
    else:
        right -= 1

print(final[0], final[1])