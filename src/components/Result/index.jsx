import React from 'react';

function Result({ placar }) {
  return (
    <div>
      <br />
      <h2>Escolhas</h2>
      <p>Jogador: {placar.jogador}</p>
      <p>Computador: {placar.computador}</p>
      <p>Empates: {placar.empates}</p>
    </div>
  );
}

export default Result
