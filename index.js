// Code your solution here
function findMatching(arrayOfDrivers, toFind) {
  return arrayOfDrivers.filter(
    (item) => item.toLowerCase() === toFind.toLowerCase()
  );
}

function fuzzyMatch(strings, prefix) {
  return strings.filter((str) => str.startsWith(prefix));
}

function matchName(data, name) {
    return data.filter(item => item.name === name);
 }
 