function solution(my_string) {
    var answer = '';
    let arr = [...my_string.toLowerCase()];
    arr.sort((a,b)=>{
        if(a>b){
            return 1;
        } else if(a<b){
            return -1;
        } else {
            return 0;
        }
    });
    arr.forEach(ele=>answer+=ele);
    return answer;
}