function solution(s) {
    var answer = 0;
    let arr = s.split(' ');
    arr.forEach((ele,i)=>{
        ele == 'Z' ? arr[i] = -arr[i-1]??0 : 0;
        answer += parseInt(arr[i]);
    })
    return answer;
}