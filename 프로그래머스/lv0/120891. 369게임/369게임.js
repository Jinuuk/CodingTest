function solution(order) {
    var answer = 0;
    order = '' + order;
    let cnt = order.length;
    let arr = ['3','6','9'];
    arr.forEach(ele => {
        order = order.replaceAll(ele,'');
    })
    return cnt-order.length;
}