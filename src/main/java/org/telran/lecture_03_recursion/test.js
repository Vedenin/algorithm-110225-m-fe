function factorial(number) {
    if (number === 0) {
        return 1;
    } else {
        return number*factorial(number-1);
    }
}
function factorial5(number) {
    return number*factorial4(number-1);
}

function factorial4(number) {
    return number*factorial3(number-1);
}

function factorial3(number) {
    return number*factorial2(number-1);
}

function factorial2(number) {
    return number*factorial1(number-1);
}

function factorial1(number) {
    return number*factorial0(number-1);
}

function factorial0(number) {
    return 1;
}

console.log("factorial " + factorial5(5));