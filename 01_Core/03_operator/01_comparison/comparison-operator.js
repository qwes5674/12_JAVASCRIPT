//비교 연산자
/* 
비교 연산자 좌항과 우항의 피연산자를 비교한 다음 그 결과를 boolean 값으로 반환한다.
if, for과 같은 제어문의 조건식에서 주로 사용한다.
*/

/* 
동등/일치 비교 연산자
동등 비교와 일치 비교는 비교화는 엄격성의 정도가 다르다.
동등 비교 (==, != ) 연산자는 먼저 암묵적 타입 변환을 통해 타입을 일치시킨 후 같은 값인지 비교
일치 비교(===, !==) 연산자는 타입과, 값이 모두 일치하는지 비교
*/

// 숫자 1과 문자 '1', ture 비교
// 동등비교
console.log(`1 == '1' : ${ 1 == '1'}`);
console.log(`1 == true : ${1 == true}`);

//일치비교
console.log(`1 === '1' : ${ 1 === '1'}`);
console.log(`1 === true : ${1 === true}`);

console.log("==========================");

// null, undefined 비교
console.log(`null == undefined : ${null == undefined}`);
console.log(`null === undefined : ${null === undefined}`);

// NaN 자기자신과 일치하지 않는 유일한 값
console.log(`NaN == NaN : ${NaN == NaN}`);
console.log(`NaN === NaN : ${NaN === NaN}`);

// Number.isNaN() 사용해서 확인해야 한다.
console.log(`Number.isNaN(NaN) : ${Number.isNaN(NaN)}`); // true

// 비교 연산자를 통해 문자열끼리 비교도 가능, 유니코드 순으로 비교한다.

// 대소비교연산자
console.log(`'apple' < 'banana' : ${'apple' < 'banana'}`);
console.log(`'apple' > 'banana' : ${'apple' > 'banana'}`);
console.log(`'cat' < 'Zoo' : ${'cat' < 'Zoo'}`);
console.log(`'cat' > 'Zoo' : ${'cat' > 'Zoo'}`);