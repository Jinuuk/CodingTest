function solution(n) {
    let arr = (n + '').split('');
    arr.sort((a,b) => b - a);
    
    return parseInt(arr.join(''));
}