function solution(numbers) {
    let arr = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    arr.forEach((ele,i)=>{
        numbers = numbers.replaceAll(ele,i);
    })
    return parseInt(numbers);
}