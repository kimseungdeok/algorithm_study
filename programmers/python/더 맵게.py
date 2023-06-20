from heapq import heappush, heappop, heapify


def mixFood(scoville):
    firstFood = heappop(scoville)
    secondFood = heappop(scoville)
    newFood = secondFood * 2 + firstFood
    heappush(scoville, newFood)
    return newFood


def solution(scoville, K):
    answer = 0
    heapify(scoville)

    while scoville[0] < K:
        if len(scoville) < 2:
            return -1

        answer += 1
        resultFood = mixFood(scoville)

    return answer
