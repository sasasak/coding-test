# ✍️ 학습 및 오답 노트

## ❌ 처음에 실수했던 부분

- `eq`의 `"!"`를 부정 연산자로 착각: `!`가 보통 NOT(부정) 의미로 쓰이다 보니, 비교 방향(`<`↔`>`)이 뒤집히는 것으로 오해함. 실제로는 `eq`가 등호 포함 여부만 결정하고, 방향은 `ineq`만이 독립적으로 결정함.
- 4가지 조합(`ineq` × `eq`)을 각각 개별 조건으로 처리해야 한다는 압박에 코드를 억지로 압축하려 함. 조건이 4개로 고정돼 있으면 if-else로 나열하는 것도 충분히 좋은 코드임.

## 💡 새로 알게 된 점

- **문자열 조합을 그대로 키로 활용하기**: `ineq + eq`를 그대로 객체(lookup table)의 key로 사용하면, `"="`/`"!"`를 실제 연산자 기호로 변환하는 삼항연산자 없이도 바로 분기 가능.

```javascript
const operations = {
  ">=": (n, m) => n >= m,
  "<=": (n, m) => n <= m,
  ">!": (n, m) => n > m,
  "<!": (n, m) => n < m,
};
const op = operations[ineq + eq];
```

- **`Number()`로 boolean → 1/0 변환**: `? 1 : 0` 삼항연산자 대신 `Number(true)` / `Number(false)`로 변환하면 의도가 더 명확하게 드러남.
- **함수를 객체의 value로 저장(함수 룩업 테이블 / 전략 패턴)**: 객체는 배열과 달리 문자열 key로 값에 접근하며, 그 값으로 함수를 넣고 바로 꺼내 실행(`op(n, m)`)하는 패턴은 if-else 분기를 줄이는 대표적인 방법.

## 🔍 풀이 접근법 및 성능 비교

### 1. if-else로 조합 나열 (가독성 우선)

```javascript
function solution(ineq, eq, n, m) {
  if (ineq === ">" && eq === "=") return n >= m ? 1 : 0;
  else if (ineq === ">" && eq === "!") return n > m ? 1 : 0;
  else if (ineq === "<" && eq === "=") return n <= m ? 1 : 0;
  else return n < m ? 1 : 0;
}
```

- 장점: 문제 설명을 그대로 따라가서 의도가 명확하고 실수할 여지가 적음.
- 조건이 4개로 고정된 이 문제에서는 오히려 가장 적절한 선택.

### 2. 문자열 조합 + 객체 룩업 테이블 (간결함 우선)

```javascript
const operations = {
  ">=": (n, m) => n >= m,
  "<=": (n, m) => n <= m,
  ">!": (n, m) => n > m,
  "<!": (n, m) => n < m,
};

function solution(ineq, eq, n, m) {
  const op = operations[ineq + eq];
  return Number(op(n, m));
}
```

- 장점: `ineq + eq`를 바로 key로 써서 변환 로직 없이 간결하게 처리.
- 조건 분기가 많아지거나 재사용성이 필요할 때 더 유리한 구조.

## 📌 더 공부할 내용

- [ ] 전략 패턴(strategy pattern) / 함수 룩업 테이블 — if-else를 객체+함수로 대체하는 다른 문제에도 적용해보기
- [x] boolean → number 변환 방식 비교 (`Number()`, `+true`, `? 1 : 0`)의 가독성/관용적 사용 차이

### boolean → number 변환 방식 비교

<details>
<summary>1. Number(result)</summary>

```javascript
Number(true); // 1
Number(false); // 0
```

`Number()`는 이름 그대로 "숫자로 변환하겠다"는 의도가 코드에 그대로 드러남.
가장 명시적이라 읽는 사람이 헷갈릴 일이 없음.

</details>

<details>
<summary>2. +result</summary>

```javascript
+true; // 1
+false; // 0
```

단항 `+` 연산자를 boolean 앞에 붙이면 자동으로 숫자 변환이 일어남 (암묵적 변환).
짧지만 코드만 보면 "왜 `+`가 붙어있지?"라고 의아할 수 있어 의도 파악이 어려운 편.

</details>

<details>
<summary>3. result ? 1 : 0</summary>

```javascript
true ? 1 : 0; // 1
false ? 1 : 0; // 0
```

"참이면 1, 거짓이면 0"이라는 로직이 코드에 그대로 쓰여 있어 이해하기 쉬움.
다른 두 방법보다 코드가 살짝 길어짐.

</details>

| 방법        | 명확성                               | 길이      |
| ----------- | ------------------------------------ | --------- |
| `Number(x)` | 높음 (의도가 이름에 드러남)          | 보통      |
| `+x`        | 낮음 (암묵적 변환이라 모르면 헷갈림) | 가장 짧음 |
| `x ? 1 : 0` | 높음 (로직이 그대로 보임)            | 가장 김   |

실무에서는 `Number()`나 `? 1 : 0`을 더 권장 — `+x`는 짧지만 코드 리뷰할 때 의도 파악이 어려운 스타일.
