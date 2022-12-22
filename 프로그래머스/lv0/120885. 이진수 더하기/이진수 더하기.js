function solution(bin1, bin2) {
    var answer = '';
    let sum = Number.parseInt(bin1,2) + Number.parseInt(bin2,2);
    answer += sum.toString(2);
    return answer;
}