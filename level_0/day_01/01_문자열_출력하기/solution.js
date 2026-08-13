// 프로그래머스 문제같은 경우 입력을 받아서 변수에 대신 넣어주므로, 
// 입력을 받는 부분은 작성하지 않아도 되며, 필요한 로직만 작성하면 된다. 

// 해당 문제의 경우, 출력하는 코드를 작성하는것이므로
// console.log()를 사용하여 출력하면 된다.

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];

    console.log(str);
});