X = input()

number = ""
minNumber = "999999"
digit = len(X)
used = [False] * digit

# 최대 자릿수는 6자리이므로, 최대 재귀 깊이도 6이 되어 안정적인 통과가 가능합니다.
def backtrack(depth):
  global number
  global minNumber

  if depth == digit:
  	# 백트래킹 결과가 주어진 수보다 크면서 가장 작은 수가 답이 됩니다.
    if X < number < minNumber:
      minNumber = number
    return

  for i in range(digit):
    # TIP) 여기서 if i in used: 처럼 in 문으로 로직을 작성하면,
    # 다른 문제에서는 시간 초과가 뜰 가능성이 있습니다.
    # 따라서 항상 인덱스를 직접 지정해 해당 배열 요소의 값을 검증해야 합니다.
    
    if used[i] == True: # if i in used: (BAD)
      continue
    used[i] = True
    number += X[i]
    backtrack(depth + 1)
    used[i] = False
    number = number[:-1]


backtrack(0)

if minNumber == '999999':
  minNumber = 0
print(minNumber)