function solution(array) {
    let str = '';
    array.forEach(ele=>{
        str += ele;
    })
    return [...str].filter(ele => ele == String(7)).length;
}