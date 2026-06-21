-- ========================================
-- SCHEMA DO BANCO DE DADOS - VareiShop
-- ========================================
--
-- Este arquivo cria a estrutura da tabela de produtos
-- Execute este script no seu banco Vercel Postgres
--

-- Criar tabela de produtos
CREATE TABLE IF NOT EXISTS produtos (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  preco VARCHAR(50) NOT NULL,
  descricao TEXT,
  badge VARCHAR(50),
  link TEXT NOT NULL,
  img TEXT,
  categoria VARCHAR(100),
  destaque BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Criar índices para melhorar performance
CREATE INDEX IF NOT EXISTS idx_produtos_categoria ON produtos(categoria);
CREATE INDEX IF NOT EXISTS idx_produtos_destaque ON produtos(destaque);
CREATE INDEX IF NOT EXISTS idx_produtos_badge ON produtos(badge);

-- Comentários nas colunas
COMMENT ON COLUMN produtos.nome IS 'Nome do produto';
COMMENT ON COLUMN produtos.preco IS 'Preço formatado (ex: R$ 49,90)';
COMMENT ON COLUMN produtos.descricao IS 'Descrição do produto';
COMMENT ON COLUMN produtos.badge IS 'Loja origem (Shopee, Amazon, Mercado Livre, Magalu)';
COMMENT ON COLUMN produtos.link IS 'Link de afiliado do produto';
COMMENT ON COLUMN produtos.img IS 'URL da imagem do produto';
COMMENT ON COLUMN produtos.categoria IS 'Categoria do produto (ex: pets, eletronicos)';
COMMENT ON COLUMN produtos.destaque IS 'Se o produto aparece na home como destaque';
