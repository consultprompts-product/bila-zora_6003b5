(function () {
    var toggle = document.getElementById('menu-toggle');
    var panel = document.getElementById('mobile-menu');
    var a = document.getElementById('tg-a');
    var b = document.getElementById('tg-b');
    function setOpen(open) {
      panel.classList.toggle('hidden', !open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      a.setAttribute('d', open ? 'M4 4l12 12' : 'M3 7h14');
      b.setAttribute('d', open ? 'M16 4L4 16' : 'M3 13h14');
    }
    toggle.addEventListener('click', function () { setOpen(panel.classList.contains('hidden')); });
    panel.querySelectorAll('a').forEach(function (l) { l.addEventListener('click', function () { setOpen(false); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !panel.classList.contains('hidden')) { setOpen(false); toggle.focus(); } });
    window.addEventListener('resize', function () { if (window.innerWidth >= 1024) setOpen(false); });
    var y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
  })();