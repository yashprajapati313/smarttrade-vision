import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChartCandlestick, Cpu, TrendingUp, Upload, BookOpen, Sparkles, ShieldCheck, Play, ArrowRight, LockKeyhole } from "lucide-react";

function TVWidget({ symbol = "NSE:NIFTY" }) {
  return (
    <div className="w-full h-[60vh] rounded-2xl overflow-hidden bg-black/50 grid place-items-center text-white/60">
      <div>TradingView widget placeholder for <strong>{symbol}</strong></div>
    </div>
  );
}

export default function App(){
  const [symbol, setSymbol] = useState("NSE:NIFTY");
  const markets = [
    { label: "NIFTY", value: "NSE:NIFTY" },
    { label: "BANKNIFTY", value: "NSE:BANKNIFTY" },
    { label: "BTCUSDT", value: "BINANCE:BTCUSDT" },
    { label: "ETHUSDT", value: "BINANCE:ETHUSDT" },
    { label: "GOLD", value: "OANDA:XAUUSD" },
    { label: "EURUSD", value: "FX:EURUSD" },
    { label: "AAPL", value: "NASDAQ:AAPL" }
  ];

  return (
    <div className="min-h-screen bg-[#0A0C10] text-white">
      <header className="sticky top-0 bg-black/30 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-12 w-40 flex items-center">
              <img src="/assets/logo.png" alt="SmartTrade Vision" className="h-12 object-contain"/>
            </div>
            <div>
              <div className="font-semibold">Smart<span className="text-sky-400">Trade</span> Vision</div>
              <div className="text-xs text-white/60">BMW-inspired · Dark Luxury</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a href="#ai" className="text-sm hover:text-sky-300">AI Studio</a>
            <a href="#chart" className="text-sm hover:text-sky-300">Live Chart</a>
            <a href="#upload" className="text-sm hover:text-sky-300">Screenshot</a>
            <a href="#academy" className="text-sm hover:text-sky-300">Academy</a>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 rounded bg-transparent border border-white/10">Login</button>
            <button className="px-3 py-1.5 rounded bg-gradient-to-r from-sky-500 to-blue-600">Start Free</button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="text-4xl font-extrabold">
              Trade smarter with <span className="text-sky-400">multi‑AI</span> confirmation
            </motion.h1>
            <p className="mt-4 text-white/70">SMC/ICT, Wyckoff, Orderflow, PA, Indicators, Harmonics — all under one suite.</p>
            <div className="mt-6 flex gap-3">
              <button className="px-4 py-2 rounded bg-sky-600">Open AI Studio</button>
              <button className="px-4 py-2 rounded border border-white/10">View Live Markets</button>
            </div>
          </div>

          <div className="rounded-2xl p-6 bg-white/3 border border-white/10">
            <div className="text-sm uppercase text-white/60 mb-3">Logo Placement</div>
            <div className="aspect-video rounded-2xl bg-black/60 border border-white/10 grid place-items-center">
              <img src="/assets/logo.png" alt="logo" className="object-contain h-full w-full"/>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
              <div className="p-2 bg-white/5 rounded">Neon Blue</div>
              <div className="p-2 bg-white/5 rounded">Silver Accents</div>
              <div className="p-2 bg-white/5 rounded">Dark Carbon</div>
            </div>
          </div>
        </section>

        <section id="ai" className="mt-12">
          <h2 className="text-2xl font-bold">Multi‑AI Studio</h2>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="p-4 bg-white/3 rounded border border-white/10">SMC / ICT Concepts</div>
            <div className="p-4 bg-white/3 rounded border border-white/10">Wyckoff Method</div>
            <div className="p-4 bg-white/3 rounded border border-white/10">Orderflow / Volume</div>
          </div>
        </section>

        <section id="chart" className="mt-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Live Market Chart</h2>
            <div className="flex gap-2">
              {markets.map(m => (
                <button key={m.value} onClick={() => setSymbol(m.value)} className={"px-3 py-1.5 rounded text-sm border " + (symbol===m.value ? "bg-sky-600/30 border-sky-500/40" : "border-white/15")}>{m.label}</button>
              ))}
            </div>
          </div>
          <TVWidget symbol={symbol} />
        </section>

        <section id="upload" className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="p-6 border border-white/10 rounded-2xl bg-white/3">
            <h3 className="font-semibold mb-2">Screenshot Analyzer</h3>
            <p className="text-sm text-white/60">Upload a chart image — demo frontend only.</p>
            <div className="mt-4 border-2 border-dashed p-6 rounded text-center">Upload UI (demo)</div>
          </div>
          <div className="p-6 border border-white/10 rounded-2xl bg-black/40">
            <div className="text-sm uppercase text-white/60 mb-2">Example Output</div>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-emerald-500/10 rounded">Entry<br/><span className="text-white/60">Break‑retest of OB</span></div>
              <div className="p-3 bg-rose-500/10 rounded">Stop Loss<br/><span className="text-white/60">Below invalidation</span></div>
            </div>
          </div>
        </section>

        <section id="academy" className="mt-12">
          <h2 className="text-2xl font-bold">Academy</h2>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="p-4 bg-white/3 rounded">SMC Playbook</div>
            <div className="p-4 bg-white/3 rounded">Wyckoff Schematics</div>
            <div className="p-4 bg-white/3 rounded">Orderflow Footprint</div>
          </div>
        </section>

      </main>

      <footer className="mt-12 border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-4 text-white/60">© SmartTrade Vision</div>
      </footer>
    </div>
  )
}
