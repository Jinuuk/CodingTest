function solution(n) {
    var answer = 0;
    let arr = [];
    
    while(true) {
        if(n >= 3) {
            arr.push(n%3);
            n = parseInt(n/3);
        } else {
            arr.push(n);
            break;
        }
    }
    
    for(let i = 0; i <= arr.length -1; i++) {
        answer += arr[i]*3**(arr.length - 1 - i);
     }
    
    return answer;
}