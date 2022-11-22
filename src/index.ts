import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Monster from './Monster';

const player1 = new Character('Marcela');
const player2 = new Character('Raynara');
const player3 = new Character('Laura');

player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();

const monster1 = new Monster();
const monster2 = new Monster();

const pvp = new PVP(player2, player3);

const pve = new PVE(player1, [monster1, monster2]);

const runBattles = (array: Battle[]) => {
  array.forEach((e) => {
    e.fight();
  });
};

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };