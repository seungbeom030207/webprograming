
# 명품 웹 프로그래밍 - 7장: 자바스크립트 코어 객체와 배열



## 1\. 강의 목표

  - 객체의 기본 개념 이해
  - 브라우저가 제공하는 코어 객체(Core Object)의 종류와 사용법 숙지
  - `Date` 객체를 활용한 날짜 및 시간 처리 방법 학습
  - `String` 객체를 활용한 문자열 처리 방법 학습
  - 자바스크립트 배열(Array)의 생성 및 활용 방법 숙지
  - `Math` 객체를 활용한 수학적 연산 방법 학습

## 2\. 객체 (Object)

### 2.1. 객체란?

  - 현실 세계의 사물(사람, 자동차, 책 등)처럼 고유한 속성(property)과 동작(method)을 가지는 데이터 단위입니다.
  - **프로퍼티(Property)**: 객체의 고유한 속성을 나타내는 변수 (예: 자동차의 색상, 배기량)
  - **메소드(Method)**: 객체가 할 수 있는 동작을 나타내는 함수 (예: 은행 계좌의 입금, 출금)

### 2.2. 자바스크립트 객체의 종류

1.  **코어 객체 (Core Object)**

      * 자바스크립트 엔진이 내장하고 있어 어디서든 사용 가능한 기본 객체입니다.
      * 종류: `Array`, `Date`, `String`, `Math` 등

2.  **HTML DOM 객체**

      * HTML 문서의 태그들을 객체화한 것으로, 웹 페이지의 내용이나 모양을 제어하는 데 사용됩니다.

3.  **브라우저 객체 (BOM)**

      * 브라우저 자체를 제어하기 위한 객체입니다. (예: `window`, `navigator`)

## 3\. 배열 (Array)

### 3.1. 배열이란?

  - 여러 개의 데이터를 하나의 변수에 연속적으로 저장하여 관리하는 데이터 구조입니다.
  - 각 데이터는 \*\*인덱스(index)\*\*를 통해 접근하며, 인덱스는 0부터 시작합니다.

### 3.2. 배열 생성 방법

1.  **`[]` (대괄호) 리터럴로 생성**

      * 가장 간단하고 직관적인 방법입니다.
      * `let week = ["월", "화", "수", "목", "금", "토", "일"];`

2.  **`new Array()` 객체로 생성**

      * `let week = new Array("월", "화", "수", "목", "금", "토", "일");` (초기값 지정)
      * `let emptyArr = new Array(7);` (크기만 지정)
      * `let arr = new Array();` (빈 배열 생성)

### 3.3. 배열의 특징

  - **`length` 프로퍼티**: 배열의 원소 개수를 나타냅니다. `arr.length`와 같이 사용합니다.
  - **다양한 타입 저장**: 하나의 배열에 숫자, 문자열, 객체 등 여러 타입의 데이터를 함께 저장할 수 있습니다.
  - **주요 메소드**:
      - `concat()`: 배열들을 합쳐 새로운 배열을 반환
      - `join()`: 배열의 모든 원소를 연결해 하나의 문자열로 반환
      - `reverse()`: 배열의 순서를 반대로 뒤집음 (원본 배열 변경)
      - `sort()`: 배열의 원소를 정렬 (원본 배열 변경)
      - `slice()`: 특정 부분을 잘라내어 새로운 배열로 반환

## 4\. 주요 코어 객체

### 4.1. `Date` 객체

  - 날짜와 시간 정보를 다루는 객체입니다.
  - `let now = new Date();` 코드로 현재 시간을 가진 객체를 생성할 수 있습니다.
  - **주요 메소드**:
      - `getFullYear()`: 연도 반환
      - `getMonth()`: 월 반환 (0부터 시작하므로 +1 필요)
      - `getDate()`: 일 반환
      - `getHours()`: 시간 반환
      - `getSeconds()`: 초 반환
      - `toLocaleString()`: 지역에 맞는 시간 형식의 문자열로 반환

### 4.2. `String` 객체

  - 문자열을 다루기 위한 객체입니다.
  - `let str = "Hello";` 또는 `let str = new String("Hello");`로 생성합니다.
  - **특징**:
      - **`length` 프로퍼티**: 문자열의 길이를 반환 (읽기 전용)
      - **수정 불가능 (Immutable)**: `concat()`, `replace()` 등의 메소드는 원본 문자열을 바꾸지 않고 새로운 문자열을 반환합니다.
  - **주요 메소드**:
      - `charAt(index)`: 특정 위치의 문자를 반환
      - `concat(str)`: 문자열을 이어 붙임
      - `indexOf(str)`: 특정 문자열의 시작 위치를 검색
      - `split(separator)`: 구분자를 기준으로 문자열을 잘라 배열로 반환
      - `substr(start, length)`: 특정 위치에서 길이만큼 문자열을 잘라냄
      - `toUpperCase()`: 모든 문자를 대문자로 변경
      - `trim()`: 문자열 양 끝의 공백 제거

### 4.3. `Math` 객체

  - 수학 계산을 위한 프로퍼티와 메소드를 제공하는 정적(static) 객체입니다. (`new`로 생성하지 않음)
  - **주요 프로퍼티 및 메소드**:
      - `Math.PI`: 원주율 $\pi$ 값
      - `Math.random()`: 0과 1 사이의 난수를 반환
      - `Math.floor(x)`: 내림. `x`보다 작거나 같은 가장 큰 정수를 반환
      - `Math.sqrt(x)`: 제곱근을 반환

## 5\. 사용자 객체 만들기

자신만의 새로운 객체를 만드는 3가지 주요 방법이 있습니다.

1.  **`new Object()`로 생성**

      * 빈 객체를 만들고, 점(`.`) 연산자를 이용해 프로퍼티와 메소드를 동적으로 추가합니다.

    <!-- end list -->

    ```javascript
    let account = new Object();
    account.owner = "홍길동";
    account.balance = 10000;
    account.deposit = function(money) { this.balance += money; };
    ```

2.  **리터럴 표기법으로 생성**

      * 중괄호 `{}` 안에 `key: value` 형태로 프로퍼티와 메소드를 직접 정의하는 가장 일반적인 방법입니다.

    <!-- end list -->

    ```javascript
    let account = {
        owner: "홍길동",
        balance: 10000,
        deposit: function(money) { this.balance += money; }
    };
    ```

3.  **프로토타입(Prototype)으로 생성**

      * 객체를 찍어내는 틀(붕어빵 틀과 유사)을 만드는 방법입니다. C++이나 Java의 '클래스'와 비슷한 개념입니다.
      * 생성자 함수를 정의하고 `new` 키워드로 객체를 생성합니다.

    <!-- end list -->

    ```javascript
    // 프로토타입(생성자 함수) 정의
    function Account(owner, balance) {
        this.owner = owner;
        this.balance = balance;
        this.deposit = function(money) { this.balance += money; };
    }

    // 객체 생성
    let myAccount = new Account("홍길동", 10000);
    ```
