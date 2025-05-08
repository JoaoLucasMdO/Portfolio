'use client';

export default function InteractiveEx() {
  return (
    <div className="text-center py-8">
      <h5 className="text-2xl font-semibold text-gray-800 mb-4">Visualização Interativa - Power BI</h5>
      
      <div className="relative overflow-hidden rounded-lg shadow-lg" style={{ marginTop: '1rem' }}>
        <iframe
          title="Exercício Interativo PowerBI"
          className="w-full h-96" // Responsividade e altura ajustada para o conteúdo
          src="https://app.powerbi.com/view?r=eyJrIjoiYWJjZjQ3ZTAtY2M1YS00ZjRhLWI1YzgtNDhiZGUzMzY0NWUxIiwidCI6ImNmNzJlMmJkLTdhMmItNDc4My1iZGViLTM5ZDU3YjA3Zjc2ZiIsImMiOjR9"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
