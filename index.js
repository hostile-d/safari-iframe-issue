const elements = {
  btnHideIframe: document.getElementById('btnHideIframe'),
  btnRemoveIframe: document.getElementById('btnRemoveIframe'),
  btnFocusLink: document.getElementById('btnFocusLink'),
  link: document.getElementById('link'),
  iframe: document.getElementById('iframe')
};

elements.btnHideIframe.addEventListener('click', () => {
  elements.iframe.classList.add('is-hidden');
});
elements.btnRemoveIframe.addEventListener('click', e => {
  elements.iframe.parentElement.removeChild(elements.iframe);
});
elements.btnFocusLink.addEventListener('click', () => {
  elements.link.focus();
});
