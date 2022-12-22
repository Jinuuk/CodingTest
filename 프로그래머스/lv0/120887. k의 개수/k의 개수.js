function solution(i, j, k) {
    let str = '';
    for(let l = i; l <= j; l++){
        String(l).indexOf(String(k)) != -1 ? str = str + l : 0;
    }
    return [...str].filter(ele => ele == String(k)).length;
}