console.log("=====while문 사용하기====");


// 카운트변수 선언
// while (조건식){
    // 반복 실행될 소스코드
//    카운트 변수의 증감식
// }

let count = 1;

while(count<11){
    console.log(count);
    count++;
}

dan = 5;
count =  1;
while(count<10){
    console.log(`${dan} * ${count} = ${dan * count}`);
    count++;
}

// 문제 구구단 전체 출력을 while문을 사용하여 출력하세요
console.log("구구단 전체 출력")
dan=1;

while(dan<10){
    while(count<10){
        count =1;
        console.log(`${dan} * ${count} = ${dan * count}`);
        count++;
    }dan++;
}

let i =2;

while(i<10){
    console.log(`-----${i}단----`)
    let j=1;
    while(j<10){
        console.log(`${i} * ${j} = ${i * j}`);
        j++;
    }
    i++;
}


console.log("\n-----for문 사용하기----\n");

//1에서부터 10까지 더하기
let sum = 0;
for(let i=1; i<6; i++){
    sum = i + sum;
    console.log(sum)
}

const arr1 = [1,2,3,4,5,6,7,8,9,10];
for(let i =0; i<arr1.length; i++){
    console.log(arr1[i]);
}

//문제2) 배열arr1를 이용하여 1부터 10까지 총합을 구하는 프로그램을 for문을 사용하여 작성하시오.

let sum1 = 0;
for(let i=0; i<arr1.length; i++){
    sum1=sum1+(arr1[i]);
}
console.log(`총합은 ${sum1}입니다`);

//구구단 전체 출력
let dan1 = 0;
let count1 = 0;
for(dan1=1; dan1<10; dan1++){
    console.log(`------${dan1}단-------`)
    for(count1=1; count1<10; count1++)
        console.log(`${dan1} * ${count1} = ${dan1*count1}`);
}

//1부터 1000까지의 합
let i1;
let sum2=0;
for(i1=1; i1<1001; i1++){
    sum2+=i1;
}
console.log(`1부터 1000까지의 합은 ${sum2}입니다`);
console.log();
console.log("break");
for(let i = 0; i<10; i++){
    if(i == 5){
        break;
    }
    else{
        console.log(`현재 i의 값 : ${i}`);
    }
}
console.log();
console.log("continue");
for (let i = 0; i<10; i++){
    if(i==5){
        continue;
    }
    else{
        console.log(`현재 i의 값 : ${i}`)
    }
}

for(let i =2; i<10; i++){
    if(i==5){
       continue;
    }
    for(let j = 1; j<10; j++){
        if(j==5){
            break;
        }
        console.log(`${i} * ${j} = ${i*j}`);
    }
}
//자기 코드블럭에 들어있는 반복문, 가장 가까운 거를 break 시킨다.










