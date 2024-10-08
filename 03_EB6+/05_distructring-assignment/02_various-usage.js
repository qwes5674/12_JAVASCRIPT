
// 객체
let user = {};

// 할당 연산자 우측엔 모든 이터러블이 올 수 이쏘, 할당연산자 좌측에는 뭐든지 가능
[user.firstName, user.lastName] = "Gwansoon Yu".split(' ');

console.log(user);

// 변수 교환 용도로도 사용할 수 있다.

let student = "유관순";
let teacher = "홍길동";

// let variable = student;
// student = teacher;
// teacher = variable;

console.log(student);
console.log(teacher);

[student,teacher] = [teacher, student]

console.log(student);
console.log(teacher);

// rest parameter ... 나머지 요소를 가져오는 방법

let [sign1, sign2, ...rest] = ["양자리","황소자리","쌍둥이자리","게자리","사자자리"]

console.log(sign1);
console.log(sign2);