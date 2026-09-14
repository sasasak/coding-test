function solution(a,b){
    const ab = Number(`${a}${b}`);
    const ba = Number(`${b}${a}`);

    return Math.max(ab, ba);
}