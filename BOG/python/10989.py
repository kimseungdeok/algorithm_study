import sys

sys.stdin = open('example.txt', 'r')

input = sys.stdin.readline

# 10001개의 0이 들어있는 배열을 만듦
counts = [0] * 10001 

# 첫번째 요소(즉 테스트케이스 개수)만큼 순회하는 반복문
# 반복을 돌리면서 요소를 counts의 인덱스로 접근
# 그렇다면 counts의 인덱스에 1~10000중에 입력 요소가 뭐가있는지 몇개있는지 파악 가능
for _ in range(int(input())):
    # print(int(input()))
    counts[int(input())] += 1


# 1 ~ 10001까지 돌리면서 1이상인 요소가 몇개인지 확인(0보다 크면 요소가 있다는것이니까)
# 
for num in range(1, 10000+1):
    if counts[num] > 0:
        for _ in range(counts[num]):
            print(num)