import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
Swiper.use([Navigation, Pagination]);

const aboutSwiper = new Swiper(".slider-about", {
  wrapperClass: "slider-about__wrapper",
  slideClass: "slider-about__item",
  slidesPerView: "auto",
  spaceBetween: 14,
  speed: 800,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const teamSwiper = new Swiper(".team__slider", {
  slidesPerView: "auto",
  spaceBetween: 12,
  speed: 800,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const laboratorySwiper = new Swiper(".laboratory__slider", {
  slidesPerView: "auto",
  spaceBetween: 12,
  loop: true,
  speed: 800,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const certificatesSwiper = new Swiper(".certificate-slider", {
  slidesPerView: "auto",
  spaceBetween: 12,
  speed: 800,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const mailSwiper = new Swiper(".mail-slider", {
  slidesPerView: "auto",
  spaceBetween: 12,
  speed: 800,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
