function solution(absolutes, signs) {
    var answer = 0;
    signs.forEach((ele,i) => ele ? null : absolutes[i] = -absolutes[i]);
    absolutes.forEach(ele => answer += ele);
    return answer;
}