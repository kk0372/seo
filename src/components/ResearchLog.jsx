import React from 'react';

const ResearchLog = (props) => {
  const subject_action = props.subject_action || "Attempted Escape";
  const analysis = props.analysis || "Subject shows high resistance.";
  const conclusion = props.conclusion || "Physical restraint required.";

  return (
    <div style={{ width: "100%", maxWidth: "32rem", margin: "1.5rem auto", backgroundColor: "#ffffff", color: "#1f2937", fontFamily: "monospace", fontSize: "0.75rem", borderLeft: "4px solid #b91c1c", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: "0", opacity: 0.05, pointerEvents: "none", backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "10px 10px" }}></div>
      
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "0.75rem", borderBottom: "2px solid #f3f4f6", backgroundColor: "#f9fafb" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "1.25rem", height: "1.25rem", color: "#b91c1c" }}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><path d="M12 13v4"/><path d="M12 21h.01"/></svg>
          <div>
            <h3 style={{ fontWeight: "bold", fontSize: "0.875rem", letterSpacing: "-0.05em", color: "#111827", margin: 0 }}>INCIDENT_REPORT_FILE</h3>
            <p style={{ fontSize: "9px", color: "#6b7280", margin: 0 }}>ID: SUBJECT_01 // UNEXPECTED_VARIABLE</p>
          </div>
        </div>
        <div style={{ border: "2px solid #dc2626", color: "#dc2626", padding: "0.125rem 0.5rem", fontWeight: "900", fontSize: "10px", transform: "rotate(-6deg)", opacity: 0.7, letterSpacing: "0.1em" }}>ABNORMAL</div>
      </div>

      <div style={{ padding: "1rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.25rem", marginBottom: "0.25rem", fontWeight: "bold", color: "#9ca3af", fontSize: "9px", textTransform: "uppercase" }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "0.75rem", height: "0.75rem" }}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> Observed Behavior
          </div>
          <div style={{ backgroundColor: "#fef2f2", padding: "0.5rem", borderLeft: "2px solid #fca5a5", fontStyle: "italic", fontWeight: "bold", color: "#1f2937" }}>"{subject_action}"</div>
        </div>

        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.25rem", marginBottom: "0.25rem", fontWeight: "bold", color: "#9ca3af", fontSize: "9px", textTransform: "uppercase" }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "0.75rem", height: "0.75rem" }}><path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/></svg> Data Interpretation
          </div>
          <div style={{ color: "#4b5563", lineHeight: "1.625", paddingLeft: "0.25rem" }}>{analysis}</div>
        </div>

        <div style={{ marginTop: "0.5rem", paddingTop: "0.75rem", borderTop: "1px dashed #d1d5db" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <span style={{ backgroundColor: "#000000", color: "#ffffff", padding: "0 0.25rem", fontWeight: "bold", fontSize: "9px" }}>FINAL VERDICT</span>
              <p style={{ fontWeight: "bold", color: "#b91c1c", marginTop: "0.25rem", fontSize: "0.875rem", marginBottom: 0 }}>{">>"} {conclusion}</p>
            </div>
            <div style={{ textAlign: "right", opacity: 0.3 }}>
               <div style={{ fontFamily: "serif", fontStyle: "italic", fontSize: "1.125rem", color: "#000000", marginBottom: "-0.25rem" }}>S.Yeon</div>
               <div style={{ fontSize: "8px", borderTop: "1px solid #000000" }}>Head Researcher</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchLog;
