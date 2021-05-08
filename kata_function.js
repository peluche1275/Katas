// function for Kata in Codewars //

function zooDisaster(animalsStringInput) {
    const eventsReporting = []
    const actualZoo = animalsStringInput.split(',')
    const listOfPrey = {
        'antelope': ['grass'],
        'big-fish': ['little-fish'],
        'bug': ['leaves'],
        'bear': ['big-fish', 'bug', 'chicken', 'cow', 'leaves', 'sheep'],
        'chicken': ['bug'],
        'cow': ['grass'],
        'fox': ['chicken', 'sheep'],
        'giraffe': ['leaves'],
        'lion': ['antelope', 'cow'],
        'panda': ['leaves'],
        'sheep': ['grass'],
        'grass': [],
        'leaves': [],
        'little-fish': []
    }

    // Step 1 : Add the zoo before the disaster //
    eventsReporting.push(animalsStringInput)

    // Step 2 : Report all the disaster //
    for (let i = 0; i < actualZoo.length; i++) {
        const actualAnimal = actualZoo[i]
        const beforeAnimal = actualZoo[i - 1]
        const nextAnimal = actualZoo[i + 1]

        if (listOfPrey[actualAnimal] !== undefined) {
            if (beforeAnimal !== undefined && listOfPrey[actualAnimal].find(prey => prey === beforeAnimal) !== undefined) {
                eventsReporting.push(actualAnimal + ' eats ' + beforeAnimal)
                actualZoo.splice((i - 1), 1)
                i = -1
            } else if (nextAnimal !== undefined && listOfPrey[actualAnimal].find(prey => prey === nextAnimal) !== undefined) {
                eventsReporting.push(actualAnimal + ' eats ' + nextAnimal)
                actualZoo.splice((i + 1), 1)
                i = -1
            }
        }
    }

    // Step 3 : Add the zoo after the disaster //
    eventsReporting.push(actualZoo.join())

    return eventsReporting
}

module.exports = zooDisaster