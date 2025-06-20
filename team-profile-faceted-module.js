<script>
document.addEventListener('DOMContentLoaded', function() {
  const attorneys = [
    {
      name: "Thomas West",
      title: "Founding Partner",
      areas: ["Environmental Law", "Corporate Law", "Litigation & ADR"],
      industries: ["Energy", "Manufacturing", "Technology", "Healthcare"],
      image: "https://images.squarespace-cdn.com/content/683db14b158de878953aef5c/f44bb41c-9e52-4528-829b-05839a22c5c9/thomas-west-ai-generated-photo.png"
    },
    {
      name: "Matthew W. Rimkunas",
      title: "Associate Attorney",
      areas: ["Energy Development", "Corporate Law", "Zoning & Land Use"],
      industries: ["Energy", "Technology", "Finance", "Hospitality"],
      image: "https://images.squarespace-cdn.com/content/683db14b158de878953aef5c/f44bb41c-9e52-4528-829b-05839a22c5c9/thomas-west-ai-generated-photo.png"
    },
    {
      name: "Chanda Harris Steinberg",
      title: "Counselor",
      areas: ["Real Estate", "Zoning & Land Use", "Litigation & ADR"],
      industries: ["Construction", "Retail", "Hospitality"],
      image: "https://images.squarespace-cdn.com/content/683db14b158de878953aef5c/f44bb41c-9e52-4528-829b-05839a22c5c9/thomas-west-ai-generated-photo.png"
    },
    {
      name: "Christopher W. Rust",
      title: "Associate Attorney",
      areas: ["Corporate Law", "Energy Development", "Zoning & Land Use"],
      industries: ["Energy", "Finance", "Restaurants", "Technology"],
      image: "https://images.squarespace-cdn.com/content/683db14b158de878953aef5c/f44bb41c-9e52-4528-829b-05839a22c5c9/thomas-west-ai-generated-photo.png"
    },
    {
      name: "Cindy Monaco",
      title: "Of Counsel",
      areas: ["Environmental Law", "Litigation & ADR", "Real Estate"],
      industries: ["Hospitality", "Retail", "Construction"],
      image: "https://images.squarespace-cdn.com/content/683db14b158de878953aef5c/f44bb41c-9e52-4528-829b-05839a22c5c9/thomas-west-ai-generated-photo.png"
    },
    {
      name: "Greg Mountain",
      title: "Managing Partner",
      areas: ["Corporate Law", "Energy Development", "Environmental Law"],
      industries: ["Energy", "Finance", "Healthcare", "Manufacturing"],
      image: "https://images.squarespace-cdn.com/content/683db14b158de878953aef5c/f44bb41c-9e52-4528-829b-05839a22c5c9/thomas-west-ai-generated-photo.png"
    },
    {
      name: "Louis D. Bianchi",
      title: "Associate",
      areas: ["Zoning & Land Use", "Real Estate", "Litigation & ADR"],
      industries: ["Construction", "Restaurants", "Retail"],
      image: "https://images.squarespace-cdn.com/content/683db14b158de878953aef5c/f44bb41c-9e52-4528-829b-05839a22c5c9/thomas-west-ai-generated-photo.png"
    },
    {
      name: "Mark J. Wagner Jr.",
      title: "Counsel",
      areas: ["Energy Development", "Corporate Law", "Zoning & Land Use"],
      industries: ["Energy", "Technology", "Finance", "Hospitality"],
      image: "https://images.squarespace-cdn.com/content/683db14b158de878953aef5c/f44bb41c-9e52-4528-829b-05839a22c5c9/thomas-west-ai-generated-photo.png"
    },
    {
      name: "Michael Peters",
      title: "Partner",
      areas: ["Real Estate", "Environmental Law", "Litigation & ADR"],
      industries: ["Healthcare", "Construction", "Manufacturing"],
      image: "https://images.squarespace-cdn.com/content/683db14b158de878953aef5c/f44bb41c-9e52-4528-829b-05839a22c5c9/thomas-west-ai-generated-photo.png"
    }
  ];
  const filters = { name: new Set(), area: new Set(), industry: new Set() };

  function setupDropdown(type) {
    const dd = document.getElementById(`dropdown-${type}`);
    const items = [...new Set(
      type === 'area' ? attorneys.flatMap(a => a.areas) :
      type === 'industry' ? attorneys.flatMap(a => a.industries) :
      attorneys.map(a => a.name)
    )].sort();
    dd.innerHTML = items.map(item => `
      <label class="option">
        <input type="checkbox" data-type="${type}" value="${item}">
        ${item}
      </label>
    `).join('');
  }

  function updateCounts() {
    ['name','area','industry'].forEach(type => {
      const checked = document.querySelectorAll(`#dropdown-${type} input[type="checkbox"]:checked`).length;
      document.getElementById(`count-${type}`).textContent = checked ? `(${checked})` : '';
    });
  }

  function renderCards() {
    const results = attorneys.filter(a =>
      (!filters.name.size || filters.name.has(a.name)) &&
      (!filters.area.size || a.areas.some(ar => filters.area.has(ar))) &&
      (!filters.industry.size || a.industries.some(i => filters.industry.has(i)))
    );
    const html = results.length
      ? results.map(a => `
        <div class="card">
          <div class="portrait-container">
            <img src="${a.image}" alt="${a.name}">
          </div>
          <div class="card-content">
            <h3>${a.name}</h3>
            <div class="title">${a.title}</div>
            <ul class="practice-areas">
              ${a.areas.map(ar => `
                <li><img src="https://images.squarespace-cdn.com/content/683db14b158de878953aef5c/646349d9-428e-4435-99d2-1af9b1797eea/gavel-svgrepo-com+%281%29.png" alt="Gavel"><a href="#">${ar}</a></li>`
              ).join('')}
            </ul>
            <div class="buttons">
              <button>Learn More</button><button>vCard</button>
            </div>
          </div>
        </div>`
      ).join('')
      : `<p style="padding:20px;">No matching attorneys.</p>`;
    document.getElementById('cards').innerHTML = html;
    updateCounts();
  }

  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      const type = tab.dataset.filter;
      const dd = document.getElementById(`dropdown-${type}`);
      const active = tab.classList.toggle('active');
      document.querySelectorAll('.filter-tab:not([data-filter="'+type+'"])').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.dropdown-list').forEach(d => d.style.display = 'none');
      if (active) {
        dd.style.display = 'block';
        dd.style.width = tab.offsetWidth+'px';
        dd.style.left = tab.offsetLeft+'px';
      }
    });
  });

  document.body.addEventListener('click', function(e) {
    if (!e.target.closest('.filter-bar')) {
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.dropdown-list').forEach(d => d.style.display = 'none');
    }
  });

  ['name','area','industry'].forEach(type => {
    document.getElementById(`dropdown-${type}`).addEventListener('click', function(e) {
      e.stopPropagation();
    });
  });

  // Only update counts on change, NOT the cards
  document.body.addEventListener('change', function(e) {
    if (e.target.matches('input[type="checkbox"]')) {
      updateCounts();
    }
  });

  document.getElementById('applyFiltersBtn').addEventListener('click', function() {
    // Clear all filter sets
    Object.keys(filters).forEach(type => filters[type].clear());
    // For each filter type, add checked values
    ['name','area','industry'].forEach(type => {
      document.querySelectorAll(`#dropdown-${type} input[type="checkbox"]:checked`).forEach(cb => {
        filters[type].add(cb.value);
      });
    });
    renderCards();
  });

  document.getElementById('clearFiltersBtn').addEventListener('click', function() {
    Object.values(filters).forEach(s => s.clear());
    document.querySelectorAll('.dropdown-list input[type="checkbox"]').forEach(cb => cb.checked = false);
    renderCards();
  });

  ['name','area','industry'].forEach(setupDropdown);
  renderCards();
});
</script>
