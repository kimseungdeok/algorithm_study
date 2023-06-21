class MaxHeap {
    constructor() {
        this.heap = [null];
    }

    heappush(value) {
        this.heap.push(value);
        let curIdx = this.heap.length - 1;
        let parIdx = (curIdx / 2) >> 0;

        while (curIdx > 1 && this.heap[parIdx] < this.heap[curIdx]) {
            [this.heap[parIdx], this.heap[curIdx]] = [
                this.heap[parIdx],
                this.heap[curIdx],
            ];
            curIdx = parIdx;
            parIdx = (curIdx / 2) >> 0;
        }
    }

    heappop() {
        const max = this.heap[1];
        if (this.heap.length <= 2) this.heap[null];
        else this.heap[1] = this.heap.pop();

        let curIdx = 1;
        let leftIdx = curIdx * 2;
        let rightIdx = curIdx * 2 + 1;

        if (!this.heap[leftIdx]) return max;

        if (!this.heap[rightIdx]) {
            if (this.heap[leftIdx] > this.heap[curIdx]) {
                [this.heap[leftIdx], this.heap[curIdx]] = [
                    this.heap[curIdx],
                    this.heap[leftIdx],
                ];
            }
            return min;
        }

        while (
            this.heap[leftIdx] > this.heap[curIdx] ||
            this.heap[rightIdx] > this.heap[curIdx]
        ) {
            const maxIdx =
                this.heap[leftIdx] < this.heap[rightIdx] ? rightIdx : leftIdx;
            curIdx = maxIdx;
            leftIdx = curIdx * 2;
            rightIdx = curIdx * 2 + 1;
        }
        return max
    }
}
