class User {
  constructor(name) {
    this.name = name;
    this.orderTotalPrice = 0;
    this.weekendDiscount = 0;
    this.nightDiscount = 0;
    this.bonus = 0;
    this.makeOrder = function () {
      return `Price after discount and including bonuses is ${
        this.orderTotalPrice - this.weekendDiscount - this.nightDiscount - this.bonus}`;
    };
  }
}
class Decorator {
  static getDiscount(user) {
    const _user = user;
    const nightDiscount = 7;
    const date = new Date();
    const hour = date.getHours();
    const startDiscountHour = 23;
    const endDiscountHour = 6;
    if (hour >= startDiscountHour || hour < endDiscountHour) {
      _user.nightDiscount = nightDiscount;
    }
    return _user;
  }

  static getWeekendDiscount(user) {
    const _user = user;
    const weekendDiscount = 9;
    const date = new Date();
    const day = date.getDay();
    const startDiscountDay = 6;
    const endDiscountDay = 0;
    if (day >= startDiscountDay || day <= endDiscountDay) {
      _user.weekendDiscount = weekendDiscount;
    }
    return _user;
  }
}
