# ✍️ 학습 및 오답 노트

## ❌ 처음에 실수했던 부분

배열 순환이면 map을 사용해야한다고 생각했는데 단순히 요소를 하나씩 출력하거나 반복문처럼 돌릴 경우에는 map 보다는 forEach나 for...of를 사용하는 것이 목적에 더욱 적합하다는 것을 알게 됨

---

## 💡 새로 알게 된 점

- split('')은 문자열 메서드이므로 배열인 input에 사용하면 에러가 발생한다.
  - input.split이 아니라 input의 인덱스에 직접 접근해서 사용해야 문자열 메서드로서 작동한다.
  - input[0].split('') 또는 line.split('') 으로 사용하는것이 적절

- map은 배열의 요소들을 순회하며 새로운 배열을 반환(생성)하는 메서드
  - map 안에 console.log를 넣어도 동작은 하지만 말 그대로 새로운 배열을 반환하는 메서드이므로 권장하지 않는 사용방식임

---

## 🔍 풀이 접근법 및 성능 비교

1. forEach

```
str.split('').forEach(char => {
        console.log(char);
    });
```

2. for ... of

```
 for (let char of str) {
        console.log(char);
    }
```

---

## 📌 더 공부할 내용

- [ ] map() 의 적절한 사용법
- [ ] for...in / for...of의 차이점
