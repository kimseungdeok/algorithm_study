# 이중 for문을 사용
# i를 기준으로 자신의 다음 숫자들을 비교하면서 
# 더 작은 숫자가 오면 break



def solution(prices):
    answer = []
    for i in range(len(prices)):
        num = 0
        for j in range(i+1, len(prices)):
            num += 1
            if(prices[i] > prices[j]):
                break

        answer.append(num)
            
                
            
            
    return answer