const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// Iterates on keys of myObject
for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

// here it will iterate on index of array as keys. Basically Arrays are object with keys as numbers 0,1,2,....
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// Maps are not iterable by for in loop

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }
