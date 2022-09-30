// console.log("------함수 사용하기------");
//
// function sum(num1,num2) {
//     const a = 10;
//     const b = 20;
//     const result = a + b;
//     console.log(`두 수의 덧셈은 ${result}`);
// }
//
// sum(10,20);
// add1();
// add2(10,20);
//
// let result3 = add3();
// console.log(`3번 두 수의 덧셈은 ${result3}입니다`);
//
// let result4 = add4(10,30);
// console.log(`4번 두 수의 덧셈은 ${result4}입니다`);
//
// // 함수의 4가지 형태
// //1. 매개변수x, 반환값x
// //2. 매개변수o, 반환값x
// //3. 매개변수x, 반환값 o
// //4. 매개변수o, 반환값0
//
// function add1(){
//     const a = 10;
//     const b = 20;
//     const c =(a+b);
//     console.log(`두 수의 덧셈은 ${c}입니다`);
// }
//
// function add2(a,b){
//   const c = a+b;
//   console.log(`두 수의 덧셈은 ${c}입니다`);
// }
//
// function add3(){
//     const a =10;
//     const b = 20;
//     const c = a + b;
//     return c;
// }
//
// function add4(a,b){
//     const c = a + b;
//     return c;
// }

// 즉시 실행함수
// add1();
// (function (){
//
// })

// console.log("-----------------------");

// var btn = document.getElementById("aaa");
// btn.addEventListener("click",function (){
//     alert("aaaaa");
// });

// console.log(`즉시실행함수`);
// 익명함수(=콜백함수) : 이름이 없어서 호출(실행)이 불가한 함수,
//          매개변수로 함수를 사용시 사용 => 이 때 콜백함수라고 부름
// 변수에 익명함수를 대입하여 변수명으로 익명 함수를 호출할 수 있다
// 즉시 실행 함수 (= 일회용 함수) : 딱 한 번만 실행. 프로그램 실행 시 단 한번만 실행해야 되는 부분을 실행하기 위해 사용
// const noname = function (num1,num2){
//     const a = 10;
//     const b = 20;
//     console.log(`두 수의 합은 ${a + b}`);
// }
//이름 두 가지
// noname(10,30);
//
// function fun(){};

// (function (){
//     const a = 10;
//     const b = 20;
//     const c = a + b;
//     console.log(c);
// }());

// 문제 6) 문제 3의 소스코드를 함수를 사용하는 방식으로 수정하세요
// 1. 사용자 입력 부분을 함수로 생성, quiz6Input
// 2. 3의 배수를 계산하는 부분을 함수로 생성 quiz6Cal
// quiz6Input();

//여기서부터 주석풀어라잉
// let quiz6InputNum = quiz6Input();
// console.log(quiz6InputNum);
//
// quiz6Cal(quiz6InputNum);
//
// function quiz6Input(){
//     let num=prompt("몇 가지의 3의 배수를 찾을까요?");
//     return num;
// }
//
// function quiz6Cal(num) {
//     let count = 0;
//     for(let i=1; i<num; i++){
//
//         if(i%3==0){
//             document.write(`\t ${i}\t`);
//             count++;
//         }
//     }
//     document.write(`${num}까지 3의 배수의 개수 : ${count}`);
// }


//가져온 친구들
// let num=prompt("몇 가지의 3의 배수를 찾을까요?");
//
// let count = 0;
// for(let i=1; i<num; i++){
//
//     if(i%3==0){
//         document.write(`\t ${i}\t`);
//         count++;
//     }
// }
// document.write(`<p>${num}까지 3의 배수의 개수 : ${count}</p>`);


//문제7 ) 문제 4의 소스코드를 함수로 사용하는 방식으로 수정하세요
// 1. money, coffee, price의 초기값을 설정하는 함수 생성 quiz7Setup
// 2. 커피 판매 부분을 함수로 생성 quiz7CoffeeSale





// quiz7Setup();
// let quiz7 = quiz7Setup();
// let money7 = quiz7.money;
// let cAmount7 = quiz7.cAmount;
// quiz7End = quiz7CoffeeSale(money7,cAmount7);
// console.log(quiz7End);


function quiz7Setup(){
    let money = prompt("가지고 있는 금액 입력하세요");
    let coffee = 300;
    let cAmount = 10;

    return { 'money' : money, 'coffee' : coffee, 'cAmount' : cAmount };
};

function quiz7CoffeeSale(money7,cAmount7){
    for(let i=1; ; i++){
        if(money7>=300) {
            if (cAmount7 <= 0) {
                alert("커피가 다 팔렸습니다")
                break;
            }
            alert("커피를 한 잔 판매합니다");
            cAmount7--;
            money7=money7-300;
            alert(`남은 커피${cAmount7}잔`);
        }
        else{
            alert("돈이 부족합니다");
            break;
        }
    }
}

let quiz7 = quiz7Setup();
let money7 = quiz7.money;
let cAmount7 = quiz7.cAmount;

quiz7CoffeeSale(money7,cAmount7);


// let money = prompt("가지고 있는 금액 입력하세요");
// let coffee = 300;
// let cAmount = 10;
//
// for(let i=1; ; i++){
//     if(money>=300) {
//         alert("커피를 한 잔 판매합니다");
//         cAmount--;
//         alert(`남은 커피${cAmount}잔`);
//
//         if (cAmount == 0) {
//             alert("커피가 다 팔렸습니다")
//             break;
//         }
//     }
//     else{
//        alert("돈이 부족합니다");
//        break;
//     }
// }




//문제8) 문제 5의 소스코드를 함수로 사용하는 방식으로 수정하세요
// 1. 입금부분을 함수로 생성 quiz8InMoney
// 2. 예금 확인 부분을 함수로 생성 quiz8CheckMoney
// 3. 출금 부분을 함수로 생성 quiz8OutputMoney



// let account = 0;
// let money = 0;
// let minus = 0;
//
// for(;true;) {
//
//     let menu = prompt(`안녕하세요 java505 은행입니다
//     1: 입금, 2: 예금 확인, 3: 출금, 0: 종료`);
//     if (menu == 0) {
//         alert("프로그램을 종료합니다");
//         break;
//     }
//     else if(menu == 1){
//         quiz8InMoney();
//     }
//     else if(menu == 2){
//         quiz8CheckMoney();
//
//     }
//     else if(menu == 3){
//         quiz8OutputMoney();
//     }
// }
//
// function quiz8InMoney(){
//     money = prompt("금액을 입력해주세요");
//     account+=Number(money);
//     console.log(`계좌에 총 ${account}원이 들어있습니다`);
// }
//
// function quiz8CheckMoney(){
//     console.log(`계좌에 들어있는 잔고는 ${account}원 입니다`);
// }
//
// function quiz8OutputMoney(){
//     minus = prompt("원하시는 금액을 입력해주세요");
//     if(minus>account){
//         console.log(`${account}원이 출금되었습니다.`);
//         account=0;
//         continue;
//     }
//     else{
//         console.log(`${minus}원이 출금되었습니다.`);
//         account-=minus;
//     }
// }