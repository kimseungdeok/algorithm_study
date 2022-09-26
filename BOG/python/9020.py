import sys, math

# 예제 입력
# 3
# 8
# 10
# 16

sys.stdin = open('example.txt', 'r')

input = sys.stdin.readline().strip()

testCases = int(input)

# print(input)

def isPrimeNumber(num):
    if num == 1:
        return False
    for i in range(2, int(math.sqrt(num))+1):
        if num % i ==0:
            return False
    return True


for _ in range(testCases): # testCase만큼 순회만 함
    case = int(sys.stdin.readline().strip()) 
    # print(case)
    # caseArr = []
    a, b = case//2, case//2
    # print(a,b)
    while a > 0:
        if isPrimeNumber(a) and isPrimeNumber(b):
            print(a, b)
            break
        else:
            a -= 1
            b += 1
