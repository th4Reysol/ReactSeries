import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const targets = document.getElementsByClassName('fade');
// for(let i = targets.length; i--;){
//  let observer = new IntersectionObserver((entries, observer) => {
//   for(let j = entries.length; j--;){
//    if (entries[j].isIntersecting) {
//     entries[j].target.classList.add('active');
//    } 
//   }
//  });
//  observer.observe(targets[i]);
// }



