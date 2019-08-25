function maxElement(arr) {
  return Math.max(...arr);
}

function copyArray(arr) {
  let newArr = [...arr];
  return newArr;
}

function addUniqueId(obj) {
  let newObj = { ...obj };
  newObj.id = Symbol();
  return newObj;
}

function regroupObject(obj) {
  let { university, ...user } = { university: obj.details.university, firstname: obj.name, ...obj.details };
  let newObj = { university, user };
  return newObj;
}

function findUniqueElements(arr) {
  let set = new Set(arr);
  let resultArray = [];
  for (let value of set) {
    resultArray.push(value);
  }
  return resultArray;
}

function hideNumber(str) {
  let resultStr = str.slice(-4);
  resultStr = resultStr.padStart(str.length, '*');
  return resultStr;
}

function add(a = Error('Missing property function add'), b = Error('Missing second property function add')) {
  if (a instanceof Error) {
    throw a;
  }
  if (b instanceof Error) {
    throw b;
  }
  return a + b;
}

function viewRepos1(username) {
  fetch(`https://api.github.com/users/${username}/repos`)
    .then(function (response) {
      if (!response.ok) {
        throw new Error('HTTP error, status = ' + response.status);
      }
      let responseData = response.json();
      responseData.then(function (arrayRepos) {
        let arrReposNames = [];
        for (let i = 0; i < arrayRepos.length; i++) {
          arrReposNames.push(arrayRepos[i].name);
        }
        arrReposNames.sort();
        console.log(arrReposNames);
      })
    })
}

async function viewRepos2(username) {
  let response = await fetch(`https://api.github.com/users/${username}/repos`);
  if (!response.ok) {
    throw new Error('HTTP error, status = ' + response.status);
  }
  let arrayRepos = await response.json();
  let arrReposNames = [];
  for (let i = 0; i < arrayRepos.length; i++) {
    arrReposNames.push(arrayRepos[i].name);
  }
  arrReposNames.sort();
  console.log(arrReposNames);
}