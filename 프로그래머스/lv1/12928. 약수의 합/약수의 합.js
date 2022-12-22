function solution(n) {
    var answer = 0;
    let arr = [];
    for(let i = 1; i <= n; i++) n%i == 0 ? arr.push(i) : null;
    arr.forEach(ele => answer += ele);
    return answer;
}