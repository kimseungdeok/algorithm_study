# 예제 입력
# (()[[]])([])
from sys import stdin

stdin = open('example.txt', 'r')

bracket = list(stdin.readline().strip())

stack = []
answer = 0
tmp = 1

for i in range(len(bracket)):

    if bracket[i] == '(':
        stack.append(bracket[i])
        tmp *= 2
    elif bracket[i] == '[':
        stack.append(bracket[i])
        tmp *= 3
    elif bracket[i] == ')':
        # 닫는 소괄호일때 이전 요소가 뭔지 확인하는것
        # "]"을 검증 안하는 이유는 stack이라는 배열에는 여는 괄호만 들어가기 때문
        if not stack or stack[-1] == '[': 
            # 괄호가 쌍이 안맞으면 0이어야하므로 답은 0이된다.
            answer = 0
            break
        if bracket[i-1] == '(':
            # 쌍이 맞으므로 그동안 곱해준 tmp값을 answer에 더해줌
            # 더해준 값은 끝이 잘 끝나서 곱할것을 가정해주고 곱한 값을 더한것
            answer += tmp
        stack.pop() # 쌍이 맞았던것이므로 요소를 제거해줌
        tmp //= 2 
        # tmp에 2를 나눠준 이유는 괄호가 닫혔기때문
        # 괄호가 올바르게 닫혀서 곱할것을 미리 가정하기때문에 2로 나눔(소괄호일때)
    else : # "]"일때 
        if not stack or stack[-1] == '(':
            answer = 0
            break
        if bracket[i-1] == '[':
            answer += tmp

        stack.pop()
        tmp //= 3

if stack:
    print(0)
else:
    print(answer)