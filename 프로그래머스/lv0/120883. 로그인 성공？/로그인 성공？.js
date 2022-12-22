function solution(id_pw, db) {
  var answer = '';
  for (let i = 0; i<=db.length - 1; i++){
    if(db[i][0] == id_pw[0]){
      db[i][1] == id_pw[1] ? answer = 'login' : answer = 'wrong pw';
      break;
    }
    answer = 'fail';
  }
  return answer;
}