const swiper = new Swiper(".mySwiper", {

  slidesPerView: "5", // 한 슬라이드에 보여줄 갯수

  loop: true, // 슬라이드 반복 여부

  loopAdditionalSlides: 1,

  // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
  pagination: {
    // 호출(pager) 여부
    el: ".swiper-pagination", //버튼을 담을 태그 설정
    clickable: true, // 버튼 클릭 여부
  },
  navigation: {
    // 버튼
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    //반응형 width

    0: { slidesPerView: 1 },
    768: { slidesPerView: 3 },
    1200: { slidesPerView: 5 },
  },
});

// 메뉴 토글 버튼
let num = 0;
$(".menuBtn").on("click", () => {
  if (num % 2 == 0) {
    $("#navigator").stop().slideDown();
    $("#gnbBtn").addClass("on");

    num++;
  } else {
    $("#navigator").stop().slideUp();
    $("#gnbBtn").removeClass("on");
    num++;
  }
});
