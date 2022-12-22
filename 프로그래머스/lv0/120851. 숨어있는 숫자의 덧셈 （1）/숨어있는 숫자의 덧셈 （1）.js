function solution(my_string) {
    var answer = 0;
    let arr = [...my_string];
    arr.forEach(ele=>{
        if(!isNaN(parseInt(ele))){
            answer += parseInt(ele);
        }
    })
    return answer;
}