def solution(phone_book):
    answer = True
    first = phone_book.pop(0)

    for i in phone_book:
        if first in i:
            return False
    return answer