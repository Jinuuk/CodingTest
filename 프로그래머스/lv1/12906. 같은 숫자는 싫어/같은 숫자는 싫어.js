function solution(arr)
{
    var answer = [];
    answer.push(arr[0]);
    for(let i = 1; i <= arr.length - 1; i++){
        answer[answer.length - 1] == arr[i] ? null : answer.push(arr[i]);
    }
    return answer;
}