import React, { useState } from 'react';

const opcoes = ['Pedra', 'Papel', 'Tesoura'];

function Game({ atualizarPlacar }) {
  const [escolhaJogador, setEscolhaJogador] = useState(null);
  const [escolhaComputador, setEscolhaComputador] = useState(null);

  const getEscolhaAleatoria = () => opcoes[Math.floor(Math.random() * 3)];

  const determinarVencedor = () => {
    const escolhaComputador = getEscolhaAleatoria();
    setEscolhaComputador(escolhaComputador);

    if (escolhaJogador === escolhaComputador) {
      atualizarPlacar('empates');
    } else if (
      (escolhaJogador === 'Pedra' && escolhaComputador === 'Tesoura') ||
      (escolhaJogador === 'Papel' && escolhaComputador === 'Pedra') ||
      (escolhaJogador === 'Tesoura' && escolhaComputador === 'Papel')
    ) {
      atualizarPlacar('jogador');
    } else {
      atualizarPlacar('computador');
    }
  };

  return (
    <div>
      <button onClick={() => setEscolhaJogador('Pedra')}>Pedra</button>
      <button onClick={() => setEscolhaJogador('Papel')}>Papel</button>
      <button onClick={() => setEscolhaJogador('Tesoura')}>Tesoura</button><br />
      <button onClick={determinarVencedor}>Jogar</button>
      {escolhaComputador && <p>PC escolheu: {escolhaComputador}!</p>}
    </div>
  );
}

export default Game
