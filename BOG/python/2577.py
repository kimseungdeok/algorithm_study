import sys

sys.stdin = open('example.txt', 'r')

input = list(map(int, sys.stdin.read().splitlines()))

multiple = input[0] * input[1] * input[2]

# print(multiple)

strMultiple = str(multiple)

arrMultiple = list(strMultiple)

# print(arrMultiple)

for i in range(0, 10):
    count = 0
    for num in arrMultiple:
        if(i == int(num)):
            count += 1
    print(count)
    