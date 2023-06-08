// Learn: 자바스크립트로 힙 구현

class MinHeap {
    constructor() {
        this.heap = [null]; // 첫 원소는 사용 안함
    }

    size() {
        return this.heap.length - 1
    }

    getMin() {
        return this.heap[1] ? this.heap[1] : null
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    heappush(value) {
        this.heap.push(value);
        let curIdx = this.heap.length - 1;
        let parIdx = (curIdx / 2) >> 0; // >>는 비트 연산자, Math.floor()를 이용하는 것보다 빠름, 참고로 Math.floor()은 버림
        // let parIdx = Math.floor(curIdx / 2)

        // 최소힙이므로 부모노드가 제일 작아야한다. 즉 부모노드가 현재 노드보다 큰 지 검사하며 반복한다.
        while (curIdx > 1 && this.heap[parIdx] > this.heap[curIdx]) {
            [this.heap[parIdx], this.heap[curIdx]] = [
                this.heap[curIdx],
                this.heap[parIdx],
            ]; // 구조분해 할당을 이용해 부모의 값과 자식의 값을 swap한다.
            curIdx = parIdx; // 현재 노드의 인덱스를 부모 노드의 인덱스로 업데이트한다.
            parIdx = (curIdx / 2) >> 0; // 새로운 현재 노드의 부모 노드의 인덱스를 계산한다.
        }
    }

    heappop() {
        const min = this.heap[1];
        if (this.heap.length <= 2) this.heap[null];
        else this.heap[1] = this.heap.pop(); // heap도 배열이므로 pop이 가능

        let curIdx = 1;
        let leftIdx = curIdx * 2;
        let rightIdx = curIdx * 2 + 1;

        if (!this.heap[leftIdx]) return min; // 왼쪽 자식이 없다는 것은 오른쪽 자식도 없는, 즉 루트만 있는 상태이므로 바로 반환

        if (!this.heap[rightIdx]) {
            if (this.heap[leftIdx] < this.heap[curIdx]) {
                [this.heap[leftIdx], this.heap[curIdx]] = [
                    this.heap[curIdx],
                    this.heap[leftIdx],
                ];
            }
            return min;
        }

        // 위의 조건이 걸리지 않는 경우 왼쪽과 오른쪽 자식이 모두 있는 경우이다.
        // 따라서 현재 노드가 왼쪽 또는 오른쪽 보다 큰 지 작은지 검사하며 반복한다.
        while (
            this.heap[leftIdx] < this.heap[curIdx] ||
            this.heap[rightIdx] < this.heap[curIdx]
        ) {
            // 왼쪽과 오른쪽 자식중에 더 작은 값과 현재 노드를 교체하면 된다.
            const minIdx =
                this.heap[leftIdx] > this.heap[rightIdx] ? rightIdx : leftIdx;
            curIdx = minIdx;
            leftIdx = curIdx * 2;
            rightIdx = curIdx * 2 + 1;
        }
        return min;
    }
}
