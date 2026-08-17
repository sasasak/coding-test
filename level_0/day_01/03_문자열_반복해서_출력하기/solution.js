//  틀린 점 : result의 초깃값 지정을 빈 문자열로 지정하지 않았음 
// console.log 대신 return 값을 작성해 적절한 값 도출 X 

// 새로 알게된 점 : repeat 메서드를 사용해서 반복할 수 있다. - solution2에 작성


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
    let result = '';
    for(let i =0; i<n; i++){
        result += str;
    }
    console.log(result);
});