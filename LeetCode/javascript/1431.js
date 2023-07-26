/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    const maxCandy = Math.max(...candies);

    return candies.map((item) => {
        return item + extraCandies >= maxCandy ? true : false;
    });
};
