import sys

sys.stdin = open('example.txt', 'r')

input = list(map(int,sys.stdin.read().strip().split()))

testCase = input[0]

input.pop(0)

nums = input

def bubble_sort(arr):
    n = len(arr)

    for i in range(n):
        
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]

bubble_sort(nums)

for num in nums:
    print(num)