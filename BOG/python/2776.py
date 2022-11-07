from sys import stdin

# 1
# 5
# 4 1 5 2 3
# 5
# 1 3 7 9 5

stdin = open('example.txt', 'r')
input = stdin.readline

def binary_search(start, end, nums, num):
    while start <= end:
        mid = (start + end) // 2

        if nums[mid] == num:
            return 1
        elif nums[mid] < num:
            start = mid+1
        else:
            end = mid-1
    return 0

tc = int(input())

for _ in range(tc):
    n = int(input())
    nlist = list(map(int, input().split()))
    nlist.sort()
    m = int(input())
    mlist = list(map(int, input().split()))

    for num in mlist:
        print(binary_search(0, n-1, nlist, num))
    
