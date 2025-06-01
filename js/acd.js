// Headers

// main header
document.addEventListener('DOMContentLoaded', function() {
  const mainHeader = document.getElementById('main-header');
  
  // Динамикалык контентти орнотуу
  mainHeader.innerHTML = `
    <div class="logo" id="logo">kg07nurislam</div>
    <div class="menu-toggle" id="open-toggle">&#9776;</div>
    <div class="menu-toggle" id="close-toggle">&times;</div>
    <nav class="nav-links" id="nav-links">
      <a href="/">Башкы</a>
      <a href="infoner/">Infoner</a>
      <a href="#">Жөнүндө</a>
      <a href="#">Байланыш</a>
    </nav>`;
  
  // өзгөрмөлөр түзүү 
  const openToggle = document.getElementById('open-toggle');
  const closeToggle = document.getElementById('close-toggle');
  const navLinks = document.getElementById('nav-links');
  
  closeToggle.style.display = 'none';
  
  // Меню ачуу
  openToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    openToggle.style.display = 'none';
    closeToggle.style.display = 'block';
  });
  
  // Меню жабуу 
  closeToggle.addEventListener('click', () => {
    navLinks.classList.remove('active');
    openToggle.style.display = 'block';
    closeToggle.style.display = 'none';
  })
});
