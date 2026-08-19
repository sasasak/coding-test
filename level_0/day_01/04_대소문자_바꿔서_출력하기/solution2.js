/*
for...in 문을 사용한 풀이 방식 
*/ 

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    let str = input[0];
    let result = '';

    for(let char of str){
        if(char === char.toUpperCase()){
            result += char.toLowerCase();
        }
        else{
            result += char.toUpperCase();
        }
    }
    console.log(result);
});