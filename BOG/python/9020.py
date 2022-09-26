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
    for i in range(2, int(math.sqrt(num))+1):
        if num % i ==0:
            return False
    return True


for _ in range(testCases): # testCase만큼 순회만 함
    case = int(sys.stdin.readline().strip()) # 각각의 케이스를 
    # print(case)
    caseArr = []
    for i in range(int(case/2)):
        # print(case/2 -i, case/2 +i)
        if isPrimeNumber(case/2):
            caseArr.append(int(case/2))
            caseArr.append(int(case/2))
        elif isPrimeNumber(case/2 -i) and isPrimeNumber(case/2 +i):
            caseArr.append(int(case/2 -i))
            caseArr.append(int(case/2 +i))

    print(*caseArr[0:2])



