// 문제 설명
// n개의 섬 사이에 다리를 건설하는 비용(costs)이 주어질 때,
// 최소의 비용으로 모든 섬이 서로 통행 가능하도록 만들 때 필요한 최소 비용을 return

// 예시
// n	costs	                                    return
// 4	[[0,1,1],[0,2,2],[1,2,5],[1,3,1],[2,3,8]]	4

const getParent = (parent, x) => {
    // 부모 노드를 찾는 함수를 정의함
    // parent 배열을 통해 각 노드의 부모를 저장하고 있음
    if (parent[x] === x) return x; // 현재 노드의 부모가 자기 자신인 경우, 즉 루트 노드임
    return (parent[x] = getParent(parent, parent[x])); // 재귀적으로 부모 노드를 찾아감. 동시에 경로 압축 최적화를 수행함
};

// 두 개의 노드를 합치는 함수
// 두 개의 노드가 속한 그룹을 합치기 위해 부모 노드를 변경함
const unionParent = (parent, a, b) => {
    const n1 = getParent(parent, a); // 노드 a의 부모 노드를 찾음
    const n2 = getParent(parent, b); // 노드 b의 부모 노드를 찾음
    if (n1 < n2)
        return (parent[n2] =
            n1); // 더 작은 번호를 가진 노드가 부모가 되도록 설정함
    else return (parent[n1] = n2);
};

// 두 개의 노드가 같은 그룹에 속해 있는지 확인하는 함수
// 두 개의 노드의 부모가 같다면 같은 그룹에 속해 있다고 판단함
const findParent = (parent, a, b) => {
    const n1 = getParent(parent, a); // 노드 a의 부모 노드를 찾음
    const n2 = getParent(parent, b); // 노드 b의 부모 노드를 찾음
    if (n1 === n2)
        return true; // 부모 노드가 같다면 같은 그룹에 속해 있다고 판단함
    else return false;
};

function solution(n, costs) {
    let answer = 0;
    const parent = []; // 부모 노드를 저장하기 위한 배열을 선언함

    // 초기화: 각 노드의 부모를 자기 자신으로 설정함
    for (let i = 0; i < n; i++) parent.push(i);

    costs.sort((a, b) => a[2] - b[2]); // 비용을 기준으로 간선들을 오름차순으로 정렬함

    // Kruskal의 알고리즘을 사용하여 최소 비용 신장 트리를 구함
    for (const cost of costs) {
        if (!findParent(parent, cost[0], cost[1])) {
            // 두 노드가 같은 그룹에 속해 있지 않은 경우에만 연결함
            answer += cost[2]; // 비용을 더함
            unionParent(parent, cost[0], cost[1]); // 두 노드를 연결함
        }
    }

    return answer; // 최소 비용의 합을 반환함
}
