// Lista de carros com nome, descrição, preço e caminho da imagem
const cars = [
  {
    name: 'HB20',
    description: 'Compacto, confortável e econômico. Ideal para viagens urbanas.',
    price: 'R$ 120,00/dia',
    img: 'Projeto-site/img/hb20.jpg'
  },
  {
    name: 'Fiat Strada',
    description: 'Espaçosa e segura, perfeita para aventuras longas e com bagagem.',
    price: 'R$ 130,00/dia',
    img: 'Projeto-site/img/strada.webp'
  },
  {
    name: 'Chevette Clássico',
    description: 'Design clássico e ideal para eventos de carros antigos e passeios descontraídos.',
    price: 'R$ 80,00/dia',
    img: 'Projeto-site/img/chevette.webp'
  },
  {
    name: 'Marea Turbo',
    description: 'Alta performance, estilo esportivo e excelente para aventuras bombasticas.(Sem garantia)',
    price: 'R$ 400,00/dia',
    img: 'Projeto-site/img/marea.jpeg'
  },
  {
    name: 'Jetta',
    description: 'Com motor 2.0 TSI, o Jetta oferece performance, conforto e design elegante.',
    price: 'R$ 220,00/dia',
    img: 'Projeto-site/img/jetta.avif'
  },
  {
    name: 'Golf GTI',
    description: 'Motor 2.0 TSI, 220 cv, câmbio automático de 6 marchas. Um esportivo completo com design e performance.',
    price: 'R$ 250,00/dia',
    img: 'Projeto-site/img/golf.jpg'
  },
  {
    name: 'Civic Si',
    description: 'Motor 2.4L, 206 cv, câmbio manual de 6 marchas. Um carro esportivo com um visual arrojado e desempenho .',
    price: 'R$ 270,00/dia',
    img: 'Projeto-site/img/civic.webp'
  },
  {
    name: 'Santana',
    description: 'O clássico da Volkswagen. Ideal para quem busca conforto e um toque de nostalgia.',
    price: 'R$ 80,00/dia',
    img: 'Projeto-site/img/santana.jpg' // Caminho da imagem
  }
];

// Função para renderizar os carros na página
function renderCars() {
  const carGrid = document.getElementById('car-grid');
  carGrid.innerHTML = ''; // Limpa o grid antes de adicionar novos carros

  cars.forEach(car => {
    const carCard = document.createElement('div');
    carCard.classList.add('car-card');
    
    // Link para redirecionar ao WhatsApp com o nome do carro
    const whatsappLink = `https://wa.me/5546991159899?text=Olá,%20quero%20alugar%20o%20carro%20${encodeURIComponent(car.name)}`;

    carCard.innerHTML = `
      <img src="${car.img}" alt="${car.name}" class="car-img">
      <h3>${car.name}</h3>
      <p>${car.description}</p>
      <div class="car-price">${car.price}</div>
      <a href="${whatsappLink}" target="_blank">Alugar</a>  <!-- Redirecionamento para WhatsApp com nome do carro -->
    `;
    
    carGrid.appendChild(carCard);
  });
}

// Função para filtrar carros com base no nome
function filterCars() {
  const searchQuery = document.getElementById('search-bar').value.toLowerCase();
  const filteredCars = cars.filter(car => car.name.toLowerCase().includes(searchQuery));
  
  // Atualiza o grid com os carros filtrados
  const carGrid = document.getElementById('car-grid');
  carGrid.innerHTML = ''; // Limpa o grid antes de adicionar os carros filtrados

  filteredCars.forEach(car => {
    const carCard = document.createElement('div');
    carCard.classList.add('car-card');
    
    // Link para redirecionar ao WhatsApp com o nome do carro
    const whatsappLink = `https://wa.me/5546991159899?text=Olá,%20quero%20alugar%20o%20carro%20${encodeURIComponent(car.name)}`;

    carCard.innerHTML = `
      <img src="${car.img}" alt="${car.name}" class="car-img">
      <h3>${car.name}</h3>
      <p>${car.description}</p>
      <div class="car-price">${car.price}</div>
      <a href="${whatsappLink}" target="_blank">Alugar</a>  <!-- Redirecionamento para WhatsApp com nome do carro -->
    `;
    
    carGrid.appendChild(carCard);
  });
}

// Renderiza todos os carros ao carregar a página
document.addEventListener('DOMContentLoaded', renderCars);
