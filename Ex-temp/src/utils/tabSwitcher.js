export function initTabSwitcher({
  tabSelector = '.switch-tab',
  contentSelector = '.switch-tab-content',
  activeClass = 'active'
} = {}) {
  const tabs = document.querySelectorAll(tabSelector);
  const contents = document.querySelectorAll(contentSelector);

  if (!tabs.length || !contents.length) return;

  const switchTab = (index) => {
    tabs.forEach((tab, i) => {
      tab.classList.toggle(activeClass, i === index);
    });

    contents.forEach((content, i) => {
      content.classList.toggle(activeClass, i === index);
    });
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => switchTab(index));
  });

  // 초기 활성화 (첫 탭)
  switchTab(0);
}