import './style.css'
import { initTypingEffect } from "./typing.js";

document.addEventListener("DOMContentLoaded", () => {
  initTypingEffect();
});

document.querySelector('#app').innerHTML = `
<section class="hero">
  <h1>Hi, I'm Shubham</h1>
  <h2><span id="typing-text"></span></h2>
</section>
`;