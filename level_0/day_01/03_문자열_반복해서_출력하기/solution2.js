// repeat 메서드를 사용해 작성한 풀이 2 - 다른 사람의 정답을 참고해 새로 알게된 내용


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