<script>
// Wait for the DOM and announcement bar to load
function customizeAnnouncementBar() {
  var annBar = document.querySelector('.sqs-announcement-bar-text-inner p');
  if (annBar && !annBar.innerHTML.includes("LOYALTY PROGRAM")) {
    annBar.innerHTML = `
      <span class="announcement-left">
        <span class="ann-icon">📍</span> 27 Saratoga Ave, Waterford, NY 12188
        <span class="ann-icon" style="margin-left:14px;">📞</span> (518) 500-2065
      </span>
      <span class="announcement-right-group">
        <span class="ann-icon">ℹ️</span> RECREATIONAL
        <span class="ann-icon" style="margin:0 8px;">🕒</span> 10:00 AM • 8:00 PM
        <button id="custom-loyalty-btn" onclick="window.location.href='/loyalty-program'">JOIN OUR LOYALTY PROGRAM</button>
      </span>
    `;
  }
}
// Poll until the bar is loaded (Squarespace loads it late)
var pollBar = setInterval(() => {
  if (document.querySelector('.sqs-announcement-bar-text-inner p')) {
    customizeAnnouncementBar();
    clearInterval(pollBar);
  }
}, 250);
setTimeout(() => clearInterval(pollBar), 10000); // Stop polling after 10s
</script>
