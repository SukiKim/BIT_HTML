// Array
var v1 = new Array(10); //10개짜리 배열
var v2 = new Array();   //빈 배열
var v3 = new Array(1, "ABC", true)  //3개짜리 배열

console.log(typeof v1, typeof v2, typeof v3);   //타입 확인
console.log(v1.length, v2.length, v3.length);   //길이 확인

//리터럴로 생성 -> 추천
var v4 = [];    //빈배열
var colors=["red", "green", "blue", "yellow"];  //4개짜리 배열

console.log(typeof v4, typeof colors);
console.log(v4.length, colors.length);

//기본값으로 채우기
var v5 = new Array(10).fill(1);
console.log(v5);
v5.fill("JS");
console.log(v5);

//객체의 각 요소도 배열처럼 접근 가능 -> Map 형태의 자료형으로 활용 가능
var person = {
    name:"홍길동",
    job:"도적"
};

console.log(person['name'], person['job']);

//자바스크립트의 배열은 인덱스 체크가 엄격하지 않음
var arr = [];
console.log(arr, arr.length);
arr[10] = 10;
console.log(arr, arr.length);

//배열 합치기 : concat
var veges = ["배추", "무", "쪽파"];
var source = ["소금","고추가루","새우젓"];
var ings = veges.concat(source);
console.log(ings);


//join : 특정 문자열 기준으로 배열 요소 합치기 -> 문자열
console.log(ings.join(","), "를 준비해 주세요");

//push, pop -> stack처럼 활용 가능
var fruits = ["바나나", "오렌지","사과","망고"];
console.log(fruits);
fruits.push("키위");
console.log("push", fruits);
console.log("pop", fruits.pop());//마지막에서 요소 추출
console.log("pop", fruits.pop());
console.log(fruits);

//shift with push -> Queue처럼 활용 가능
fruits.push("수박");
console.log("push", fruits);
console.log("shift", fruits.shift());   //맨 앞쪽에서 요소 추출
console.log("shift", fruits.shift());
console.log(fruits);

//reserve, slice
console.log("original", ings);
ings.reverse(); //반전
console.log("reverse", ings);
var sliced = ings.slice(1, 2)   //잘라내기
console.log("sliced", sliced);
console.log("original", ings);
ings.sort();
console.log("sorted", ings);

//String.split -> 문자열을 구분자를 기준으로 배열로 변환
var str = "JavaScript is something strange";
var chunks = str.split(" ");
console.log(chunks);

for(var i = 0; i<ings.length; i++){
    console.log("재료:", ings[i]);
}

// ES6: forEach
ings.forEach(item => console.log(item));
ings.forEach(function(item){
    console.log(item);
});