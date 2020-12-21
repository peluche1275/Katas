// Your job is to write a function which increments a string, to create a new string.

//     If the string already ends with a number, the number should be incremented by 1.
//     If the string does not end with a number. the number 1 should be appended to the new string.

// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

function incrementString(strng) {
    let arr = strng.split("")
    let text = [];
    let number = [];

    for (let i = 0; i < strng.length; i++) {

        if (Number(arr[i]) || Number(arr[i]) == 0) {
            number.push(Number(arr[i]))
        } else {
            text.push(arr[i])
        }

    }

    text = text.join("")

    let nlen = number.length;

    number = (Number(number.join(""))) + 1

    number = number.toString()

    while (number.length < nlen) {
        number = "0" + number
    }

    return text + number

}