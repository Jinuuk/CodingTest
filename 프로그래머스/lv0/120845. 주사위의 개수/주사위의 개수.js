function solution(box, n) {
    var answer = 1;
    box.forEach(ele=>{
        answer *= Math.floor(ele/n);
    })
    return answer;
}