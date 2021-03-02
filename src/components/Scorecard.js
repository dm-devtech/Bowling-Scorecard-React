import Print from './Print.js';

export default class Scorecard {

  constructor(printer = new Print){
    this.score = {'1.1':0, '1.2':0, '2.1':0, '2.2':0, '3.1':0, '3.2':0, '4.1':0, '4.2':0, '5.1':0, '5.2':0, '6.1':0, '6.2':0, '7.1':0, '7.2':0, '8.1':0, '8.2':0, '9.1':0, '9.2':0, '10.1':0, '10.2':0, '10.3':0}
    this.printer = printer
  };

  resetScorecard() {
    this.score = {'1.1':0, '1.2':0, '2.1':0, '2.2':0, '3.1':0, '3.2':0, '4.1':0, '4.2':0, '5.1':0, '5.2':0, '6.1':0, '6.2':0, '7.1':0, '7.2':0, '8.1':0, '8.2':0, '9.1':0, '9.2':0, '10.1':0, '10.2':0, '10.3':0}
  };

  addRoll(turn, pins) {
    this.turnCheck(turn)
    this.checkFrameNotAboveTen(pins)
    this.score[turn] = pins
  };

  turnFinder(turn) {
    let decimal = (turn - Math.floor(turn)).toFixed(1);
    return parseFloat(decimal)
  }

  turnCheck(turn) {
    if (this.turnFinder(turn) >= 0.3 && turn < 10) throw new Error('You can only enter a third roll for the tenth frame')
    if (turn > 10.3) throw new Error('You cannot enter a turn higher than turn 10 frame 3')
  }

  checkFrameNotAboveTen(input) {
    if (input > 10) throw new Error('You cant roll more than 10 in one turn')
  }

  isStrike(currRoll1, currRoll2, nextRoll1, nextRoll2) {
    return (currRoll1 === 10 || currRoll2 === 10) && !isNaN(nextRoll1 && nextRoll2)
  };

  isSpare(currRoll1, currRoll2, nextRoll1, nextRoll2) {
    return (currRoll1 + currRoll2 === 10)  && !isNaN(nextRoll1)
  };

  tenthFrameBonus(frame) {
    let [tenthRoll1, tenthRoll2, tenthRoll3] = [this.score[frame+10.1], this.score[frame+10.2], this.score[frame+10.3]]
    if(tenthRoll1+tenthRoll2 === 10 || 20) return tenthRoll3
  }

  strikeBonus(currRoll1, currRoll2, nextRoll1, nextRoll2) {
    if (this.isStrike(currRoll1, currRoll2, nextRoll1, nextRoll2)) return (nextRoll1 + nextRoll2)
    return (this.isSpare(currRoll1, currRoll2, nextRoll1, nextRoll2)) ? nextRoll1 : 0
  }

  currentAndNextRolls(frame) {
    let rolls = []
    rolls.push(this.score[frame+0.1], this.score[frame+0.2], this.score[frame+1.1], this.score[frame+1.2])
    return rolls
  }

  total(frame) {
    let score = 0
    while (frame > 0) {
    let [currRoll1, currRoll2, nextRoll1, nextRoll2] = this.currentAndNextRolls(frame)
    score += (currRoll1 + currRoll2 + this.strikeBonus(currRoll1, currRoll2, nextRoll1, nextRoll2))
    frame -= 1;
    };
    score += this.tenthFrameBonus(frame)
    return score
  };

  print(frame = 10) {
    if(frame >= 11 || frame <= 0) throw new Error('You must enter a frame number of between 1-10')
    return this.printer.output(this.score, this.total(frame), frame)
  };

};
