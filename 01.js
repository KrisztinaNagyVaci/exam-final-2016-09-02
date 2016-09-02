// Create a function that counts the cars by colors
// With an output like: {red: 3, yellow: 2, white: 1, green: 1}

const cars = [{
    color: 'red',
    type: 'Volvo'
  }, {
    color: 'yellow',
    type: 'VW'
  }, {
    color: 'red',
    type: 'Ferrari'
  }, {
    color: 'white',
    type: 'Tesla'
  }, {
    color: 'yellow',
    type: 'Toyota'
  }, {
    color: 'red',
    type: 'Lada'
  }, {
    color: 'green',
    type: 'Trabant'
}];


function countCarsByColor(inputList) {
  var carsByColorOutput = {};
  for (var i = 0; i <inputList.length; i++) {
    if (inputList[i].color in carsByColorOutput) {
      carsByColorOutput[inputList[i].color]++;
    } else {
      carsByColorOutput[inputList[i].color] = 1;
    };
  };
  return carsByColorOutput;
}

console.log(countCarsByColor(cars));
