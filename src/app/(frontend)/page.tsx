export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui', maxWidth: '800px', margin: '0 auto' }}>
      <h1>LeBonM2 API</h1>
      <p>Bienvenue sur l&apos;API LeBonM2 - Immobilier Antilles.</p>

      <h2>Liens utiles</h2>
      <ul>
        <li><a href="/admin">Panel Admin</a></li>
        <li><a href="/api/properties">API Properties</a></li>
        <li><a href="/api/agencies">API Agencies</a></li>
      </ul>

      <h2>Documentation</h2>
      <p>Cette API gère les annonces immobilières pour :</p>
      <ul>
        <li>Guadeloupe (971)</li>
        <li>Martinique (972)</li>
        <li>Saint-Barthélemy (977)</li>
        <li>Saint-Martin (978)</li>
      </ul>
    </main>
  )
}
