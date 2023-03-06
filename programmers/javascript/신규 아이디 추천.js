function solution(new_id) {
    const step1 = new_id.toLowerCase(); // 1단계
    const step2 = step1.replace(/[^\w\d-_.]/g, ''); // 2단계
    const step3 = step2.replace(/\.+/g, '.'); // 3단계
    const step4 = step3.replace(/^\.|\.$/g, ''); // 4단계
    const step5 = step4 || 'a'; // 5단계
    const step6 = step5.slice(0, 15).replace(/\.$/g, ''); // 6단계
    const step7 = step6.length <= 2 ? step6.padEnd(3, step6.charAt(step6.length - 1)) : step6; // 7단계
    return step7;
}