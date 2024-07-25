// 암묵적 형변환

/* 
자바스크립트 엔진은 boolean 타입이 아닌 값들을 
Truthy 값 (참으로 평가되는 값)
Falsy 값(거짓으로 평가되는 값)
으로 구분된다.
*/

// 'JavaScript -> Truthy 값이기 떄문에 true로 형변환 된것
if('javascript'){
    console.log("if('JavaScript')");
}
if(true) console.log("if(true)");
if(false) console.log("if(false");
if(undefined) console.log("if(undefined)");
if(null) console.log("if(null");
if(0) console.log("if(0)");
if(NaN) console.log("if(Nan)");
if('') console.log("if('')");

//false, undefined, null, 0, Nan, ''(빈문자열) => Falsy 값
// 이외 모든 값은 Truthy 값이다.