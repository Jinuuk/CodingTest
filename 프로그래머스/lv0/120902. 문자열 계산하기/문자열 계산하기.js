function solution(my_string) {
    let arr = my_string.split(' ');
    while(arr.length != 1){
        if(arr[1] == '+'){
            arr.splice(0,3,parseInt(arr[0]) + parseInt(arr[2]));
        }else{
            arr.splice(0,3,parseInt(arr[0]) - parseInt(arr[2]));
        }
    }
    return arr[0];
}