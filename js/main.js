// ========================================
// MAIN.JS - Homepage Logic
// ========================================

// Carregar produtos em destaque
async function loadFeaturedProducts() {
  try {
    const response = await fetch('/api/produtos');
    if (!response.ok) throw new Error('Erro ao carregar produtos');

    const data = await response.json();

    if (data.success && data.produtos) {
      const featured = data.produtos.slice(0, 4);
      renderProductCards('featured-products', featured);
    }
  } catch (error) {
    console.error('Erro ao carregar produtos em destaque:', error);
  }
}

// Carregar produtos para pets
async function loadPetProducts() {
  try {
    const response = await fetch('/api/produtos');
    if (!response.ok) throw new Error('Erro ao carregar produtos');

    const data = await response.json();

    if (data.success && data.produtos) {
      // Filtrar produtos que tenham "pet", "cachorro", "gato", etc no nome ou descrição
      const petProducts = data.produtos.filter(p => {
        const text = (p.nome + ' ' + p.descricao).toLowerCase();
        return text.includes('pet') || text.includes('cachorro') || text.includes('gato') ||
               text.includes('cão') || text.includes('animal') || text.includes('ração');
      }).slice(0, 4);

      renderProductCards('pet-products', petProducts);
    }
  } catch (error) {
    console.error('Erro ao carregar produtos para pets:', error);
  }
}

// Renderizar cards de produtos
function renderProductCards(containerId, products) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (products.length === 0) {
    container.innerHTML = '<p class="col-span-full text-center text-gray-500 dark:text-gray-400">Nenhum produto disponível no momento.</p>';
    return;
  }

  container.innerHTML = products.map(product => createProductCard(product)).join('');

  // Event listeners para botões
  container.querySelectorAll('.btn-comprar').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const url = this.dataset.link;
      const nome = this.dataset.nome;
      console.log(`🛒 Clique em [${nome}]`);
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  });
}

// Criar card de produto
function createProductCard(product) {
  const badgeColors = {
    'Shopee': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    'Amazon': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    'Mercado Livre': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    'Magalu': 'bg-blue-500/20 text-blue-400 border-blue-500/30'
  };

  const badgeClass = badgeColors[product.badge] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';

  return `
    <article class="product-card bg-white dark:bg-dark-card rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col">
      <div class="relative overflow-hidden aspect-square bg-gray-100 dark:bg-gray-900">
        <img
          src="${product.img}"
          alt="${product.nome}"
          class="w-full h-full object-cover"
          loading="lazy"
          onerror="this.src='https://via.placeholder.com/400x400/1F1F1F/8B5CF6?text=VareiShop'"
        />
        ${product.badge ? `<span class="absolute top-3 left-3 ${badgeClass} border text-xs font-bold px-3 py-1 rounded-lg backdrop-blur-sm">${product.badge}</span>` : ''}
      </div>

      <div class="p-5 flex flex-col flex-grow">
        <h3 class="font-bold text-base mb-2 line-clamp-2 min-h-[3rem]">
          ${product.nome}
        </h3>
        <p class="text-gray-600 dark:text-gray-400 text-xs mb-4 line-clamp-2 flex-grow">
          ${product.descricao}
        </p>

        <div class="mt-auto">
          <p class="text-2xl font-extrabold text-primary mb-4">
            ${product.preco}
          </p>
          <button
            class="btn-comprar w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-xl transition-all hover:scale-105"
            data-link="${product.link}"
            data-nome="${product.nome}">
            Ver oferta →
          </button>
        </div>
      </div>
    </article>
  `;
}

// Inicializar
if (document.getElementById('featured-products')) {
  loadFeaturedProducts();
}

if (document.getElementById('pet-products')) {
  loadPetProducts();
}
