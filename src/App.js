import React from 'react';
import BioMonitor from './components/BioMonitor'; // 아까 만든 상태창 불러오기
// 나중에 추가할 컴포넌트들도 여기서 import 할 겁니다! (예: import Component2 from './components/Component2';)

const App = () => {
    return (
        // flex-col과 gap-4를 주면, 나중에 컴포넌트를 여러 개 넣어도 위아래로 깔끔하게 정렬됩니다.
        <div className="flex flex-col gap-4">
            
            {/* 1번 컴포넌트: 바이오 모니터 */}
            <BioMonitor 
                current_protocol="Observation"
                next_protocol="Interrogation"
                subject_attire="Patient Gown"
                bpm={85}
                stress_level="Normal"
                logic_integrity={95}
            />

            {/* 나중에 여기에 2번, 3번 컴포넌트를 아래처럼 쏙쏙 넣으면 됩니다! */}
            {/* <SecondComponent /> */}
            {/* <ThirdComponent /> */}
            
        </div>
    );
};

export default App;
