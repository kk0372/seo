import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 1. 화면 전체(body)를 컨테이너로 잡습니다. (설정창 밖으로 꺼냄)
const rootContainer = document.body;
const rootElement = document.createElement('div');

// 2. UI가 화면 우측 상단에 예쁘게 떠 있도록 CSS 설정 (이 부분 추가됨!)
rootElement.style.position = 'fixed';
rootElement.style.top = '20px';
rootElement.style.right = '20px';
rootElement.style.zIndex = '9999';

rootContainer.appendChild(rootElement);

const root = ReactDOM.createRoot(rootElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
