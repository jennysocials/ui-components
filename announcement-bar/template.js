function getTodaysHours() {
  // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const hoursMap = [
    "9 am–7 pm",   // Sunday
    "8 am–9 pm",   // Monday
    "8 am–9 pm",   // Tuesday
    "8 am–9 pm",   // Wednesday
    "8 am–9 pm",   // Thursday
    "8 am–11 pm",  // Friday
    "8 am–11 pm"   // Saturday
  ];
  const daysMap = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];
  const now = new Date();

  // Capitalize AM/PM in hours string
  let hours = hoursMap[now.getDay()].replace(/\b(am|pm)\b/gi, s => s.toUpperCase());

  return {
    hours,
    day: daysMap[now.getDay()]
  };
}

function customizeAnnouncementBar() {
  var annBar = document.querySelector('.sqs-announcement-bar-text-inner p');
  if (annBar && !annBar.innerHTML.includes("LOYALTY PROGRAM")) {
    const today = getTodaysHours();
    annBar.innerHTML = `
      <span class="announcement-left">
        <a href="https://www.google.com/maps/dir//27+Saratoga+Ave,+Waterford,+NY+12188/@42.7815284,-73.7776905,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89de110066b3ebed:0x2a0a2d5857af6e51!2m2!1d-73.6952898!2d42.7815579?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" class="announcement-link">
          <img class="ann-icon" src="https://images.squarespace-cdn.com/content/685c261e5f94b467c6305d16/7586125a-b55d-44cd-81e0-3ff036b471ea/IMG_0194.PNG?content-type=image%2Fpng" alt="Location" style="height: 1.2em; margin-right:6px; vertical-align:middle;" />
          27 Saratoga Ave, Waterford, NY 12188
        </a>
        <a href="tel:+15185002065" class="announcement-link" style="margin-left:16px;">
          <img class="ann-icon" src="https://images.squarespace-cdn.com/content/685c261e5f94b467c6305d16/b4c69e06-7691-4bcf-9504-650b3ca10dee/IMG_0195.PNG?content-type=image%2Fpng" alt="Phone" style="height: 1.2em; margin-right:6px; vertical-align:middle;" />
          (518) 500-2065
        </a>
      </span>
      <span class="announcement-right-group">
        <img class="ann-icon" src="https://images.squarespace-cdn.com/content/685c261e5f94b467c6305d16/57c759ef-4ebd-450e-b11f-ce471292ea6d/IMG_0193.PNG?content-type=image%2Fpng" alt="Recreational" style="height: 1.2em; margin-right:6px; vertical-align:middle;" />
        RECREATIONAL
        <img class="ann-icon" src="https://images.squarespace-cdn.com/content/685c261e5f94b467c6305d16/f262f337-5fd2-4ae2-9fad-4fb59194d151/IMG_0196.PNG?content-type=image%2Fpng" alt="Hours" style="height: 1.2em; margin:0 8px; vertical-align:middle;" />
        <span title="Today's hours">${today.hours} <span style="font-size:0.88em;color:#bfe0ca;margin-left:2px;">(${today.day})</span></span>
        <a class="custom-loyalty-link" id="custom-loyalty-btn" href="https://enrollnow.vip/join/35964?custom_group=leafy-website" target="_blank" rel="noopener">JOIN OUR LOYALTY PROGRAM</a>
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
