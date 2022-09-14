// Message components
const jokeOptions = {
    responses: ["Who's there?", "Come in.", "Hello?", "Go Away."],
    whoIsIt: ['Mario', 'Tarzan', 'Professor X', 'Cortana'],
    descriptor: ['the Plumber', 'of the Jungle', 'the Mutant', 'UNSC Artificial Intelligence']
}

// Generate random number for index selection
const randomIndexGenerator = (num) => Math.floor(Math.random() * num);

// Message array to use in function
let jokeArray = [];

// Generate the random message components
for (let prop in jokeOptions) {
    let indexSelected = randomIndexGenerator(jokeOptions[prop].length);
    switch (prop) {
        case 'responses':
            jokeArray.push(jokeOptions[prop][indexSelected]);
            break;
        case 'whoIsIt':
            jokeArray.push(jokeOptions[prop][indexSelected]);
            break;
        case 'descriptor':
            jokeArray.push(jokeOptions[prop][indexSelected]);
            break;
        default:
            break;
    }
}

// Putting the program together
function rubbishJokeGenerator() {
    console.log('Knock knock.');
    console.log(`${jokeArray[0]}`);
    console.log(`It's me, ${jokeArray[1]}!`);
    console.log(`${jokeArray[1]} who?`);
    console.log(`${jokeArray[1]} ${jokeArray[2]}.`);
}

rubbishJokeGenerator();