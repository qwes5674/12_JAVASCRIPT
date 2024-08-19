// 배열 구조 분해 할당
// 구조 분해 할당을 사용해 배열을 변수로 '분해'해서 연결 할 수 있다.

let nameArr = ["Gildong", "Hong"];

// let [firstName, lastName] = nameArr;
// let [firstName, lastName] = ["Gildong", "Hong"];

// let firstName = nameArr[0];
// let lastName = nameArr[1];

console.log(firstName);
console.log(lastName);

// 반환값이 배열인 split 메서드
let arr = "Saimdang Shin".split('');

console.log(arr);

let [firstName2,lastName2] = "Saimdang shin".split('');

console.log(firstName2);
console.log(lastName2);