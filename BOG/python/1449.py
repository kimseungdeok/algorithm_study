from sys import stdin

stdin = open('example.txt', 'r')
input = stdin.readline

n, l = map(int, input().split())

locations = list(map(int,list(input().split(' '))))
locations.sort()

tape = []
tape.append(locations[0] - 0.5)
tape.append(tape[0] + l)
count = 1

for i in range(1,n):
    if tape[0] < locations[i] < tape[1]:
        continue
    else:
        tape[0] = locations[i] - 0.5
        tape[1] = tape[0] + l
        count += 1

print(count)
