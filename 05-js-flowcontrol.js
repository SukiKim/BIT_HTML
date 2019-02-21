// for, while 버전 각각
//문제 1. 구구단 2단 ~ 9단
//문제 2. 역삼각형 출력 
/*


*****
****
***
**
*

*/

for(var i = 2; i<=9; i++){
    for (var j = 1; j<=9;j++){
        process.stdout.write(i + " * " + j +  " = " + i*j + "\t");
    }
    console.log();
}
console.log();

var i = 2;
while(i<=9){
    var j = 1;    
    while(j<=9){
        process.stdout.write(i + " * " + j +  " = " + i*j + "\t");
        j++;
    }
    i++;
    console.log();
}


for(var i = 5; i>=1; i--){
    for(var j = 0; j<i; j++){
        process.stdout.write("*");
    }
    console.log();
}
console.log();

var i = 5;
while(i>=1){
    var j = 0;
    while(j<i){
        process.stdout.write("*");
        j++;
    }
    i--;
    console.log();
}