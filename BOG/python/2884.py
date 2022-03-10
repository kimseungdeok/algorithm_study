time, minute = map(int, input().split(" "))

if time > 0 and minute >= 45:
    print(str(time) + ' ' + str(minute - 45))
elif time > 0 and minute < 45:
    print(str(time - 1) + ' ' + str(minute + 15))
elif time <= 0 and minute >= 45 :
    print(str(time) + ' ' + str(minute - 45))
elif time <= 0 and minute < 45:
    print(str(time + 23) + ' ' + str(minute + 15))

# print(str(time) + ' ' + str(minute))