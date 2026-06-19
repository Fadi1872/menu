import { menu } from "./Data.js";

const addMenuItems = (category) => {
  const menuSection = menu.find((section) =>
    section.className.includes(category),
  );
  const element = document.querySelector(`#${category}`);
  const bgImageUrl = `url('images/${category}.jpg')`;
  element.style.setProperty("--slide-bg", bgImageUrl);
  element.innerHTML = `
            <div class="slide-title">
                <h1>${menuSection.category}</h1>
            </div>
            <div class="menu">
                ${menuSection.items
                  .map(
                    (item) => `
                                <div class="menu-item border-${category}-gradient">
                                    <p>${item.name}</p>
                                    <p>${item.price ? `${item.price} ل.س` : ``}</p>
                                </div>
                            `,
                  )
                  .join("")}
            </div>
    `;
};

addMenuItems("mojito");
addMenuItems("hotdrinks");
addMenuItems("worldcup");
addMenuItems("shisha");

// --- TOUCH SWIPE TRACKER ---

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener(
  "touchstart",
  (e) => {
    touchStartX = e.changedTouches[0].screenX;
  },
  { passive: true },
);

document.addEventListener(
  "touchend",
  (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipeGesture();
  },
  { passive: true },
);

function handleSwipeGesture() {
  const swipeThreshold = 50;

  if (Math.abs(touchStartX - touchEndX) > swipeThreshold) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    document.querySelectorAll(".slide").forEach((slide) => {
      slide.scrollTop = 0;
    });
  }
}

// --- AUTO-PEEK HINT TIMER (RTL & Scroll-Snap Compatible) ---

window.addEventListener("load", () => {
  const sliderTrack = document.querySelector(".slider-track");

  if (!sliderTrack) return;

  let hintTimer = setTimeout(() => {
    sliderTrack.style.scrollSnapType = "none";
    sliderTrack.scrollTo({
      left: -100,
      behavior: "smooth",
    });

    setTimeout(() => {
      sliderTrack.scrollTo({
        left: 0,
        behavior: "smooth",
      });

      setTimeout(() => {
        sliderTrack.style.scrollSnapType = "x mandatory";
      }, 500);
    }, 600);
  }, 5000);

  const handleUserScroll = () => {
    clearTimeout(hintTimer);

    sliderTrack.removeEventListener("scroll", handleUserScroll);
  };
  sliderTrack.addEventListener("scroll", handleUserScroll, { passive: true });
});

// --- LOADING SCREEN CONTROLLER ---

window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading-screen');
  
  if (loadingScreen) {
    // ننتظر 400 مللي ثانية إضافية بعد التحميل لضمان ثبات الأداء
    setTimeout(() => {
      loadingScreen.classList.add('fade-out');
    }, 400);
  }
});s