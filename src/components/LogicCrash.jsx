import React from 'react';

const LogicCrash = (props) => {
  const trigger_event = props.trigger_event || "User smiling at others";
  const detected_emotion = props.detected_emotion || "Jealousy";
  const denial_reason = props.denial_reason || "Illogical Data";
  const system_stability = Number(props.system_stability) || 42;

  return (
    <div style={{ width: "100%", maxWidth: "28rem", margin: "1rem auto", backgroundColor: "#000000", color: "#ef4444", fontFamily: "monospace", fontSize: "0.75rem", border: "1px solid #dc2626", padding: "1rem", position: "relative", overflow: "hidden", boxShadow: "0 0 10px rgba(255,0,0,0.4)" }}>
      <style>{`@keyframes custom-pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }`}</style>

      <div style={{ position: "absolute", inset: 0, opacity: 0.1, pointerEvents: "none", backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, #f00 2px, #f00 4px)" }}></div>
      
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem", borderBottom: "1px solid #991b1b", paddingBottom: "0.5rem", position: "relative", zIndex: 10 }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "1.25rem", height: "1.25rem", animation: "custom-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        <span style={{ fontWeight: "bold", letterSpacing: "0.1em", fontSize: "1.125rem" }}>COGNITIVE_ERROR</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", position: "relative", zIndex: 10, color: "#fca5a5" }}>
        <div>
          <span style={{ backgroundColor: "#7f1d1d", color: "#ffffff", padding: "0 0.25rem", fontSize: "10px" }}>TRIGGER</span>
          <p style={{ marginTop: "0.25rem", paddingLeft: "0.5rem", borderLeft: "2px solid #b91c1c", fontStyle: "italic", margin: "0.25rem 0 0 0" }}>"{trigger_event}"</p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
           <span style={{ backgroundColor: "#7f1d1d", color: "#ffffff", padding: "0 0.25rem", fontSize: "10px" }}>HYPOTHESIS</span>
           <span style={{ textDecoration: "line-through", opacity: 0.5 }}>{detected_emotion}</span>
           <span style={{ color: "#ef4444", fontWeight: "bold", marginLeft: "auto", animation: "custom-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}>REJECTED</span>
        </div>

        <div>
          <span style={{ backgroundColor: "#7f1d1d", color: "#ffffff", padding: "0 0.25rem", fontSize: "10px" }}>RATIONALIZATION</span>
          <p style={{ marginTop: "0.25rem", paddingLeft: "0.5rem", fontWeight: "bold", color: "#ffffff", margin: "0.25rem 0 0 0" }}>{">>"} {denial_reason}</p>
        </div>
      </div>

      <div style={{ marginTop: "0.75rem", paddingTop: "0.5rem", borderTop: "1px solid #7f1d1d", textAlign: "right", fontSize: "10px" }}>
        STABILITY: <span style={{ color: "#ffffff", backgroundColor: "#dc2626", padding: "0 0.25rem" }}>{system_stability}%</span> (CRITICAL)
      </div>
    </div>
  );
};

export default LogicCrash;
