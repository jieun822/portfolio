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

// swiper
var swiper = new Swiper(".mySwiper", {
  /*  spaceBetween: 30, */
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// 마우스 이벤트
 $(document).mousemove(function (e) {
  var mouseX = e.pageX;
  var mouseY = e.pageY;

  $(".cursor").css({
    left: mouseX + "px",
    top: mouseY + "px",
  });
}); 



const $text = document.querySelector(".typing .text");

// 글자 모음
const letters = ["코드와 디자인을 연결하는", "열정이 넘치는", "포기하지 않는"];

// 글자 입력 속도
const speed = 100;
let i = 0;

// 타이핑 효과
const typing = async () => {
  const letter = letters[i].split("");

  while (letter.length) {
    await wait(speed);
    $text.innerHTML += letter.shift();
  }

  // 잠시 대기
  await wait(800);

  // 지우는 효과
  remove();
};

// 글자 지우는 효과
const remove = async () => {
  const letter = letters[i].split("");

  while (letter.length) {
    await wait(speed);

    letter.pop();
    $text.innerHTML = letter.join("");
  }

  // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
  i = !letters[i + 1] ? 0 : i + 1;
  typing();
};

// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

// 초기 실행
setTimeout(typing, 1500);
