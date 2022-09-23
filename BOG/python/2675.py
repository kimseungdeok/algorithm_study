import sys

sys.stdin = open('example.txt', 'r')

input = sys.stdin.read().splitlines()
num = input[0]
input.pop(0)

def makeWord(num, arr):
    word = ''
    list(arr)
    for item in arr:
        word += item * num
    return word


for i in input:
    word = i.split()
    print(makeWord(int(word[0]), word[1]))
