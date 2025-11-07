import type { Handler } from '@netlify/functions';
import { Client } from 'pg';

const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body || '{}');

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    const client = new Client({
      connectionString: process.env.DATABASE_URL, // Neon-URL
      ssl: { rejectUnauthorized: false },        // Neon braucht SSL in vielen Setups
    });

    await client.connect();

    // Tabelle und Spalten ggf. an dein Schema anpassen
    await client.query(
      'INSERT INTO contact_messages (name, email, message) VALUES ($1, $2, $3)',
      [name, email, message],
    );

    await client.end();

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    };
  } catch (error: any) {
    console.error('Contact function error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server error', detail: error.message }),
    };
  }
};

export { handler };
