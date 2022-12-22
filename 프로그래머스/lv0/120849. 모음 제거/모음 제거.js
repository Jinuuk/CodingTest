function solution(my_string) {
    let newStr = my_string;
    let vowel = ['a','e','i','o','u'];
    vowel.forEach(ele=>{
       newStr = newStr.replaceAll(ele,'');
    })
    return newStr;
}