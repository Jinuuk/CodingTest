function solution(quiz) {
    var answer = [];
    quiz.forEach(ele=>{
        let arr = ele.split(' = ');
        let arr2 = arr[0].split(' ');
        if (arr2[1] == '+') parseInt(arr2[0]) + parseInt(arr2[2]) == parseInt(arr[1]) ? answer.push('O') : answer.push('X');
        else parseInt(arr2[0]) - parseInt(arr2[2]) == parseInt(arr[1]) ? answer.push('O') : answer.push('X');
    })
    return answer;
}