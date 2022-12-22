function solution(numbers, direction) {
    var answer = [];
    if(direction == 'right'){
        let poppedElement = numbers.pop();
        numbers.unshift(poppedElement);
        answer = [...numbers];
    } else {
        let shiftedElement = numbers.shift();
        numbers.push(shiftedElement);
        answer = [...numbers];
    }
    return answer;
}