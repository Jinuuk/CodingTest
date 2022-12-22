function solution(my_str, n) {
    var answer = [];
    let arr = [...my_str];
    for(let i = 0; i <= arr.length-1; i+=n){
        answer.push(arr.slice(i,i+n).join(''));
    }
    return answer;
}