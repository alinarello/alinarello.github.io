document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // 1. GESTIONE TEMA (DARK / LIGHT MODE)
  // ==========================================================================
  const themeToggleBtn = document.getElementById('theme-toggle');
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');
  const themeToggleText = document.getElementById('theme-toggle-text');

  // Recupera il tema salvato o usa quello preferito dal sistema
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  setTheme(initialTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    if (theme === 'dark') {
      sunIcon.classList.remove('hidden');
      moonIcon.classList.add('hidden');
      themeToggleText.textContent = 'Tema Chiaro';
    } else {
      sunIcon.classList.add('hidden');
      moonIcon.classList.remove('hidden');
      themeToggleText.textContent = 'Tema Scuro';
    }
  }

  // ==========================================================================
  // 2. FILTRI & RICERCA DENTRO LE PUBBLICAZIONI
  // ==========================================================================
  const searchInput = document.getElementById('search-input');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const paperCards = document.querySelectorAll('.paper-card');
  const sections = document.querySelectorAll('.papers-section');

  let currentSearchQuery = '';
  let currentActiveFilter = 'all';

  // Evento di ricerca
  searchInput.addEventListener('input', (e) => {
    currentSearchQuery = e.target.value.toLowerCase().trim();
    filterPapers();
  });

  // Evento di filtraggio tramite i bottoni
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentActiveFilter = btn.getAttribute('data-filter');
      filterPapers();
    });
  });

  // Funzione core di filtraggio
  function filterPapers() {
    paperCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      
      // Estrai tutto il testo ricercabile dalla card
      const title = card.querySelector('.paper-title')?.textContent.toLowerCase() || '';
      const authors = card.querySelector('.paper-authors')?.textContent.toLowerCase() || '';
      const details = card.querySelector('.paper-details')?.textContent.toLowerCase() || '';
      const badge = card.querySelector('.journal-badge')?.textContent.toLowerCase() || '';
      const note = card.querySelector('.paper-note')?.textContent.toLowerCase() || '';
      
      const isSearchMatch = title.includes(currentSearchQuery) || 
                            authors.includes(currentSearchQuery) || 
                            details.includes(currentSearchQuery) || 
                            badge.includes(currentSearchQuery) ||
                            note.includes(currentSearchQuery);

      const isCategoryMatch = currentActiveFilter === 'all' || cardCategory === currentActiveFilter;

      // Gestione visualizzazione della card con effetto di fade-in
      if (isSearchMatch && isCategoryMatch) {
        card.style.display = 'flex';
        card.style.opacity = '0';
        setTimeout(() => {
          card.style.opacity = '1';
        }, 50);
      } else {
        card.style.display = 'none';
      }
    });

    // Nascondi le intere sezioni se non contengono elementi corrispondenti ai filtri/ricerca
    sections.forEach(section => {
      const visibleCards = section.querySelectorAll('.paper-card[style*="display: flex"]');
      if (visibleCards.length === 0) {
        section.style.display = 'none';
      } else {
        section.style.display = 'flex';
      }
    });
  }
});
