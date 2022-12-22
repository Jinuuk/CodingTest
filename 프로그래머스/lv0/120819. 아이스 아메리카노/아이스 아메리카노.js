function solution(money) {
    var answer = [];
    let cnt = Math.floor(money/5500);
    let changes = money%5500;
    answer = [cnt, changes];
    return answer;
}