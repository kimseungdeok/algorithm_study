count = int(input())

 
for i in range(0,count):
    n1, n2 = map(int, input().split(" "))
    n1_arr = []
    n1_arr.append(n1)
    n2_arr = []
    n2_arr.append(n2)

for i in range(0,count):
    print(n1_arr[i-1]+n2_arr[i-1])