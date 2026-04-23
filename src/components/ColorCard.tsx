import { useRef, useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { toPng } from "html-to-image";
import { cn, getContrastYIQ } from "../lib/utils";
import type { DailyPrediction } from "../services/ai";
import { motion } from "motion/react";

interface ColorCardProps {
  prediction: DailyPrediction;
}

export default function ColorCard({ prediction }: ColorCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);
  const textColor = getContrastYIQ(prediction.hexCode);
  
  // Dynamic font sizing logic to prevent overflow without breaking words
  const nameLength = prediction.colorName.length;
  const isLongName = nameLength > 12;
  const isVeryLongName = nameLength > 16;

  let fontClasses = "";
  let textSize = "";

  switch (prediction.typographyStyle) {
    case 'playfair':
      fontClasses = "font-playfair italic leading-[0.95] sm:leading-[0.9] tracking-tight";
      textSize = isVeryLongName ? "text-[26px] sm:text-3xl" : isLongName ? "text-[30px] sm:text-4xl" : "text-[34px] sm:text-5xl";
      break;
    case 'cormorant':
      fontClasses = "font-cormorant italic leading-[0.95] sm:leading-[0.9] tracking-tight";
      textSize = isVeryLongName ? "text-[28px] sm:text-4xl" : isLongName ? "text-[32px] sm:text-5xl" : "text-[38px] sm:text-6xl";
      break;
    case 'bodoni':
      fontClasses = "font-bodoni italic leading-[0.95] sm:leading-[0.9] tracking-tight";
      textSize = isVeryLongName ? "text-[26px] sm:text-[38px]" : isLongName ? "text-[30px] sm:text-[46px]" : "text-[36px] sm:text-[54px]";
      break;
    case 'prata':
      fontClasses = "font-prata leading-[0.95] sm:leading-[0.9] tracking-tight";
      textSize = isVeryLongName ? "text-[26px] sm:text-3xl" : isLongName ? "text-[30px] sm:text-4xl" : "text-[34px] sm:text-5xl";
      break;
    case 'italiana':
      fontClasses = "font-italiana uppercase leading-[1] tracking-[0.05em]";
      textSize = isVeryLongName ? "text-[24px] sm:text-[32px]" : isLongName ? "text-[28px] sm:text-[38px]" : "text-[32px] sm:text-[46px]";
      break;
    case 'dmserif':
      fontClasses = "font-dmserif italic leading-[0.9] tracking-tight";
      textSize = isVeryLongName ? "text-[26px] sm:text-4xl" : isLongName ? "text-[30px] sm:text-5xl" : "text-[36px] sm:text-6xl";
      break;
    case 'fraunces':
      fontClasses = "font-fraunces font-medium italic leading-[0.95] sm:leading-[0.9] tracking-tight";
      textSize = isVeryLongName ? "text-[26px] sm:text-3xl" : isLongName ? "text-[30px] sm:text-4xl" : "text-[34px] sm:text-5xl";
      break;
    case 'cinzel':
      fontClasses = "font-cinzel font-semibold uppercase leading-[0.9] tracking-wider";
      textSize = isVeryLongName ? "text-[20px] sm:text-[30px]" : isLongName ? "text-[24px] sm:text-[36px]" : "text-[28px] sm:text-[42px]";
      break;
    case 'spacegrotesk':
      fontClasses = "font-spacegrotesk font-bold uppercase leading-[0.9] tracking-tighter";
      textSize = isVeryLongName ? "text-[24px] sm:text-3xl" : isLongName ? "text-[28px] sm:text-4xl" : "text-[32px] sm:text-5xl";
      break;
    case 'anton':
      fontClasses = "font-anton uppercase leading-[0.85] tracking-wide";
      textSize = isVeryLongName ? "text-[28px] sm:text-[44px]" : isLongName ? "text-[34px] sm:text-[54px]" : "text-[40px] sm:text-[64px]";
      break;
    case 'archivoblack':
      fontClasses = "font-archivoblack uppercase leading-[0.85] tracking-tighter";
      textSize = isVeryLongName ? "text-[26px] sm:text-4xl" : isLongName ? "text-[30px] sm:text-5xl" : "text-[36px] sm:text-6xl";
      break;
    case 'syne':
      fontClasses = "font-syne font-extrabold uppercase leading-[0.95] tracking-[0.05em]";
      textSize = isVeryLongName ? "text-[20px] sm:text-[30px]" : isLongName ? "text-[24px] sm:text-[36px]" : "text-[28px] sm:text-[42px]";
      break;
    case 'syncopate':
      fontClasses = "font-syncopate font-bold uppercase leading-[1.1] tracking-[0.05em]";
      textSize = isVeryLongName ? "text-[16px] sm:text-[22px]" : isLongName ? "text-[18px] sm:text-[26px]" : "text-[22px] sm:text-[30px]";
      break;
    case 'spacemono':
      fontClasses = "font-spacemono uppercase leading-tight tracking-[0.15em] font-bold";
      textSize = isVeryLongName ? "text-[18px] sm:text-[24px]" : isLongName ? "text-[20px] sm:text-[28px]" : "text-[24px] sm:text-[32px]";
      break;
    case 'jetbrains':
      fontClasses = "font-jetbrains uppercase leading-tight tracking-[0.1em] font-bold";
      textSize = isVeryLongName ? "text-[16px] sm:text-[22px]" : isLongName ? "text-[18px] sm:text-[26px]" : "text-[22px] sm:text-[30px]";
      break;
    case 'sharetech':
      fontClasses = "font-sharetech uppercase leading-[1.1] tracking-widest";
      textSize = isVeryLongName ? "text-[22px] sm:text-[32px]" : isLongName ? "text-[26px] sm:text-[38px]" : "text-[30px] sm:text-[44px]";
      break;
    case 'outfit':
      fontClasses = "font-outfit font-light lowercase leading-tight tracking-widest";
      textSize = isVeryLongName ? "text-[20px] sm:text-2xl" : isLongName ? "text-[24px] sm:text-3xl" : "text-[28px] sm:text-4xl";
      break;
    case 'manrope':
      fontClasses = "font-manrope font-extrabold uppercase leading-[0.95] tracking-tight";
      textSize = isVeryLongName ? "text-[24px] sm:text-[38px]" : isLongName ? "text-[28px] sm:text-[44px]" : "text-[34px] sm:text-[52px]";
      break;
    case 'jakarta':
      fontClasses = "font-jakarta font-semibold tracking-tighter leading-[0.9]";
      textSize = isVeryLongName ? "text-[24px] sm:text-3xl" : isLongName ? "text-[28px] sm:text-4xl" : "text-[32px] sm:text-5xl";
      break;
    case 'dmsans':
      fontClasses = "font-dmsans font-normal tracking-tight leading-[0.95]";
      textSize = isVeryLongName ? "text-[24px] sm:text-[36px]" : isLongName ? "text-[28px] sm:text-[42px]" : "text-[34px] sm:text-[50px]";
      break;
    default:
      fontClasses = "font-playfair italic leading-[0.95] sm:leading-[0.9] tracking-tight";
      textSize = "text-[34px] sm:text-5xl";
  }
  
  const todayDate = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date());

  const handleDownload = async () => {
    if (!cardRef.current) return;
    try {
      setIsExporting(true);
      
      const dataUrl = await toPng(cardRef.current, {
        quality: 1,
        pixelRatio: 3, // High intrisic resolution for social media sharing
        style: {
          transform: "scale(1)", // ensure the canvas captures exactly the actual size
        }
      });
      
      const link = document.createElement("a");
      link.download = `iro-${prediction.colorName.replace(/\s+/g, '-').toLowerCase()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (e) {
      console.error("Failed to export image", e);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center relative flex-1 min-h-0 pt-4 pb-8 sm:py-0">
      <div className="group relative perspective-1000">
        {/* Floating Card Effect using Framer Motion */}
        <motion.div 
          ref={cardRef}
          initial={{ opacity: 0, y: 150, scale: 0.95 }}
          animate={isExporting ? { 
            opacity: 1, y: 0, scale: 1, boxShadow: 'none' 
          } : { 
            opacity: 1, y: 0, scale: 1,
            boxShadow: `0 40px 80px ${prediction.hexCode}4D`
          }}
          transition={{ 
            duration: 0.8, 
            ease: [0.16, 1, 0.3, 1], // Custom printing/spring curve 
            opacity: { duration: 0.4 } 
          }}
          whileHover={!isExporting ? { 
            scale: 1.03, 
            y: -8, 
            boxShadow: `0 60px 120px ${prediction.hexCode}80`,
            transition: { duration: 0.5, ease: "easeOut" }
          } : {}}
          className={cn(
            "w-[300px] h-[460px] sm:w-[380px] sm:h-[520px] rounded-[24px] p-6 sm:p-10 flex flex-col justify-between z-10 relative isolate mx-auto origin-bottom",
          )}
          style={{
            backgroundColor: prediction.hexCode,
            color: textColor,
          }}
        >
          {/* Top: Meta & Date */}
          <div className="flex justify-between items-start">
            <div className="text-[10px] uppercase tracking-[0.15em] font-bold opacity-40">
              Daily Spectral
            </div>
            <div className="text-[10px] uppercase tracking-[0.1em] font-medium opacity-60 text-right">
              {todayDate}
            </div>
          </div>

          {/* Middle: The Color Info */}
          <div className="mb-6 sm:mb-8 mt-auto w-full">
            <h2 className={`${textSize} ${fontClasses} mb-4 sm:mb-5 w-full`}>{prediction.colorName}</h2>
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm font-medium opacity-60">HEX {prediction.hexCode}</span>
              <div className="h-[1px] flex-1 bg-current opacity-10"></div>
            </div>
          </div>

          {/* Bottom: Prediction */}
          <div className="pt-6 sm:pt-8 border-t border-current" style={{ borderColor: `${textColor}1A` }}>
            <p className="text-[15px] sm:text-lg leading-[1.3] sm:leading-tight font-medium mb-6 sm:mb-8">
              {prediction.prediction}
            </p>
            
            <div className="flex justify-center items-center opacity-50">
              <span className="text-[10px] tracking-[0.15em] uppercase font-bold">iro.nasibov.me</span>
            </div>
          </div>
        </motion.div>

        {/* Background decorative cards */}
        {!isExporting && (
          <motion.div 
            initial={{ opacity: 0, y: 150, scale: 0.9, rotate: 0 }}
            animate={{ opacity: 0.2, y: 0, scale: 1, rotate: 3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="absolute -z-10 top-2 right-[-10px] sm:right-[-20px] w-full h-full bg-[#3B3B3B] rounded-[24px] origin-bottom"
          ></motion.div>
        )}
      </div>

      {/* Action Tooltip Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        className="flex gap-4 mt-12 sm:mt-0 sm:absolute sm:bottom-12 sm:right-12 z-20"
      >
        <button 
          onClick={handleDownload}
          disabled={isExporting}
          className="flex items-center gap-2 bg-white/5 border-white/10 hover:bg-white/10 text-white border px-5 py-2.5 rounded-full backdrop-blur-md transition-colors disabled:opacity-50 shadow-lg"
        >
          {isExporting ? <Loader2 className="w-3 h-3 animate-spin"/> : <Download className="w-3 h-3" />}
          <span className="text-[10px] uppercase tracking-widest font-bold">
             {isExporting ? "Saving..." : "Download Image"}
          </span>
        </button>
      </motion.div>
    </div>
  );
}
