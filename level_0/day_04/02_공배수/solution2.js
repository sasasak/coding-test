// + 연산자를 통해 boolean 값을 숫자(1 또는 0)로 변환하는 방식
const solution = (number, n, m) => +!(number % n || number % m);