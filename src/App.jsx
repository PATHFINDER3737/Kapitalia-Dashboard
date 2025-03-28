
import React from "react";

export default function Dashboard() {
  const gauges = [
    { name: "Kiyosaki", value: 0.06 },
    { name: "Buffett", value: 0.088 },
    { name: "Munger", value: 0.196 },
    { name: "Lynch", value: 0.51 },
  ];

  const financials = [
    { label: "Revenu", value: "$8,500" },
    { label: "Dépenses", value: "$4,000" },
    { label: "Actifs", value: "$350,000" },
    { label: "Passifs", value: "$275,000" },
  ];

  function polarToCartesian(cx, cy, r, angleInDegrees) {
    const angleInRadians = (angleInDegrees * Math.PI) / 180.0;
    return {
      x: cx + r * Math.cos(angleInRadians),
      y: cy + r * Math.sin(angleInRadians),
    };
  }

  function describeArc(x, y, radius, startAngle, endAngle) {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return [
      "M", start.x, start.y,
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");
  }

  return (
    <div className="flex min-h-screen bg-[#121212] text-white">
      <aside className="w-60 bg-[#1a1a1a] p-4 space-y-6">
        <h1 className="text-2xl font-bold text-[#f97316]">Kapitalia</h1>
        <nav className="flex flex-col space-y-3">
          <button className="text-left text-white hover:text-[#f97316]">Dashboard</button>
          <button className="text-left text-white hover:text-[#f97316]">Analytics</button>
          <button className="text-left text-white hover:text-[#f97316]">Clients</button>
          <button className="text-left text-white hover:text-[#f97316]">Stratégies</button>
        </nav>
      </aside>

      <main className="flex-1 p-8 space-y-8 bg-[#121212]">
        <h2 className="text-3xl font-bold mb-4 text-[#f97316]">Expert Gauges</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {gauges.map((g, idx) => (
            <div key={idx} className="bg-[#1e1e1e] p-4 rounded-lg text-center">
              <h3 className="text-sm font-semibold text-[#f97316] mb-2">{g.name}</h3>
              <svg width="100" height="60" viewBox="0 0 100 60" className="mx-auto">
                <path
                  d="M10 50 A40 40 0 0 1 90 50"
                  fill="none"
                  stroke="#333"
                  strokeWidth="10"
                />
                <path
                  d={describeArc(50, 50, 40, 180, 180 + 180 * g.value)}
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="10"
                />
              </svg>
              <p className="text-xs text-white mt-2">{(g.value * 100).toFixed(1)}%</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mt-10 text-[#f97316]">Ma situation financière</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {financials.map((item, idx) => (
            <div key={idx} className="bg-[#1e1e1e] p-4 rounded-lg">
              <p className="text-[#f97316] font-semibold">{item.label}</p>
              <p className="text-2xl font-bold text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
