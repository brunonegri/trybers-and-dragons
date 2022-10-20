import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  static count = 0;
  public energyType: EnergyType;
  constructor(name: string) {
    super(name);
    this.energyType = 'mana';
    Mage.count += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.count;
  }
}