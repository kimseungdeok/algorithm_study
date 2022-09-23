import sys

sys.stdin = open('example.txt', 'r')

input = sys.stdin.read().split('\n')
print(input)

testcase = int(input[0])

    
for value in input:
    sum = 0
    arr = value.split(' ')
    count = 0
    print(arr)
    for value in arr:
        sum += int(value)
    average = (sum - int(arr[0]))/(len(arr))
    for value in arr:
        # print(average)
        if average > int(value):
            count += 1
        print(average/len(value))