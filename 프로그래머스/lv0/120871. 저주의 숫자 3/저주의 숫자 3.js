function solution(n) {
    let arr = [];
    let i = 1;
    while(arr.length != 100){
        i%3 != 0 && String(i).indexOf('3') == -1 ? arr.push(i) : null;
        i++;
    }
    return arr[n-1];
}