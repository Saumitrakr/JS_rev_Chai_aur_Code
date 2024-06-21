const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]


// push does operations on the same array 
marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// concat returns a new array
const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// Spread operator 
const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

// Rare scenario, there is array inside array inside array and so on... Use flat to return a single array with all the elements
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


// isArray to check the datatype whether it is array or not. Mostly used during data scrapping
console.log(Array.isArray("Hitesh"))

// converts provided argument to an Array and returns an empty array if conversion is not possible
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

// makes array of all the variables provided
console.log(Array.of(score1, score2, score3));
