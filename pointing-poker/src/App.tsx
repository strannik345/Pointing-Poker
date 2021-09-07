import React from 'react';
import './app.css';
import { StartPage } from './pages/start page/StartPage';

function App() {
  return (
    <>
      <header>
        <div className="blue-line"></div>
        <div className="light-blue-line"></div>
        <div className="logo"></div>
      </header>
      <main>
        <StartPage/>
      </main>      
      <footer>
        <ul className='footer-info'>
          <li>2021</li>
          <li>
            <ul className='git-links'>
              <li><div className="git-logo"></div><a href="https://github.com/IanaLit" target='_blank' rel="noreferrer">Iana Litvinova</a></li>
              <li><div className="git-logo"></div><a href="https://github.com/strannik345" target='_blank' rel="noreferrer">Vasiliy Volodko</a></li>              
            </ul>
          </li>
          <li className='rs-logo'><a href="https://rs.school/react/" target='_blank' rel="noreferrer"> </a></li>
        </ul>
      </footer>
    </>
  );
}

export default App;
