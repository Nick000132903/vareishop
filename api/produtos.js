import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  try {
    const { rows } = await sql`
      SELECT 
        id, 
        nome, 
        preco, 
        descricao, 
        badge, 
        link, 
        img, 
        categoria, 
        destaque
      FROM produtos 
      ORDER BY id
    `;
    
    res.status(200).json(rows);
    
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    res.status(500).json({ 
      erro: 'Erro ao carregar produtos',
      detalhe: error.message 
    });
  }
}