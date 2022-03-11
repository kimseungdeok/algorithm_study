t, m = map(int, input().split(' '))
ct = int(input())
ts = m + ct
td = ts//60

if t + td <=23:
    if td>=1:
        print(t+td, ts-(td*60))
    elif td<1:
        print(t, m+ct)
elif t + td > 23:
    if td>=1:
        print(t+td-24, ts-(td*60))
    elif td<1:
        print(t, m+ct)