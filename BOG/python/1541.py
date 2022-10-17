import re
from sys import stdin

stdin = open('example.txt','r')
input = stdin.readline

s = input().split('-')
print(s)
sum = 0
for i in s[0].split('+'):
    sum += int(i)

for i in s[1:]:
    for j in i.split('+'):
        sum -= int(j)

print(sum)