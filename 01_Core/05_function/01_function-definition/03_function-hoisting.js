// 함수 호이스팅

//함수 참조
console.log(hello);
console.log(hi);

// 함수 호출
console.log(hello("홍길동"));
console.log(hi("홍길동"));

// 함수 선언문
function hello(name){
    return `${name}님 안녕하세요!`;
};

// 함수 표현식
var hi = function(name){
    return `${name} Hi~`;
};