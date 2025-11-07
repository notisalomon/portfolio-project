// netlify/functions/contact.js
const { Client } = require('pg');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    const client = new Client({
      connectionString: process.env.NETLIFY_DATABASE_URL, // deine Neon-URL als Env-Var
      ssl: { rejectUnauthorized: false },
    });

    await client.connect();

    // ⚠️ Passe Tabelle/Spalten an dein Schema an
    await client.query(
      'INSERT INTO contact_messages (name, email, message) VALUES ($1, $2, $3)',
      [name, email, message],
    );

    await client.end();

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    };
  } catch (err) {
    console.error('Contact function error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server error', detail: err.message }),
    };
  }
};
