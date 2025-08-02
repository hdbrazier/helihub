document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('site-search');
    const feedback = document.getElementById('search-feedback');
  
    const searchTerms = [
      'Resume Builder',
      'Resources',
      'Job Search',
      'Career Path',
      'Study Resources',
      'Find a Mentor',
      'Contact',
      'Med'
    ];
  
    searchInput.addEventListener('input', () => {
      const value = searchInput.value.toLowerCase();
      const matches = searchTerms.filter(term => term.toLowerCase().includes(value));
      
      if (value.length === 0) {
        feedback.textContent = '';
      } else if (matches.length > 0) {
        feedback.textContent = `Suggestions: ${matches.join(', ')}`;
      } else {
        feedback.textContent = 'No matching content found.';
      }
    });
  });
  