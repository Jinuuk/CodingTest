function solution(my_string, num1, num2) {
    var answer = '';
    let arr = [...my_string];
    
    let letter1 = arr[num1];
    let letter2 = arr[num2];
    
    arr[num1] = letter2;
    arr[num2] = letter1;
    
    arr.forEach(ele=>{
        answer += ele;
    })
    return answer;
}