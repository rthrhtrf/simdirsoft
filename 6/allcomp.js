import React from 'react';
import { clik } from './clik';
import comp1 from './comp1';
function allcomp() {
  return (
    <clik.Consumer>
      {({ count }) => (
        <div>
          <h1>Количество кликов: {count}</h1>
          <comp1 />
        </div>
      )}
    </clik.Consumer>
  );
}
export default allcomp;