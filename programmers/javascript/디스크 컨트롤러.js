function solution(jobs) {
    const count = jobs.length; // 작업 개수를 세는 변수
    const minHeap = new MinHeap(); // 최소 힙 객체 생성
    jobs.sort((a, b) => a[0] - b[0]); // 작업을 요청 시간 기준으로 정렬

    let time = 0; // 시간 변수 초기화
    let complete = 0; // 완료된 작업 개수 초기화
    let total = 0; // 작업의 총 소요 시간 초기화

    while (jobs.length || minHeap.size()) {
        // 작업 배열이 비어있지 않거나 최소 힙이 비어있지 않은 동안 반복
        while (jobs.length) {
            if (jobs[0][0] === time) {
                // 작업의 요청 시간이 현재 시간과 일치하는 경우
                minHeap.heappush(jobs.shift()); // 해당 작업을 최소 힙에 추가
            } else {
                break;
            }
        }

        if (minHeap.size() && time >= complete) {
            // 최소 힙이 비어있지 않고, 현재 시간이 완료된 작업 시간 이후인 경우
            const task = minHeap.heappop(); // 최소 힙에서 가장 우선 순위가 높은 작업 추출
            complete = task[1] + time; // 작업의 완료 시간 계산
            total += complete - task[0]; // 작업의 총 소요 시간에 추가
        }
        time++; // 시간 증가
    }

    return (total / count) >> 0; // 작업의 평균 소요 시간 반환 (정수형으로 변환)
}

class MinHeap {
    constructor() {
        this.heap = [null]; // 힙 배열 생성 및 첫 번째 요소는 null로 초기화
    }

    size() {
        return this.heap.length - 1; // 힙의 크기 반환
    }

    getMin() {
        return this.heap[1] ? this.heap[1] : null; // 최소값 반환 (heap[1]은 최소값을 가리킴)
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]; // 두 인덱스의 요소를 교환
    }

    heappush(value) {
        this.heap.push(value); // 값을 힙 배열의 끝에 추가
        let curIdx = this.heap.length - 1; // 현재 인덱스
        let parIdx = (curIdx / 2) >> 0; // 부모 인덱스 (정수로 변환)

        while (curIdx > 1 && this.heap[parIdx][1] > this.heap[curIdx][1]) {
            this.swap(parIdx, curIdx); // 부모와 비교하여 위치 조정
            curIdx = parIdx;
            parIdx = (curIdx / 2) >> 0;
        }
    }

    heappop() {
        const min = this.heap[1]; // 최소값 추출
        if (this.heap.length <= 2) {
            this.heap = [null]; // 배열이 2개 이하인 경우 초기화
        } else {
            this.heap[1] = this.heap.pop(); // 배열의 마지막 요소를 최상위로 이동
        }

        let curIdx = 1; // 현재 인덱스
        let leftIdx = curIdx * 2; // 왼쪽 자식 인덱스
        let rightIdx = curIdx * 2 + 1; // 오른쪽 자식 인덱스

        if (!this.heap[leftIdx]) {
            return min; // 왼쪽 자식이 없는 경우 최소값 반환
        }
        if (!this.heap[rightIdx]) {
            if (this.heap[leftIdx][1] < this.heap[curIdx][1]) {
                this.swap(leftIdx, curIdx); // 왼쪽 자식과 비교하여 위치 조정
            }
            return min; // 오른쪽 자식이 없는 경우 최소값 반환
        }

        while (
            this.heap[leftIdx][1] < this.heap[curIdx][1] ||
            this.heap[rightIdx][1] < this.heap[curIdx][1]
        ) {
            const minIdx =
                this.heap[leftIdx][1] > this.heap[rightIdx][1]
                    ? rightIdx
                    : leftIdx; // 더 작은 자식 선택
            this.swap(minIdx, curIdx); // 선택한 자식과 위치 교환
            curIdx = minIdx;
            leftIdx = curIdx * 2;
            rightIdx = curIdx * 2 + 1;

            if (leftIdx >= this.size()) {
                break; // 왼쪽 자식 인덱스가 힙의 크기를 초과한 경우 반복 종료
            }
        }

        return min; // 최소값 반환
    }
}
