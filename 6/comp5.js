import React from 'react';
import { clik } from './App';
function comp5() {
  return (
    <clik.Consumer>
      {({ setcount }) => (
        <button onClick={() => setcount(count => count + 1)}>
          Кликни меня!
        </button>
      )}
    </clik.Consumer>
  );
}
export default comp5;