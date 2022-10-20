import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  static count = 0;
  public energyType: EnergyType;
  constructor(name: string) {
    super(name);
    this.energyType = 'mana';
    Necromancer.count += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.count;
  }
}