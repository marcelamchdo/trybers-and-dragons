import Race from './Race';

class Dwarf extends Race {
  private static _created = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._created += 1;
    this._maxLifePoints = 80;
  }

  public static createdRacesInstances(): number {
    return Dwarf._created;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;