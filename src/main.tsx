import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/index.css';
import App from '@/App.tsx';

const rootElem = document.getElementById('root')!;
const reactRoot = ReactDOM.createRoot(rootElem);

reactRoot.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
