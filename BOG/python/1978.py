import sys

sys.stdin = open('example.txt', 'r')

# 예제 입력 1
# 4
# 1 3 5 7

# 입력을 read()를 통해 전부 받고 split으로 구분하여 배열로 만듦
input = sys.stdin.read().split() 
# 입력에서 첫번째 줄(첫번째 요소)은 요소의 개수이므로 num이라는 변수에 할당해주었다.
num = input[0]
# 첫번째 요소를 제거한다.(이제 사용할 필요가 없으므로)
input.pop(0)
# 변수 이름을 직관적으로 설정해주기위해 이렇게 새로운 변수에 할당해주었다.
nums = list(map(int, input))
# print(nums)

# 두번째 줄을 배열로 만든것을 순회함
for num in nums:
    # nums의 각 요소보다 작은 수로 나누기 위해 새로운 배열을 만듦
    divideArr = list(range(1, num+1))
    print(divideArr)
    # for i in divideArr:
    #     if num % i == 0:
            


# print(nums)
