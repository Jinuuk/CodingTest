function solution(arr, divisor) {
    let answer = [];
    arr.forEach(ele => {
        ele%divisor == 0 ? answer.push(ele) : null;
    })
    answer.length != 0 ? answer.sort((a,b) => a-b) : answer.push(-1);
    return answer;
}