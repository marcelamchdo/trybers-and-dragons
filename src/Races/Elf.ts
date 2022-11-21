import Race from './Race';

class Elf extends Race {
  private static _created = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._created += 1;
    this._maxLifePoints = 99;
  }

  public static createdRacesInstances(): number {
    return Elf._created;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;