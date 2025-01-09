import axios from 'axios';

const evaluateHeaders = (headers) => {
  const results = {};

  // Example checks for common security headers
  results['Strict-Transport-Security'] = headers['strict-transport-security'] ? 'Present' : 'Missing';
  results['X-Content-Type-Options'] = headers['x-content-type-options'].includes('nosniff') ? 'Present' : 'Missing';
  results['X-Frame-Options'] = headers['x-frame-options'] ? 'Present' : 'Missing';
  results['Content-Security-Policy'] = headers['content-security-policy'] ? 'Present' : 'Missing';
  results['X-XSS-Protection'] = headers['x-xss-protection'] === '1; mode=block' ? 'Present' : 'Missing';
  results['Permissions-Policy'] = headers['permissions-policy'] ? 'Present' : 'Missing';
  results['Referrer-Policy'] = headers['referrer-policy'] ? 'Present' : 'Missing';

  return results;
};

export async function GET(req) {
  const url = req.nextUrl.searchParams.get('url'); // Use nextUrl to get query parameters

  if (!url) {
    return new Response(JSON.stringify({ error: 'URL is required' }), { status: 400 });
  }

  // Extract the IP address from the request headers or connection
  const ip = req.headers.get('x-forwarded-for') || req.connection.remoteAddress;

  try {
    const response = await axios.get(url, { timeout: 5000 });
    const headers = response.headers;
    const evaluation = evaluateHeaders(headers);

    // Return the headers, evaluation, and the client IP address
    return new Response(JSON.stringify({ headers, evaluation, ip }), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Unable to fetch headers', details: error.message }),
      { status: 500 }
    );
  }
}
