/*
document.addEventListener('DOMContentLoaded', function() {
  const header = document.getElementById('footer');

  // Динамикалык контентти орнотуу
  header.innerHTML = `
    <nav>
      <ul>
        <a href="tg-index.html">
          <li><span>🏠</span>Башкы</li>
        </a>
        <a href="store.html">
          <li><span>🛍️</span>Store</li>
        </a>
        <a href="infoner.html">
          <li><span>📖</span>Infoner</li>
        </a>
        <a href="partners.html">
          <li><span>🤝</span>Өнөктөш</li>
        </a>
      </ul>
    </nav>
  `;
});
*/

// Категорияларды көрсөтүү үчүн функция
function showPage(page) {
  const sections = document.querySelectorAll('.page');
  const buttons = document.querySelectorAll('.page-btn');

  sections.forEach((section) => {
    section.style.display = 'none';
  });

  buttons.forEach((button) => {
    button.classList.remove('active');
  });

  document.getElementById(page).style.display = 'block';
};
