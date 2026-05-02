import './style.css'
import { initTypingEffect } from "./typing.js";
import marquee from './components/marquee.html?raw';

document.addEventListener("DOMContentLoaded", () => {
  initTypingEffect();

  const container = document.querySelector('#marquee-container');

  if (container) {
    container.innerHTML = marquee;
  }
});