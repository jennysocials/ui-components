<script>
  document.addEventListener("DOMContentLoaded", () => {
    const link = document.querySelector('a[href="/attorneys-dropdown"]');
    const menu = document.getElementById('attorneysDropdown');
    if (link && menu) {
      const hoverArea = document.createElement('div');
      hoverArea.style.position = 'relative';
      hoverArea.classList.add('attorney-mega-menu-hover-area');
      link.parentNode.insertBefore(hoverArea, link);
      hoverArea.appendChild(link);
      document.body.appendChild(menu);

      hoverArea.addEventListener('mouseenter', () => menu.style.display = 'block');
      hoverArea.addEventListener('mouseleave', () => setTimeout(() => {
        if (!menu.matches(':hover')) menu.style.display = 'none';
      }, 200));
      menu.addEventListener('mouseenter', () => menu.style.display = 'block');
      menu.addEventListener('mouseleave', () => menu.style.display = 'none');
    }
  });
</script>
