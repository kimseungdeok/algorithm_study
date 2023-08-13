// 백준 input받는 코드

const fs = require("fs");
let filepath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filepath).toString().trim().split("\n");

const tc = Number(input.shift())

// arr1, arr2의 형태는 아래와 같다
// [ [ 1, 2 ], [ 11, 2 ], [ 1, 12 ], [ 11, 12 ] ]
// [ [ 5, 2 ], [ 15, 2 ], [ 5, 12 ], [ 15, 12 ] ]
const isOverlap = (arr1, arr2) => {
    
    for(let i = 0; i < arr1.length; i++) {
        let [oneP1, oneP2] = arr1[i]
        for(let j = 0; j < arr2.length; j++) {
            let [twoP1, twoP2] = arr2[j]
            if(oneP1 > twoP1 && oneP2 > twoP2) return true
        }
    }
    return false
    
}

const makeFourPoint = (num1, num2) => {
    return [[num1, num2], [num1+10, num2], [num1, num2+10], [num1+10, num2+10]]
}

// arr1, arr2의 형태는 아래와 같다
// [ [왼쪽 아래], [오른쪽 아래], [왼쪽 위], [오른쪽 위] ]
// [ [ 1, 2 ], [ 11, 2 ], [ 1, 12 ], [ 11, 12 ] ]
// [ [ 5, 2 ], [ 15, 2 ], [ 5, 12 ], [ 15, 12 ] ]
const getOverlapPoint = (arr1, arr2) => {
    return [arr2[0], [arr1[1][0], arr2[1][1]], [arr2[2][0], arr1[2][1]], arr1[3]]

}
// arr의 형태는 아래와 같다
// [ [왼쪽 아래], [오른쪽 아래], [왼쪽 위], [오른쪽 위] ]
// [ [ 5, 2 ], [ 11, 2 ], [ 5, 11 ], [ 11, 11 ] ]
const getArea = (arr) => {
    let width = arr[1][0] - arr[0][0]
    let height = arr[2][1] - arr[0][1]
    return width * height
}

console.log(getArea([ [ 5, 2 ], [ 11, 2 ], [ 5, 11 ], [ 11, 11 ] ]))
// console.log(getOverlapPoint(makeFourPoint(1,1), makeFourPoint(5,2)))

// console.log(makeFourPoint(1,1))

// isOverlap(makeFourPoint(5,2), makeFourPoint(3,1))