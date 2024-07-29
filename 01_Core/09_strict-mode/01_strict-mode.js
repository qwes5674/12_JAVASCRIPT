// 엄격 모드 

function test(){
    
    x= 10; // 암묵적으로 전역변수가 됨 -> 계발자의 의도와 맞지 않아 var,let을 사용
}

test();

console.log(x);

//Es6에서 도입된 클래스와 모듈 기본적으로 strict mode가 적용된다.
