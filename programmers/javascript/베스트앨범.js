function solution(genres, plays) {
    var answer = [];
    const genreCount = {}; // 장르별 재생 횟수
    const genreAndPlays = {}; // 장르별 노래 인덱스와 재생 횟수

    // 장르별 재생 횟수와 장르별 노래 인덱스와 재생 횟수를 확인하기위한 반복문
    genres.forEach((item, index) => {
        genreCount[item] = genreCount[item] ? genreCount[item] : 0;
        genreCount[item] += plays[index];
        genreAndPlays[item] = genreAndPlays[item] ? genreAndPlays[item] : [];
        genreAndPlays[item].push([index, plays[index]]);
    });

    // console.log(Object.entries(genreCount), genreAndPlays)

    // 재생횟수가 많은 장르를 확인하기위한 정렬
    let sortGenreCount = Object.entries(genreCount).sort((a, b) => {
        return b[1] - a[1];
    });

    // 각 장르의 노래를 재생횟수가 많은 부분 내림차순 정렬
    Object.keys(genreAndPlays).forEach((item) => {
        genreAndPlays[item] = genreAndPlays[item].sort((a, b) => {
            return b[1] - a[1];
        });
    });
    let arr = [1, 2, 3];

    sortGenreCount.forEach((item) => {
        answer.push(genreAndPlays[item[0]][0][0]);

        if (genreAndPlays[item[0]][1] !== undefined) {
            answer.push(genreAndPlays[item[0]][1][0]);
        }
    });

    return answer;
}
