function solution(my_string, overwrite_string, s) {
    var answer = 
        my_string.slice(0, s) // 인덱스 0부터 s 전까지(앞부분) 자르기
        + overwrite_string    // 덮어쓸 문자열 연결하기
        + my_string.slice(s + overwrite_string.length); // 덮어쓰기가 끝난 위치부터 끝까지(남은 뒷부분) 자르기
    
    return answer;
}