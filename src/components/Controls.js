import React from 'react';
import Print from './Print.js';
import Scorecard from './Scorecard.js';

const Controls = () => {
  let sth = new Scorecard
  return (
    <div>
    <h1>Bowling Scorecard</h1>
      <table>
         <tbody>
         {
           Object.keys(sth.score).map(itemKey => {
             return (
               <tr key={itemKey}>
                 <td>Frame.Roll {itemKey}</td>
                 <td>{itemKey === 'Link' ? <a href={sth.score[itemKey]}>{sth.score[itemKey]}</a> : sth.score[itemKey]}</td>
               </tr>
             )
           })
         }
         </tbody>
       </table>
      </div>
  )
}

export default Controls;
