# webprogramingChapter 4: Decorating Web Pages with CSS3
1. CSS3 기본 



CSS (Cascading Style Sheet): HTML 문서의 색상, 모양 등 외관을 꾸미는 언어입니다. 


스타일 시트 (Style Sheet): CSS로 작성된 코드를 의미합니다. 

CSS3 구성 요소:


셀렉터 (Selector): 스타일을 적용할 HTML 요소를 선택합니다. 



프로퍼티 (Property): 스타일 속성 이름입니다. (예: color) 


값 (Value): 프로퍼티에 적용할 값입니다. (예: blue) 



주석: /* ... */ 형식으로 작성합니다. 


CSS

/* span 태그의 글자색을 파란색, 크기를 20px로 지정 */
span { color: blue; font-size: 20px; }
2. HTML에 CSS 스타일 시트 적용하기 


<style> 태그: <head> 태그 내에 CSS 코드를 작성하며, 해당 웹 페이지 전체에 적용됩니다. 




style 속성: HTML 태그에 직접 스타일을 지정하며, 해당 태그에만 적용됩니다. 



외부 CSS 파일:


.css 확장자로 스타일 시트 파일을 저장합니다. 


<link> 태그나 @import를 사용하여 HTML 문서로 불러옵니다. 


3. CSS 규칙

스타일 상속: 자식 태그는 부모 태그의 스타일을 상속받습니다. 


스타일 합치기와 오버라이딩: 여러 스타일이 충돌할 경우 우선순위가 높은 스타일이 적용됩니다. 



우선순위: style 속성 > <style> 태그 > 외부 CSS 파일 > 브라우저 디폴트 스타일 순으로 높습니다. 



4. 셀렉터 (Selector)
태그 이름 셀렉터: h3, li { color: brown; } 



class 셀렉터: .으로 시작하며, 여러 태그에 동일한 스타일을 적용할 때 유용합니다.  (예: 


.warning { color: red; })


id 셀렉터: #으로 시작하며, 특정 태그 하나에만 스타일을 적용할 때 적합합니다.  (예: 


#list { background: mistyrose; })

자식/자손 셀렉터:

자식 (

>): div > strong { ... } (div 바로 아래 자식인 strong에 적용) 


자손 (

     ): ul strong { ... } (ul의 모든 하위 strong에 적용) 



전체 셀렉터 (*): 모든 태그에 스타일을 적용합니다. 


속성 셀렉터: input[type=text] { ... } 



가상 클래스 셀렉터: 특정 조건이나 상황에 따라 스타일을 적용합니다.  (예: 

:hover, :focus, :first-letter)

5. 주요 스타일 프로퍼티

색상: color (글자색), background-color (배경색), border-color (테두리색) 



텍스트: text-align (정렬), text-decoration (밑줄 등), text-indent (들여쓰기) 


폰트: font-family (글꼴), font-size (크기), font-weight (굵기), font-style (스타일) 


박스 모델: 모든 HTML 요소는 콘텐츠, 패딩(padding), 테두리(border), 여백(margin)으로 구성된 사각형 박스로 취급됩니다. 



padding: 콘텐츠와 테두리 사이의 내부 여백 


border: 테두리 스타일 (예: border: 1px solid black;) 


margin: 박스의 바깥 여백 


테두리 꾸미기: border-radius (모서리 둥글게), border-image (이미지 테두리) 



배경: background-image (배경 이미지), background-repeat (반복), background-position (위치) 


그림자: text-shadow (텍스트 그림자), box-shadow (박스 그림자) 



커서: cursor 프로퍼티로 마우스 커서 모양을 변경합니다. 


Chapter 5: Advanced CSS3 Usage
1. 배치 (Layout)
박스 유형 (display):


block: 항상 새 라인에서 시작하며 너비가 100%를 차지합니다. 




inline: 줄 바꿈 없이 다른 요소와 함께 배치되며, width/height 적용이 불가능합니다. 




inline-block: inline처럼 배치되지만 block처럼 width, height, margin 등을 조절할 수 있습니다. 



none: 요소를 화면에서 완전히 사라지게 합니다. 

위치 (position):


static: 기본값, HTML 순서대로 배치됩니다. 


relative: 원래 위치를 기준으로 top, left 등을 이용해 상대적으로 이동합니다. 



absolute: 부모 요소를 기준으로 절대적인 위치에 배치됩니다. 


fixed: 브라우저 창을 기준으로 고정된 위치에 배치되어 스크롤해도 움직이지 않습니다. 



유동 배치 (float): 요소를 왼쪽(left)이나 오른쪽(right)으로 띄워 텍스트나 다른 요소가 주변을 흐르도록 배치합니다. 


겹침 순서 (z-index): position이 적용된 요소들이 겹칠 때 쌓이는 순서를 제어합니다. 숫자가 클수록 위로 올라옵니다. 



가시성 (visibility): visibility: hidden;은 요소를 보이지 않게 하지만, 공간은 그대로 차지합니다. 



넘침 제어 (overflow): 콘텐츠가 박스 크기를 넘어갈 때 처리 방법을 지정합니다. (visible, hidden, scroll) 


2. 리스트 및 표 꾸미기
리스트 (<ul>, <ol>):

list-style-type: 마커(bullet)의 종류를 변경합니다. (예: disc, square, none) 




list-style-image: 마커를 이미지로 대체합니다. 



list-style-position: 마커의 위치를 지정합니다. (inside, outside) 


표 (<table>):


border-collapse: collapse;: 셀 간의 이중 테두리를 하나로 합칩니다. 


:nth-child(even): 짝수 번째 행에 다른 스타일을 적용하여 줄무늬 표를 만들 수 있습니다. 



tr:hover: 마우스를 올린 행의 배경색을 변경하는 등 동적인 효과를 줄 수 있습니다. 


3. 폼 꾸미기

속성 셀렉터 활용: input[type="text"] 와 같이 특정 타입의 입력창에만 스타일을 적용할 수 있습니다. 

가상 클래스 활용:


:hover: 마우스를 올렸을 때 스타일을 변경합니다. 


:focus: 입력창이 활성화(포커스)되었을 때 스타일을 변경합니다. 


4. 동적 효과

전환 (transition): CSS 프로퍼티 값이 변경될 때 부드러운 전환 효과를 줍니다. 



transition: font-size 5s; (font-size가 변하면 5초에 걸쳐 부드럽게 변경) 


변환 (transform): 요소를 회전, 확대/축소, 기울이기, 이동시킵니다. 



rotate(20deg): 20도 회전 


scale(3, 1): 가로로 3배, 세로로 1배 확대 


skew(0, -20deg): 세로축으로 -20도 기울임 


translateY(100px): Y축으로 100px 이동 


애니메이션 (animation): @keyframes 규칙으로 시간 흐름에 따른 스타일 변화를 정의하고, animation 관련 프로퍼티로 요소에 적용합니다. 


CSS

/* 'bomb' 애니메이션 정의 */
@keyframes bomb {
  from { font-size: 500%; } /* 시작 스타일 */
  to { font-size: 100%; }   /* 종료 스타일 */
}

/* h3 태그에 애니메이션 적용 */
h3 {
  animation-name: bomb;
  animation-duration: 3s;
  animation-iteration-count: infinite; /* 무한 반복 */
}
