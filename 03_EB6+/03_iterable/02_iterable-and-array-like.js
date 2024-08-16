// 이터러블 : 메서드 Symbol.iterator가 구현된 객체
// 유사배열 : 인덱스와 length 프로퍼티가 있어서 배열처럼 보이는 객체

// 이터러블과 유사배열은 배열 메서드를 사용할 수 없다.
// => 그때 Array.from을 이용해서 배열로 변경 가능하다.

// 유사배열
let arrayLike = {
     0:"배열인듯" , 
     1:"배열아닌" ,
     2:"배열같은" , 
     3:"너"  ,
     length : 3,
}

let array = [1,2,3,4,5];
console.log(array.pop());
console.log(array);

// arrayLike.app is not a function
// console.log(arrayLike.pop()); // 배열 메서드 사용 불가

let arr = Array.from(arrayLike);
console.log(arr.pop());
console.log(arr);