import sys

sys.stdin = open('example.txt', 'r')

def factorial(num):
    if num == 1:
        return 1
    return num * factorial(num-1)

print(factorial(int(input())))
# print(factorial(1))