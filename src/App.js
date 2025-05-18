import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <img
          src="https://blogger.googleusercontent.com/img/a/AVvXsEgUQEqZu-5pJyweN1Siq02n8yYfLQ64mj9tPYZujChllmhM8b8uiOXeA8alQvmsH80Jezmp64UiqtcqsmUFbs7uHq5FijuWqe_lAGuy32z1amVeYyvLzA95NryhmUKoJj1yBgcfaCuF1ofj_I32tFOB2dFhjmOmXiw_vRvffLBBvAHbC6zf4TDXv1Z0leo"
          alt="UK Chatbot Logo"
          className="logo"
        />
        <h1 className="title">UK Chatbot</h1>
      </header>

      <main className="chat-container">
        <gradio-app src="https://vasanth27-vkai.hf.space"></gradio-app>
      </main>

      <footer className="footer">
        <p>© 2025 UK Chatbot. Built with ❤️ by Uday Krishna.</p>
      </footer>
    </div>
  );
}

export default App;
