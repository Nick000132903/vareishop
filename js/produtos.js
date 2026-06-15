let filteredProducts = [...produtos];
let currentCategory = 'todos';
let searchTerm = '';

function renderProdutos(produtosParaExibir) {
  const grid = document.getElementById('product-grid');
  const noResults = document.getElementById('no-results');
  const resultCount = document.getElementById('result-count');

  grid.innerHTML = '';

  if (!produtosParaExibir.length) {
    grid.classList.add('hidden');
    noResults.classList.remove('hidden');
    resultCount.textContent = 'Nenhum resultado encontrado';
    return;
  }

  grid.classList.remove('hidden');
  noResults.classList.add('hidden');
  resultCount.textContent = `${produtosParaExibir.length} ${produtosParaExibir.length === 1 ? 'produto encontrado' : 'produtos encontrados'}`;

  produtosParaExibir.forEach(p => {
    const card = document.createElement('article');
    card.className = 'product-card bg-white rounded-2xl border border-[#EDE8E0] shadow-[0_2px_12px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col';

    card.innerHTML = `
      <div class="relative overflow-hidden aspect-[4/3] bg-[#F2EDE6]">
        <img
          src="${p.img}"
          alt="${p.nome}"
          loading="lazy"
          class="w-full h-full object-cover"
          onerror="this.src='https://via.placeholder.com/400x300/F2EDE6/AAAAAA?text=Imagem+indispon%C3%ADvel'"
        />
        ${p.badge ? `<span class="absolute top-3 left-3 bg-[#FF8C42] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">${p.badge}</span>` : ''}
      </div>
      <div class="flex flex-col flex-1 p-5">
        <h3 class="font-bold text-base leading-snug mb-2">${p.nome}</h3>
        <p class="text-[#6B7280] text-xs leading-relaxed flex-1 mb-4">${p.descricao}</p>
        <div class="flex items-center justify-between gap-3 mt-auto">
          <span class="text-[#4CAF50] font-extrabold text-xl">${p.preco}</span>
          <button
            class="btn-comprar bg-[#FF8C42] hover:bg-[#E07030] text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-[0_3px_12px_rgba(255,140,66,0.3)] hover:shadow-[0_5px_18px_rgba(255,140,66,0.4)] transition-all hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
            data-link="${p.link}"
            data-nome="${p.nome}"
          >Ver oferta →</button>
        </div>
      </div>`;

    grid.appendChild(card);
  });

  document.querySelectorAll('.btn-comprar').forEach(btn => {
    btn.addEventListener('click', function () {
      const url = this.dataset.link;
      const nome = this.dataset.nome;
      console.log(`🛒 Clique em [${nome}] — link: ${url}`);
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  });
}

function filterProducts() {
  filteredProducts = produtos.filter(p => {
    const matchesCategory = currentCategory === 'todos' || p.categorias.includes(currentCategory);
    const matchesSearch = searchTerm === '' ||
      p.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.descricao.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  renderProdutos(filteredProducts);
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    currentCategory = this.dataset.category;
    filterProducts();
  });
});

const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', function () {
  searchTerm = this.value;
  filterProducts();
});

initMenu();
initBackToTop();
renderProdutos(produtos);
