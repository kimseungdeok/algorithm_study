import sys

sys.stdin = open('example.txt', 'r')

def factorial(num):
    result = 1
    if num==0:
        return 1
    else:
        for i in range(1, num+1):
            # print(i)
            result = result * i

    return result

print(factorial(int(input())))
# print(factorial(1))