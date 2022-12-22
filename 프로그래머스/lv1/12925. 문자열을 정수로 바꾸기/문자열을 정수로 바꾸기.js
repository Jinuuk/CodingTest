function solution(s) {
    if (s[0] == '+') return parseInt(s.slice(1,s.length));
    else if (s[0] == '-') return -parseInt(s.slice(1,s.length));
    else return parseInt(s);
}