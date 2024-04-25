// 백준 input받는 코드

const fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filepath).toString().trim();

input = input.split("\n").map((el) => Number(el));
const tc = Number(input.shift());
// console.log(input, tc);

function is_prime(num) {
    if (num <= 1) {
        return false;
    } else if (num === 2) {
        return true;
    } else if (num % 2 === 0) {
        return false;
    } else {
        for (i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) {
                return false;
            }
        }
    }
    return true;
}

const makePrimeList = (num) => {
    let prime_list = [];
    for (let i = 2; i <= num; i++) {
        if (is_prime(i)) {
            prime_list.push(i);
        }
    }

    return prime_list;
};

// console.log(makePrimeList(10));

function findBestPrimePairs(n, primes) {
    let primeSet = new Set(primes); // 빠른 조회를 위해 소수 리스트를 집합으로 변환
    let half = Math.floor(n / 2);

    // 이진 탐색을 사용하여 half 이하의 최대 소수 인덱스를 찾거나, 직접 계산
    let index = primes.findIndex((p) => p > half);
    if (index !== -1) {
        index--; // half 이하의 가장 큰 소수로 조정
    } else {
        index = primes.length - 1; // 모든 소수가 half 이하인 경우
    }

    // 주어진 인덱스부터 0까지 반복하면서 소수 쌍을 찾음
    for (let i = index; i >= 0; i--) {
        let p1 = primes[i];
        let p2 = n - p1;
        if (primeSet.has(p2)) {
            return [p1, p2]; // 차이가 가장 작은 소수 쌍을 찾으면 반환
        }
    }
}

// console.log(getPair(makePrimeList(14), 14));
// console.log(findBestPrimePairs(14, makePrimeList(14)));

input.forEach((el) => {
    console.log(...findBestPrimePairs(el, makePrimeList(el)))
    // console.log(el)
});
