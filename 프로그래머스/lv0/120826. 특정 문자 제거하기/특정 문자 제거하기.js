function solution(my_string, letter) {
    var answer = '';
    for (let ele of my_string){
        if(ele != letter){
            answer += ele;
        }
    }
    return answer;
}