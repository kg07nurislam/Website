const productArr = [
  {
    "id": "PID-000001",
    "name": "Product 1",
    "img-url": "../tawfiq.jpg",
    "description": "Бул жерде продукт сүрөттөмөсү",
    "price": "600",
    "seller-wb": "+996222453753",
    "seller-ig": "tawfiq.kg"
  },
  {
    "id": "PID-000002",
    "name": "Product 2",
    "img-url": "../tawfiq.jpg",
    "description": "Бул жерде продукт сүрөттөмөсү",
    "price": "4500",
    "seller-wb": "+996222453753",
    "seller-ig": "tawfiq.kg"
  },
  {
    "id": "PID-000003",
    "name": "Product 3",
    "img-url": "../tawfiq.jpg",
    "description": "Бул жерде продукт сүрөттөмөсү",
    "price": "400",
    "seller-wb": "+996222453753",
    "seller-ig": "tawfiq.kg"
},
  {
    "id": "PID-000004",
    "name": "Product 4",
    "img-url": "../tawfiq.jpg",
    "description": "Бул жерде продукт сүрөттөмөсү",
    "price": "600",
    "seller-wb": "+996222453753",
    "seller-ig": "tawfiq.kg"
},
  {
    "id": "PID-000005",
    "name": "Product 5",
    "img-url": "../tawfiq.jpg",
    "description": "Бул жерде продукт сүрөттөмөсү",
    "price": "200",
    "seller-wb": "+996222453753",
    "seller-ig": "tawfiq.kg"
},
  {
    "id": "PID-000006",
    "name": "Product 6",
    "img-url": "../tawfiq.jpg",
    "description": "Бул жерде продукт сүрөттөмөсү",
    "price": "900",
    "seller-wb": "+996222453753",
    "seller-ig": "tawfiq.kg"
}];

// Контейнерди алуу
const productContainer = document.querySelector('.product-items');
const modal = document.getElementById('order-modal');
const whatsappBtn = document.getElementById('whatsapp-btn');
const instagramBtn = document.getElementById('instagram-btn');
const closeModal = document.getElementById('close-modal');

let selectedProduct = null;

// Продукттарды кошуу
productArr.forEach(product => {
  const productHTML = `
    <div class="product-item">
      <img src="https://kg07nurislam.com/images/sample-product-image.png" class="product-img" alt="${product.name}">
      <h5 class="product-name">${product.name}</h5>
      <p class="product-description">${product.description}</p>
      <p class="product-price"><b>Баасы: </b>${product.price} с</p>
      <button class="order-btn" data-id="${product.id}"><i class="fas fa-cart-plus"></i> Сатып алуу</button>
    </div>
  `;
  productContainer.innerHTML += productHTML;
});

// "Сатып алуу" басканда модал ачуу
document.querySelectorAll('.order-btn').forEach(button => {
  button.addEventListener('click', (e) => {
    const productId = e.target.getAttribute('data-id');
    selectedProduct = productArr.find(p => p.id === productId);
    modal.style.display = 'flex';
  });
});

// WhatsAppка жөнөтүү
whatsappBtn.addEventListener('click', () => {
  if (selectedProduct) {
    const whatsappLink = `https://wa.me/${selectedProduct['seller-wb']}?text=Салам!%20${selectedProduct.name}%20атты%20продуктту%20сатып%20алгым%20келет.`;
    window.location.href = whatsappLink;
  }
});

// Instagramга жөнөтүү
instagramBtn.addEventListener('click', () => {
  if (selectedProduct) {
    const instagramLink = `https://www.instagram.com/${selectedProduct['seller-ig']}`;
    window.location.href = instagramLink;
  }
});

// Модалды жабуу
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});
