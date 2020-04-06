function returnFirstTwoDrivers(array) {
    return array.slice(0, 2)
}

function returnLastTwoDrivers(array) {
    return array.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return function(price) {
        return (price * multiplier)
    }
}

function fareDoubler(fare) {
    const multiple = createFareMultiplier(2)
    return multiple(fare)
}

function fareTripler(fare) {
    const multiple = createFareMultiplier(3)
    return multiple(fare)
}

function selectDifferentDrivers(array, func) {
    return func(array)
}