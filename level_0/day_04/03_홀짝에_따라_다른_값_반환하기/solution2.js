// 다른사람 풀이 참고: 수학 공식을 활용한 풀이 - 등차수열의 합, 거듭제곱의 합 공식 활용 
function solution2(n){
    if (n % 2 === 1) {
        // 홀수 n개 합 공식: ((n + 1) / 2)^2
        const k = (n + 1) / 2;
        return k * k;
    } else {
        // 짝수 제곱합 공식: n * (n + 1) * (n + 2) / 6
        return (n * (n + 1) * (n + 2)) / 6;
    }
}