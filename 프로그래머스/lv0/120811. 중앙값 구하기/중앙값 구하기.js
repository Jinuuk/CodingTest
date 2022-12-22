function solution(array) {
  var answer = 0;
  array.sort((a,b)=>{
    return a-b;
  })
  answer = array[(array.length-1)/2];
  return answer;
}