function Hamburger(inputType, inputCalories, addedSecretIngredient) {
  this.type = inputType;
  let calories = inputCalories;
  let cheese = 0;
  let tomato = 0;
  let secretIngredient = 0;
  let bited = 0;

  this.setCalories = function (inputCalories) {
    calories = inputCalories;
  }

  this.getCalories = function () {
    return calories;
  }

  this.addCheese = function () {
    if (bited) {
      console.log(`Sorry, you cannot add cheese.`);
    } else {
      if (cheese) {
        console.log(`Sorry, you can add cheese only once.`);
      } else {
        cheese++;
        this.setCalories(this.getCalories() + 150);
      }
    }
  }

  this.addTomato = function () {
    if (bited) {
      console.log(`Sorry, you cannot add tomato.`);
    } else {
      if (tomato >= 2) {
        console.log(`Sorry, you can add tomato only twice.`);
      } else {
        tomato++;
        this.setCalories(this.getCalories() + 20);
      }
    }
  }

  this.addSecretIngredient = function () {
    if (secretIngredient) {
      console.log(`Sorry, you can add secret ingredient only once.`);
    } else {
      if (tomato + cheese) {
        console.log(`Sorry, you can add secret ingredient only before another ingredient.`);
      } else {
        if (bited) {
          console.log(`Sorry, you cannot add secret ingredient.`);
        } else {
          secretIngredient++;
          this.setCalories(this.getCalories() + 100);
        }
      }
    }
  }

  this.bite = function () {
    bited++;
  }

  this.info = function () {
    let resultStr = `${this.type} hamburger: `;
    if (secretIngredient) {
      resultStr += `with secret ingredient, `
    }
    if (cheese) {
      resultStr += `with cheese, `
    }
    if (tomato) {
      resultStr += `with ${tomato} tomato, `
    }
    resultStr += `is bit ${bited} times. Total calories: ${calories}`;
    return resultStr;
  }

  if (addedSecretIngredient) {
    this.addSecretIngredient();
  }
}

let myHam = new Hamburger(`Black`, 300, true);
console.log(myHam.info());
myHam.addSecretIngredient();
console.log(myHam.info());
myHam.addTomato();
console.log(myHam.info());
myHam.addCheese();
console.log(myHam.info());
myHam.addCheese();
console.log(myHam.info());
myHam.bite();
myHam.bite();
myHam.bite();
console.log(myHam.info());
myHam.addTomato();
console.log(myHam.info());
myHam.addCheese();
console.log(myHam.info());