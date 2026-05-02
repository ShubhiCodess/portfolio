export function initTypingEffect() {
  const texts = [
    "Design ",
    "Create ",
    "Code ",
    "Talk "
  ];

  let i = 0;
  let j = 0;
  let isDeleting = false;

  const speed = 300;
  const element = document.getElementById("typing-text");

  if (!element) return;

  function type() {
    const currentText = texts[i];

    if (isDeleting) {
      element.textContent = currentText.substring(0, j--);
    } else {
      element.textContent = currentText.substring(0, j++);
    }

    if (!isDeleting && j === currentText.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }

    if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % texts.length;
    }

    setTimeout(type, isDeleting ? speed / 2 : speed);
  }

  type();
}