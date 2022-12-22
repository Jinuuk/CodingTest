function solution(my_string) {
    var answer = '';
    let arr = [...my_string];
    arr = [...new Set(arr)];
    arr.forEach(ele=>answer+=ele);
    return answer;
}