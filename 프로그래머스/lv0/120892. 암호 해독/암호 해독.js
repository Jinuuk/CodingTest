function solution(cipher, code) {
    var answer = '';
    arr = [...cipher];
    for(let i = code; i <= arr.length; i+=code){
        answer += arr[i-1];
    }
    return answer;
}