<!--  PRACTICE AREAS MEGA MENU JAVASCRIPT START -->
<script>
  document.addEventListener("DOMContentLoaded", function () {
    const link = document.querySelector('a[href="/practice-areas-dropdown"]');
    const menu = document.getElementById('practiceAreasDropdown');

    if (link && menu) {
      const hoverArea = document.createElement("div");
      hoverArea.style.position = "relative";
      link.parentNode.insertBefore(hoverArea, link);
      hoverArea.appendChild(link);
      document.body.appendChild(menu);

      hoverArea.addEventListener("mouseenter", () => {
        menu.style.display = "block";
      });

      hoverArea.addEventListener("mouseleave", () => {
        setTimeout(() => {
          if (!menu.matches(":hover")) menu.style.display = "none";
        }, 200);
      });

      menu.addEventListener("mouseenter", () => {
        menu.style.display = "block";
      });

      menu.addEventListener("mouseleave", () => {
        menu.style.display = "none";
      });
    }
  });
</script>
<!-- PRACTICE AREAS MEGA MENU JAVASCRIPT END -->
