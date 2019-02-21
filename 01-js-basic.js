//한줄 주석
/* 
여러 줄 주석
*/

//내장 객체 consloe
console.log("정보 메세지");
console.debug("디버그 메세지");
console.error("error 메세지");
console.warn("경고 메세지");

console.log("Hello, JavaScript");

//객체의 속성에 접근할 때는 .으로 접근할 수 있다.
console.log(Math.PI, Math.max(1,2,3,4,5));
console.log("------------");

//변수 할당 :let, const, (<- ES6) var
var testVar = 10;   //ES6 이전 버전: WEB에서는 당분간 이것만 사용합시다.
let testLet = "let";    // mutable -> 재할당 가능
const testConst = "const";  //imuteable -> 재할당 불가, 선언과 동시에 할당


//변수 변경
testVar = "var changed";    //var 변경
testLet = "let changed";    //let 변경
// testConst = "const changed" //const 변경 ->  error

//자바 스크립트는 동적 타이핑 언어 -> 할당시 변수 타입이 결정
var v = "String";   //<-스트링으로 할당
console.log(v, typeof v);
v = 2019;
console.log(v, typeof v);
    
