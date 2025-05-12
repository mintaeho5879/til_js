/**
 * 입력된 매개 변수 만큼 총합계산하기
 * Rest 파라메터 이용하기
 * @param {...number} numbers - 숫자 값
 */
function showTotal(a, b, ...rest) {
  console.log(a);
  console.log(b);
  console.log(rest);
  let total = 0;
  for (let i = 0; i < rest.length; i++) {
    total = total + rest[i];
  }
  return total;
}

const result = showTotal(4, 5, 6, 7, 8, 9, 1, 2, 0);
