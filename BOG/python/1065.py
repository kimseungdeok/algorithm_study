import sys

sys.stdin = open('example.txt', 'r')

num = sys.stdin.readline()

# print(list(map(int,list('273'))))
# 3자리 이상의 수의 한수를 구하는 함수

# 파라미터는 문자열로 받을것(각 문자를 나눠서 배열로 만들기 위해)
def isHansoo(num):
    numArr = list(map(int,list(num)))
    if numArr[1]*2 == numArr[0]+numArr[2]:
        return True
    else:
        return False

# print(list(range(100,100+1)))
# print(list(str(100)))

if int(num) < 100:
    answer = int(num)
    print(answer)
elif int(num) >= 100:
    count = 0
    for i in range(100, int(num)+1):
        if(isHansoo(str(i))):
            count += 1
    print(count + 99)
