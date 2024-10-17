const tabItem = document.querySelectorAll(".tabs__btn-item");
const tabContent = document.querySelectorAll(".card__content-item");

tabItem.forEach((elem) => {
  elem.addEventListener("click", open);
});

const open = (event) => {
  const tabTarget = event.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach((item) => {
    item.classList.remove("tabs__btn-item--active");
  });

  tabTarget.classList.add("tabs__btn-item--active");

  tabContent.forEach((item) => {
    item.classList.remove("card__content-item--active");
  });

  document
    .querySelector(`#${button}`)
    .classList.add("card__content-item--active");
};

const swiper = new Swiper(".swiper", {
  effect: "fade",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
