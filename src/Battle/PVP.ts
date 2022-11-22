import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _playerOne: Fighter;
  private _playerTwo: Fighter;
  
  constructor(playerOne: Fighter, playerTwo: Fighter) {
    super(playerOne);
    this._playerOne = playerOne;
    this._playerTwo = playerTwo;
  }

  fight(): number {
    this._playerOne.attack(this._playerTwo);
    if (this._playerTwo.lifePoints === -1) {
      return super.fight();
    }
    this._playerTwo.attack(this._playerOne);
    if (this._playerOne.lifePoints === -1) {
      return super.fight();
    }
    this.fight();
    return -1;
  }
}

export default PVP;