function Pokemon(){
  //this is not empty function (for eslint)
}
Pokemon.prototype.getType = function(){
  return this.type;
}
Pokemon.prototype.getSpecie = function(){
  return this.specie;
}
Pokemon.prototype.canFly = function(){
  return !!this.hasWings;
}
Pokemon.prototype.getPokemonType = function(){
  return this.constructor.name;
}
Pokemon.prototype.evolve = function (){
  return new this.NextLevel();
}

function Charmander(){
  Pokemon.call(this);
  this.type = 'Fire';
  this.specie = 'Lizard Pokémon';
  this.NextLevel = Charmeleon;
}
Charmander.prototype = Object.create(Pokemon.prototype);
Charmander.prototype.constructor = Charmander;

function Charmeleon (){
  Charmander.call(this);
  this.specie = 'Flame Pokémon';
  this.NextLevel = Charizard;
}
Charmeleon.prototype = Object.create(Charmander.prototype);
Charmeleon.prototype.constructor = Charmeleon;

function Charizard (){
  Charmeleon.call(this);
  this.hasWings = true;
  this.evolve = function (){
    return this;
  }
}
Charizard.prototype = Object.create(Charmeleon.prototype);
Charizard.prototype.constructor = Charizard;


function Pichu(){
  Pokemon.call(this);
  this.type = 'Electric';
  this.specie = 'Mouse Pokémon';
  this.NextLevel = Pikachu;
}
Pichu.prototype = Object.create(Pokemon.prototype);
Pichu.prototype.constructor = Pichu;

function Pikachu (){
  Pichu.call(this);
  this.NextLevel = Raichu;
}
Pikachu.prototype = Object.create(Pichu.prototype);
Pikachu.prototype.constructor = Pikachu;

function Raichu (){
  Pikachu.call(this);
  this.evolve = function (){
    return this;
  }
}
Raichu.prototype = Object.create(Pikachu.prototype);
Raichu.prototype.constructor = Raichu;
