const elements = {
  btnHideIframe: document.getElementById('btnHideIframe'),
  btnFocusLink: document.getElementById('btnFocusLink'),
  link: document.getElementById('link'),
  iframe: document.getElementById('iframe')
};

elements.btnHideIframe.addEventListener('click', () => {
  elements.iframe.classList.add('is-hidden');
});
elements.btnFocusLink.addEventListener('click', () => {
  elements.link.focus();
});
