function solution(s) {
    let arr = s.split('');
    
    arr.sort((a,b) => {
        if(a > b) return -1;
        else return 1;
    });
    
    return arr.join('');
}