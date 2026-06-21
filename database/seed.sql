-- ========================================
-- SEED DE DADOS - VareiShop
-- ========================================
--
-- Este arquivo insere produtos de exemplo no banco
-- Execute após criar a tabela com schema.sql
--

-- Limpar dados existentes (opcional - comente se quiser manter dados atuais)
-- TRUNCATE TABLE produtos RESTART IDENTITY CASCADE;

-- Produtos para Pets (Categoria: pets)
INSERT INTO produtos (nome, preco, descricao, badge, link, img, categoria, destaque) VALUES
(
  'Ração Premium para Cães Adultos 15kg',
  'R$ 189,90',
  'Ração super premium com ingredientes naturais, ideal para cães adultos de porte médio e grande. Rica em proteínas e vitaminas.',
  'Amazon',
  'https://amzn.to/exemplo1',
  'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400',
  'pets',
  TRUE
),
(
  'Cama Ortopédica para Cachorro Grande',
  'R$ 149,90',
  'Cama confortável com espuma ortopédica, perfeita para cães de grande porte. Tecido impermeável e lavável.',
  'Shopee',
  'https://shope.ee/exemplo2',
  'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400',
  'pets',
  TRUE
),
(
  'Kit Brinquedos Interativos para Gatos',
  'R$ 39,90',
  'Conjunto com 5 brinquedos variados para estimular seu gato. Inclui varinha, bolinhas e ratinhos.',
  'Mercado Livre',
  'https://mercadolivre.com.br/exemplo3',
  'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400',
  'pets',
  FALSE
),
(
  'Coleira GPS Rastreador para Pets',
  'R$ 299,90',
  'Rastreador GPS com aplicativo para smartphone. Acompanhe seu pet em tempo real com precisão.',
  'Magalu',
  'https://magalu.com.br/exemplo4',
  'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400',
  'pets',
  TRUE
),
(
  'Fonte Bebedouro Automático para Gatos',
  'R$ 89,90',
  'Fonte com filtro de carvão ativado. Incentiva seu gato a beber mais água. Capacidade 2L.',
  'Amazon',
  'https://amzn.to/exemplo5',
  'https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=400',
  'pets',
  FALSE
),
(
  'Comedouro Lento Anti-Voracidade',
  'R$ 45,90',
  'Tigela especial que reduz a velocidade da alimentação, evitando engasgos e melhorando a digestão.',
  'Shopee',
  'https://shope.ee/exemplo6',
  'https://images.unsplash.com/photo-1591769225440-811ad7d6eab3?w=400',
  'pets',
  FALSE
),
(
  'Caixa de Areia Automática para Gatos',
  'R$ 899,90',
  'Caixa de areia com limpeza automática. Sistema inteligente que peneira sozinho após o uso.',
  'Amazon',
  'https://amzn.to/exemplo7',
  'https://images.unsplash.com/photo-1573865526739-10c1d3a1f0cc?w=400',
  'pets',
  TRUE
),
(
  'Petiscos Naturais para Cães - Mix 500g',
  'R$ 29,90',
  'Mix de petiscos 100% naturais sem conservantes. Ideal para treino e recompensa.',
  'Mercado Livre',
  'https://mercadolivre.com.br/exemplo8',
  'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=400',
  'pets',
  FALSE
),
(
  'Casinha de Cachorro Térmica Grande',
  'R$ 349,90',
  'Casinha resistente com isolamento térmico. Protege contra chuva, vento e sol.',
  'Magalu',
  'https://magalu.com.br/exemplo9',
  'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=400',
  'pets',
  FALSE
),
(
  'Arranhador para Gatos 1,50m',
  'R$ 179,90',
  'Torre arranhador com plataformas, tocas e brinquedos suspensos. Ideal para apartamentos.',
  'Shopee',
  'https://shope.ee/exemplo10',
  'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400',
  'pets',
  FALSE
),
(
  'Shampoo Hipoalergênico para Pets 500ml',
  'R$ 34,90',
  'Shampoo dermatologicamente testado, sem parabenos. Para peles sensíveis.',
  'Amazon',
  'https://amzn.to/exemplo11',
  'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400',
  'pets',
  FALSE
),
(
  'Transportadora para Viagem Avião',
  'R$ 249,90',
  'Transportadora aprovada para viagens aéreas. Confortável e segura, com ventilação adequada.',
  'Mercado Livre',
  'https://mercadolivre.com.br/exemplo12',
  'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=400',
  'pets',
  FALSE
);

-- Produtos de outras categorias (exemplo)
INSERT INTO produtos (nome, preco, descricao, badge, link, img, categoria, destaque) VALUES
(
  'Fone Bluetooth Premium com ANC',
  'R$ 399,90',
  'Fone de ouvido com cancelamento de ruído ativo, bateria de 30h e som Hi-Fi.',
  'Amazon',
  'https://amzn.to/exemplo20',
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
  'eletronicos',
  FALSE
),
(
  'Mochila Executiva Impermeável USB',
  'R$ 159,90',
  'Mochila para notebook até 15.6", compartimento para carregador e porta USB externa.',
  'Shopee',
  'https://shope.ee/exemplo21',
  'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
  'acessorios',
  FALSE
),
(
  'Kit Panelas Antiaderentes 5 Peças',
  'R$ 229,90',
  'Conjunto de panelas com revestimento cerâmico antiaderente. Livre de PFOA.',
  'Magalu',
  'https://magalu.com.br/exemplo22',
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
  'casa',
  FALSE
);

-- Verificar total de produtos inseridos
SELECT COUNT(*) as total_produtos FROM produtos;
SELECT categoria, COUNT(*) as quantidade FROM produtos GROUP BY categoria ORDER BY quantidade DESC;
