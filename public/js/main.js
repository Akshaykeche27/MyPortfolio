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
        // hold then start deleting
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
    // speed slightly random to feel natural
    setTimeout(tick, forward ? 100 : 60);
  }
  tick();
});