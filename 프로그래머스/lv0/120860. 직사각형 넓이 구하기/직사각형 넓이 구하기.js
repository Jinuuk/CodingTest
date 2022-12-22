function solution(dots) {
    let x = [];
    let y = [];
    dots.forEach(ele=>{
        x.push(ele[0]);
        y.push(ele[1]);
    })
    x.sort((a,b)=>a-b);
    y.sort((a,b)=>a-b);
    return (x[2]-x[0])*(y[2]-y[0]);
}