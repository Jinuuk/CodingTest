function solution(numlist, n) {
  var answer = [];
  let arr = [];
  numlist.sort((a,b) => b-a);
  numlist.forEach(ele => {
    arr.push({
      number : ele,
      distance : Math.abs(ele-n)
    })
  });
  arr.sort((a,b) => a.distance - b.distance);
  arr.forEach(ele => answer.push(ele.number))
  return answer;
}