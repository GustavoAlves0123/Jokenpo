import React from 'react';

function Score({ placar }) {
  return (
    <div>
      <br />
      <h2>Resultados</h2>
      <p>Jogador: {placar.jogador}</p>
      <p>Computador: {placar.computador}</p>
    </div>
  );
}

export default Score
