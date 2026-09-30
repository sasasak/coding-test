// 다른 사람 풀이 참고

function solution(a,b,c){
    const distinctCount = new Set([a,b,c]).size;
    const sum = a+b+c;
    const sumSquare = a**2 + b**2 + c**2;
    const sumCube = a**3 + b**3 + c**3;

    if(distinctCount === 3) return sum; // 다 다른 경우 
    if(distinctCount === 1) return sum * sumSquare * sumCube // 다 같은 경우 
    return sum * sumSquare; // 두 개만 같은 경우 
}