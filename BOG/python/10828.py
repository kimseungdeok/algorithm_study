from sys import stdin

stdin = open('example.txt', 'r')

inputNum = int(stdin.readline().strip())
answer = []

for _ in range(inputNum):
    input = stdin.readline().strip().split()
    # print(input)
    if input[0] == 'push':
        answer.append(input[1])
    elif input[0] == 'pop':
        if len(answer) > 0:
            print(answer[len(answer)-1])
            answer.pop(len(answer)-1)
        else :
            print(-1)
    elif input[0] == 'size':
        print(len(answer))
    elif input[0] == 'empty':
        if len(answer) == 0:
            print(1)
        else :
            print(0)
    elif input[0] == 'top':
        if len(answer) > 0:
            print(answer[len(answer)-1])
        else :
            print(-1)
    