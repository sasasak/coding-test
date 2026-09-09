// 다른 사람의 풀이

function solution(str1, str2) {
    return [...str1].map((x, idx) => x + str2[idx]).join("");
}