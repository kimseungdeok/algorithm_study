/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    let canPlaceCount = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        let leftItem = flowerbed[i - 1];
        let rightItem = flowerbed[i + 1];
        let item = flowerbed[i];
        // console.log(leftItem, item, rightItem)
        if (leftItem !== undefined || rightItem !== undefined) {
            if (item === 0) {
                if (leftItem === 0 && rightItem === 0) {
                    flowerbed[i] = 1;
                    canPlaceCount += 1;
                }
            }
        }
        if (item === 0) {
            if (
                (leftItem === 0 && rightItem === undefined) ||
                (rightItem === 0 && leftItem === undefined)
            ) {
                flowerbed[i] = 1;
                canPlaceCount += 1;
            }
        }
    }
    if (flowerbed.length <= 1) {
        if (flowerbed[0] === 0) {
            return true;
        }
    }
    console.log(flowerbed, canPlaceCount);
    return canPlaceCount >= n ? true : false;
};
