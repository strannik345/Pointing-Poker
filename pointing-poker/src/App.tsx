import React from 'react';
import { Route, Switch } from 'react-router';
import './app.css';
import { NoMatchPage } from './pages/404page/NoMatchPage';
import { Game } from './pages/game/game';
import { Lobby } from './pages/lobby/lobby';
import { PlayerLobby } from './pages/lobby/PlayerLobby';
import { Result } from './pages/result/result';
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
        <Switch>
          <Route exact path="/">
            <StartPage/>
          </Route>
          <Route exact path="/lobby">
            <Lobby/>
          </Route>
          <Route exact path="/player-lobby">
            <PlayerLobby />
          </Route>
          <Route exact path="/game">
            <Game/>
          </Route>
          <Route exact path="/result">
            <Result/>
          </Route>
          <Route path='*'>
            <NoMatchPage />
          </Route>
        </Switch>
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
