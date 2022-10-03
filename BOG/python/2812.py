from sys import stdin

stdin = open('example.txt', 'r')

n, k = map(int, stdin.readline().split())
num = list(map(int, stdin.readline().strip()))
stack = []

del_num = k

for i in range(n):
    while del_num > 0 and stack:
        if stack[len(stack)-1] < num[i]:
            stack.pop()
            del_num -= 1

        else:
            break

    stack.append(num[i])

result = ""
for i in range(n - k):
    result += str(stack[i])
    
print(result)