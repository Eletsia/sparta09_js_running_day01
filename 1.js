// ## 1. 빈칸 채우기 문제

// 아래 내용에서 빈 칸에 들어갈 항목들을 채워주시고 왜 그렇게 생각했는지
// 본인의 생각을 간단하게 1줄 정도 같이 적어주세요.

javascript
1. 
let uninitialized;
console.log(uninitialized); // 결과값 < undefined >
// let이 선언만되고 값이 지정되지않음음


2. 
const apple = "사과";
apple = "바나나"; // TypeError: Assignment to constant variable
// const는 재 할당 되지않음

3. 
let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 < 빈칸 >
// 19 3번째 인덱스 값이 19이다

4.
let mySchedule = "";
console.log(mySchedule || false); // false 빈칸이므로 false 리턴 
console.log(!!mySchedule); // true 이중부정
//