function returnFirstTwoDrivers(arr) {
    // return Object.assign({}, arr})
    let newArr = arr.slice(0,2)
    return newArr 
}

function returnLastTwoDrivers(arr) {
    let newArr = arr.slice(-2)
    return newArr
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
    const fareMultiplier = function fareMulti(num2) {
        return num * num2

    }
    return fareMultiplier
}

function fareDoubler(fare) {
    return createFareMultiplier(2)(fare)
}

function fareTripler(fare) {
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(arrayOfDrivers, functions) {
    if (functions === selectingDrivers[0]){
        return selectingDrivers[0](arrayOfDrivers)
    } else {
        return selectingDrivers[1](arrayOfDrivers)
    }

}