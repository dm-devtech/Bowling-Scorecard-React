import React from 'react';
import Print from './Print.js';
import Scorecard from './Scorecard.js';

const Controls = (props) => {
  let sth = new Scorecard
  return (
    <div>
     {sth.print(1)}
    </div>
  )
}

export default Controls;
