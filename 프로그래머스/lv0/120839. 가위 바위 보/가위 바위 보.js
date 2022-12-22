function solution(rsp) {
    var answer = '';
    for(let ele of rsp){
        if(ele == '2'){
            answer += '0';
        } else if (ele == '0'){
            answer += '5';
        } else {
            answer += '2';
        }
    }
    return answer;
}