function ageCalc(){
    let currentYear = 2024;
    let birthYear = prompt("태어난 연도를 입력하세요", "yyyy");
    let age;
    let result;
    if(isNaN(birthYear)){
        result = "<h2>입력값이 없어 나이를 계산 할 수 없음</h2>"
    }else if(birthYear == null){    //취소 누름
        result = "<h2>취소를 했습니다.</h2>";

    }
    else{
        age = currentYear-birthYear;
        result = "<h2>당신의 나이는" + age + "세 입니다.</h2>";
        
    }document.querySelector("#result").innerHTML = result;
}