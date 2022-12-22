function solution(hp) {
    let cnt = 0;
    let power = [5,3,1];
    for (let i = 0; i <= power.length -1; i++){
        if(hp >= power[i]){
            cnt += Math.floor(hp/power[i]);
            hp = hp - power[i]*Math.floor(hp/power[i]);
        }
    }
    return cnt;
}