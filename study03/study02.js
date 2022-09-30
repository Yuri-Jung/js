
//문제3) 숫자를 입력받은 후 1부터그 숫자까지 3의 배수를 모두 화면에 출력합니다.
// 그리고 출력된 3의 배수가총 몇 개 인지 알려주는 프로그램을 작성해주세요

// let arrprompt= prompt("몇 가지의 3의 배수를 찾을까요?");


// for(let i=0; i<arr1.length; i++){
//     arr1[] = prompt();
//     console.log(arr1);
//     if(arr1(i)%3==0){
//     }
// }
// 얘는 되는거..
let num=prompt("몇 가지의 3의 배수를 찾을까요?");

let count = 0;
for(let i=1; i<num; i++){

    if(i%3==0){
        document.write(`\t ${i}\t`);
            count++;
        }
    }
document.write(`<p>${num}까지 3의 배수의 개수 : ${count}</p>`);

//배열
// let num=prompt("몇 가지의 3의 배수를 찾을까요?");
// let arr = new Array();
//
// let count = 0;
// for(let i=1; i <= num; i++){
//     if(i%3==0){
//         arr = i;
//         // console.log(i);
//         console.log(arr);
//         count++;
//     }
// }
// document.write(`${num}까지 3의 배수의 개수 : ${count}`);

// 문제4) 커피 자판 프로그램을 작성하세요
//1. 사용자가 가지고 있는 금액 입력받기
//2. 커피 1잔의 금액은 300원
//3. 자판기에 들어있는 커피의 양은 10개
//4. 커피를 판매할 때마다 1개의 커피가 소비됨
//5. 소지 금액이 부족 시 '돈이 부족합니다'를 출력
//6. 커피가 부족할 경우 '커피가 다 팔렸습니다'출력
//7. 커피 판매 시 '커피를 한 잔 판매합니다'와 커피 재고량 출력
// ex) 커피 한 잔 판매합니다.
//     남은 커피 00잔


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
// 문제 5) 은행 프로그램을 작성하세요
// 1. 프로그램 시작 시 안내 메시지와 메뉴가 출력
//  ex) 안녕하세요 java505 은행입니다.
//  ex) 1: 입금, 2: 예금 확인, 3: 출금, 0: 종료

// 2. 메뉴를 선택하면 해당 기능을 실행
// 3. 메뉴는 기능을 실행 후 계속 출력
// 4. 0 실행 시 '프로그램을 종료합니다.' 출력 후 프로그램 종료
// 5. 1 실행 시 사용자 입력을 통해 금액을 입력 받고 기존 금액에 추가
// 6. 2 실행 시 기존에 저장된 금액을 출력
// 7. 3 실행 시 사용자 입력을 통해 금액을 입력 받고 기존 금액에서 차감
// 8. 기존 금액보다 큰 금액을 출금 시 기존 금액을 0으로 만들고 모든 금액을 출금



// let account = 0;
// let money = 0;
// let minus = 0;
//
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
//        money = prompt("금액을 입력해주세요");
//        account+=Number(money);
//        console.log(`계좌에 총 ${account}원이 들어있습니다`);
//     }
//     else if(menu == 2){
//         console.log(`계좌에 들어있는 잔고는 ${account}원 입니다`);
//
//     }
//     else if(menu == 3){
//         minus = prompt("원하시는 금액을 입력해주세요");
//         if(minus>account){
//             console.log(`${account}원이 출금되었습니다.`);
//             account=0;
//             continue;
//         }
//         else{
//             console.log(`${minus}원이 출금되었습니다.`);
//             account-=minus;
//         }
//     }
// }


//선생님이 푸신거!!!!!!!
//3번
let num = prompt("1부터 몇 까지의 숫자 중 3의 배수로 찾을까요?");
num = Number(num);
let count = 0;
for(let i = 1; i<=num; i++){
    if(i%3==0){
        console.log(i);
        count++;
    }
}
console.log(`${num}까지의 3의 배수 개수 : ${count}`);


//4번
let money = prompt("소지하고 있는 금액을 말하세요 : ");
console.log(`현재 소지한 금액은 ${money}원 입니다`);
let coffee = 0;

while(true){
    console.log("커피를 주문합니다");

    if(money>300){
        if(coffee>0){
            coffee--;
            money -= 300;
            console.log(`커피 한잔 판매합니다`);
            console.log(`현재 남은 커피량 : ${coffee}`);
        }
        else{
            console.log(`커피를 다 팔았습니다`);
            console.log(`영업을 종료합니다`);
            break;
        }
    }
    else{
        console.log(`돈이 부족합니다`);
        break;
    }
}
// for(;;){
//
//    }
//    for문의 무한반복

backMoney = 0;
console.log(`안녕하세요 java은행입니다`);

while(true){
    console.log(`메뉴를 입력해주세요`);
    console.log(`1: 입금, 2: 예금 확인, 3: 출금, 0: 종료`);

    if(menu==1){
        let inMoney = prompt(`입력할 금액을 입력해주세요`);

        if(isNaN(inMoney)){
            
        }
    }
}

















