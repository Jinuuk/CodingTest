function solution(s) {
    let arr = [];
    s.split(' ').forEach(ele => arr.push([...ele]));
    arr.forEach((ele,i) => {
        let str = '';
        for(let i = 0; i <= ele.length - 1; i++) str += i%2 == 0 ? ele[i].toUpperCase() : ele[i].toLowerCase();
        arr[i] = str;
    })
    return arr.join(' ');
}