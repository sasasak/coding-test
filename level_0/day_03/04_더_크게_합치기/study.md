# ✍️ 학습 및 오답 노트

## ❌ 처음에 실수했던 부분

- `ab < ba`, `ab > ba`, `ab === ba` 조건을 각각 `if`, `else if`, `else`로 나누어 과도하게 분기 처리했었다.
- `ab >= ba` 조건 하나로 '크거나 같은 경우'를 한 번에 처리할 수 있음을 놓쳤다.

---

## 💡 새로 알게 된 점

- **`Math.max(x, y)` 활용**: 두 수 중 더 큰 값을 찾을 때 조건문 없이 내장 함수 `Math.max()`를 사용하면 코드가 훨씬 간결해진다. (두 수가 같을 때도 해당 값을 자연스럽게 반환함)

- **템플릿 리터럴(Template Literal)**: `String(a) + String(b)` 대신 `` `${a}${b}` `` 형태를 쓰면 문자열 결합을 더 직관적으로 표현할 수 있다.

---

## 🔍 풀이 접근법 및 성능 비교

### 1. 조건문 단순화(리팩토링)

```js
function solution(a, b) {
  const ab = Number(String(a) + String(b));
  const ba = Number(String(b) + String(a));

  if (ab >= ba) {
    return ab;
  } else {
    return ba;
  }
}
```

장점: ab >= ba 조건 하나로 같은 경우까지 깔끔하게 처리하여 가독성이 좋아졌다.

### 2. Math.max() 활용

```js
function solution(a, b) {
  const ab = Number(`${a}${b}`);
  const ba = Number(`${b}${a}`);

  return Math.max(ab, ba);
}

// 화살표 함수 축약형
const solution = (a, b) => Math.max(Number(`${a}${b}`), Number(`${b}${a}`));
```

장점: if-else 조건문을 완전히 제거하여 가독성이 매우 높아지고 코드가 간결해진다.

## 📌 더 공부할 내용

- [ ] 자바스크립트 Math 객체의 주요 메소드(Math.min, Math.abs, Math.floor 등) 정리하기
