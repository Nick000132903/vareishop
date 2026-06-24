import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  try {
    const sql = neon(process.env.DATABASE_URL);
    const produtos = await sql`SELECT * FROM produtos ORDER BY id`;
    
    res.status(200).json({ 
      success: true, 
      produtos: produtos 
    });
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
}