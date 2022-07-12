# K번째수

### **문제 설명**

배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

1. array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
2. 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
3. 2에서 나온 배열의 3번째 숫자는 5입니다.

배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

### 제한사항

- array의 길이는 1 이상 100 이하입니다.
- array의 각 원소는 1 이상 100 이하입니다.
- commands의 길이는 1 이상 50 이하입니다.
- commands의 각 원소는 길이가 3입니다.

### 입출력 예

| array | commands | return |
| --- | --- | --- |
| [1, 5, 2, 6, 3, 7, 4] | [[2, 5, 3], [4, 4, 1], [1, 7, 3]] | [5, 6, 3] |
|  |  |  |

### 입출력 예 설명

[1, 5, 2, 6, 3, 7, 4]를 2번째부터 5번째까지 자른 후 정렬합니다. [2, 3, 5, 6]의 세 번째 숫자는 5입니다.[1, 5, 2, 6, 3, 7, 4]를 4번째부터 4번째까지 자른 후 정렬합니다. [6]의 첫 번째 숫자는 6입니다.[1, 5, 2, 6, 3, 7, 4]를 1번째부터 7번째까지 자릅니다. [1, 2, 3, 4, 5, 6, 7]의 세 번째 숫자는 3입니다.

## 내 풀이

- 풀이 과정
    
    ```jsx
    function solution(array, commands) {
        var answer = [];
        const comLen = commands.length;
        let newArr = [];
        function cutArr(i,j,k){
            for(let l = i-1; l < j-1; l++){
                newArr.push(array[l]);
            }
            console.log(newArr[k]);
            return newArr;
        }
        for(let m = 0; m < comLen; m++) {
            cutArr(commands[m][0], commands[m][1],commands[m][2]);
            // console.log(cutArr(commands[m][0], commands[m][1],commands[m][2]))
        }
        // console.log(cutArr(commands[1], commands[2],commands[3]));
        return answer;
    }
    ```
    
    ```jsx
    function solution(array, commands) {
        var answer = [];
        const comLen = commands.length;
        let newArr = [];
        function cutArr(i,j,k){
            for(let l = i-1; l < j-1; l++){
                newArr.push(array[l]);
            }
            console.log(newArr);
            return newArr[k-1];
        }
        for(let m = 0; m < comLen; m++) {
            cutArr(commands[m][0], commands[m][1],commands[m][2]);
            // console.log(cutArr(commands[m][0], commands[m][1],commands[m][2]))
        }
        // console.log(cutArr(commands[1], commands[2],commands[3]));
        return answer;
    }
    ```
    
    ```jsx
    function solution(array, commands) {
        var answer = [];
        const comLen = commands.length;
        let i = 0;
        let j = 0;
        let k = 0;
        const newArr = [];
        // console.log(comLen);
        for(let l = 0; l < comLen; l++){
            i = commands[l][0];
            j = commands[l][1];
            k = commands[l][2];
            // console.log(i,j,k);
            
            for(let m = i-1; m < j-1; m++){
            // console.log(i,j,k);
            newArr.push(array[m])
            }
        }
        
        console.log(newArr);
        return answer;
    }
    ```
    

```jsx
function solution(array, commands) {
    var answer = [];
    
    for(var i=0; i<commands.length;i++){
        var list = array.slice(commands[i][0]-1, commands[i]
        							[1]).sort((a,b)=>{return a-b});
        
        answer.push(list[commands[i][2]-1]);
    }

    return answer;
}
```

결국은 다른 사람의 풀이를 참조해야했다…

[](https://velog.io/@fastpace04/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4JavaScript-K%EB%B2%88%EC%A7%B8-%EC%88%98)

`slice()` 메서드를 알지 못했다. 

[자바스크립트 배열의 slice()와 splice() 함수](https://www.daleseo.com/js-array-slice-splice/)

`slice()` 메서드의 매개 변수도 배열과 마찬가지로 5번째라면 4를 넣어야 한다.(0부터 시작하기 때문에) 따라서 `-1` 을 해주었다.