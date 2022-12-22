function solution(n) {
    var answer = [];
    let str = n + "";
    for(let i = 0; i <= str.length -1; i++) answer.unshift(parseInt(str[i]));
    return answer;
}