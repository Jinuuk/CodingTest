function solution(n) {
    var answer = 0;
    let str = '' + n;
    for(let i of str){
        answer += parseInt(i);
    }
    return answer;
}