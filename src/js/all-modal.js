(() => {
  modal();
})();
function modal() {
  const openerClass = 'data-modal-open';
  const closeClass = 'data-modal-close';
  const hiddenClass = 'is-hidden';
  const body = document.querySelector(`body`);
  const array = [];
  document.querySelectorAll(`[${openerClass}]`).forEach(el => {
    const modalGrop = {
      opener: el,
      modal: document.getElementById(el.getAttribute(openerClass)),
    };
    if (!modalGrop.modal) return;
    modalGrop.close = modalGrop.modal.querySelector(`[${closeClass}]`);
    array.push(modalGrop);
  });
  array.forEach(el => {
    el.opener.addEventListener('click', () => {
      el.modal.classList.remove(hiddenClass);
      console.log(`sadasd`);
      body.classList.add(`disable-scroll`);
    });
    el.close.addEventListener('click', () => {
      if (!el.modal.classList.contains(hiddenClass)) {
        el.modal.classList.add(hiddenClass);
        body.classList.remove(`disable-scroll`);
      }
    });
  });
}
