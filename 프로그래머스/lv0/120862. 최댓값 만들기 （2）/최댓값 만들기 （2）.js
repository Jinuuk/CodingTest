function solution(numbers) {
    var answer = 0;
    numbers.sort((a,b)=>a-b);
    if (numbers[0]*numbers[1] >= numbers[numbers.length-2]*numbers[numbers.length-1]) {
        answer = numbers[0]*numbers[1];
    } else {
        answer = numbers[numbers.length-2]*numbers[numbers.length-1];
    }
    return answer;
}