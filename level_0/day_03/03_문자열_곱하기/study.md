# ✍️ 학습 및 오답 노트

## ❌ 처음에 실수했던 부분

- 처음엔 repeat 메서드를 떠올리지 못하고 for 문을 이용해서 연결해야 하나? 싶었는데 문자열을 곱하는 메서드를 찾아보고 알 수 있었다.

---

## 💡 새로 알게 된 점

- **`String.prototype.repeat(k)`**: JavaScript(ES6+)에서는 문자열 뒤에 `.repeat(k)`를 붙여 `k`번 반복된 새 문자열을 바로 만들 수 있다.
- `k = 0`이면 빈 문자열 `""`을 반환하고, 소수점은 자동 내림 처리된다.
- 음수나 `Infinity`를 인자로 넣으면 `RangeError`가 발생하므로 주의해야 한다.

---

## 🔍 풀이 접근법 및 성능 비교

### 1. `for` 문 활용 방식

```javascript
function solution(my_string, k) {
  let result = "";
  for (let i = 0; i < k; i++) {
    result += my_string;
  }
  return result;
}
```

- **단점**: 코드가 길어지고 가독성이 떨어지며, 매 반복마다 문자열 할당/연결이 발생한다.

### 2. `repeat()` 메소드 활용 방식 (선택한 풀이)

```javascript
function solution(my_string, k) {
  const result = my_string.repeat(k);
  return result;
}

// 화살표 함수 한 줄 축약형
const solution = (my_string, k) => my_string.repeat(k);
```

- **장점**: 코드 가독성이 향상되고, 자바스크립트 엔진 내부 최적화가 적용되어 `for` 문보다 성능상 효율적이다.

for문은 중간에 조건문을 넣거나 제어가 필요한 알고리즘에서는 필수이지만, 해당 문제처럼 아무런 조건 없이 단순 반복만 이루어지는 상황에서는 전용 메서드를 사용하는 것이 최선의 방법이다.

---

## 📌 더 공부할 내용

- [ ] ES6+ 화살표 함수(Arrow Function)의 암묵적 반환(Implicit Return) 문법 익히기
- [ ] `RangeError` 등 자바스크립트 주요 예외(Exception) 상황 조건 확인하기
