function getNumbers(input) {
  let resultArray = [];
  let numberExp = /\d/;
  for (let i = 0; i < input.length; i++) {
    if (numberExp.test(input[i])) {
      resultArray.push(input[i]);
    }
  }
  return resultArray;
}

function findTypes() {
  let types = {};
  let currentType;
  for (let i = 0; i < arguments.length; i++) {
    currentType = typeof arguments[i];
    if (types.hasOwnProperty(currentType)) {
      types[currentType]++;
    } else {
      types[currentType] = 1;
    }
  }
  return types;
}

function executeforEach(executeArray, executeFunction) {
  for (let i = 0; i < executeArray.length; i++) {
    executeFunction(executeArray[i]);
  }
}

function mapArray(mapArray, mapFunction) {
  let result = [];
  executeforEach(mapArray,
    function (item) {
      result.push(mapFunction(item))
    });
  return result;
}

function filterArray(arr, filterFunction) {
  let result = [];
  executeforEach(arr,
    function (item) {
      if (filterFunction(item)) {
        result.push(item);
      }
    });
  return result;
}

function showFormattedDate(dt) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  let resultDate = 'Date:';
  resultDate += months[dt.getMonth()] + ' ' + dt.getDate() + ' ' + dt.getFullYear();
  return resultDate;
}

function canConvertToDate(str) {
  let can;
  let dt = new Date(str);
  if (isNaN(dt.getTime())) {
    can = false;
  } else {
    can = true;
  }
  return can;
}

function daysBetween(dt1, dt2) {
  const secondsInDay = 86400000;
  let difference = dt1.getTime() - dt2.getTime();
  difference = Math.abs(difference);
  return Math.round(difference / secondsInDay);
}

let people = [
  {
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    'birthday': '2016-03-18T00:00:00',
    'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    'birthday': '1991-02-11T00:00:00',
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry'
  },
  {
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    'birthday': '1984-04-17T00:00:00',
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    'birthday': '1994-04-17T00:00:00',
    'eyeColor': 'green',
    'name': 'George',
    'favoriteFruit': 'banana'
  }
];

function getAmountOfAdultPeople(data) {
  let adult = filterArray(data,
    function (item) {
      const adultDays = 6574;
      let currentdate = new Date();
      let birthday = new Date(item.birthday);
      return adultDays < daysBetween(currentdate, birthday)
    });
  return adult;
}

function keys(obj) {
  let resultArray = [];
  let p;
  for (p in obj) {
    if (obj.hasOwnProperty(p)) {
      resultArray.push(p);
    }
  }
  return resultArray;
}

function values(obj) {
  let resultArray = [];
  let p;
  for (p in obj) {
    if (obj.hasOwnProperty(p)) {
      resultArray.push(obj[p]);
    }
  }
  return resultArray;
}