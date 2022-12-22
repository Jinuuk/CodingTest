function solution(my_string) {
    var answer = 0;
    my_string.split(/\D/).forEach(ele=>{
        if(!isNaN(parseInt(ele))) answer += parseInt(ele);
    })
    return answer;
}