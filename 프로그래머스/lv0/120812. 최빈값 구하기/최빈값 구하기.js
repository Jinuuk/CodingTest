function solution(array) {
  var answer = 0;

  let newArray = [...new Set(array)];

  let obj = new Object();
  for(ele of newArray){
    obj[ele] = 0;
  }
  obj['-1'] = 0;

  for(elementOfArray of array){
    for (elementOfObj in obj){
      if(elementOfArray == elementOfObj){
        obj[elementOfObj] += 1;
      }
    }
  }
  
  for(ele in obj){
    if(obj[ele]-answer > 0){
      answer = obj[ele];
    } else if (obj[ele] == answer) {
      answer = 0;
    }
  }
  answer = getKeyByValue(obj,answer);
  return parseInt(answer);
}

function getKeyByValue(obj, value) {
  return Object.keys(obj).find(key => obj[key] === value);
}