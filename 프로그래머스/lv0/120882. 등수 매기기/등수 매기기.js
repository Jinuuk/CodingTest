function solution(score) {
    var answer = [];
    let arr = [];
    let obj = {};
    
    score.forEach(data => arr.push(data[0] + data[1]));
    arr.forEach((ele,i) => obj[i] = ele);
    arr.sort((a,b) => b-a);
    
    for(let i in obj){
        answer.push(arr.indexOf(obj[i]) + 1);
    }
    
    return answer;
}