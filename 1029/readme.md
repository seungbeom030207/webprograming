
# 8장: HTML DOM과 Document



## 1. HTML DOM (Document Object Model)

**DOM (Document Object Model)**은 웹 페이지의 HTML 태그들을 자바스크립트가 제어할 수 있도록 객체로 만든 모델입니다.

* **목적**: 자바스크립트를 이용해 HTML 태그의 콘텐츠나 스타일을 동적으로 제어하기 위함입니다.
* **DOM 트리**: HTML 태그들의 포함 관계(부모-자식)를 나무(트리) 구조로 표현한 것입니다.
* **DOM 객체**: DOM 트리를 구성하는 각 노드(node)로, HTML 태그 하나당 하나의 DOM 객체가 생성됩니다.

## 2. DOM 객체의 구성 요소

HTML 태그는 5가지 요소를 가지며, DOM 객체는 이를 반영하여 5가지 구성 요소를 가집니다.

1.  **프로퍼티 (Property)**: HTML 태그의 속성(attribute)을 반영합니다. (예: `id`, `tagName`, `innerHTML`)
2.  **메소드 (Method)**: DOM 객체를 제어하는 함수입니다. (예: `setAttribute()`)
3.  **컬렉션 (Collection)**: `children`과 같이 자식 DOM 객체들의 리스트를 가지는 배열과 유사한 정보입니다.
4.  **이벤트 리스너 (Event Listener)**: `onclick` 등 HTML 태그에 작성된 이벤트를 반영합니다.
5.  **CSS3 스타일**: `style` 프로퍼티를 통해 태그의 CSS 스타일을 접근하고 변경할 수 있습니다.

## 3. DOM 객체 다루기

### 🎨 DOM 객체 찾기

자바스크립트가 DOM 객체를 제어하려면 먼저 원하는 객체를 찾아야 합니다.

* `document.getElementById("id")`: **id 속성**으로 DOM 객체 하나를 찾습니다. (가장 많이 사용)
* `document.getElementsByTagName("tag")`: **태그 이름**으로 모든 DOM 객체를 찾아 컬렉션(HTMLCollection)으로 반환합니다.
* `document.getElementsByClassName("class")`: **class 속성**으로 모든 DOM 객체를 찾아 컬렉션으로 반환합니다.

### 🎨 콘텐츠 및 스타일 변경

* **콘텐츠 변경 (`innerHTML`)**: `innerHTML` 프로퍼티는 태그의 시작과 종료 태그 사이의 HTML 콘텐츠를 나타냅니다. 이 값을 변경하면 화면의 내용이 바뀝니다.
    ```javascript
    let p = document.getElementById("firstP");
    p.innerHTML = "새로운 <b>내용</b>입니다."; //
    ```
* **스타일 변경 (`style`)**: `style` 프로퍼티를 통해 CSS 스타일을 동적으로 변경할 수 있습니다.
    * CSS 속성명이 `background-color`처럼 하이픈(-)을 포함하면, `backgroundColor`와 같이 카멜 케이스(camelCase)로 변경해야 합니다.
    ```javascript
    let span = document.getElementById("mySpan");
    span.style.color = "green";
    span.style.fontSize = "30px";
    ```
* **`this` 키워드**: 이벤트 리스너에서 `this`는 이벤트가 발생한 **객체 자신**을 가리킵니다.
    ```html
    <div onclick="this.style.backgroundColor='orange'">
      여기를 클릭하세요
    </div>
    ```

## 4. `document` 객체

`document` 객체는 HTML 문서 전체를 대표하는 객체로, DOM 트리의 최상위 루트입니다.

### 📄 `document.write()`

`document.write()`는 HTML 페이지가 로드되는 **중에** `document` 객체에 HTML 콘텐츠를 추가합니다.

> **⚠️ 주의:** 페이지 로딩이 **완료된 후** (예: 버튼 클릭 시) `document.write()`를 호출하면, 기존 문서의 모든 내용이 지워지고 새로운 내용으로 덮어 써집니다.

### 📄 동적 DOM 생성 및 삭제

자바스크립트로 HTML 태그(DOM 객체)를 새로 만들거나 삭제할 수 있습니다.

1.  **생성**: `document.createElement("태그이름")`
    * `let newDIV = document.createElement("div");`
2.  **속성/내용 설정**:
    * `newDIV.innerHTML = "새로 생성된 DIV";`
    * `newDIV.style.backgroundColor = "yellow";`
3.  **트리에 삽입**: `부모객체.appendChild(자식객체)`
    * `document.body.appendChild(newDIV);` (body 태그의 마지막 자식으로 추가)
4.  **삭제**: `부모객체.removeChild(자식객체)`
    * `let parent = myDiv.parentElement;`
    * `parent.removeChild(myDiv);`
