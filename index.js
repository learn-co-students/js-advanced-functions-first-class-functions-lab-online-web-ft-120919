// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(-2);
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

let createFareMultiplier = function(mult) {
    return function(fare) {
        return fare * mult;
    };
};

let fareDoubler = createFareMultiplier(2);
let fareTripler = createFareMultiplier(3);

let selectDifferentDrivers = function(arr, selection) {
  return selection(arr);
};