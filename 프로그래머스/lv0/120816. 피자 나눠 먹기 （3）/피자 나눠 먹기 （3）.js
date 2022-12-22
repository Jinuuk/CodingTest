function solution(slice, n) {
  var answer = 1;
  for(let pizza = 1; pizza <= 50; pizza++){
    if(slice*pizza/n < 1){
      answer++;
    } else if (slice*pizza/n  == 1) {
      answer = pizza;
    }
  }
  return answer;
}