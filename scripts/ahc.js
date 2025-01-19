document.addEventListener('DOMContentLoaded', function() {
  const header = document.getElementById('header');

  // Беттин title тегиндеги атты алуу
  const pageTitle = document.title;

  // Динамикалык контентти орнотуу
  header.innerHTML = `
    <nav>
      <div class="toggle-button" onclick="toggleNav()"> ☰</div>
      <ul>
        <a href="../index.html">
          <li>Башкы бет</li>
        </a>
        <a href="../pages/partners.html">
          <li>Өнөктөштөр</li>
        </a>
        <a href="../pages/contact.html">
          <li>Байланыш</li>
        </a>
        <a href="../pages/about.html">
          <li>Жөнүндө</li>
        </a>
      </ul>
    </nav>
    <h2 class="site-title">${pageTitle}</h2>
  `;
});