function solution(num1, num2) {
  var answer = 0;
  answer = ~~((num1 / num2) * 1000); //틸트연산자 -> 정수 부분
  return answer;
}
