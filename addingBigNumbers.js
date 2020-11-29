// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("63829983432984289347293874", "90938498237058927340892374089"); -> "91002328220491911630239667963"

function add(a, b) {

    let aRay = []
    let bRay = []

    if (a.length > b.length) {
        aRay = a.split("").reverse().map(x => +x)
        bRay = b.split("").reverse().map(x => +x)
    } else {
        aRay = b.split("").reverse().map(x => +x)
        bRay = a.split("").reverse().map(x => +x)
    }

    aRay.push(0)
    bRay.push(0)
    let sumRay = []

    let aLen = aRay.length
    let bLen = bRay.length

    if (bLen < aLen) {
        let i = 0
        let difference = (aLen - bLen)
        while (i < difference) {
            bRay.push(0)
            i += 1
        }
    }

    for (let i = 0; i < aLen; i++) {
        sumRay[i] = aRay[i] + bRay[i]

        if (sumRay[i] >= 10) {

            sumRay[i] -= 10
            aRay[i + 1] = aRay[i + 1] + 1
        }
    }

    if (sumRay[sumRay.length - 1] == 0) {
        sumRay.pop()
    }

    let sum = sumRay.reverse().join('')

    return sum;

}