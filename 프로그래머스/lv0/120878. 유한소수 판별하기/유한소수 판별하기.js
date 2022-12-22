function solution(a, b) {
  var answer = 0;
    for(let i = b; i >= 2 ; i--){
      if(a%i == 0 && b%i == 0){
          a = a/i;
          b = b/i;
      }
    }
    let insu = [];
    for(let i = 1; i <= b; i++) b%i == 0 ? insu.push(i) : null;
    if(insu.length == 1 && insu[0] == 1) answer = 1;
    else {
      let soinsu = [];
      insu.forEach(ele=>{
        let arr = [];
        for(let i = 1; i <=ele; i++) ele%i == 0 ? arr.push(i) : null;
        arr.length == 2 ? soinsu.push(ele) : null;
      })
      soinsu.join('') == '2' || soinsu.join('') == '5' || soinsu.join('') == '25' ? answer = 1 : answer = 2;
    }
    return answer;
}