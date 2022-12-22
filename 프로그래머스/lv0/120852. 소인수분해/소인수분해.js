function solution(n) {
    var answer = [];
    let arr = [];
    for(let i = 1; i <= n; i++){
        if(n%i == 0) arr.push(i);
    }
    arr.forEach(ele=>{
        let arr2 = [];
        for(let i = 1; i <= ele; i++){
            if(ele%i == 0) arr2.push(i);
        }
        if(arr2.length == 2) answer.push(ele);
    })
    return answer;
}