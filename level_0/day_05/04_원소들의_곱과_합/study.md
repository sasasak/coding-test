# ✍️ 학습 및 오답 노트

## ❌ 처음에 실수했던 부분

- `const`로 선언한 변수를 반복문 안에서 재할당하려 함: `result`, `mul_value`, `plus_value`를 `const`로 선언해놓고 `mul_value *= num_list[i]`, `plus_value += num_list[i]`, `result = 1`처럼 값을 다시 대입하려 해서 에러 발생. 값이 반복적으로 바뀌어야 하는 변수는 `const`가 아니라 `let`으로 선언해야 함.
- "합의 제곱"에서 **제곱**을 빼먹음: 문제는 곱과 "합의 제곱"을 비교해야 하는데, 코드는 `mul_value < plus_value`처럼 그냥 합과만 비교함. (`plus_value ** 2`로 제곱해야 정확한 비교가 됨)

## 💡 다시 알게 된 점

- 반복문 안에서 값이 누적·갱신되는 변수는 선언 시점에 `let`을 써야 하며, `const`는 재할당이 필요 없는 값에만 사용해야 함.
- 문제 문장을 코드로 옮길 때 "제곱", "합" 같은 연산 단어를 놓치기 쉬우므로, 코드 작성 후 문제 문장과 코드를 한 줄씩 대조하는 습관이 필요함.
- 단순 비교 후 1/0을 반환하는 로직은 `result` 변수를 따로 두지 않고 삼항연산자로 바로 `return`하면 더 간결해짐.

## 🔍 풀이 접근법 및 성능 비교

```javascript
function solution(num_list) {
  let mul_value = 1;
  let plus_value = 0;

  for (let i = 0; i < num_list.length; i++) {
    mul_value *= num_list[i];
    plus_value += num_list[i];
  }

  return mul_value < plus_value ** 2 ? 1 : 0;
}
```

- 배열을 한 번만 순회하며 곱과 합을 동시에 누적하는 O(n) 방식.
- 마지막에 곱과 "합의 제곱"을 비교해 1 또는 0을 반환.
- 시간 복잡도 O(n), 원소 개수가 최대 10개로 매우 작아 성능상 문제 없음.

## 📌 더 공부할 내용

- [ ] `const`/`let` 선언 시 "이 변수가 반복문 안에서 값이 바뀌는가"를 먼저 체크하는 습관 들이기
- [ ] 코드 제출 전 문제 문장과 코드를 한 줄씩 대조해 연산(제곱, 합, 곱 등) 누락 여부 확인하기
