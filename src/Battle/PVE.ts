import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private enemiesNumber: number;

  constructor(
    player: Fighter,
    private enemies: SimpleFighter[],
  ) {
    super(player);
    this.enemiesNumber = enemies.length;
  }

  playerRound() {
    for (let i = 0; i < this.enemies.length; i += 1) {
      if (this.enemies[i].lifePoints > 0) {
        this.player.attack(this.enemies[i]);
        break;
      }
    }
  }

  enemiesRound() {
    for (let i = 0; i < this.enemies.length; i += 1) {
      this.enemies[i].attack(this.player);
      if (this.player.lifePoints === -1) {
        break;
      }
    }
  }

  fight(): number {
    this.playerRound();
    if (this.enemies.every((e) => e.lifePoints === -1)) {
      return super.fight();
    }
    this.enemiesRound();
    if (this.player.lifePoints === -1) {
      return super.fight();
    }
    this.fight();
    return -1;
  }
}

export default PVE;