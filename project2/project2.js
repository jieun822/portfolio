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
