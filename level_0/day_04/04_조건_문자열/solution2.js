// 다른 사람의 풀이 참고

// ineq(">","<") + eq("=","!") 조합을 그대로 키로 사용
const operations = {
  '>=': (n, m) => n >= m,
  '<=': (n, m) => n <= m,
  '>!': (n, m) => n > m,
  '<!': (n, m) => n < m,
};

function solution(ineq, eq, n, m) {
  const op = operations[ineq + eq];
  return Number(op(n, m));
}