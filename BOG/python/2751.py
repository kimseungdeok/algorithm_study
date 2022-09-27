import sys

sys.stdin = open('example.txt', 'r')

input = sys.stdin.readline

n = int(input())
li = []

for i in range(n):
    li.append(int(input()))

# 배열을 받아서 절반을 나누어서 왼쪽과 오른쪽에 할당
# 왼쪽과 오른쪽 모두 다시 sort를 해줌
# 인자 : 배열
# 최종적으로 왼쪽과 오른쪽을 합침
def sort(arr):
    if len(arr)<2:
        return arr
    mid=len(arr)//2
    left=sort(arr[:mid])
    right=sort(arr[mid:])

    return merge(left, right)


# 왼쪽과 오른쪽 배열을 합쳐주는 함수
def merge(left, right):
    new_list=[]
    i=0
    j=0

    while (i<len(left)) & (j<len(right)):
        if left[i]>right[j]:
            new_list.append(right[j])
            j += 1
        else:
            new_list.append(left[i])
            i += 1
    while (j<len(right)):
        new_list.append(right[j])
        j += 1
    while (i<len(left)):
        new_list.append(left[i])
        i += 1
    return new_list


for i in sort(li):
    print(i)