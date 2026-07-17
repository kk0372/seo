import React from 'react';

// 아이콘
const ActivityIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>);
const LockIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>);
const BrainIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>);
const ShirtIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20.38 3.4a2 2 0 0 0-1.2-1.1L18 2h-1.5a6 6 0 0 0-9 0H6l-1.18.3a2 2 0 0 0-1.2 1.1L3 6l4.5 1.5L9 6v13h6V6l1.5 1.5L21 6l-.62-2.6z"/></svg>);
const NextIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6"/></svg>);

// [Clean Code] 주석 제거
const BioMonitor = ({ 
  current_protocol = "Observation", 
  next_protocol = "None", 
  subject_attire = "Gown",       
  bpm = 80, 
  stress_level = "Normal", 
  logic_integrity = 100 
}) => {
  
  const getPulseSpeed = () => {
    if (bpm > 140) return "duration-300"; 
    if (bpm > 100) return "duration-700"; 
    return "duration-1000"; 
  };

  const getLogicStatus = () => {
    if (logic_integrity > 80) return { color: "bg-emerald-500", text: "STABLE", glitch: false };
    if (logic_integrity > 40) return { color: "bg-amber-500", text: "WARNING", glitch: false };
    return { color: "bg-red-600", text: "CRITICAL ERROR", glitch: true };
  };

  const logicStat = getLogicStatus();

  return (
    <div className="w-full max-w-md mx-auto my-6 bg-[#0f172a] text-emerald-400 font-mono text-xs border border-emerald-900 rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.1)] relative overflow-hidden">
      
      <div className="bg-emerald-950/50 p-3 border-b border-emerald-900 space-y-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <LockIcon className="w-3 h-3 text-emerald-500 animate-pulse" />
            <span className="font-bold tracking-widest text-emerald-100">NOW: {current_protocol}</span>
          </div>
          <span className="text-[9px] bg-emerald-900 px-1 rounded text-emerald-300">ACTIVE</span>
        </div>
        
        <div className="flex justify-between items-center opacity-60 border-t border-emerald-900/30 pt-1">
          <div className="flex items-center gap-2">
            <NextIcon className="w-3 h-3 text-gray-500" />
            <span className="font-bold tracking-widest text-gray-400">NEXT: {next_protocol}</span>
          </div>
          <span className="text-[9px] text-gray-500 italic">PLANNED</span>
        </div>
      </div>

      <div className="p-4 grid grid-cols-2 gap-4">
        
        <div className="col-span-2 flex items-center gap-4 bg-black/20 p-2 rounded border border-emerald-900/30">
          <div className="w-12 text-center">
            <span className={`text-2xl font-black ${bpm > 120 ? "text-red-400 animate-pulse" : "text-white"}`}>{bpm}</span>
            <div className="text-[9px] text-emerald-600">BPM</div>
          </div>
          <div className="flex-1 h-8 relative overflow-hidden flex items-center">
             <div className="absolute inset-0 flex items-center">
               <div className="w-full h-px bg-emerald-900/50"></div>
             </div>
             <ActivityIcon className={`w-full h-6 text-emerald-500 ${getPulseSpeed()}`} />
          </div>
        </div>

        <div className="col-span-2 bg-emerald-900/10 p-2 border border-emerald-900/30 rounded flex justify-between items-center">
          <div className="flex items-center gap-2 text-emerald-300">
            <ShirtIcon className="w-4 h-4" />
            <span className="font-bold text-xs">SUBJECT_ATTIRE</span>
          </div>
          <div className="text-right">
            <span className="text-white font-bold text-xs border-b border-dashed border-emerald-600">
              {subject_attire}
            </span>
          </div>
        </div>

        <div className="col-span-2 flex justify-between items-center text-[10px] text-gray-400 px-1">
           <span>STRESS_LEVEL: <span className="text-white font-bold">{stress_level}</span></span>
        </div>

      </div>

      <div className="bg-black p-2 border-t border-emerald-900/50">
        <div className="flex justify-between items-center mb-1">
          <div className="flex items-center gap-1 text-[10px] text-gray-400">
            <BrainIcon className="w-3 h-3" /> OBSERVER_LOGIC
          </div>
          <span className={`text-[9px] font-bold ${logicStat.color.replace('bg-', 'text-')} ${logicStat.glitch ? "animate-pulse" : ""}`}>
            {logicStat.text} ({logic_integrity}%)
          </span>
        </div>
        <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className={`h-full ${logicStat.color} transition-all duration-700`} 
            style={{ width: `${logic_integrity}%` }}
          ></div>
        </div>
      </div>

    </div>
  );
};

export default BioMonitor;
