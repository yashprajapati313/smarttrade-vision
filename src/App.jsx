
import React, { useState } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Upload } from "lucide-react";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const sampleData = {
  labels: Array.from({length: 12}, (_,i)=>`T${i+1}`),
  datasets: [{ label: 'Price', data: [100,120,110,140,130,160,150,170,180,175,190,200], tension:0.3 }]
};

export default function App(){
  const [symbol, setSymbol] = useState("NSE:NIFTY");
  return (
    <div className="min-h-screen bg-[#08090b] text-white">
      <header className="sticky top-0 bg-black/30 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/assets/logo.png" alt="logo" className="h-12"/>
            <div>
              <div className="font-bold text-lg">Smart<span className="text-sky-400">Trade</span> Vision</div>
              <div className="text-xs text-white/60">Luxury • Multi-AI confirmation</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-3 py-1 rounded bg-white/5">Login</button>
            <button className="px-3 py-1 rounded bg-gradient-to-r from-sky-500 to-blue-600">Start Free</button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <section className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 rounded-2xl p-6 bg-gradient-to-b from-white/2 to-transparent border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl font-extrabold">Trade smarter with <span className="text-sky-400">multi-AI</span> confirmation</h1>
                <p className="text-white/70 mt-2">SMC/ICT • Wyckoff • Orderflow • Indicators • Harmonics — unified insights.</p>
              </div>
              <div className="text-sm text-white/60">Live: {symbol}</div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="col-span-2">
                <div className="rounded-xl p-4 bg-black/50 border border-white/5">
                  <Line data={sampleData} />
                </div>
              </div>
              <div>
                <div className="rounded-xl p-4 bg-black/50 border border-white/5">
                  <div className="font-semibold mb-2">AI Consensus</div>
                  <div className="text-sm text-white/70">GPT-5: ✔︎  Claude: ✔︎  Gemini: ✔︎</div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid md:grid-cols-3 gap-3">
              <div className="p-4 bg-black/40 rounded border border-white/5">Entry: 22145</div>
              <div className="p-4 bg-black/40 rounded border border-white/5">SL: 22040</div>
              <div className="p-4 bg-black/40 rounded border border-white/5">RR: 1:2</div>
            </div>
          </div>

          <aside className="rounded-2xl p-6 bg-black/40 border border-white/5">
            <div className="text-sm uppercase text-white/60 mb-3">Upload Screenshot</div>
            <label className="block border-2 border-dashed border-white/10 p-6 rounded text-center cursor-pointer">
              <input type="file" className="hidden" />
              <Upload className="mx-auto mb-2" />
              <div className="text-sm text-white/60">Drag & drop chart image or click to upload</div>
            </label>

            <div className="mt-4">
              <div className="text-sm uppercase text-white/60 mb-2">Quick Filters</div>
              <div className="flex flex-col gap-2">
                <button className="p-2 bg-white/5 rounded">NIFTY</button>
                <button className="p-2 bg-white/5 rounded">BANKNIFTY</button>
                <button className="p-2 bg-white/5 rounded">Crypto</button>
              </div>
            </div>
          </aside>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold">Academy & Examples</h2>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="p-4 bg-black/40 rounded">SMC Playbook</div>
            <div className="p-4 bg-black/40 rounded">Wyckoff</div>
            <div className="p-4 bg-black/40 rounded">Orderflow</div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-6 mt-8">
        <div className="max-w-7xl mx-auto px-4 text-white/60">© SmartTrade Vision</div>
      </footer>
    </div>
  )
}
