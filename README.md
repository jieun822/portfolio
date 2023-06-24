# portfolio

## 🖥️ Project1.
'만랩커피' 사이트를 <strong>반응형 웹</strong>으로 리디자인 하였습니다.</br>
- 모바일 : 768px</br>
- 태블릿: 1024px</br>
- 데스크탑: 1920px

> 리디자인 사이트 바로 가기 👉 [클릭!](https://jieun822.github.io/portfolio/project1/project1.html#)


## 🕰️ 진행 기간
* 23.06.nn일 - 22.06.nn일

## 💡 어려웠던 부분 (해결 방법)  
- **첫번째 섹션 부분 움직이는 이미지들 position 적용 오류 문제**
  - position: absolute는 절대위치로 특정 부모에 의해 절대적으로 움직인다는 것을 알고있었음에도 내가 원하는 위치로 적용되지 않았다. </br> 자식 요소들에게 div를 씌웠는데도 해결이 되지 않아서 position: absolute가 적용되야 할 이미지들을 묶어서 div를 씌워줬더니 해결이 되었다.
    
- **넘치는 텍스트 제어**
   - 데스크탑과 pc버전은 괜찮았지만 모바일의 경우 가로 폭이 좁아져서 텍스트가 넘치는 경우가 있었다.</br>이를 해결하기 위해 텍스트를 감싸는 div요소에 overflow:hidden; white-space:no-wrap;값을 주고 넘치는 텍스트는 ···으로 표기될 수 있도록 overflow:ellipsis; 값을 주어 문제를 해결하였다.
   

