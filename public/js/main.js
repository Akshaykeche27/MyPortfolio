// Typed animation (grow & shrink letter-by-letter)
document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('typed');
  if (!el) return;
  const words = JSON.parse(el.getAttribute('data-words') || '[]');
  let wIndex = 0, charIndex = 0, forward = true;

  function tick() {
    const current = words[wIndex % words.length] || '';
    if (forward) {
      charIndex++;
      if (charIndex >= current.length) {
        forward = false;
        setTimeout(tick, 800);
        return;
      }
    } else {
      charIndex--;
      if (charIndex <= 0) {
        forward = true;
        wIndex++;
      }
    }
    el.textContent = current.slice(0, charIndex);
    setTimeout(tick, forward ? 100 : 60);
  }
  tick();
});

// Navbar auto close on mobile
document.addEventListener("DOMContentLoaded", () => {
  const navbarElement = document.querySelector(".navbar-collapse");
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbarElement.classList.contains("show")) {
        const bsCollapse = new bootstrap.Collapse(navbarElement, { toggle: false });
        bsCollapse.hide();
      }
    });
  });
});

console.log("JS Loaded Successfully");