import React from "react";
import {createRoot} from 'react-dom/client';

import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";

import App from "./App";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<App />);
