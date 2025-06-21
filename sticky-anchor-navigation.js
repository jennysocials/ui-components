<!-- Sticky Menu for Anchor Navigations Start -->
<script>
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  const menu1 = document.getElementById('practice-area-anchor-link-menu');
  const menu2 = document.getElementById('attorney-anchor-navigation');
  if (!header) return;

  // Get the offset from the top of the page for each bar (if they exist)
  const offsets = [menu1, menu2]
    .filter(Boolean)
    .map(el => el.getBoundingClientRect().top + window.scrollY);

  // Find which comes first (smallest offset)
  const minOffset = Math.min(...offsets);

  window.addEventListener('scroll', function() {
    if (window.scrollY >= minOffset) {
      header.style.display = 'none';
    } else {
      header.style.display = '';
    }
  });
});
</script>
<!-- Sticky Menu for Anchor Navigations End -->
