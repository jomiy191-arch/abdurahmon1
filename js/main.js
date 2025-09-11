
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("menu").classList.toggle("active");
});
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".projects-track");
  const slides = document.querySelectorAll(".projects-card");
  const prevBtn = document.querySelector(".projects-prev");
  const nextBtn = document.querySelector(".projects-next");

  let index = 0;
  const slideWidth = slides[0].offsetWidth + 20; // 20 = gap

  function updateSlide() {
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  nextBtn.addEventListener("click", () => {
    if (index < slides.length - 1) {
      index++;
    } else {
      index = 0; // qaytib boshiga
    }
    updateSlide();
  });

  prevBtn.addEventListener("click", () => {
    if (index > 0) {
      index--;
    } else {
      index = slides.length - 1; // oxiriga o‘tadi
    }
    updateSlide();
  });
});
