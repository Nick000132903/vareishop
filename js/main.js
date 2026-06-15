function copiarCupom(el) {
  const codigo = el.textContent.trim();
  navigator.clipboard.writeText(codigo).then(() => {
    const feedback = document.getElementById('cupom-feedback');
    feedback.style.opacity = '1';
    setTimeout(() => { feedback.style.opacity = '0'; }, 2500);
  }).catch(() => {
    const tmp = document.createElement('textarea');
    tmp.value = codigo;
    document.body.appendChild(tmp);
    tmp.select();
    document.execCommand('copy');
    document.body.removeChild(tmp);
    const feedback = document.getElementById('cupom-feedback');
    feedback.style.opacity = '1';
    setTimeout(() => { feedback.style.opacity = '0'; }, 2500);
  });
}

function renderProdutos() {
  const grid = document.getElementById('product-grid');
  grid.innerHTML = '';

  if (!produtos.length) {
    grid.innerHTML = '<p class="col-span-full text-center text-muted py-12">Nenhum produto cadastrado.</p>';
    return;
  }

  // Mostra apenas os primeiros 6 produtos na home
  const produtosDestaque = produtos.slice(0, 6);

  produtosDestaque.forEach(p => {
    const card = document.createElement('article');
    card.className = 'product-card bg-white rounded-2xl border border-[#EDE8E0] shadow-[0_2px_12px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col';

    card.innerHTML = `
      <div class="relative overflow-hidden aspect-[4/3] bg-[#F2EDE6]">
        <img
          src="${p.img}"
          alt="${p.nome}"
          loading="lazy"
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

initMenu();
initBackToTop();
renderProdutos();
