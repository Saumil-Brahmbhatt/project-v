const API_BASE_URL = 'http://localhost:3001/api/v1';

export async function getHealth() {
  const response = await fetch(`${API_BASE_URL}/health`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Server is unavailable.');
  }

  return response.json();
}
