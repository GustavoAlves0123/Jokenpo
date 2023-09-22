import React, { useState } from 'react';
import Game from './components/Game';
import Result from './components/Result';
import Score from './components/Score';
import './App.css'

function App() {
  const [placar, setPlacar] = useState({ jogador: 0, computador: 0, empates: 0 });

  const atualizarPlacar = (vencedor) => {
    setPlacar((placarAnterior) => ({
      ...placarAnterior,
      [vencedor]: placarAnterior[vencedor] + 1,
    }));
  };

  return (
    <div className="App">
      <h1>Escolha uma opção e clique em "Jogar"</h1>
      <Game atualizarPlacar={atualizarPlacar} />
      <Result placar={placar} />
      <Score placar={placar} />
    </div>
  );
}

export default App
