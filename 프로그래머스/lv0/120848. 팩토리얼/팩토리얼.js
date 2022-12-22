function solution(n) {
    let i = 1;
    while(true){
        let iFac = 1;
        for (let j = 1; j<=i; j++){
            iFac *= j;
        }
        if(iFac > n) break;
        i++
    }
    return i - 1;
}