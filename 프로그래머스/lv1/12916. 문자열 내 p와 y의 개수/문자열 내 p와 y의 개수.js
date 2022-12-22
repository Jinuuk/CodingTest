function solution(s){
    let arr = s.toUpperCase().split('');
    arr.sort();
    if (arr.indexOf('P') == -1 && arr.indexOf('Y') == -1) return true;
    else if ((arr.indexOf('P') + 1)*(arr.indexOf('Y') + 1) == 0) return false;
    else return arr.lastIndexOf('P') - arr.indexOf('P') == arr.lastIndexOf('Y') - arr.indexOf('Y') ? true : false;
}