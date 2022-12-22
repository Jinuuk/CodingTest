function solution(n) {
    let list = [];
    for(let i = 1; i <= n; i++){
        if(n%i == 0){
            list.push([i,n/i]);
        }
    }
    return list.length;
}