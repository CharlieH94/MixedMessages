// Message components
const jokeOptions = {
    responses: ["Who's there?", "Come in.", "Hello?", "Go Away."],
    whoIsIt: ['Mario', 'Tarzan', 'Professor X', 'Cortana'],
    descriptor: ['the Plumber', 'of the Jungle', 'the Mutant', 'UNSC Artificial Intelligence']
}

// Generate random number for index selection
const randomIndexGenerator = (num) => Math.floor(Math.random() * num);