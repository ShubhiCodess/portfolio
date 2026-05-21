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

/* =========================================
   CINEMATIC WORKS SECTION
========================================= */

const projects = [

  {
    theme: "theme-railway",

    index: "01",

    tag: "COMPUTER VISION • EMBEDDED SYSTEMS",

    title: "Railway Crack Detection System",

    description:
      "AI powered railway inspection system using ESP32-CAM and YOLOv8 for real-time crack detection and wireless monitoring.",

    image: "/photos/track1.jpg",

    link:
      "https://github.com/ShubhiCodess/Crack-Detection-in-Railway-Tracks",

    button:
    "View Github"  
  },

  {
    theme: "theme-design",

    index: "02",

    tag: "LEADERSHIP • DESIGN • EVENT MANAGEMENT",

    title: "President, Designers Club",

    description:
      "Led the Designers Club at VIT Chennai, handling fashion shows, creative direction, branding systems, and large-scale event execution.",

    image: "/photos/post1.jpg",

    link:
      "https://www.instagram.com/p/C8l29adsPzr/?utm_source=ig_web_copy_link",
    
    button:
    "View Instagram"
  
  },

  {
    theme: "theme-system",

    index: "03",

    tag: "CLOUD SYSTEMS • LEARNING",

    title: "AWS Cloud Journey",

    description:
      "Currently exploring cloud infrastructure, deployment systems, networking concepts, and scalable backend architecture.",

    image: "/photos/bg345.jpg",

    link:
      "https://aws.amazon.com/",
    
    button:
    "Certification Exam"
  }

];

/* ELEMENTS */

const worksSection = document.querySelector(".projects-section");

const worksIndex = document.querySelector("#works-index");
const worksTag = document.querySelector("#works-tag");
const worksTitle = document.querySelector("#works-title");
const worksDescription = document.querySelector("#works-description");
const worksImage = document.querySelector("#works-image");
const worksLink =document.querySelector("#works-link");

const worksLinkText =document.querySelector("#works-link-text");

const steps = document.querySelectorAll(".works-step");

/* SWITCH PROJECT */

let currentProject = -1;

function setProject(index){

  /* STOP REPEATED TRIGGERS */

  if(currentProject === index) return;

  currentProject = index;

  const project = projects[index];

  const showcase =
    document.querySelector(".works-showcase");

  /* ONLY ANIMATE AFTER FIRST LOAD */

  if(index != 0){

    showcase.classList.add("changing");

  }

  setTimeout(() => {

    worksSection.className =
      `projects-section ${project.theme}`;

    worksIndex.textContent =
      project.index;

    worksTag.textContent =
      project.tag;

    worksTitle.textContent =
      project.title;

    worksDescription.textContent =
      project.description;

    worksImage.src =
      project.image;

    worksLink.href =
      project.link;
    
    worksLinkText.textContent =  
      project.button;

    showcase.classList.remove("changing");

  }, index == 0 ? 0 : 250);
}

/* OBSERVER */

const worksObserver =
new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      const projectIndex =
        entry.target.dataset.project;

      setProject(projectIndex);
    }

  });

}, {
  threshold: 0.35
});

steps.forEach(step => {
  worksObserver.observe(step);
});

/* =========================================
   WORKS SCROLL PROGRESS
========================================= */

const worksProgressFill =
document.querySelector(".works-progress-fill");

window.addEventListener("scroll", () => {

  const worksSection =
    document.querySelector(".projects-section");

  const rect =
    worksSection.getBoundingClientRect();

  const sectionHeight =
    worksSection.offsetHeight - window.innerHeight;

  const progress =
    Math.min(
      Math.max(
        -rect.top / sectionHeight,
        0
      ),
      1
    );

  worksProgressFill.style.height =
    `${progress * 100}%`;
});