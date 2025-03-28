import React from 'react';

export default function Dashboard() {
  const gauges = [
    { name: 'Kiyosaki', value: 0.6 },
    { name: 'Buffett', value: 0.72 },
    { name: 'Graham', value: 0.55 },
    { name: 'Bogle', value: 0.81 },
  ];

  const financials = [
    { label: 'Revenu', value: '$8,500' },
    { label: 'Dépenses', value: '$4,000' },
    { label: 'Actifs', value: '$350,000' },
    { label: 'Passifs', value: '$275,000' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#111', color: 'white' }}>
      <aside style={{ width: '250px', backgroundColor: '#222', padding: '1rem' }}>
        <h1 style={{ color: 'orange', fontWeight: 'bold' }}>Kapitalia</h1>
        <nav style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <a href="#">Dashboard</a>
          <a href="#">Modules</a>
          <a href="#">Stratégies</a>
          <a href="#">Paramètres</a>
          <a href="#">Thème</a>
        </nav>
      </aside>

      <main style={{ flex: 1, padding: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Expert Gauges</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {gauges.map((g, idx) => (
            <div key={idx} style={{ backgroundColor: '#333', padding: '1rem', borderRadius: '8px', width: '200px', textAlign: 'center' }}>
              <h3>{g.name}</h3>
              <div style={{ width: '100%', height: '10px', backgroundColor: '#555', margin: '10px 0' }}>
                <div style={{ width: `${g.value * 100}%`, height: '100%', backgroundColor: 'orange' }}></div>
              </div>
              <p>{Math.round(g.value * 100)}%</p>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '1.5rem', marginTop: '2rem' }}>Ma situation financière</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {financials.map((item, idx) => (
            <div key={idx} style={{ backgroundColor: '#333', padding: '1rem', borderRadius: '8px', width: '200px' }}>
              <p style={{ color: 'orange' }}>{item.label}</p>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{item.value}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}