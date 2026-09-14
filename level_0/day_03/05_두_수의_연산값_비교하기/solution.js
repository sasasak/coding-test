function solution(a,b){
    const ab = Number(String(a)+String(b))
    const double_ab = 2 * a * b

    return Math.max(ab, double_ab)
}