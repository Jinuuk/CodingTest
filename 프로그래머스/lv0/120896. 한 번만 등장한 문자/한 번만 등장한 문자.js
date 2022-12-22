function solution(s) {
    var answer = '';
    let arr = ['0',...[...s].sort(),'0'];
    for(let i = 1; i <= arr.length - 2; i++){
        if(arr[i] != arr[i-1] && arr[i] != arr[i+1]) answer += arr[i];
    }
    return answer;
}