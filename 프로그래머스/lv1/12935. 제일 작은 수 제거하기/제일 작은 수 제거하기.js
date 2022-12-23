function solution(arr) {
    var answer = [];
    
    if (arr.length == 1) answer.push(-1);
    else {
        let min = Math.min.apply(null,arr);
        arr.forEach(ele => ele != min ? answer.push(ele) : null);
    }
    
    return answer;
}