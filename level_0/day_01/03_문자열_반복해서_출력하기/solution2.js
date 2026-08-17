// repeat 메서드를 사용해 작성한 풀이 2 - 다른 사람의 정답을 참고해 새로 알게된 내용

/*
- repeat 메서드 
    String.prototype.repeat() : 자바스크립트에 내장된 문자열 메서드 
    지정한 횟수만큼 문자열을 복사, 연결한 새 문자열을 반환 

    자바스크립트는 프로토타입 기반 언어로, 모든 문자열 객체는 String.prototype 이라는 청사진(유전자)을 공유
하며, 청사진 안에 repeat(), slice(), includes() 등의 메서드들이 미리 정의되어있음

    단순히 문자열을 반복하는 경우에는 for문을 사용하는 것보다 repeat() 메서드를 사용하는것이 가독성, 최적화 부문에서 이점을 가짐
*/


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let str = input[0];
    let n = Number(input[1]);
    console.log(str.repeat(n));
});