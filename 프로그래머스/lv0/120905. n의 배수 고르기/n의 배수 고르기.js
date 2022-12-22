function solution(n, numlist) {
    var answer = [];
    numlist.forEach(ele=>{
        if(ele%n==0){
            answer.push(ele);
        }
    })
    return answer;
}