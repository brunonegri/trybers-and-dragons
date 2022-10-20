import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  static count = 0;
  public energyType: EnergyType;
  constructor(name: string) {
    super(name);
    this.energyType = 'stamina';
    Ranger.count += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.count;
  }
}