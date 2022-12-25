function solution(arr1, arr2) {
    var answer = [];
    for(let i = 0; i <= arr1.length - 1; i++){
        let tempArr = [];
        for(let j = 0; j <= arr1[i].length - 1; j++){
            tempArr.push(arr1[i][j] + arr2[i][j]);
        }
        answer.push(tempArr);
    }
    return answer;
}