import sys

sys.stdin = open('example.txt', 'r')

input = sys.stdin.read().splitlines()
print(input)

testcase = int(input[0])

input.pop(0)

for value in input:
    arr = value.splitlines()
    for value in arr:
        sum = 0
        count = 0
        item = list(map(int, value.split(' ')))
        item.pop(0)
        for value in item:
            sum += value
        average = sum/len(item)
        
        for value in item:
            if(average < value):
                count += 1

        answer = count/len(item) * 100
        print(str(format(answer, ".3f"))+'%')
        