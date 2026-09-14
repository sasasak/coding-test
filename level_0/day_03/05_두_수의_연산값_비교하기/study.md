# ✍️ 학습 및 오답 노트

## ❌ 처음에 실수했던 부분

- 이전 문제처럼 단순 두 수 비교(`ab` vs `ba`)로 착각하지 않고 문제 조건을 정확히 읽어야 했다.
- `String(a) + String(b)`처럼 명시적 타입 변환 방식에 익숙해져 있어서 템플릿 리터럴 문법을 바로 떠올리지 못했다.

---

## 💡 새로 알게 된 점

- **템플릿 리터럴(Template Literal)**: 백틱(`` ` ``)과 `${}` 표현식을 사용하면 `String(a) + String(b)`보다 훨씬 직관적으로 문자열을 결합할 수 있다. (예: `` `${a}${b}` ``)
- **`Math.max()` 응용**: 단순 두 변수 비교뿐만 아니라 `2 * a * b` 같은 수식 연산 결과와도 직접 비교가 가능하여 조건문(`if-else`) 없이 깔끔하게 처리할 수 있다.

---

## 🔍 풀이 접근법 및 성능 비교

### 1. 명시적 타입 변환 + 변수 할당 방식

```javascript
function solution(a, b) {
  const ab = Number(String(a) + String(b));
  const double_ab = 2 * a * b;

  return Math.max(ab, double_ab);
}
```

- **장점**: 단계별로 변수를 선언하여 디버깅이 쉽고 의도가 명확하다.

### 2. 템플릿 리터럴 + 화살표 함수 방식

```javascript
const solution = (a, b) => Math.max(Number(`${a}${b}`), 2 * a * b);
```

- **장점**: 템플릿 리터럴을 활용해 문자열 결합을 간결하게 표현하고, 한 줄로 깔끔하게 정리된다.

---

## 📌 더 공부할 내용

- [ ] 매번 놓치는 템플릿 리터럴(Template Literal) 문법 확실하게 잡고 가기
- [ ] Day 01~03까지의 '더 공부할 내용' 항목들 모아서 확실하게 정리하기
- [ ] `Math` 객체의 주요 메소드(`Math.max`, `Math.min`, `Math.abs` 등) 복습하기
