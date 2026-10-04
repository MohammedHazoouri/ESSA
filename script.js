(() => {
  const stage = document.querySelector('.stage');
  const button = document.getElementById('openButton');
  const letter = document.getElementById('letter');
  const hint = document.getElementById('hint');

  if (!stage || !button || !letter || !hint) return;

  button.addEventListener('click', () => {
    const isOpen = stage.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(isOpen));
    letter.setAttribute('aria-hidden', String(!isOpen));
    hint.textContent = isOpen
      ? 'تم فتح الرسالة — اقرأ دعوتك السحرية!'
      : 'اضغط على الظرف لتكتشف دعوتك';
  });
})();
