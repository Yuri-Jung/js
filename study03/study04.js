console.log("------전역 변수 / 지역 변수 ---------");

// 전역 변수 : 프로그램 전체에서 접근이 가능한 변수. 어디서든 사용가능
// 지역변수 : 코드블럭 내에서 선언되고 사용되고 삭제되는 변수

let gValue = 100;
console.log(`전역변수 : ${gValue}`);

// 전역 변수를 함수 안에서 사용하는 것은 문제 없음
function func1(){
    console.log(`함수 func1에서 사용한 gValue : ${gValue}`);
}
// 지역 변수는 함수(코드블럭) 안에서 선언하고 사용하는 것은 문제 없음
function func2(){
    let lValue = 10;
    console.log(`함수 func2에서 사용한 lValue : ${lValue}`);
}

// 함수 안에서 지역 변수 선언 시 전역 변수와 동일한 이름을 사용하면 지역 변수가 우선 순위가짐.
function func3(){
    let lValue = 10;
    let gValue = 20; //지역변수
    console.log(`함수 func3에서 사용한 lValue : ${lValue}`);
    // 전역 변수와 같은 이름의 지역 변수를 선언했기 때문에 전역 변수보다 우선 순위가 높은
    // 지역 변수를 사용하고 호출하여 사용함.
    console.log(`함수 func3에서 사용한 gValue : ${gValue}`); // 20 출력됨
}

func1();
func2(); //lValue func2에서만 사용가능

// 지역변수를 함수(코드블럭) 밖에서 호출하는 것은 불가능함.
// 지역 변수는 해당 함수(코드 블럭)의 실행이 종료되면 메모리에서 삭제됨.
// console.log(`함수 밖에서 사용한 lValue : ${lValue}`);


func3();
// 특정함수 안에서 전역변수와 같은 이름의 지역변수를 선언했더라도
// 해당함수 밖에서는 지역변수를 사용할 수 없으므로 전역변수가 사용됨.
console.log(`함수 밖에서 사용한 gValue : ${gValue}`); //100으로 출력 전역변수 gValue사용. 같은 게 아님.
// 우리 집 유재석 vs 연예인 유재석












