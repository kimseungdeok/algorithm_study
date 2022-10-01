from sys import stdin

stdin = open('example.txt', 'r')

inputNum = int(stdin.readline().strip())
answer = []

for _ in range(inputNum):
    input = int(stdin.readline().strip())
    # print(input)
    if input != 0:
        answer.append(input)
    elif input == 0:
        answer.pop()

print(sum(answer))