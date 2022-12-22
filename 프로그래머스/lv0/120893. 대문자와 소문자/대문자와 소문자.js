function solution(my_string) {
    var answer = '';
    for(let ele of my_string){
        ele.toUpperCase() == ele ? answer += ele.toLowerCase() : answer += ele.toUpperCase();
    }
    return answer;
}