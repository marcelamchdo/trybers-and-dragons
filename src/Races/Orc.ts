import Race from './Race';

class Orc extends Race {
  private static _created = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._created += 1;
    this._maxLifePoints = 74;
  }

  public static createdRacesInstances(): number {
    return Orc._created;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;