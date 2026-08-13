// 해당 문제에서 개선하면 좋을 점 : 템플릿 리터럴 `a = ${a}` 사용
// 틀린 점 : ,로 연결하면 기본적으로 공백이 들어가기 때문에 "a = " 공백을 포함해서 문자열을 지정하는 경우
// 쉼표를 통한 띄어쓰기가 한 번 더 들어가 오답이 됨 

// + 와 , 의 차이 
// 1. 쉼표(,) 연결 : 여러 인자를 전달함. 인자 사이 띄어쓰기 자동 포함 & 원본 데이터 타입 형태 유지
// 2. 더하기(+) 연결 : 문자열 연결 연산자. 다른 타입을 강제로 문자열 변환(형변환)하여 하나로 결합
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let a = Number(input[0]); 
    let b = Number(input[1]);
    console.log("a =",a)
    console.log("b =",b)
});