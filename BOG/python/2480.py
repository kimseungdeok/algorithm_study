a,b,c = map(int, input().split(" "))

if a==b==c:
    print((1000*a)+10000)
elif a==b or a==c or b==c:
    if a==b:
        print((100*a)+1000)
    elif a==c:
        print((100*a)+1000)
    elif b==c:
        print((100*b)+1000)
elif a!=b and b!=c:
    if a > b and a > c:
        print(a*100)
    elif b > a and b > c:
        print(b*100)
    elif c > a and c > b:
        print(c * 100)
    