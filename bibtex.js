document.addEventListener('click', async function (event) {
  const toggle = event.target.closest('.bibtex-toggle');
  if (toggle) {
    const panel = document.getElementById(toggle.getAttribute('aria-controls'));
    if (!panel) return;
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    panel.hidden = expanded;
    return;
  }
  const copy = event.target.closest('.bibtex-copy');
  if (!copy) return;
  const panel = copy.closest('.bibtex-panel');
  const status = panel.querySelector('.bibtex-status');
  try {
    await navigator.clipboard.writeText(panel.querySelector('code').textContent);
    status.textContent = 'Copied.';
  } catch {
    status.textContent = 'Select the citation above to copy.';
  }
});
