function solution(n) {
  var answer = 0;
  for(let i=1; i<=100; i++){
    if(Number.isInteger((6/n)*i)){
      answer = i;
      return answer;
    }
  }
}