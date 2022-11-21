import Race from './Race';

class Halfling extends Race {
  private static _created = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._created += 1;
    this._maxLifePoints = 60;
  }

  public static createdRacesInstances(): number {
    return Halfling._created;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;