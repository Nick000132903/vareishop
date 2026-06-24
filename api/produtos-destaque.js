import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  try {
    const sql = neon(process.env.DATABASE_URL);
    
    // Query simples para pegar produtos com destaque = true
    const produtos = await sql`
      SELECT * FROM produtos 
      WHERE destaque = true 
      ORDER BY id 
      LIMIT 6
    `;
    
    res.status(200).json({ 
      success: true, 
      produtos: produtos 
    });
  } catch (error) {
    console.error('Erro ao buscar destaques:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
}