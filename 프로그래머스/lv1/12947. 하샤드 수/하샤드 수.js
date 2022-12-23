function solution(x) {
    let arr = (x + '').split('');
    let sum = 0;
    for(let i of arr) sum += parseInt(i);
    
    return x%sum == 0 ? true : false;
}