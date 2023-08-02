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

// 마우스 커서 커스텀

const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll("a");
const navlinks = document.querySelectorAll("li");
const cursorbtn = document.querySelectorAll(".cursorbtn");

document.addEventListener("mousemove", (e) => {
  let leftPosition = e.pageX + 4;
  let topPosition = e.pageY + 4;

  cursor.style.left = leftPosition + "px";
  cursor.style.top = topPosition + "px";
});

links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    cursor.classList.add("large");
  });
});

links.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("large");
  });
});

cursorbtn.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    cursor.classList.add("large");
  });
});

cursorbtn.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("large");
  });
});
