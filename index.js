// Code your solution in this file!
function returnFirstTwoDrivers(arr) {
  return [arr[0], arr[1]];
}
function returnLastTwoDrivers(arr) {
  return [arr[arr.length - 2], arr[arr.length - 1]];
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(input) {
  return function () {
    return input * input;
  };
}

function fareDoubler(fare) {
    console.log(fare)
    return fare * 2
}
function fareTripler(fare) {
    console.log(fare)
    return fare * 3
}
function selectDifferentDrivers(arrayOfDrivers, func){
    return func(arrayOfDrivers)
}