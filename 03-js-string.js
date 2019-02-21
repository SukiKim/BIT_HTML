//String 타입
var s1 = "Modern JavaScript";   //리터럴 타입
var s2 = String("Morder JavaScript");   //String 객체
console.log(typeof s1, typeof s2);

//property: length -> 길이 반환
console.log(s1, "length=", s1.length);

//무자열 추출
console.log(s1.charAt(7));  //7번 인덱스의 문자
console.log(s1.substr(7, 10));  //7번 인덱스부터 10글자
console.log(s1.substring(7, 17));   //7번 인덱스부터 17번 인덱스까지의 문자열

console.log(s1.substring(7))    //7번 인덱스부터 끝까지

//검색 메서드
console.log(s1.indexOf("Java"));    //내부에서 Java 검색
console.log(s1.indexOf("Java", 8)); //8번 인덱스부터 Java 검색
console.log(s1.indexOf("java"));    //검색어가 없을 경우 -1
console.log(s1.lastIndexOf("Java"));    //역방향 검색

//문자열 치환
console.log(s1.replace("JavaScript", "ECMAScript"));
console.log(s1);    //원본은 변경 안됨

//좌우 공백문자 제거
console.log("          JavaScript          ".trim());

//String 좀 더 보기
//이스케이프
// \n :  줄바꿈
// \t :  탭
// \' :  문자열 내 작은 따옴표
// \" :  문자열 내 큰 따옴표

var message = 'He said "Hello"';
message = "He said \"Hello\"";

//----------ES6
//  이스케이프
// \'
// \$
var temp = 10;
message = "현재 온도는 " + temp + "도 입니다.";
console.log(message);

//ES6 템플릿 문자열
message = `현재 온도는 ${temp}도 입니다`;
console.log(message);

// 여러 줄 문자열을 만들 때
message = "예전에는\n여러 줄 문자열을 만들 때\n힘들었어요";
console.log(message);
message = `ES6에서는
아주 쉽게
만들 수 있습니다.`;
console.log(message);

