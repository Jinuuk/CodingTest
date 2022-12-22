function solution(board) {
  var answer = 0;
  board.forEach((row,i) => {
      row.forEach((ele,j) => {
          if (ele == 1) {
            row[j-1]??1 == 1 ? null : row[j-1] = 2;
            row[j+1]??1 == 1 ? null :  row[j+1] = 2;
            if(board[i-1] != undefined){
              board[i-1][j]??1 == 1 ? null :  board[i-1][j] = 2;
              board[i-1][j-1]??1 == 1 ? null :  board[i-1][j-1] = 2;
              board[i-1][j+1]??1 == 1 ? null :  board[i-1][j+1] = 2;
            }
            if(board[i+1] != undefined){
              board[i+1][j]??1 == 1 ? null :  board[i+1][j] = 2;
              board[i+1][j-1]??1 == 1 ? null :  board[i+1][j-1] = 2;
              board[i+1][j+1]??1 == 1 ? null :  board[i+1][j+1] = 2;
            }
          }
      })
  })
  board.forEach(row => row.forEach(ele => ele == 0  ? ++answer : null ));
  return answer;
}