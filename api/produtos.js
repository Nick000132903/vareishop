import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, error: 'Método não permitido' });
  }

  try {
    // Buscar todos os produtos do banco Vercel Postgres
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
      ORDER BY destaque DESC, id DESC
    `;

    res.status(200).json({
      success: true,
      produtos: rows,
      total: rows.length
    });

  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    res.status(500).json({
      success: false,
      error: 'Erro ao carregar produtos',
      message: error.message
    });
  }
}
