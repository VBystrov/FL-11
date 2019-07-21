function Fighter(newFighter) {
  let name = newFighter.name;
  let damage = newFighter.damage;
  let agility = newFighter.agility;
  let hp = newFighter.hp;
  let totalHP = newFighter.hp;
  let win = 0;
  let loss = 0;
  this.getName = function () {
    return name;
  }
  this.getDamage = function () {
    return damage;
  }
  this.getAgility = function () {
    return agility;
  }
  this.getHealth = function () {
    return hp;
  }
  this.heal = function (healPoints) {
    hp += healPoints;
    if (hp > totalHP) {
      hp = totalHP;
    }
  }
  this.dealDamage = function (damagePoints) {
    hp -= damagePoints;
    if (hp < 0) {
      hp = 0;
    }
  }
  this.attack = function (enemy) {
    const maxAgility = 100;
    if (enemy.getAgility() <= Math.floor(Math.random() * maxAgility)) {
      enemy.dealDamage(damage);
      console.log(`${name} make ${damage} to ${enemy.getName()}`);
    } else {
      console.log(`${name} attack missed`);
    }
  }
  this.addWin = function () {
    win++;
  }
  this.addLoss = function () {
    loss++;
  }
  this.logCombatHistory = function () {
    return `Name: ${name}, Wins: ${win}, Losses: ${loss}`;
  }
}

function battle(fighter1, fighter2) {
  let fighter2Win = true;
  if (fighter1.getHealth() === 0) {
    console.log(`${fighter1.getName()} is dead and can't fight`);
    return undefined;
  }
  if (fighter2.getHealth() === 0) {
    console.log(`${fighter2.getName()} is dead and can't fight`);
    return undefined;
  }
  while (fighter1.getHealth() > 0) {
    fighter1.attack(fighter2);
    if (fighter2.getHealth() === 0) {
      fighter2Win = false;
      break;
    }
    fighter2.attack(fighter1);
  }
  if (fighter2Win) {
    fighter2.addWin();
    fighter1.addLoss();
  } else {
    fighter1.addWin();
    fighter2.addLoss();
  }
}

