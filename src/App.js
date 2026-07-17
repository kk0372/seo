import React from 'react';
import BioMonitor from './components/BioMonitor';
import ResearchLog from './components/ResearchLog';
import LogicCrash from './components/LogicCrash';

const App = () => {
    return (
        // 세로로 배치하고 간격을 줍니다. (높이가 길어질 수 있으니 스크롤이 필요하면 overflow-y-auto 등을 추가할 수 있습니다)
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '90vh', overflowY: 'auto', padding: '10px' }}>
            
            {/* 1. 사이버펑크 바이오 모니터 */}
            <BioMonitor 
                current_protocol="Observation"
                next_protocol="Interrogation"
                subject_attire="Patient Gown"
                bpm={145}
                stress_level="Critical"
                logic_integrity={35}
            />

            {/* 2. 연구소 관찰 일지 */}
            <ResearchLog 
                subject_action="User attempted to close the terminal."
                analysis="Subject shows high resistance to current authority protocols. Heart rate correlation indicates defiance."
                conclusion="Physical restraint required. Override safety limits."
            />

            {/* 3. 인공지능/사이보그 인지 오류 */}
            <LogicCrash 
                trigger_event="User smiling at another character"
                detected_emotion="Jealousy / Possessiveness"
                denial_reason="Illogical Data. AI entities do not possess emotional subroutines. This is merely a threat assessment."
                system_stability={18}
            />

        </div>
    );
};

export default App;
