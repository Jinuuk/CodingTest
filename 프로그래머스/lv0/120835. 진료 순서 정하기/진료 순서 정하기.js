function solution(emergency) {
    var answer = [];
    let arr = [...emergency];
    arr.sort((a,b)=>b-a);
    emergency.forEach(ele=>{
        answer.push(arr.indexOf(ele) + 1);
    })
    return answer;
}