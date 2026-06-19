/**
 * Хак-обход: Safari на iOS 18+ выдаёт системный хаптик-фидбэк только при
 * программном клике по <label>, связанному с <input type="checkbox" switch">.
 * Прямого Vibration API в WebKit нет — это единственный известный обходной путь.
 */
function triggerHaptic() {
  const label = document.getElementById('haptic-label');
  if (!label) return;
  label.click();
}
