function solution(left, right) {
    var answer = 0;
    for(let i = left; i <= right; i++){
        let arr = [];
        for(let j = 0; j <= i; j++) i%j == 0 ? arr.push(j) : null;
        arr.length%2 == 0 ? answer += i : answer -= i;
    }
    return answer;
}