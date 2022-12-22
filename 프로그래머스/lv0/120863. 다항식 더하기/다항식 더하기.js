function solution(polynomial) {
    var answer = '';
    let a = 0;
    let b = 0;
    let arr = polynomial.split(' + ');
    
    arr.forEach(ele => {
        if (ele.includes('x') && ele[0] != 'x') a += parseInt(ele.substring(0,ele.length-1));
        else if (ele.includes('x') && ele[0] == 'x') a += 1;
        else if (!ele.includes('x')) b += parseInt(ele);
    });
    
    if (a == 1 && b != 0) answer = `x + ${b}`;
    else if (a != 0 && b != 0) answer = `${a+'x'} + ${b}`;
    else if (a == 0 && b != 0) answer = `${b}`;
    else if (a == 1 && b == 0) answer = `x`;
    else if (a != 0 && b == 0) answer = `${a+'x'}`;
    
    return answer;
}