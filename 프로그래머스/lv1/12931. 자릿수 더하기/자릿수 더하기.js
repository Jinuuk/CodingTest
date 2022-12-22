function solution(n)
{
    let answer = 0;
    let str = n + "";
    for (let ele of str) answer += parseInt(ele);
    
    return answer;
}