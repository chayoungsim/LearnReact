export const quickToggle = ({
    buttonSelector = '.btn-quick',
    overlaySelector = '.quick-overlay',
    talkSelector='.quick-talk',
    activeClass = 'open'
 } = {}) => {
  const quickBtn = document.querySelector(buttonSelector);
  const quickOverlay = document.querySelector(overlaySelector);
  const quickTalk = document.querySelector(talkSelector)
  const btnX = quickTalk?.querySelector('.btn-x');
 
  if (!quickBtn || !quickOverlay || !quickTalk) return;

  quickTalk.classList.add(activeClass);

  const openOverlay = () => {
    quickBtn.classList.add(activeClass);
    quickOverlay.classList.add(activeClass);
    quickTalk.classList.remove(activeClass); // overlay 열리면 talk 닫힘
  };

  const closeOverlay = () => {
    quickBtn.classList.remove(activeClass);
    quickOverlay.classList.remove(activeClass);
    quickTalk.classList.add(activeClass); // overlay 닫히면 talk 열림
  };

  const onToggle = () => {
    const isOpen = quickOverlay.classList.contains(activeClass);
    isOpen ? closeOverlay() : openOverlay();
  };

  const onClose = () => {
    closeOverlay();
  };

  const onTalkClose = () => {
    quickTalk.classList.remove(activeClass);
  };

  quickBtn.addEventListener('click', onToggle);
  quickOverlay.addEventListener('click', onClose);
  btnX?.addEventListener('click', onTalkClose);

  return () => {
    quickBtn.removeEventListener('click', onToggle);
    quickOverlay.removeEventListener('click', onClose);
    btnX?.removeEventListener('click', onTalkClose);
    closeOverlay();
  };

}
