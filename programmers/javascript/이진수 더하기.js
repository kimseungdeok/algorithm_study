const addBin = (bin1, bin2) => {
    return parseInt(bin1, 2) + parseInt(bin2, 2)
}

function solution(bin1, bin2) {
    return addBin(bin1, bin2).toString(2);
}