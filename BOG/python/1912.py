import sys
input = sys.stdin.readline
#  동적계획법(DP; Dynamic Programming)을 이용
# ex) 입력 10 -4 3 1 5 6 -35 12 21 -1
N = int(input())
num_list = list(map(int, input().split()))
# 처음부터 더해나가면서 합들을 저장함
# 원소 6까지 각 원소를 포함한 최대 연속합은 10 6 9 10 15 21 이다.
# 이전까지의 연속합을 끊고 새로 시작할 경우 연속합이 −35 가 될 것이고,
# 이전 연속합에 이어서 포함할 경우 연속합이 −14 가 될 것이다. 따라서 −14 가 최대 연속합이 될 것이다.
# 다음 12에 대해서 이전연속합을 끊고 새로시작하면 연속합은 12이다.
# 반면에, 이전 연속합에 이어서 포함할 경우에는 연속합이 -2다. 따라서 최대 연속합은 12이다.
for i in range(1, N):
    num_list[i] = max(num_list[i], num_list[i] + num_list[i-1])
print(max(num_list))