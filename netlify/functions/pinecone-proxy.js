const fetch = global.fetch || require('node-fetch');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed' }) };
  }

  const apiKey = process.env.PINECONE_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ error: 'PINECONE_API_KEY not configured' }) };
  }

  let payload;
  try {
    payload = event.body ? JSON.parse(event.body) : {};
  } catch (err) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON body' }) };
  }

  const pineconeUrl = 'https://prod-1-data.ke.pinecone.io/query';

  try {
    const resp = await fetch(pineconeUrl, {
      method: 'POST',
      headers: {
        'Api-Key': apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const text = await resp.text();
    const isJson = resp.headers.get('content-type')?.includes('application/json');
    return {
      statusCode: resp.status,
      headers: { 'Content-Type': isJson ? 'application/json' : 'text/plain' },
      body: text
    };
  } catch (err) {
    return { statusCode: 502, body: JSON.stringify({ error: 'Upstream request failed', details: err.message }) };
  }
};
