(() => {
  const nav = document.querySelector('.site-nav');
  const menu = document.getElementById('site-nav-menu');
  const toggle = nav.querySelector('.site-nav-toggle');
  function close() { menu.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); }
  function current() {
    menu.querySelectorAll('a').forEach(a => {
      if (a.hash === location.hash) a.setAttribute('aria-current', 'location');
      else a.removeAttribute('aria-current');
    });
    close();
  }
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.addEventListener('click', e => { if (e.target.closest('a')) close(); });
  document.addEventListener('click', e => { if (!nav.contains(e.target)) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && menu.classList.contains('is-open')) { close(); toggle.focus(); } });
  window.addEventListener('hashchange', current);
  window.matchMedia('(max-width: 960px)').addEventListener('change', close);
  current();
})();
