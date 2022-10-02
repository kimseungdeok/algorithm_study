from sys import stdin

stdin = open('example.txt', 'r')

testCase = int(stdin.readline().strip())

answer = []

for _ in range(testCase):
    answer.clear()
    flag = 0
    line = stdin.readline().strip()
    for each in line:
        if each == "(":
            answer.append(each)
        else:
            try:
                answer.pop()
            except:
                flag = 1
                break
    if len(answer) == 0 and flag==0:
        print('YES') 
    else:
        print('NO')