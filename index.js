const returnFirstTwoDrivers = drivers => {
    return drivers.slice(0, 2)
};

const returnLastTwoDrivers = drivers => {
    return drivers.slice(-2)
};

 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers] ;


 const createFareMultiplier = int => {
  return num => {
     return int * num 
  }  
 }

 const fareDoubler = int => {
     return int * 2
     };

 const fareTripler = int => {
     return int * 3
 };

 const selectDifferentDrivers = (arrayOfDrivers, f) => {
     return f(arrayOfDrivers)
 }