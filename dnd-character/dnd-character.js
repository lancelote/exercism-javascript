export const abilityModifier = (ability) => {
  if (ability < 3) {
    throw new RangeError("Ability scores must be at least 3");
  } else if (ability > 18) {
    throw new RangeError("Ability scores can be at most 18");
  }
  return Math.floor((ability - 10) / 2);
}

const randomInt = (min, max) => Math.floor(Math.random() * max - min) + min;

export class Character {
  constructor() {
    this.strength = Character.rollAbility();
    this.dexterity = Character.rollAbility();
    this.constitution = Character.rollAbility();
    this.intelligence = Character.rollAbility();
    this.wisdom = Character.rollAbility();
    this.charisma = Character.rollAbility();
  }

  static rollAbility() {
    let roll1 = randomInt(1, 6);
    let roll2 = randomInt(1, 6);
    let roll3 = randomInt(1, 6);
    let roll4 = randomInt(1, 6);

    return roll1 + roll2 + roll3 + roll4 - Math.min(roll1, roll2, roll3, roll4);
  }

  get hitpoints() {
    return 10 + abilityModifier(this.constitution);
  }
}
