# Title: 숫자 카드
# Link: https://www.acmicpc.net/problem/10815
# isSolved: true
# Language: Python3

from sys import stdin

stdin = open('example.txt', 'r')
input = stdin.readline

n = int(input())
numberCard = list(map(int, input().split()))
m = int(input())
numbers = list(map(int, input().split()))


numberCardSet = set(numberCard)
numbersSet = set(numbers)
inter = numberCardSet & numbersSet # 교집합

# print(inter)

answer = []

for i in numbers:
    if i in inter:
        answer.append(1)
    else:
        answer.append(0)

print(*answer)
