import sys

sys.stdin = open('example.txt', 'r')

input = list(map(int,sys.stdin.readline().split()))

speed= input[0] # A
sleep = input[1] # B
target = input[2] # V

# location = 0
up = 0
down = 0
day = 0


while True:
    day += 1
    up = speed * day
    if up - down >= target:
        break
    down = sleep * day


    

# while location <= target:
#     location += speed
#     location -= sleep
#     day += 1

print(day)