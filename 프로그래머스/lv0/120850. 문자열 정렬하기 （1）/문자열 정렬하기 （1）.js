function solution(my_string) {
    var answer = [];
    let arr = [...my_string];
    arr.forEach(ele=>{
        if(!isNaN(parseInt(ele))){
            answer.push(parseInt(ele));
        }
    })
    answer.sort((a,b)=>a-b);
    return answer;
}