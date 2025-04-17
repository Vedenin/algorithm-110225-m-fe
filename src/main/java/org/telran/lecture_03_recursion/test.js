
function factorial5(number) {
    let value = factorial4(number-1);
    return number * value;
}

function factorial4(number) {
    let value = factorial3(number-1);
    return number * value;
}

function factorial3(number) {
    let value = factorial2(number-1);
    return number * value;
}

function factorial2(number) {
    let value = factorial1(number-1);
    return number * value;
}

function factorial1(number) {
    let value = factorial0(number-1);
    return number * value;
}

function factorial0(number) {
    return 1;
}

function factorial(number) {
    if (number === 0) {
        return 1;
    } else {
        let value = factorial(number-1);
        return number * value;
    }
}

console.log("factorial " + factorial5(5));