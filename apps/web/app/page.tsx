import { getHealth } from '@/lib/api';

export default async function HomePage() {
  const health = await getHealth();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-5xl font-bold">🏐 Project V</h1>

      <p className="text-lg text-gray-500">Building the future home of volleyball.</p>

      <div className="rounded-lg border px-4 py-2">🟢 Server Status: {health.status}</div>

      <div className="rounded-lg border px-4 py-2">Version: {health.version}</div>
    </main>
  );
}
