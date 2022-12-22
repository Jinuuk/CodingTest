function solution(s1, s2) {
    var answer = 0;
    s1.forEach(eleOfS1=>{
        s2.forEach(eleOfS2=>{
            if(eleOfS1 == eleOfS2){
                answer++;
            }
        })
    })
    return answer;
}