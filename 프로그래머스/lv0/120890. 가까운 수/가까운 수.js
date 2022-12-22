function solution(array, n) {
    array.sort((a,b)=>a-b);
    arr1 = array.filter(ele => ele <= n);
    arr2 = array.filter(ele => ele > n);
    
    if (arr1.length == 0) return arr2[0];
    if (arr2.length == 0) return arr1[arr1.length-1];
    
    return n - arr1[arr1.length-1] <= arr2[0] - n ? arr1[arr1.length-1] : arr2[0];
}