import React, { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import ColorCard from "./components/ColorCard";
import { generateDailyColor, type DailyPrediction } from "./services/ai";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [dateInput, setDateInput] = useState<string>("");
  const [prediction, setPrediction] = useState<DailyPrediction | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [history, setHistory] = useState<DailyPrediction[]>([]);

  // Load history from session storage on mount
  useEffect(() => {
    const saved = sessionStorage.getItem("iro_history");
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load history", e);
      }
    }
  }, []);

  // Update history when new prediction arrives
  useEffect(() => {
    if (prediction) {
      setHistory(prev => {
        // Only keep unique hex codes to keep history clean
        const exists = prev.find(p => p.hexCode === prediction.hexCode);
        if (exists) return prev;
        
        const newHistory = [prediction, ...prev].slice(0, 8);
        sessionStorage.setItem("iro_history", JSON.stringify(newHistory));
        return newHistory;
      });
    }
  }, [prediction]);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, "");
    if (val.length > 8) val = val.slice(0, 8);
    
    let formatted = val;
    if (val.length >= 3) {
      formatted = `${val.slice(0, 2)} / ${val.slice(2)}`;
    }
    if (val.length >= 5) {
      formatted = `${val.slice(0, 2)} / ${val.slice(2, 4)} / ${val.slice(4)}`;
    }
    setDateInput(formatted);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!dateInput) return;
    
    try {
      setLoading(true);
      setError("");
      
      const rawDigits = dateInput.replace(/\D/g, "");
      if (rawDigits.length !== 8) {
        throw new Error("Please enter a full date (DD / MM / YYYY)");
      }

      const day = parseInt(rawDigits.slice(0, 2), 10);
      const month = parseInt(rawDigits.slice(2, 4), 10);
      const year = parseInt(rawDigits.slice(4, 8), 10);

      if (day < 1 || day > 31 || month < 1 || month > 12 || year < 1900 || year > new Date().getFullYear()) {
        throw new Error("Please enter a valid past calendar date");
      }
      
      const dateObj = new Date(year, month - 1, day);
      
      if (isNaN(dateObj.getTime()) || dateObj.getDate() !== day) {
        throw new Error("This exact date does not exist (e.g. 31st of February)");
      }
      
      const result = await generateDailyColor(dateObj);
      setPrediction(result);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "We encountered an issue uncovering your color. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setPrediction(null);
    setDateInput("");
  };

  // Dynamic Favicon logic
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Default white circle favicon
    const color = prediction ? prediction.hexCode : "#FFFFFF";
    
    ctx.clearRect(0, 0, 32, 32);
    ctx.beginPath();
    ctx.arc(16, 16, 14, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();

    // Find and update favicon link
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = canvas.toDataURL();
  }, [prediction]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans overflow-x-hidden md:overflow-hidden flex flex-col relative w-full">
      {/* Dynamic Ambient Aura */}
      <AnimatePresence>
        {prediction && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 pointer-events-none z-0"
          >
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full blur-[160px] opacity-20 transition-colors duration-1000"
              style={{ backgroundColor: prediction.hexCode }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center px-6 md:px-12 py-8">
        <div 
          onClick={reset}
          className="text-xl md:text-2xl font-bold tracking-widest flex items-center gap-3 cursor-pointer transition-opacity hover:opacity-70"
        >
          <div className="w-5 h-5 md:w-6 md:h-6 bg-white rounded-full flex-shrink-0"></div>
          <span>IRO</span>
        </div>
        
        <div className="flex gap-6 md:gap-8 items-center text-[10px] md:text-xs uppercase tracking-widest font-medium opacity-60">
          <a href="https://nasibov.me" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">nasibov.me</a>
        </div>
      </nav>

      {/* Main Content Layout */}
      <main className="relative z-10 flex-1 grid grid-cols-1 md:grid-cols-12 gap-0">
        
        {/* Left Side: Input & Brand */}
        <div className="col-span-1 md:col-span-5 flex flex-col justify-center px-6 md:px-12 py-12 md:pb-16 text-left">
          <h1 className="text-5xl md:text-6xl font-light leading-[0.9] mb-8">
            Your Daily <br/>
            <span className="italic font-serif">Spectral</span> <br/>
            Identity.
          </h1>
          
          <p className="text-sm opacity-50 max-w-xs mb-10 leading-relaxed font-light">
            Discover the color that resonates with your birth energy today. A minimalist guide to visual harmony and daily intuition.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm w-full">
            <label className="text-[10px] uppercase tracking-widest opacity-40">Select your date of birth</label>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 sm:items-end">
                <input
                type="text"
                inputMode="numeric"
                placeholder="DD / MM / YYYY"
                required
                value={dateInput}
                onChange={handleDateChange}
                className="bg-transparent border-b border-white/20 focus:border-white text-white placeholder:text-white/20 py-3 text-lg sm:text-xl focus:outline-none transition-colors flex-1 font-mono tracking-widest placeholder:tracking-widest"
              />
              <div 
                className={`relative flex shrink-0 rounded-full h-[54px] w-full sm:w-[140px] items-center justify-center ${loading ? 'p-[3px] overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.15)]' : 'p-0'}`}
              >
                {loading && (
                  <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_0deg,#FF3366,#FF9933,#33CC99,#3399FF,#9933FF,#FF3366)]" />
                )}
                <button
                  type="submit"
                  disabled={!dateInput || loading}
                  className={`relative w-full h-full bg-white text-black text-[11px] uppercase font-bold tracking-[0.2em] transition-all flex justify-center items-center rounded-full z-10 ${loading ? 'opacity-100' : 'hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed'}`}
                >
                  {loading ? "Musing" : "Reveal"}
                </button>
              </div>
            </div>
            {error && (
              <p className="text-xs text-red-500 font-medium">{error}</p>
            )}
          </form>

          {/* Shared Spectrum Local History */}
          <AnimatePresence>
            {history.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="mt-16 sm:mt-24"
              >
                <label className="text-[9px] uppercase tracking-[0.3em] opacity-30 mb-6 block font-medium">Shared Spectrum</label>
                <div className="flex gap-4">
                  {history.map((h, i) => (
                    <motion.button
                      key={`${h.hexCode}-${i}`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1 + (i * 0.1), type: "spring", stiffness: 200 }}
                      onClick={() => setPrediction(h)}
                      className="w-3 h-3 rounded-full transition-transform hover:scale-150 relative group"
                      style={{ backgroundColor: h.hexCode }}
                    >
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white text-black text-[8px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap uppercase tracking-widest font-bold z-30">
                        {h.colorName}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Side: The Card Showcase */}
        <div className="col-span-1 md:col-span-7 flex items-center justify-center bg-[#111111] border-white/5 border-t md:border-t-0 md:border-l relative min-h-[500px] md:min-h-0 py-12 md:py-0">
          {prediction ? (
            <ColorCard prediction={prediction} />
          ) : (
            <div className="opacity-10 text-[10px] uppercase tracking-widest font-bold">
               Awaiting Spectrum
            </div>
          )}
        </div>
      </main>

      {/* Footer / Status Bar */}
      <footer className="relative z-10 px-6 md:px-12 py-6 border-t border-white/5 bg-[#0A0A0A] flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-4">
        <div className="text-[9px] uppercase tracking-[0.25em] opacity-40 font-medium text-center sm:text-right">
          IRO — A Spectral Concept by Ramin Nasibov
        </div>
      </footer>
    </div>
  );
}
