// aos 플러그인 초기화
AOS.init();

// 부드럽게 올라가기
$(".btn").on("click", (e) => {
  e.preventDefault();
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// 첫 화면 지났을 때 위로 가기 버튼 나오도록
$(window).on("scroll", () => {
  let scrollHt = $(document).scrollTop();

  if (scrollHt > 240) {
    $(".btn").css({ opacity: 1, pointerEvents: "all" });
  } else {
    $(".btn").css({ opacity: 0, pointerEvents: "none" });
  }
});

/* // 마우스 이벤트
$(document).mousemove(function (e) {
  var mouseX = e.pageX;
  var mouseY = e.pageY;

  $(".cursor").css({
    left: mouseX + "px",
    top: mouseY + "px",
  });
}); 
 */
