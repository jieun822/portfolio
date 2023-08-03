# portfolio 제작일지
> 2023.03.08 ~ 2023.08.03 <strong>'웹디자인 및 스마트 UI/UX 웹퍼블리셔 양성과정'</strong>을 들으면서 포트폴리오 제작 포함 총 5번의 프로젝트를 진행하였습니다.
   </br>
   
## ✍ 포트폴리오 제작 의도
그동안 작업했던 프로젝트 결과물들을 보여주어야 했기 때문에 각 프로젝트에 대한 내용들이 잘 읽히면서 동시에 <strong>저를 잘 나타낼 수 있는 디자인</strong>으로 포트폴리오를 만들고자 하였습니다.</br></br>
또한 그동안 <strong>배운 기술들을 최대한 포트폴리오에 녹여내고자</strong> 하였습니다.
 </br>
   </br>
   </br>

   
## 🖥️ Project1 도전! 독서통장 UIUX 리디자인
'도전! 독서통장' 어플을 UIUX 리디자인 하였습니다.</br>
- 팀 프로젝트: 기여도(100%)

## 🕰️ 진행 기간
* 23.05.03일 - 23.05.31일

## 💯 프로젝트 완료 리뷰 
- 프로젝트를 시작하기 전에는 코딩을 하는 것보다 디자인이 더 쉽다고 생각했기 때문에 프로젝트가 수월하게 흘러갈 것이라는 기대가 있었습니다. 하지만 프로젝트가 진행될 수록 디자인이 정말 어렵다는 생각이 들었습니다. 답이 명확하게 정해져 있는 것이 아니고 무조건 예쁜 디자인을 만드는 것이 아니라 사용자의 편의성도 고려해야 했기 때문에 생각해야 할 부분이 굉장히 많았습니다.</br>
</br>

  - 특히 가장 힘들었던 부분은 프로젝트가 슬슬 마무리가 되어갈 때쯤 프로토타입을 다시 만들어야 했을때가 가장 난감했습니다. 프로토타입을 다시 만드려면 그 앞의 과정인 IA와 와이어프레임도 다시 만들어야 했기 때문에 시간에 쫓기면서 만들었던 게 기억에 남는 것 같습니다. 그래도 스스로 칭찬하고 싶은 부분은 포기하지 않고 끝까지 노력했기 때문에 결과물을 완성시킬 수 있었다고 생각합니다.
   </br>
   </br>
   </br>
 

  




## 🖥️ Project2 만랩커피 사이트 리디자인 & 퍼블리싱
'만랩커피' 사이트를 <strong>반응형 웹</strong>으로 리디자인 하였습니다.</br>
- 모바일 : 768px</br>
- 태블릿: 1024px</br>
- 데스크탑: 1920px

> 리디자인 사이트 바로 가기 👉 [클릭!](https://jieun822.github.io/portfolio/10000LAB/10000LAB.html#)


## 🕰️ 진행 기간
* 23.06.08일 - 23.06.14일

## 💡 어려웠던 부분 (해결 방법)  
- **첫번째 섹션 부분 움직이는 이미지들 position 적용 오류 문제**
  - position: absolute는 절대위치로 특정 부모에 의해 절대적으로 움직인다는 것을 알고있었음에도 제가 원하는 위치로 적용되지 않았습니다. </br> 자식 요소들에게 div를 씌웠는데도 해결이 되지 않아서 position: absolute가 적용되야 할 이미지들을 묶어서 div를 씌워줬더니 해결이 되었습니다.
    
- **넘치는 텍스트 제어**
   - 데스크탑과 pc버전은 괜찮았지만 모바일의 경우 가로 폭이 좁아져서 텍스트가 넘치는 경우가 있었습니다.</br>이를 해결하기 위해 텍스트를 감싸는 div요소에 overflow:hidden; white-space:no-wrap;값을 주고 넘치는 텍스트는 ···으로 표기될 수 있도록 overflow:ellipsis; 값을 주어 문제를 해결하였습니다.
  </br>
   </br>
   </br>

## 🖥️ Project3 베이힐풀앤빌라 사이트 리디자인 & 퍼블리싱
'베이힐풀앤빌라'사이트를 리디자인 및 퍼블리싱 하였습니다.</br>
- 팀 프로젝트: 기여도(95%)
- 담당업무: -깃허브 관리자, 리디자인 작업, dining, facilities, contact 페이지 퍼블리싱


> 리디자인 사이트 바로 가기 👉 [클릭!](https://2023javas.github.io/JAVAS_project/#)


## 🕰️ 진행 기간
* 23.06.30일 - 23.07.10일

## 💡 어려웠던 부분 (해결 방법)  
- **한 페이지에 Swiper 2개가 들어가는 문제**
  - 서브페이지를 작업하면서 한 페이지에 Swiper가 2개가 들어가는 경우가 있었습니다.
  이런 경우는 처음 경험해봐서 어떻게 적용해야할 지 고민이 많았는데 html 구조에서
  각각의 Swiper영역에 클래스명을 따로 부여해주었더니 정상적으로 작동 되었습니다.
    
- **메인페이지 사진 뒤 선 스크롤 이벤트**
   - 메인페이지 중 사진 뒤에 선이 스크롤 될때 서서히 내려오도록 구현해야 하는 부분이 있었습   니다. 처음에는 css 속성인 after와 before를 사용하여 aos 라이브러리를 적용시키려 했지   만 원하는 대로 적용되지 않았습니다. 그래서 after와 before가 아닌 span 속성으로 선을   만든 후 position으로 위치를 조정하고 aos 라이브러리를 적용시켜 스크롤 될때 선이 함께   내려오도록 구현하였습니다.
  </br>
   </br>
   </br>
## 🖥️ Project4 SMTOWN 사이트 리디자인 & 퍼블리싱
'SM TOWN'사이트를 리디자인 및 퍼블리싱 하였습니다.</br>
- 개인 프로젝트: 기여도(100%)

> 리디자인 사이트 바로 가기 👉 [클릭!](https://jieun822.github.io/SMtown/SMtown.html#)


## 🕰️ 진행 기간
* 23.07.18일 - 23.07.26일

## 💡 어려웠던 부분 (해결 방법)  
- **스크롤 할 때 svg가 그려지는 효과**
  - 스크롤을 내리면 특정 위치에서 svg가 그려지는 효과를 적용해야 하는 부분이 많았습니다. 한 번도 구현해 보지 않아서 어떻게 해야 할지 고민이 많았는데 여러 자료를 찾아보면서 해결할 수 있었습니다.
  피그마에서 디자인 한 요소들을 svg로 변환시킨 후 HTML에 넣고 getTotalLength(); 속성을 통해 svg의 stroke-dasharray 값을 구해주었습니다. 그 후 scrollTop 속성으로 섹션의 높이 값을 구한 뒤에 원하는 위치에 도달했을 때 svg가 그려지도록 구현하였습니다.
    
- **hover 했을 때 마우스 포인터 변경**
   -  마우스 포인터를 변경하고 커스텀 하는 방법은 알고 있었지만 특정 요소에 hover 했을 때
마우스 포인터를 변경하는 방법은 알지 못했습니다. 그러던 중 수업 시간에 배웠던 mousemove와 mouseenter 속성이 떠올라 적용시킬 수 있었습니다.
  hover 했을 때 변경되었으면 하는 요소들에게 id 값을 부여해 주고 addClass와 removeClass를 활용하여 mousemove 되었을 때와 mouseenter 되었을 때 각각 다른 css가 적용될 수 있도록 하였습니다.
  </br>
   </br>
   </br>   
   
 
   

