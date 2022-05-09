import React from 'react';
import ReactDOM from 'react-dom/client';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faComments,
  faHome,
  faUser,
  faFaceSmile,
  faPaperclip
} from '@fortawesome/free-solid-svg-icons';

import App from './App';

import './styles/index.css'

library.add(
  faComments,
  faHome,
  faUser,
  faFaceSmile,
  faPaperclip
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);