import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
  // Configuração de CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  // Verifica se a variável de ambiente existe
  if (!process.env.DATABASE_URL) {
    console.error('DATABASE_URL não configurada');
    return res.status(500).json({ 
      success: false, 
      error: 'DATABASE_URL não configurada' 
    });
  }

  try {
    // Cria a conexão com o banco
    const sql = neon(process.env.DATABASE_URL);
    
    // Query segura
    const produtos = await sql`
      SELECT id, nome, preco, descricao, badge, link, img, categoria, destaque
      FROM produtos 
      WHERE destaque = true 
      ORDER BY id 
      LIMIT 6
    `;
    
    // Retorna os produtos (ou array vazio)
    return res.status(200).json({ 
      success: true, 
      produtos: produtos || [] 
    });
    
  } catch (error) {
    // Log do erro detalhado
    console.error('Erro completo em produtos-destaque:', error);
    
    return res.status(500).json({ 
      success: false, 
      error: 'Erro interno ao buscar destaques',
      details: error.message 
    });
  }
}