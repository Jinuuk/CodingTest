function solution(array) {
    var answer = [];
    let max = [...array].sort((a,b)=>a-b)[array.length - 1];
    let position = array.indexOf(max);
    answer = [max,position];
    return answer;
}