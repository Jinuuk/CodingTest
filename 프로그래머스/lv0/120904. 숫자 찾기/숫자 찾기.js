function solution(num, k) {
    num = ''+num;
    k = ''+k;
    return num.indexOf(k) == -1 ? -1 : num.indexOf(k)+1;
}