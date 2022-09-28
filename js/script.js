window.onload = function () {
  new Swiper(".sw-visual", {
    loop: true,
    autoplay: {
      delay: 1000,
    },
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};

$(document).ready(function () {
  // 기본 메뉴
  let header = $(".header");
  let depth1_Li = $(".depth1 > li");

  // 주메뉴 높이 (기본 높이 px 값)
  let depth1_Li_height = 74;

  // 각각의 .depth1 > li 의 서브메뉴(.depth2) 의 높이를 저장한다.
  $.each(depth1_Li, function (index) {
    $(this).mouseenter(function () {
      // .depth1 > li 밑에 있는 .depth2 높이
      let tempH = $(this).find(".depth2").outerHeight();
      $(this).css("height", tempH + depth1_Li_height);
    });

    $(this).mouseleave(function () {
      // 원래 높이로 돌아간다.
      $(this).css("height", depth1_Li_height);
    });
  });

  let goTop = $(".gogotop");
  goTop.click(function () {
    $("html").animate({ scrollTop: 0 }, 1000);
  });
  goTop.click(function (event) {
    event.preventDefault();
  });
});
