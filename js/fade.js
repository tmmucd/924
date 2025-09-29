const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const section = entry.target.closest("section");
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
    } else {
      entry.target.classList.remove("is-visible");
    }
  });
});

document.querySelectorAll(".sentinel").forEach(el => observer.observe(el));

// スクロールして表示領域に入ったらclass付与
$(function () {
  $(".infobox01").on("inview", function () {
    $(this).addClass("is-inview");
  });
});