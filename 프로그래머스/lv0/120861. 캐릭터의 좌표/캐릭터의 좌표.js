function solution(keyinput, board) {
    var answer = [0,0];
    keyinput.forEach(ele=>{
        if(ele == 'right') answer[0] == (board[0]-1)/2 ? 0 : answer[0] += 1;
        else if(ele == 'left') answer[0] == -(board[0]-1)/2 ? 0 : answer[0] -= 1;
        else if(ele == 'up') answer[1] == (board[1]-1)/2 ? 0 : answer[1] += 1;
        else if(ele == 'down') answer[1] == -(board[1]-1)/2 ? 0 : answer[1] -= 1;
    })
    return answer;
}