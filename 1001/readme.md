
다음은 `6장.pdf` 강의 자료를 바탕으로 정리한 `readme.md` 파일입니다.

-----

# 06\. 자바스크립트 언어 (JavaScript Language)

[cite\_start]이 문서는 '명품 웹 프로그래밍' 강의 자료 6장 '자바스크립트 언어'를 바탕으로 핵심 내용을 정리한 문서입니다. [cite: 1, 4]

## 1\. 강의 목표 (Learning Objectives)

  - [cite\_start]자바스크립트 언어의 요소와 구조를 이해합니다. [cite: 7]
  - [cite\_start]자바스크립트 코드를 웹 페이지에 삽입하는 방법을 학습합니다. [cite: 8]
  - [cite\_start]브라우저 출력 및 사용자 입력 방법을 익힙니다. [cite: 9]
  - [cite\_start]데이터 타입과 변수에 대해 이해합니다. [cite: 10]
  - [cite\_start]다양한 연산자, 조건문, 반복문의 종류와 사용법을 익힙니다. [cite: 11, 12, 13]
  - [cite\_start]자바스크립트 함수를 작성하고 활용하는 방법을 학습합니다. [cite: 14, 15]

## 2\. 자바스크립트란? (What is JavaScript?)

[cite\_start]1995년 넷스케이프(Netscape)에서 개발했으며, Netscape Navigator 2.0 브라우저에 최초로 탑재되었습니다. [cite: 19, 20] [cite\_start]웹 프로그래밍의 개념을 창시한 언어이기도 합니다. [cite: 21]

### 특징 (Characteristics)

  - [cite\_start]**HTML 문서에 내장**: `<script>` 태그를 사용하여 HTML 안에 직접 작성할 수 있습니다. [cite: 23, 29]
  - [cite\_start]**인터프리터 언어**: 컴파일 과정 없이 웹 브라우저의 자바스크립트 처리기에 의해 바로 실행됩니다. [cite: 31, 37, 41, 43]
  - [cite\_start]**단순성 및 용이성**: C언어의 구조를 차용하여 문법이 단순하고 배우기 쉽습니다. [cite: 39, 45, 49]

## 3\. 웹 페이지에서 자바스크립트의 역할 (Role of JavaScript in Web Pages)

  - [cite\_start]**사용자 입력 및 계산**: 마우스와 키보드 입력은 오직 자바스크립트로만 처리 가능하며, 계산 기능을 수행합니다. [cite: 56, 60]
  - [cite\_start]**동적 제어**: HTML 태그의 속성, 콘텐츠, CSS 속성 값을 동적으로 변경할 수 있습니다. [cite: 61, 62]
  - [cite\_start]**브라우저 제어**: 브라우저 창의 크기와 모양을 제어하거나 새 창을 열고 닫는 등의 작업을 수행합니다. [cite: 63, 64, 65]
  - [cite\_start]**웹 서버와의 통신**: 웹 애플리케이션 작성이 가능합니다. [cite: 68, 69]
  - [cite\_start]**기타**: 캔버스 그래픽, 로컬/세션 스토리지, 위치 정보 서비스 등 다양한 기능을 제공합니다. [cite: 70]

## 4\. 자바스크립트 코드의 위치 (Where to Place JavaScript Code)

[cite\_start]자바스크립트 코드는 다음 네 가지 위치에 작성할 수 있습니다. [cite: 73]

### 4.1. [cite\_start]HTML 태그의 이벤트 리스너 속성 [cite: 74]

[cite\_start]HTML 태그 내 `onclick`, `onmouseover` 같은 이벤트 리스너 속성에 직접 코드를 작성할 수 있습니다. [cite: 78, 79, 84]

```html
[cite_start]<img src="apple.png" onmouseover="this.src='banana.png'" onmouseout="this.src='apple.png'"> [cite: 103, 105]
```

### 4.2. [cite\_start]`<script>` 태그 [cite: 75]

[cite\_start]`<head>`나 `<body>` 태그 내 어디든 `<script>`와 `</script>` 사이에 코드를 작성할 수 있으며, 여러 번 삽입이 가능합니다. [cite: 116, 118, 119]

```html
<head>
    <script>
        function over(obj) {
            [cite_start]obj.src="media/banana.png"; [cite: 135]
        }
        function out(obj) {
            [cite_start]obj.src="media/apple.png"; [cite: 138]
        }
    </script>
</head>
<body>
    [cite_start]<img src="media/apple.png" onmouseover="over(this)" onmouseout="out(this)"> [cite: 149, 150, 151]
</body>
```

### 4.3. [cite\_start]외부 자바스크립트 파일 [cite: 76]

  - [cite\_start]확장자가 `.js`인 별도 파일에 자바스크립트 코드만 저장합니다. [cite: 158, 159, 160]
  - [cite\_start]`<script>` 태그의 `src` 속성을 이용해 외부 파일을 불러와 여러 웹 페이지에서 재사용할 수 있습니다. [cite: 161, 163, 164]

<!-- end list -->

```html
function over(obj) {
    [cite_start]obj.src="media/banana.png"; [cite: 172]
}
function out(obj) {
    [cite_start]obj.src="media/apple.png"; [cite: 180]
}

[cite_start]<script src="lib.js"></script> [cite: 191]
```

### 4.4. [cite\_start]URL 부분 [cite: 77]

[cite\_start]`<a>` 태그의 `href` 속성 값으로 `javascript:` 프로토콜을 사용하여 코드를 작성할 수 있습니다. [cite: 214, 216]

```html
[cite_start]<a href="javascript:alert('클릭하셨어요?')">클릭해보세요</a> [cite: 221, 222]
```

## 5\. 입출력 (Input/Output)

### HTML 콘텐츠 출력 (Outputting HTML Content)

[cite\_start]`document.write()` 또는 `document.writeln()` 함수를 사용하여 웹 페이지에 직접 HTML 콘텐츠를 출력할 수 있습니다. [cite: 228, 230, 233] [cite\_start]`writeln()`은 출력 끝에 `\n`을 덧붙이지만, 줄바꿈이 되지는 않습니다. [cite: 234, 236]

### 다이얼로그 (Dialogs)

  - [cite\_start]**`prompt()`**: 사용자에게 문자열 입력을 요청하는 다이얼로그를 띄웁니다. [cite: 262, 263, 264]
  - [cite\_start]**`confirm()`**: '확인'/'취소' 버튼이 있는 다이얼로그를 띄우고, 사용자의 선택에 따라 `true` 또는 `false`를 반환합니다. [cite: 281, 282, 284]
  - [cite\_start]**`alert()`**: '확인' 버튼만 있는 경고창을 띄워 메시지를 전달합니다. [cite: 297, 298, 299]

## 6\. 기본 문법 (Basic Syntax)

### 식별자 (Identifiers)

[cite\_start]변수, 상수, 함수 등의 이름을 식별자라고 합니다. [cite: 307]

  - **규칙**:
      - [cite\_start]첫 글자는 알파벳(A-Z, a-z), 밑줄(`_`), `$` 문자만 가능합니다. [cite: 309]
      - [cite\_start]두 번째 글자부터는 알파벳, 밑줄(`_`), 숫자(0-9), `$` 문자를 사용할 수 있습니다. [cite: 310]
      - [cite\_start]대소문자를 구분합니다 (`myHome`과 `myhome`은 다름). [cite: 311, 312]
      - [cite\_start]`if`, `for` 등 예약어는 사용할 수 없습니다. [cite: 313, 314]

### 문장 및 주석 (Statements & Comments)

  - [cite\_start]**문장**: 자바스크립트 프로그램의 기본 단위이며, 세미콜론(;)으로 문장을 구분합니다. [cite: 320, 321]
  - **주석**:
      - [cite\_start]`//`: 한 줄 주석 [cite: 330]
      - [cite\_start]`/* */`: 여러 줄 주석 [cite: 331, 332, 333]

## 7\. 데이터 타입 (Data Types)

  - [cite\_start]**숫자 타입**: 정수와 실수를 모두 포함합니다 (예: `42`, `3.14`). [cite: 337]
  - [cite\_start]**논리 타입**: `true`와 `false` 값을 가집니다. [cite: 338]
  - [cite\_start]**문자열 타입**: 작은따옴표('')나 큰따옴표("")로 묶인 텍스트입니다 (예: `'좋은 세상'`). [cite: 339]
  - [cite\_start]**객체 레퍼런스 타입**: 객체를 가리키는 참조 값입니다. [cite: 340]
  - [cite\_start]**`null`**: 값이 없음을 나타내는 특수 키워드입니다. [cite: 341]

## 8\. 변수와 상수 (Variables and Constants)

### 변수 선언 (Variable Declaration)

[cite\_start]데이터를 저장하는 공간인 변수는 `var`, `let`, `const` 키워드를 사용해 선언합니다. [cite: 347, 350]

  - [cite\_start]**`var`**: ES6 이전부터 사용된 변수 선언 키워드입니다. [cite: 351, 352]
  - [cite\_start]**`let`**: `var`의 문제점을 개선하기 위해 ES6(2015)에서 도입되었습니다. [cite: 353, 354] [cite\_start]동일한 변수를 재선언할 수 없으며, 블록 범위(scope)를 가집니다. [cite: 459, 468]
  - [cite\_start]**`const`**: 한 번 값을 할당하면 변경할 수 없는 상수를 선언합니다. [cite: 355, 357] [cite\_start]블록 범위를 가집니다. [cite: 489]

### 변수의 범위 (Scope)

  - [cite\_start]**전역 변수**: 함수 밖에서 선언되거나 키워드 없이 선언된 변수로, 프로그램 전체에서 접근 가능합니다. [cite: 380]
  - [cite\_start]**지역 변수**: 함수 내에서 `let` (또는 `var`)으로 선언된 변수로, 해당 함수 내에서만 유효합니다. [cite: 380]
  - [cite\_start]**블록 변수**: `if`, `for` 등 블록 `{}` 내에서 `let`으로 선언된 변수로, 해당 블록 안에서만 유효합니다. [cite: 380]

## 9\. 리터럴 (Literals)

[cite\_start]데이터 값 그 자체를 의미합니다. [cite: 502, 503]

  - [cite\_start]**정수**: `15`(10진수), `015`(8진수), `0x15`(16진수) [cite: 505]
  - [cite\_start]**실수**: `0.1234`(소수형), `1234E-4`(지수형) [cite: 505]
  - [cite\_start]**논리**: `true`, `false` [cite: 505]
  - [cite\_start]**문자열**: `"안녕하세요"`, `'kitae'` [cite: 505]
  - [cite\_start]**기타**: `null`(값이 없음), `NaN`(Not-a-Number) [cite: 505]

## 10\. 연산자 (Operators)

| 연산 종류 | 연산자 |
|---|---|
| 산술 | [cite\_start]`+`, `-`, `*`, `/`, `%` [cite: 545] |
| 증감 | [cite\_start]`++`, `--` [cite: 545] |
| 대입 | [cite\_start]`=`, `+=`, `-=`, `*=`, `/=`, `%=` 등 [cite: 545] |
| 비교 | [cite\_start]`==`, `!=`, `>`, `<`, `>=`, `<=` [cite: 545] |
| 논리 | [cite\_start]`&&` (AND), `||` (OR), `!` (NOT) [cite: 545] |
| 조건 | `? [cite_start]:` [cite: 545] |
| 비트 | [cite\_start]`&`, `|`, `^`, `~`, `<<`, `>>`, `>>>` [cite: 545] |
| 문자열 | [cite\_start]`+` (연결), `==`, `!=` 등 (비교) [cite: 909, 927] |

## 11\. 조건문 (Conditional Statements)

### `if, if-else`

조건식의 결과가 `true`일 때 특정 코드 블록을 실행합니다. [cite\_start]`else`나 `else if`를 사용하여 다양한 조건을 처리할 수 있습니다. [cite: 979]

```javascript
let score = 95;
let grade;
[cite_start]if (score >= 90) { [cite: 1029]
    [cite_start]grade = 'A'; [cite: 1030]
[cite_start]} else if (score >= 80) { [cite: 1031, 1032]
    [cite_start]grade = 'B'; [cite: 1033]
} else {
    [cite_start]grade = 'F'; [cite: 1039, 1040]
}
```

### `switch`

[cite\_start]하나의 식이 가질 수 있는 다양한 값에 따라 다른 코드를 실행할 때 유용합니다. [cite: 1058] [cite\_start]`case` 문과 `break` 문을 함께 사용합니다. [cite: 1061, 1062]

```javascript
let fruits = "사과";
[cite_start]switch(fruits) { [cite: 1070]
    case "바나나":
        [cite_start]price = 200; break; [cite: 1071, 1072]
    case "사과":
        [cite_start]price = 300; break; [cite: 1073, 1074]
    default:
        [cite_start]price = 0; [cite: 1078, 1079]
}
```

## 12\. 반복문 (Loops)

### `for`, `while`, `do-while`

  - [cite\_start]**`for`**: 특정 횟수만큼 코드를 반복 실행할 때 주로 사용됩니다. [cite: 1162]
    ```javascript
    [cite_start]for (let i = 0; i < 10; i++) { [cite: 1174]
        [cite_start]document.write(i); [cite: 1175]
    }
    ```
  - [cite\_start]**`while`**: 조건식이 참인 동안 코드를 반복 실행합니다. [cite: 1172]
    ```javascript
    [cite_start]let i = 0; [cite: 1181]
    [cite_start]while (i < 10) { [cite: 1182]
        [cite_start]document.write(i); [cite: 1183]
        [cite_start]i++; [cite: 1184]
    }
    ```
  - [cite\_start]**`do-while`**: 코드를 먼저 한 번 실행한 후, 조건식이 참인 동안 반복합니다. [cite: 1191]
    ```javascript
    [cite_start]let i = 0; [cite: 1195]
    do {
        [cite_start]document.write(i); [cite: 1196]
        [cite_start]i++; [cite: 1196]
    [cite_start]} while (i < 10); [cite: 1197]
    ```

### `break`와 `continue`

  - [cite\_start]**`break`**: 현재 실행 중인 반복문이나 `switch` 문을 즉시 종료합니다. [cite: 1295]
  - [cite\_start]**`continue`**: 현재 반복을 중단하고 다음 반복으로 넘어갑니다. [cite: 1305]

## 13\. 함수 (Functions)

### 함수 정의와 호출

[cite\_start]특정 목적을 가진 코드 블록으로, `function` 키워드를 사용해 정의하고 이름으로 호출합니다. [cite: 1371] [cite\_start]데이터를 `매개변수`로 전달받고, `return` 문으로 결과를 반환할 수 있습니다. [cite: 1384]

```javascript
// 함수 정의
[cite_start]function adder(a, b) { [cite: 1389]
    [cite_start]let sum = a + b; [cite: 1391]
    return sum; [cite_start]// 결과 반환 [cite: 1392]
}

// 함수 호출
[cite_start]let result = adder(10, 20); [cite: 1398]
```

### 전역 함수 (Global Functions)

[cite\_start]자바스크립트가 기본적으로 제공하는 유용한 함수들입니다. [cite: 1439]

  - [cite\_start]**`eval(exp)`**: 문자열로 된 자바스크립트 표현식 `exp`를 계산하고 결과를 반환합니다. [cite: 1441, 1451]
  - [cite\_start]**`parseInt(str)`**: 문자열 `str`을 정수로 변환하여 반환합니다. [cite: 1443, 1451]
  - [cite\_start]**`isNaN(value)`**: `value`가 숫자가 아니면(`NaN`) `true`를, 숫자이면 `false`를 반환합니다. [cite: 1446, 1451]
