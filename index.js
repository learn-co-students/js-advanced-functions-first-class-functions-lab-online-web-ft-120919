function returnFirstTwoDrivers(arr) {
  return arr.slice(0, 2);
}

function returnLastTwoDrivers(arr) {
  return arr.slice(-2)
}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ]

function createFareMultiplier(m) {
  return (a) => a * m
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (drivers, func) => func(drivers)