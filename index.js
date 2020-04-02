// Code your solution in this file!
const returnFirstTwoDrivers = function(driversArray) {
  return driversArray.slice(0,2)
}

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(drivers.length-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer = 1) {
  return function(fare) {
    return fare*integer
  }
}

const fareDoubler = function(fare) {
  return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare) {
  return createFareMultiplier(3)(fare)
}

const selectDifferentDrivers = function(drivers, fn) {
  return fn(drivers)
}
