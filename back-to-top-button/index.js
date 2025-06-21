<script>
  document.querySelector('.back-to-top').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', () => {
    const btn = document.querySelector('.back-to-top');
    if (!btn) return;
    btn.style.display = window.scrollY > 300 ? 'flex' : 'none';
  });
</script>
