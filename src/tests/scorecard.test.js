import Print from '../components/Print.js'
import Scorecard from '../components/Scorecard.js'

describe('Scorecard class', function() {
  let scorecard
  let print
  let spy

  beforeEach(function() {
    print = new Print()
    scorecard = new Scorecard(print)
    spy = jest.spyOn(print, 'output')
  });

  afterEach(function() {
    jest.clearAllMocks();
  })

  describe('this.score variable', function() {
    it('checks there is a blank scorecard to begin with', function(){
      expect(scorecard.print(10)).toEqual("Frame.Roll = 1.1 Pins knocked = 0\nFrame.Roll = 1.2 Pins knocked = 0\nFrame.Roll = 2.1 Pins knocked = 0\nFrame.Roll = 2.2 Pins knocked = 0\nFrame.Roll = 3.1 Pins knocked = 0\nFrame.Roll = 3.2 Pins knocked = 0\nFrame.Roll = 4.1 Pins knocked = 0\nFrame.Roll = 4.2 Pins knocked = 0\nFrame.Roll = 5.1 Pins knocked = 0\nFrame.Roll = 5.2 Pins knocked = 0\nFrame.Roll = 6.1 Pins knocked = 0\nFrame.Roll = 6.2 Pins knocked = 0\nFrame.Roll = 7.1 Pins knocked = 0\nFrame.Roll = 7.2 Pins knocked = 0\nFrame.Roll = 8.1 Pins knocked = 0\nFrame.Roll = 8.2 Pins knocked = 0\nFrame.Roll = 9.1 Pins knocked = 0\nFrame.Roll = 9.2 Pins knocked = 0\nFrame.Roll = 10.1 Pins knocked = 0\nFrame.Roll = 10.2 Pins knocked = 0\nFrame.Roll = 10.3 Pins knocked = 0\nYour score = 0")
      expect(spy).toHaveBeenCalled()
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('checks the reset function resets the scorecard', function(){
      scorecard.addRoll(1.1, 4)
      scorecard.addRoll(1.2, 5)
      scorecard.resetScorecard()
      expect(scorecard.print(10)).toEqual("Frame.Roll = 1.1 Pins knocked = 0\nFrame.Roll = 1.2 Pins knocked = 0\nFrame.Roll = 2.1 Pins knocked = 0\nFrame.Roll = 2.2 Pins knocked = 0\nFrame.Roll = 3.1 Pins knocked = 0\nFrame.Roll = 3.2 Pins knocked = 0\nFrame.Roll = 4.1 Pins knocked = 0\nFrame.Roll = 4.2 Pins knocked = 0\nFrame.Roll = 5.1 Pins knocked = 0\nFrame.Roll = 5.2 Pins knocked = 0\nFrame.Roll = 6.1 Pins knocked = 0\nFrame.Roll = 6.2 Pins knocked = 0\nFrame.Roll = 7.1 Pins knocked = 0\nFrame.Roll = 7.2 Pins knocked = 0\nFrame.Roll = 8.1 Pins knocked = 0\nFrame.Roll = 8.2 Pins knocked = 0\nFrame.Roll = 9.1 Pins knocked = 0\nFrame.Roll = 9.2 Pins knocked = 0\nFrame.Roll = 10.1 Pins knocked = 0\nFrame.Roll = 10.2 Pins knocked = 0\nFrame.Roll = 10.3 Pins knocked = 0\nYour score = 0")
      expect(spy).toHaveBeenCalled()
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('#print method', function() {
    it('prints frame, roll, pins knocked and score for 5 frames', function() {
      scorecard.addRoll(1.1, 0)
      scorecard.addRoll(1.2, 2)
      scorecard.addRoll(2.1, 8)
      scorecard.addRoll(2.2, 1)
      scorecard.addRoll(3.1, 0)
      scorecard.addRoll(3.2, 1)
      scorecard.addRoll(4.1, 8)
      scorecard.addRoll(4.2, 2)
      scorecard.addRoll(5.1, 6)
      scorecard.addRoll(5.2, 0)
      let string = scorecard.print(5)
      expect(string).toEqual("Frame.Roll = 1.1 Pins knocked = 0\nFrame.Roll = 1.2 Pins knocked = 2\nFrame.Roll = 2.1 Pins knocked = 8\nFrame.Roll = 2.2 Pins knocked = 1\nFrame.Roll = 3.1 Pins knocked = 0\nFrame.Roll = 3.2 Pins knocked = 1\nFrame.Roll = 4.1 Pins knocked = 8\nFrame.Roll = 4.2 Pins knocked = 2\nFrame.Roll = 5.1 Pins knocked = 6\nFrame.Roll = 5.2 Pins knocked = 0\nFrame.Roll = 6.1 Pins knocked = 0\nFrame.Roll = 6.2 Pins knocked = 0\nFrame.Roll = 7.1 Pins knocked = 0\nFrame.Roll = 7.2 Pins knocked = 0\nFrame.Roll = 8.1 Pins knocked = 0\nFrame.Roll = 8.2 Pins knocked = 0\nFrame.Roll = 9.1 Pins knocked = 0\nFrame.Roll = 9.2 Pins knocked = 0\nFrame.Roll = 10.1 Pins knocked = 0\nFrame.Roll = 10.2 Pins knocked = 0\nFrame.Roll = 10.3 Pins knocked = 0\nYour score = 34")
      expect(spy).toHaveBeenCalled()
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('prints frame, roll, pins knocked and score for 10 frames', function() {
      scorecard.addRoll(1.1, 0)
      scorecard.addRoll(1.2, 2)
      scorecard.addRoll(2.1, 8)
      scorecard.addRoll(2.2, 1)
      scorecard.addRoll(3.1, 0)
      scorecard.addRoll(3.2, 1)
      scorecard.addRoll(4.1, 8)
      scorecard.addRoll(4.2, 2)
      scorecard.addRoll(5.1, 5)
      scorecard.addRoll(5.2, 3)
      scorecard.addRoll(6.1, 6)
      scorecard.addRoll(6.2, 3)
      scorecard.addRoll(7.1, 0)
      scorecard.addRoll(7.2, 2)
      scorecard.addRoll(8.1, 8)
      scorecard.addRoll(8.2, 1)
      scorecard.addRoll(9.1, 0)
      scorecard.addRoll(9.2, 1)
      scorecard.addRoll(10.1, 10)
      scorecard.addRoll(10.2, 10)
      scorecard.addRoll(10.3, 10)
      let string = scorecard.print(10)
      expect(string).toEqual("Frame.Roll = 1.1 Pins knocked = 0\nFrame.Roll = 1.2 Pins knocked = 2\nFrame.Roll = 2.1 Pins knocked = 8\nFrame.Roll = 2.2 Pins knocked = 1\nFrame.Roll = 3.1 Pins knocked = 0\nFrame.Roll = 3.2 Pins knocked = 1\nFrame.Roll = 4.1 Pins knocked = 8\nFrame.Roll = 4.2 Pins knocked = 2\nFrame.Roll = 5.1 Pins knocked = 5\nFrame.Roll = 5.2 Pins knocked = 3\nFrame.Roll = 6.1 Pins knocked = 6\nFrame.Roll = 6.2 Pins knocked = 3\nFrame.Roll = 7.1 Pins knocked = 0\nFrame.Roll = 7.2 Pins knocked = 2\nFrame.Roll = 8.1 Pins knocked = 8\nFrame.Roll = 8.2 Pins knocked = 1\nFrame.Roll = 9.1 Pins knocked = 0\nFrame.Roll = 9.2 Pins knocked = 1\nFrame.Roll = 10.1 Pins knocked = 10\nFrame.Roll = 10.2 Pins knocked = 10\nFrame.Roll = 10.3 Pins knocked = 10\nYour score = 86")
      expect(spy).toHaveBeenCalled()
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('edge case', function() {
    it('user cant enter more than 10 in one roll', function() {
      expect(function() {scorecard.addRoll(1.1, 11)}).toThrowError('You cant roll more than 10 in one turn')
    });

    it('user cannot enter a third turn unless its the tenth frame', function() {
      expect(function() {scorecard.addRoll(1.3, 6)}).toThrowError('You can only enter a third roll for the tenth frame')
    });

    it('user cannot enter a turn above 10.3', function() {
      expect(function() {scorecard.addRoll(11.1, 6)}).toThrowError('You cannot enter a turn higher than turn 10 frame 3')
    });

    it('user printing a scorecard with an incorrect frame number gives error', function() {
      expect(function() {scorecard.print(11)}).toThrowError('You must enter a frame number of between 1-10')
    });
  });
});
