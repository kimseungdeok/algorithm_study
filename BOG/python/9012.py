from sys import stdin
from unittest import TestCase

stdin = open('example.txt', 'r')

testCase = int(stdin.readline().strip())

for _ in range(testCase):
    vps = list(stdin.readline().strip())
    openCount = 0
    closeCount = 0
    if vps[0] == '(' and vps[len(vps)-1] == ')':
        vps.pop(0)
        vps.pop(len(vps)-1)
        for i in range(len(vps)):
            # print(i)
            if vps[i] == '(':
                openCount += 1
            elif vps[i] == ')':
                closeCount += 1
        # print(openCount, closeCount)
        if openCount == closeCount:
            print("YES")
        else:
            print("NO")
    else : 
        print("NO")
            
            
            
