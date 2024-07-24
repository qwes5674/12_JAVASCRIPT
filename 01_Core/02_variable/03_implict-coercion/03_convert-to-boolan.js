//1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
console.log(Boolean('JavaScript'));  //true
console.log(new Boolean('JavaScript'));  //[Boolean: true]
console.log(Boolean(''));                   // false
console.log(Boolean(1));                    // true
console.log(Boolean(0));                    // false
console.log(Boolean(NaN));                  // false
console.log(Boolean(Infinity));             // true
console.log(Boolean(null));                 // false
console.log(Boolean(undefined));            // false
console.log(Boolean({}));                   // true
console.log(Boolean([]));                   // true