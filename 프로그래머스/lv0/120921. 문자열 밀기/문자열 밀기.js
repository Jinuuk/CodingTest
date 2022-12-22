function solution(A, B) {
    var answer = -1;
    let arrA = A.split('');
    
    if(A == B) return answer = 0;
    
    for(let i = 1; i <= arrA.length; i++){
        arrA.unshift(arrA.pop());
        arrA.join('') == B ? answer = i : null;
    }
    return answer;
}