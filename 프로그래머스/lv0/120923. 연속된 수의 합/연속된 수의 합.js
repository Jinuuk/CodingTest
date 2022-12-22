function solution(num, total) {
    var answer = [];
    if(Number.isInteger(total/num)) {
        for(let i = 0; i <= num - 1; i++) {
            answer.push(total/num - (num-1)/2 + i);
        }
    } else {
        for(let i = 0; i <= num - 1; i++) {
            answer.push(Math.floor(total/num) - (num/2 - 1) + i);
        }
    }
    return answer;
}