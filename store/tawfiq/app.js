// Категорияларды көрсөтүү үчүн функция
function showCategory(category) {
  const sections = document.querySelectorAll('.category-content');
  const buttons = document.querySelectorAll('.category-btn');

  sections.forEach((section) => {
    section.style.display = 'none';
  });

  buttons.forEach((button) => {
    button.classList.remove('active');
  });

  document.getElementById(category).style.display = 'block';
};
