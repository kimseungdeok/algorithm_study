t, m = map(int, input().split(" "))
ct = int(input()) # cook time의 약자
td = (m+ct)//60 # time division의 약자로 편하게 계산하기위해 따로 변수를 만듦


if m + ct > 60:
    if t+td > 23:

    elif t+td <= 23:
        print(t+td, (60*td)-(m+ct)) # 몫만 구하기 위해서 // 연산자 사용
elif m + ct <60:
    print(t, m+ct)