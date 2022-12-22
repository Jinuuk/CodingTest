function solution(arr) {
    let sum = 0;
    arr.forEach(ele => sum += ele);
    return sum/arr.length;
}