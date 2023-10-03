(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const body = document.querySelector(`body`);
  //
  const openMenu = () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    body.classList.toggle(`disable-scroll`);
    mobileMenuRef.classList.toggle('is-open');
  };
  //
  const changeDir = evt => {
    if (evt.target.nodeName !== 'A') {
      return;
    } else if (mobileMenuRef.classList.contains(`is-open`)) {
      openMenu();
    }
  };
  mobileMenuRef.addEventListener(`click`, changeDir);
  menuBtnRef.addEventListener('click', openMenu);
})();
