// Code your solution in this file!
function returnFirstTwoDrivers(array) {
    const firstTwoDrivers = [] 
    firstTwoDrivers.push(array[0])
    firstTwoDrivers.push(array[1])
    return firstTwoDrivers
}

function returnLastTwoDrivers(array) {
    const lastTwoDrivers = array.slice(2)
    return lastTwoDrivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(timesFare) {
    return function (fare) {
      return timesFare * fare;
    };
  };
  
  const fareDoubler = createFareMultiplier(2);
  
  const fareTripler = createFareMultiplier(3);
  
  const selectDifferentDrivers = function(drivers, whosDriving) {
    return whosDriving(drivers);
  };