function solution(num) {
    var answer = 0;
    let cnt = 1;
    
    while(true){
        if(num == 1) {answer = 0; break;}
        num%2 == 0 ? num = num/2 : num = num*3 + 1;
        if(num == 1) {answer = cnt; break;}
        cnt++;
        if(cnt > 500) {answer = -1; break;}
    }
    return answer;
}