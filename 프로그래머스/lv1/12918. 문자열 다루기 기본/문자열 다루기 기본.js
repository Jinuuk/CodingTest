function solution(s) {
    var answer = true;
    
    let arr = s.split('');
    if(!(arr.length == 4 || arr.length == 6)) answer = false;
    else {
        for(let i = 0; i <= arr.length - 1; i++){
            if(isNaN(parseInt(arr[i]))) {
                answer = false;
                break;
            }
        }
    }
    return answer;
}