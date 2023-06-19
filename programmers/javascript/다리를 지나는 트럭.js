function solution(bridge_length, weight, truck_weights) {
    let seconds = 0;

    // 다리의 길이만큼 배열로 만들고 모두 0으로 채움
    let bridge = Array.from({ length: bridge_length }, () => 0);
    let bridge_sum = 0;

    // 1초 증가, 맨 처음 트럭을 다리에 올림
    seconds++;
    bridge.shift();
    bridge_sum += truck_weights[0];
    bridge.push(truck_weights.shift());

    while (bridge_sum > 0) {
        seconds++;

        bridge_sum -= bridge.shift();

        // 아직 다리에 올릴 트럭이 남아있고 다음 트럭을 올렸을 때 다리의 무게 제한을 초과하지 않는 경우
        if (
            truck_weights.length > 0 &&
            bridge_sum + truck_weights[0] <= weight
        ) {
            bridge_sum += truck_weights[0];
            bridge.push(truck_weights.shift());
        } else {
            bridge.push(0); // 무게 제한을 초과하거나 다음 트럭이 없는 경우 0을 push
        }
    }

    return seconds;
}
