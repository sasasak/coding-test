// 다른 사람의 풀이 참고 

function solution(a, d, included) {
    return included.reduce((acc, flag, i) => {
        return flag ? acc + a + d * i : acc
    }, 0)
}

/*
배열.reduce((누적값, 현재원소, 인덱스) => {
    return 새로운_누적값;
}, 초기값);
*/