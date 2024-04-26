import {createRoot} from 'react-dom/client';
import {App} from './App.js';

const rootEle = document.getElementById("root");
const root = createRoot(rootEle);


root.render(<App />);