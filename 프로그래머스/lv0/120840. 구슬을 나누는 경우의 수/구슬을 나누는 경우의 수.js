function solution(balls, share) {
    
    return Math.round(factorial(balls)/(factorial(balls-share)*factorial(share)));
    
    function factorial(number){
        let result = 1;
        for(let i = 1; i <= number; i++){
            result *= i;
        }
        return result;
    }
}
