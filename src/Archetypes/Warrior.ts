import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  static count = 0;
  public energyType: EnergyType;
  constructor(name: string) {
    super(name);
    this.energyType = 'stamina';
    Warrior.count += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.count;
  }
}