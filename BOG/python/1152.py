import sys

sys.stdin = open('example.txt', 'r')

# 문장을 배열로 만듦
sentenceArr = input().strip().split()

print(len(sentenceArr))