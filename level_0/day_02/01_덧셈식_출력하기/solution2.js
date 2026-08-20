// 다른 사람 풀이 중에 좋은게 있어서 참고용으로 작성 

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let a, b;

rl.on('line', function (line) {
    // map(Number)를 활용해 입력받은 문자열 배열을 한 번에 숫자 배열로 변환 후 구조 분해 할당
    [a, b] = line.split(' ').map(Number);
}).on('close', function () {
    // 백틱(` `) 템플릿 리터럴을 활용한 깔끔한 출력
    console.log(`${a} + ${b} = ${a + b}`);
});