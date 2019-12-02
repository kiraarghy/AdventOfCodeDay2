const program = (input: Array<number>, currentIndex: number = 0): Array<number> => {
    if (input[currentIndex] === 1) {
        const value = input[input[currentIndex + 1]] + input[input[currentIndex + 2]]
        input[input[currentIndex + 3]] = value
        return program(input, currentIndex + 4);
    } else if (input[currentIndex] === 2) {
        const value = input[input[currentIndex + 1]] * input[input[currentIndex + 2]]
        input[input[currentIndex + 3]] = value
        return program(input, currentIndex + 4);
    } else if (input[currentIndex] === 99) {
        return input;
    } else {
        return input;
    }
}

const nounAndVerbCalc = (input: Array<number>) => {
    let noun: number = 0;
    let verb: number = 0;
    let output = [0];

    for (noun = 0; noun <= 99; noun++) {
        for (verb = 0; verb <= 99; verb++) {
            const clonedInput = [...input];
            clonedInput[1] = noun;
            clonedInput[2] = verb;
            output = program(clonedInput, 0)
            if (output[0] === 19690720) {
                break;
            }
        }
        if (output[0] === 19690720) {
            break;
        }
    }
    return 100 * noun + verb
}

console.log(`${program([1, 0, 0, 0, 99], 0)} === [2, 0, 0, 0, 99] is ${program([1, 0, 0, 0, 99], 0) === [2, 0, 0, 0, 99]}`)
console.log(`${program([2, 3, 0, 3, 99], 0)} === [2,3,0,6,99] is ${program([2, 3, 0, 3, 99], 0) === [2, 3, 0, 6, 99]}`)
console.log(`${program([2, 4, 4, 5, 99, 0], 0)} === [2,4,4,5,99,9801] is ${program([2, 3, 0, 3, 99], 0) === [2, 3, 0, 6, 99]}`)
console.log(`${program([1, 1, 1, 4, 99, 5, 6, 0, 99], 0)} === [30,1,1,4,2,5,6,0,99] is ${program([2, 3, 0, 3, 99], 0) === [2, 3, 0, 6, 99]}`)
console.log(`${program([1, 12, 2, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 1, 13, 19, 2, 9, 19, 23, 1, 23, 6, 27, 1, 13, 27, 31, 1, 31, 10, 35, 1, 9, 35, 39, 1, 39, 9, 43, 2, 6, 43, 47, 1, 47, 5, 51, 2, 10, 51, 55, 1, 6, 55, 59, 2, 13, 59, 63, 2, 13, 63, 67, 1, 6, 67, 71, 1, 71, 5, 75, 2, 75, 6, 79, 1, 5, 79, 83, 1, 83, 6, 87, 2, 10, 87, 91, 1, 9, 91, 95, 1, 6, 95, 99, 1, 99, 6, 103, 2, 103, 9, 107, 2, 107, 10, 111, 1, 5, 111, 115, 1, 115, 6, 119, 2, 6, 119, 123, 1, 10, 123, 127, 1, 127, 5, 131, 1, 131, 2, 135, 1, 135, 5, 0, 99, 2, 0, 14, 0])}`)
console.log(`${nounAndVerbCalc([1, 12, 2, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 1, 13, 19, 2, 9, 19, 23, 1, 23, 6, 27, 1, 13, 27, 31, 1, 31, 10, 35, 1, 9, 35, 39, 1, 39, 9, 43, 2, 6, 43, 47, 1, 47, 5, 51, 2, 10, 51, 55, 1, 6, 55, 59, 2, 13, 59, 63, 2, 13, 63, 67, 1, 6, 67, 71, 1, 71, 5, 75, 2, 75, 6, 79, 1, 5, 79, 83, 1, 83, 6, 87, 2, 10, 87, 91, 1, 9, 91, 95, 1, 6, 95, 99, 1, 99, 6, 103, 2, 103, 9, 107, 2, 107, 10, 111, 1, 5, 111, 115, 1, 115, 6, 119, 2, 6, 119, 123, 1, 10, 123, 127, 1, 127, 5, 131, 1, 131, 2, 135, 1, 135, 5, 0, 99, 2, 0, 14, 0])}`)