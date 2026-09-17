// 직접 풀이 : 직관적, 반복문 풀이 

function solution(n){
    let result = 0;
    if(n%2 === 1){
        // 조건식 개선 가능 : for(let i = 1; i<=n; i+=2;){} 해당 식으로 작성 -> 홀수만 순회 
        for(let i=1; i<=n; i++){
            if(i%2 === 1){
                result += i;
            }
        }
        return result; 
    }
    
    else{
        // 조건식 개선 가능 : for(let i = 2; i<=n; i+=2;){} 해당 식으로 작성 -> 짝수만 순회 
       for(let i=1; i<=n; i++){
            if(i%2 === 0){
                result += i**2;
            }
        }
        return result;
    }

    
}