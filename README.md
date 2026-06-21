# VareiShop

Site de marketing de afiliado com produtos para pets e outras categorias. Os produtos são carregados dinamicamente de um banco de dados **PostgreSQL online** (Vercel Postgres).

## Tecnologias

- HTML5 semântico
- Tailwind CSS (via CDN)
- JavaScript puro (ES6+)
- Vercel Postgres (banco de dados PostgreSQL serverless)
- Vercel (hospedagem e deploy)

## Funcionalidades

- Grid de produtos dinâmico carregado do banco PostgreSQL
- Sistema de filtros (busca, loja, preço)
- Paginação
- Seção de produtos em destaque
- Seção especial para produtos de pets
- Design responsivo (mobile-first)
- Tema claro/escuro
- Links de afiliado abrindo em nova aba

## Configuração do Banco de Dados

### 1. Criar banco Vercel Postgres

1. Acesse [vercel.com](https://vercel.com) e faça login
2. Vá em **Storage** → **Create Database**
3. Escolha **Postgres** e crie o banco
4. Copie as credenciais geradas

### 2. Configurar variáveis de ambiente localmente

Crie um arquivo `.env.local` na raiz do projeto (copie de `.env.example`):

```bash
cp .env.example .env.local
```

Edite `.env.local` e preencha com as credenciais do seu banco Vercel Postgres:

```env
POSTGRES_URL="postgres://default:xxxxx@xxxxx-pooler.us-east-1.postgres.vercel-storage.com/verceldb"
POSTGRES_PRISMA_URL="postgres://default:xxxxx@xxxxx-pooler.us-east-1.postgres.vercel-storage.com/verceldb?pgbouncer=true&connect_timeout=15"
POSTGRES_URL_NON_POOLING="postgres://default:xxxxx@xxxxx.us-east-1.postgres.vercel-storage.com/verceldb"
POSTGRES_USER="default"
POSTGRES_HOST="xxxxx-pooler.us-east-1.postgres.vercel-storage.com"
POSTGRES_PASSWORD="xxxxx"
POSTGRES_DATABASE="verceldb"
```

### 3. Executar scripts SQL

No painel do Vercel Postgres, vá na aba **Query** e execute os scripts na ordem:

1. **Criar a tabela:**
   ```bash
   # Copie e cole o conteúdo de database/schema.sql
   ```

2. **Popular com dados de exemplo:**
   ```bash
   # Copie e cole o conteúdo de database/seed.sql
   ```

Ou use a CLI do Vercel:

```bash
# Instalar dependências
npm install

# Executar scripts via CLI (se configurado)
vercel env pull .env.local
```

### 4. Testar localmente

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev
```

Acesse `http://localhost:3000` para testar.

### 5. Deploy na Vercel

1. **Via CLI:**
   ```bash
   npm run deploy
   ```

2. **Via GitHub:**
   - Conecte seu repositório no painel da Vercel
   - Configure as variáveis de ambiente em **Settings** → **Environment Variables**
   - A Vercel fará deploy automático a cada push

## Estrutura do Projeto

```
lar-do-animal/
├── api/
│   └── produtos.js          # API endpoint que consulta o PostgreSQL
├── database/
│   ├── schema.sql           # Estrutura da tabela produtos
│   └── seed.sql             # Dados de exemplo para popular o banco
├── js/
│   ├── main.js              # Lógica da homepage
│   ├── produtos.js          # Lógica da página de produtos
│   ├── theme.js             # Alternância de tema claro/escuro
│   └── utils.js             # Funções utilitárias
├── pages/
│   ├── index.html           # Homepage
│   └── produtos.html        # Página de listagem de produtos
├── src/
│   └── logo.png             # Logo do site
├── .env.example             # Exemplo de variáveis de ambiente
├── package.json             # Dependências do projeto
├── vercel.json              # Configuração da Vercel
└── README.md                # Este arquivo
```

## Como Adicionar/Editar Produtos

Os produtos agora são **gerenciados diretamente no banco de dados PostgreSQL**. Para adicionar ou editar produtos:

### Via painel Vercel Postgres (Query):

```sql
-- Adicionar novo produto
INSERT INTO produtos (nome, preco, descricao, badge, link, img, categoria, destaque)
VALUES (
  'Nome do Produto',
  'R$ 99,90',
  'Descrição do produto',
  'Amazon',
  'https://seu-link-afiliado.com',
  'https://url-da-imagem.jpg',
  'pets',
  TRUE
);

-- Atualizar produto existente
UPDATE produtos
SET preco = 'R$ 79,90', destaque = TRUE
WHERE id = 1;

-- Remover produto
DELETE FROM produtos WHERE id = 1;
```

### Estrutura da tabela `produtos`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | SERIAL | ID único do produto (autoincremento) |
| `nome` | VARCHAR(255) | Nome do produto |
| `preco` | VARCHAR(50) | Preço formatado (ex: R$ 49,90) |
| `descricao` | TEXT | Descrição do produto |
| `badge` | VARCHAR(50) | Loja origem (Shopee, Amazon, Mercado Livre, Magalu) |
| `link` | TEXT | Link de afiliado do produto |
| `img` | TEXT | URL da imagem do produto |
| `categoria` | VARCHAR(100) | Categoria (ex: pets, eletronicos, casa) |
| `destaque` | BOOLEAN | Se aparece na home como destaque |
| `created_at` | TIMESTAMP | Data de criação |
| `updated_at` | TIMESTAMP | Data de atualização |

## API

### GET `/api/produtos`

Retorna todos os produtos do banco ordenados por destaque e data de criação.

**Resposta:**
```json
{
  "success": true,
  "produtos": [
    {
      "id": 1,
      "nome": "Produto Exemplo",
      "preco": "R$ 99,90",
      "descricao": "Descrição",
      "badge": "Amazon",
      "link": "https://link-afiliado.com",
      "img": "https://imagem.jpg",
      "categoria": "pets",
      "destaque": true
    }
  ],
  "total": 15
}
```

## Deploy e Hospedagem

O site está hospedado na Vercel: [lardoanimal.vercel.app](https://lardoanimal.vercel.app)

## Licença

MIT

## Autor

Nick000132903

## Contato

📧 nirabelon9r@gmail.com
