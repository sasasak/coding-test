const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin, // 표준 입력(키보드 입력)을 받음
    output: process.stdout // 표준 출력(터미널 화면 출력)을 담당
});

/* 모듈 불러오기 및 인터페이스 생성
require('readline') : Node.js의 입출력 전용 readline을 가져옴
createInterface() : 키보드 입력(process.stdin)과 화면 출력(process.stdout)을 연결하는 입출력 통로(rl)를 만듦
*/ 

let input = [];

rl.on('line', function (line) {
    input = [line];

/* 한 줄씩 입력받는 이벤트
rl.on('line', ...) : 사용자가 입력을 마치고 Enter키를 누를 때마다 동작하는 이벤트
line : 사용자가 입력한 한 줄의 텍스트가 문자열 형태로 들어옴(예: "abcd" 입력 후 Enter -> line : "abce")
input = [line] : 받아온 문자열을 input 이라는 배열의 첫 번째 요소로 넣음 
*/
}).on('close',function(){
    let str = input[0];
});

/* 입력이 끝난 후 처리하는 이벤트 
on('close', ...) : 모든 입력이 끝났을 때(입력 스트림이 닫힐 때) 실행되는 이벤트 
str = input[0] : 배열에 저장해둔 입력값 중 첫 번째 문자열을 가져와 str 변수에 저장

실제 정답을 구하는 로직과 console.log()의 출력은 모두 이 close 콜백 함수 내에서 작성됨
*/

/* 요약 
키보드로 입력받을 준비를 하고(createInterface),
엔터를 치면 값을 배열에 담아두었다가(line)
입력이 끝나면 배열에서 첫 번째 값을 꺼내 str에 넣는다(close) 

=> 데이터 수집용 기본 템플릿 
*/