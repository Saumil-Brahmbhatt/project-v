const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL!;

if (!API_BASE_URL) {
  throw new Error('NEXT_PUBLIC_API_URL is not configured.');
}

export async function getHealth() {
  const response = await fetch(`${API_BASE_URL}/health`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Server is unavailable.');
  }

  return response.json();
}
