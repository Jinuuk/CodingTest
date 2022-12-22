function solution(spell, dic) {
    var answer = [];
    let arr = dic.filter(ele => ele.length == spell.length);
    arr.forEach(ele => {
        ele.split('').sort().join('') == spell.sort().join('') ? answer.push(ele) : 0;
    })
    return answer.length != 0 ? 1 : 2;
}