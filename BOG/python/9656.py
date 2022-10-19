from sys import stdin

# stdin = open('example.txt', 'r')
input = stdin.readline

stone = int(input())

if stone % 2 == 0:
    print('SK')
else:
    
    print('CY')