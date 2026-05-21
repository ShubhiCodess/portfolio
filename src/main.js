import './style.css'
import { initTypingEffect } from "./typing.js";
import marquee from './components/marquee.html?raw';
import { inject } from "@vercel/analytics"

inject()

document.addEventListener("DOMContentLoaded", () => {
  initTypingEffect();

  const container = document.querySelector('#marquee-container');

  if (container) {
    container.innerHTML = marquee;
  }
});

window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  const scrollY = window.scrollY;

  hero.style.opacity = 1 - scrollY / 400;
});

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 0.2
});

reveals.forEach(el => observer.observe(el));

const slideshows = document.querySelectorAll(".slideshow");

slideshows.forEach((slide) => {

  const images = slide.dataset.images.split(",");
  let index = 0;

  setInterval(() => {
    index = (index + 1) % images.length;
    slide.src = images[index];
  }, 3000);

});