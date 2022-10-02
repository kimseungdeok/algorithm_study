from sys import stdin

stdin = open('example.txt', 'r')

testCase = int(stdin.readline().strip())
sticks = []

for _ in range(testCase):
    sticks.append(int(stdin.readline().strip()))

sticks.reverse()

stack = [sticks[0]]
for stick in sticks:
    # print(stack)
    if stick > stack[-1]:
        stack.append(stick)

print(len(stack))

