function solution(numbers) {
    var answer = 0;
    let sum = 0;
    numbers.forEach(ele=>{
        sum += ele;
    });
    answer = sum/numbers.length;
    return answer;
}